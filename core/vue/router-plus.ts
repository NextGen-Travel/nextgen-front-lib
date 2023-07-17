import { Event, json } from 'power-helper'
import { RouteParameters } from 'power-helper/types/string'
import { serviceException } from '../error'
import { createRouter, Router, RouterOptions, RouteRecordRaw, RouteLocationNormalized } from 'vue-router'

export type RouteMixin<
    P extends Route,
    T extends Route
> = {
    path: `${P['path']}/${T['path']}`
    query: RouteQuery<P['query']> & RouteQuery<T['query']>
}

export type RouteMap<T extends Record<string, Route>> = {
    [K in keyof T]: {
        path: T[K]['path']
        query: RouteQuery<T[K]['query']>
    }
}

type Route = {
    path: string
    name?: string
    query?: Record<string, string | string[]>
    parent?: string
}

export type Routes<Names extends string> = RouteRecordRaw & {
    children?: Array<Routes<Names>>
    name?: Names | '*' | '/'
    meta?: Record<string, any>
}

type RouteQuery<T> = T extends Record<any, any> ? T : Record<string, never>
type Channels = {
    after: {
        to: RouteLocationNormalized
        from: RouteLocationNormalized
    }
    before: {
        to: RouteLocationNormalized
        from: RouteLocationNormalized
    }
}

const getRouteNames = (routes: readonly RouteRecordRaw[]) => {
    let names: string[] = []
    if (routes) {
        for (let route of routes) {
            if (route && route.name) {
                names.push(route.name.toString())
            }
            if (route.children) {
                names = names.concat(getRouteNames(route.children))
            }
        }
    }
    return names
}

type Params = {
    home?: () => string
}

window.__ng_state.router = null
window.__ng_state.routerOptions = null

export class VueRouterPlus<T extends RouteMap<any>> extends Event<Channels> {
    params: Params

    constructor(params?: Params) {
        super()
        this.params = params || {}
    }

    get vueRouter(): Router {
        return window.__ng_state.router
    }

    get routeMap(): Set<string> {
        return new Set(getRouteNames(window.__ng_state.routerOptions.routes))
    }

    setup(options: RouterOptions) {
        if (window.__ng_state.router == null) {
            window.__ng_state.router = createRouter(options)
            window.__ng_state.routerOptions = options
            this.vueRouter.afterEach((to, from) => {
                this.emit('after', {
                    to,
                    from
                })
            })
            this.vueRouter.beforeEach((to, from, next) => {
                this.emit('before', {
                    to,
                    from
                })
                next()
            })
        }
        return this.vueRouter
    }

    toHome() {
        if (this.vueRouter) {
            if (this.params.home) {
                this.to(this.params.home(), {})
            } else {
                this.vueRouter.push('/')
            }
        }
    }

    to<K extends keyof T>(name: K, params: Partial<RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query']
    }) {
        if (this.vueRouter) {
            if (this.routeMap.has(name as string)) {
                this.vueRouter.push({
                    name: name as any,
                    params: params as any,
                    query: options?.query
                })
            } else {
                this.toHome()
            }
        }
    }

    resolve<K extends keyof T>(name: K, params: Partial<RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query']
    }) {
        if (this.vueRouter) {
            if (this.routeMap.has(name as string)) {
                const result = this.vueRouter.resolve({
                    name: name as any,
                    params: params as any,
                    query: options?.query
                })
                return result
            } else {
                throw serviceException.create(`Router ${name as string} not found.`)
            }
        } else {
            throw serviceException.create('Router Plus not installed.')
        }
    }

    hrefTo<K extends keyof T>(name: K, params: Partial<RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query']
    }) {
        const { href } = this.resolve(name, params, options)
        location.href = href
    }

    back(step = 1) {
        if (this.vueRouter) {
            this.vueRouter.go(step * -1)
        }
    }

    blank<K extends keyof T>(name: K, params: Partial<RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query']
        system?: {
            open: (_url: string) => void
        }
    }) {
        const { href } = this.resolve(name, params, options)
        options?.system?.open(href) || window.open(href)
    }

    getCurrentRoute<K extends keyof T>(_name?: K): {
        name: string
        params: RouteParameters<T[K]['path']>
        query: Partial<T[K]['query']>
    } {
        if (this.vueRouter) {
            return this.vueRouter.currentRoute.value as any
        } else {
            return {
                name: '',
                query: {},
                params: {} as any
            }
        }
    }

    async pushQuery(params: Record<string, undefined | string | number>) {
        if (this.vueRouter) {
            const route = this.getCurrentRoute()
            const query = {
                ...json.jpjs(route.query),
                ...params
            }
            for (let key in query) {
                let data = query[key]
                if (data == null) {
                    delete query[key]
                    continue
                }
            }
            await this.vueRouter.push({
                query
            })
        }
    }
}
