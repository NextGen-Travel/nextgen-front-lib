import { Event } from 'power-helper';
import { RouteParameters } from 'power-helper/types/string';
import { Router, RouterOptions, RouteRecordRaw, RouteLocationNormalized } from 'vue-router';
export type RouteMixin<P extends Route, T extends Route> = {
    path: `${P['path']}/${T['path']}`;
    query: RouteQuery<P['query']> & RouteQuery<T['query']>;
};
export type RouteMap<T extends Record<string, Route>> = {
    [K in keyof T]: {
        path: T[K]['path'];
        query: RouteQuery<T[K]['query']>;
    };
};
type Route = {
    path: string;
    name?: string;
    query?: Record<string, string | string[]>;
    parent?: string;
};
export type Routes<Names extends string> = RouteRecordRaw & {
    children?: Array<Routes<Names>>;
    name?: Names | '*' | '/';
    meta?: Record<string, any>;
};
type RouteQuery<T> = T extends Record<any, any> ? T : Record<string, never>;
type Channels = {
    after: {
        to: RouteLocationNormalized;
        from: RouteLocationNormalized;
    };
    before: {
        to: RouteLocationNormalized;
        from: RouteLocationNormalized;
    };
};
type Params = {
    home?: () => string;
};
export declare class VueRouterPlus<T extends RouteMap<any>> extends Event<Channels> {
    params: Params;
    constructor(params?: Params);
    get vueRouter(): Router;
    get routeMap(): Set<string>;
    setup(options: RouterOptions): Router;
    toHome(): void;
    to<K extends keyof T>(name: K, params: Partial<RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query'];
    }): void;
    resolve<K extends keyof T>(name: K, params: Partial<RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query'];
    }): import("vue-router").RouteLocation & {
        href: string;
    };
    hrefTo<K extends keyof T>(name: K, params: Partial<RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query'];
    }): void;
    back(step?: number): void;
    blank<K extends keyof T>(name: K, params: Partial<RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query'];
        system?: {
            open: (_url: string) => void;
        };
    }): void;
    getCurrentRoute<K extends keyof T>(_name?: K): {
        name: string;
        params: RouteParameters<T[K]['path']>;
        query: Partial<T[K]['query']>;
    };
    pushQuery(params: Record<string, undefined | string | number>): Promise<void>;
}
export {};
