import VueRouter, { RouteConfig, RouterOptions, Route as _Route } from 'vue-router'
import { Event } from 'power-helper'
import { RouteParameters } from 'power-helper/types/string'

declare module 'vue' {
    interface ComponentCustomProperties {
        $route: Route
    }
}

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

export class VueRouterPlus<T extends RouteMap<any>> extends Event<Channels> {
    router!: VueRouter

    static get install() {
        return VueRouter.install
    }

    static get VueRouter() {
        return VueRouter
    }

    async setup(options: RouterOptions) {
        this.router = new VueRouter(options)
        this.router.afterEach((from, to) => {
            this.emit('after', { from, to })
        })
        this.router.beforeEach((from, to, next) => {
            this.emit('before', { from, to })
            next()
        })
    }

    to<K extends keyof T>(name: T, params?: RouteParameters<T[K]['path']>, options?: {
        query?: T[K]['query']
    }) {
        this.router.push({
            name: name as any,
            params,
            query: options?.query
        })
    }

    getCurrentRoute<K extends keyof T>(_name?: T) {
        return this.router.currentRoute as unknown as {
            name: string
            params: RouteParameters<T[K]['path']>
            query: Partial<T[K]['query']>
        }
    }
}
