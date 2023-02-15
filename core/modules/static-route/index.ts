import { text } from 'power-helper'
import { VarParameters } from 'power-helper/types/string'

type Route = {
    query: any
}

type Params = {
    baseUrl: () => string
}

export class StaticRoute<P extends Record<string, Route>> {
    params: Params
    constructor(params: Params) {
        this.params = params
    }

    getCurrent<T extends Extract<keyof P, string>>(path: T) {
        const url = new URL(location.href)
        const query: P[T]['query'] = {}
        // eslint-disable-next-line no-undef
        const pattern = new URLPattern({
            pathname: path,
            baseURL: this.params.baseUrl()
        })
        const result = pattern.exec(location.href)
        const params: VarParameters<'{', '}', T> = result?.pathname.groups || {} as any
        url.searchParams.forEach((v, k) => {
            query[k] = v
        })
        return {
            url,
            pattern,
            query,
            params
        }
    }

    to<T extends Extract<keyof P, string>>(path: T, params: VarParameters<'{', '}', T>, query: any = {}) {
        const page = text.replaceVar({
            text: path,
            end: '}',
            start: '{',
            vars: params as any
        })
        const url = new URL(`${location.origin}/${this.params.baseUrl()}/${page}`)
        for (let key in query) {
            url.searchParams.set(key, query[key])
        }
        location.href = url.href
    }
}
