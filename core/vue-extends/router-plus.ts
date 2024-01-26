import { Event, flow, json } from 'power-helper'
import { RouteParameters } from 'power-helper/types/string'
import { serviceException } from '../exception'
import { Router, RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import { getGlob } from '../index'

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

// eslint-disable-next-line @typescript-eslint/ban-types
type RouteQuery<T> = T extends Record<any, any> ? T : {}

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

type Params = {
    vueRouter: Router
    home?: () => string
}

const glob = getGlob()
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

export class RouterPlus<T extends RouteMap<any>> extends Event<Channels> {
    params: Params
    vueRouter: Router
    interceptLeaves = new Map<string, () => Promise<void>>()

    constructor(params: Params) {
        super()
        this.params = params
        this.vueRouter = params.vueRouter
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
        this.vueRouter.beforeEach(async() => {
            for (let [key, callback] of this.interceptLeaves) {
                try {
                    await callback()
                    this.interceptLeaves.delete(key)
                } catch (error) {
                    return false
                }
            }
            return true
        })
    }

    get routeMap(): Set<string> {
        return new Set(getRouteNames(this.vueRouter.getRoutes()))
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
    }) {
        const { href } = this.resolve(name, params, options)
        glob.open(href)
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

    interceptLeave(callback: () => Promise<void>) {
        const id = flow.createUuid()
        this.interceptLeaves.set(id, callback)
        return {
            close: () => {
                this.interceptLeaves.delete(id)
            }
        }
    }

    defineTo<K extends keyof T>(name: K, params?: Partial<RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query']
    }) {
        return {
            name,
            params: params || {},
            ...options || {}
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
