import { stringify } from 'qs'
import { Event, flow, text } from 'power-helper'
import { RouteParameters } from 'power-helper/types/string'
import { serviceException } from '../../error'

type ToFormat = `${'get' | 'post' | 'put' | 'delete'}@${string}`

// multipart/form-data#json : 要使用formdata格式 但header帶的是json
type ContentTypes = 'application/json' | 'form' | 'x-www-form-urlencoded' | 'multipart/form-data' | 'multipart/form-data#json'

const exception = serviceException.checkout('request')

export type LaravelPaginateQuery<T> = T & {
    page?: number
}

export type LaravelPaginate<T> = {
    data: T[]
    total: number
    per_page: number
    current_page: number
    last_page: number
    from: number
    to: number
}

export type LaravelResourcePaginate<T> = {
    data: T[],
    links: {
        first: string
        last: string
        prev: string
        next: string
    },
    meta: {
        current_page: number
        from: number
        path: string
        last_page: number
        total: number
        per_page: number
        to: number
    }
}

export type RequestContext<T extends string = string> = {
    name: T
    path: string
    form: HTMLFormElement
    body: Record<string, any>
    query: Record<string, any>
    state: Record<string, any>
    method: string
    headers: Record<string, string>
    contentType: ContentTypes
    responseType?: 'arraybuffer' | 'application/json'
}

type StringParams<
    T extends string,
    P = RouteParameters<T>
> = P extends Record<string, never> ? { params?: any } : {
    params: {
        [K in keyof P]: K | string | number
    }
}

type DefinedFormat = {
    body?: any
    query?: any
    contentType?: ContentTypes | null
    response: any
}

type QueryParams<To extends string, Api extends DefinedFormat> = StringParams<To> &
    (Api['body'] extends null ? { body?: Record<string, any> } : { body: Api['body'] }) &
    (Api['query'] extends null ? { query?: Record<string, number | string> } : { query: Api['query'] }) &
    (Api['contentType'] extends null ? { contentType?: Api['contentType'] } : { contentType: Api['contentType'] }) &
    (Api['response'] extends ArrayBuffer ? { responseType: 'arraybuffer' } : { responseType?: 'arraybuffer' }) & {
        headers?: Record<string, string>
    }

type ModuleParams<R extends Request<any>> = {
    name: string
    http: (_context: RequestContext<R['__names']>) => Promise<any>
    install?: (_request: R) => any
}

type Channels = {
    useMockAfter: {
        context: RequestContext
        response: any
    }
}

export type ApisDefinition<T extends Record<ToFormat, DefinedFormat>> = T

export class Request<
    ApisDefinition extends Record<ToFormat, DefinedFormat>,
    State = unknown
> extends Event<Channels> {
    __names: Extract<keyof ApisDefinition, string> = null as any
    state: Record<string, any> = {}
    private mocks: Partial<Record<keyof ApisDefinition, any>> = {}
    private params: ModuleParams<this>
    private installed = false
    constructor(params: ModuleParams<Request<ApisDefinition, State>>) {
        super()
        this.params = params
    }

    get name() {
        return this.params.name
    }

    static parseLaravelResourcePaginateResponse(result: any) {
        // 如果是分頁資料
        if (Array.isArray(result.data) && result.meta && result.links) {
            return result
        }
        // 如果不是分頁資料
        return result
    }

    static fakeLaravelPaginateResult<T>(data: T[]) {
        return {
            data,
            total: 1,
            per_page: 1,
            current_page: 1,
            last_page: 1,
            from: 1,
            to: 1
        }
    }

    static fakeLaravelResourcePaginateResult<T>(data: T[]) {
        return {
            data,
            links: {
                first: '',
                last: '',
                prev: '',
                next: ''
            },
            meta: {
                current_page: 1,
                from: '',
                path: '',
                last_page: 1,
                to: 1,
                per_page: 10,
                total: 1
            }
        }
    }

    static async AxiosRequest(params: {
        axios: any
        context: RequestContext
    }) {
        let { axios, context } = params
        let { method, path, query, headers, responseType, body } = context
        let result = null
        if (method === 'get' || method === 'delete') {
            result = await axios[method](path, {
                params: query,
                headers,
                responseType
            })
        }
        if (method === 'post' || method === 'put') {
            result = await axios[method](path, body, {
                params: query,
                headers,
                responseType
            })
        }
        return result
    }

    private parseUrl(url: string, params?: Record<string, string | number>) {
        let substrings = url.split('@')
        let method = substrings[0]
        let path = substrings.slice(1).join('@')
        if (params) {
            for (let key in params) {
                if (params[key] == null) {
                    throw exception.create(`Url ${url} param ${key} is null.`)
                }
                path = path.replace(':' + key, params[key].toString())
            }
        }
        return {
            path: path.split('#')[0],
            method
        } 
    }

    mock<T extends keyof ApisDefinition>(
        to: T,
        response: (_ctx: RequestContext) => Extract<ApisDefinition[T], DefinedFormat>['response']
    ) {
        this.mocks[to] = response
    }

    export(): Request<ApisDefinition>['http'] {
        return this.http.bind(this)
    }

    async http<T extends keyof ApisDefinition>(
        to: T,
        params: QueryParams<Extract<T, ToFormat>, Extract<ApisDefinition[T], DefinedFormat>>
    ): Promise<Extract<ApisDefinition[T], DefinedFormat>['response']> {
        if (this.installed === false && this.params.install) {
            this.params.install(this)
        }
        this.installed = true
        let parsed = this.parseUrl(to as string, params.params)
        let headers = params.headers || {}
        let context: RequestContext<any> = {
            name: to,
            path: parsed.path,
            form: document.createElement('form'),
            body: (params.body || {}) as any,
            query: (params.query || {}) as any,
            state: this.state,
            headers,
            contentType: params.contentType || 'application/json',
            responseType: params.responseType,
            method: parsed.method
        }
        // Content Type
        if (context.contentType === 'x-www-form-urlencoded') {
            let body: any = {}
            for (let [key, value] of Object.entries(context.body)) {
                if (text.lastMatch(key, '[]')) {
                    body[key.slice(0, -2)] = value
                } else {
                    body[key] = value
                }
            }
            context.body = stringify(body, {
                arrayFormat: 'brackets'
            }) as any
            headers.contentType = 'application/x-www-form-urlencoded'
        }
        if (context.contentType === 'multipart/form-data') {
            let formData = new FormData()
            for (let key in context.body) {
                formData.append(key, context.body[key])
            }
            context.body = formData
            headers.contentType = 'multipart/form-data'
        }
        if (context.contentType === 'multipart/form-data#json') {
            let formData = new FormData()
            for (let key in context.body) {
                formData.append(key, context.body[key])
            }
            context.body = formData
        }
        if (context.contentType === 'form') {
            context.form.setAttribute('method', context.method.toUpperCase())
            for (let key in context.body) {
                const value = context.body[key]
                const field = document.createElement('input')
                field.setAttribute('type', 'hidden')
                field.setAttribute('name', key)
                field.setAttribute('value', typeof value === 'string' ? value : JSON.stringify(value))
                context.form.appendChild(field)
            }
            context.form.style.opacity = '0'
            context.form.style.position = 'fixed'
            document.body.appendChild(context.form)
        }
        // Send
        let response = null
        if (this.mocks && this.mocks[to]) {
            await flow.sleep(500)
            response = this.mocks[to](context)
            this.emit('useMockAfter', {
                context,
                response
            })
        } else {
            response = await this.params.http(context)
        }
        if (context.contentType === 'form') {
            context.form.remove()
        }
        return response
    }
}
