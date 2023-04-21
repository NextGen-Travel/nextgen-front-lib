import { Event } from 'power-helper'
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
    query?: Record<string, string>
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

export class VueRouterPlus<T extends RouteMap<any>> extends Event<Channels> {
    params: Params
    routeMap: Set<string> = new Set()
    vueRouter!: Router

    constructor(params?: Params) {
        super()
        this.params = params || {}
    }

    async setup(options: RouterOptions) {
        this.routeMap = new Set(getRouteNames(options.routes))
        this.vueRouter = createRouter(options)
        this.vueRouter.afterEach((from, to) => {
            this.emit('after', {
                to,
                from
            })
        })
        this.vueRouter.beforeEach((from, to, next) => {
            this.emit('before', {
                to,
                from
            })
            next()
        })
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

    back(step = 1) {
        if (this.vueRouter) {
            this.vueRouter.go(step * -1)
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

    async pushQuery(params: Record<string, string>) {
        if (this.vueRouter) {
            const route = this.getCurrentRoute()
            await this.vueRouter.push({
                query: {
                    ...route.query,
                    ...params
                }
            })
        }
    }
}
