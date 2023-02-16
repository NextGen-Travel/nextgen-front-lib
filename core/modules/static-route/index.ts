import { RouteParameters } from 'power-helper/types/string'

type Route = {
    query: any
}

type Params = {
    baseUrl: () => string
    readCurrentTarget?: () => string
}

export class StaticRoute<P extends Record<string, Route>> {
    params: Params
    constructor(params: Params) {
        this.params = params
    }

    getCurrent<T extends Extract<keyof P, string>>(path: T) {
        const url = new URL(location.href)
        const query: Partial<P[T]['query']> = {}
        // eslint-disable-next-line no-undef
        const pattern = new URLPattern(`${this.params.baseUrl()}/${path}`)
        const result = pattern.exec(this.params.readCurrentTarget ? this.params.readCurrentTarget() : location.href)
        const params: RouteParameters<T> = result?.pathname.groups || {} as any
        url.searchParams.forEach((v, k) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            query[k] = v
        })
        return {
            url,
            pattern,
            query,
            params
        }
    }

    to<T extends Extract<keyof P, string>>(path: T, params: RouteParameters<T>, query: Partial<P[T]['query']> = {}) {
        let page = path as string
        for (let key in params) {
            page = page.replaceAll(`:${key}`, params[key] as any)
        }
        let url = new URL(`${this.params.baseUrl()}/${page}`)
        for (let key in query) {
            url.searchParams.set(key, query[key] as any)
        }
        location.href = url.href
    }
}
