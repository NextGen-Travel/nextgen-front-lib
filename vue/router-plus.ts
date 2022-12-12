import VueRouter, { RouteConfig, RouterOptions, Route as _Route } from 'vue-router'
import { Event } from 'power-helper'
import { RouteParameters } from 'power-helper/types/string'
import { serviceException } from '../core/error'

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
    query?: Record<string, string>
    parent?: string
}

export type Routes<Names extends string> = RouteConfig & {
    children?: Array<Routes<Names>>
    name?: Names | '*' | '/'
    meta?: Record<string, any>
}

type RouteQuery<T> = T extends Record<any, any> ? T : Record<string, never>
type Channels = {
    after: {
        to: _Route
        from: _Route
    }
    before: {
        to: _Route
        from: _Route
    }
}

const getRouteNames = (routes: RouteConfig[]) => {
    let names: string[] = []
    if (routes) {
        for (let route of routes) {
            if (route.name) {
                names.push(route.name)
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

export class VueRouterPlus<T extends RouteMap<any>> extends Event<Channels> {
    params: Params
    routeMap: Set<string> = new Set()
    vueRouter!: VueRouter

    constructor(params?: Params) {
        super()
        this.params = params || {}
    }

    static get install() {
        return VueRouter.install
    }

    static get VueRouter() {
        return VueRouter
    }

    async setup(options: RouterOptions) {
        this.routeMap = new Set([...getRouteNames(options.routes || [])])
        this.vueRouter = new VueRouter(options)
        this.vueRouter.afterEach((from, to) => {
            this.emit('after', { from, to })
        })
        this.vueRouter.beforeEach((from, to, next) => {
            this.emit('before', { from, to })
            next()
        })
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

    blank<K extends keyof T>(name: K, params: Partial<RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query']
    }) {
        if (this.vueRouter) {
            if (this.routeMap.has(name as string)) {
                const result = this.vueRouter.resolve({
                    name: name as any,
                    params: params as any,
                    query: options?.query
                })
                window.open(result.href)
            } else {
                throw serviceException.create(`Router ${name as string} not found.`)
            }
        } else {
            throw serviceException.create('Router Plus not installed.')
        }
    }

    back(step = 1) {
        if (this.vueRouter) {
            this.vueRouter.go(step * -1)
        }
    }

    getCurrentRoute<K extends keyof T>(_name?: K): {
        name: string
        params: RouteParameters<T[K]['path']>
        query: Partial<T[K]['query']>
    } {
        if (this.vueRouter) {
            return this.vueRouter.currentRoute as any
        } else {
            throw serviceException.create('Router Plus not installed.')
        }
    }
}
