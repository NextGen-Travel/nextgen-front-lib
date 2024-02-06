import { Event } from 'power-helper';
import { TString } from 'power-helper';
import { Router, RouteRecordRaw, RouteLocationNormalized } from 'vue-router';
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
type RouteQuery<T> = T extends Record<any, any> ? T : {};
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
    vueRouter: Router;
    home?: () => string;
};
export declare class RouterPlus<T extends RouteMap<any>> extends Event<Channels> {
    params: Params;
    vueRouter: Router;
    interceptLeaves: Map<string, () => Promise<void>>;
    constructor(params: Params);
    get routeMap(): Set<string>;
    toHome(): void;
    pushPath(path: string): Promise<void | import("vue-router").NavigationFailure | undefined>;
    to<K extends keyof T>(name: K, params: Partial<TString.RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query'];
    }): void;
    resolve<K extends keyof T>(name: K, params: Partial<TString.RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query'];
    }): import("vue-router").RouteLocation & {
        href: string;
    };
    hrefTo<K extends keyof T>(name: K, params: Partial<TString.RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query'];
    }): void;
    back(step?: number): void;
    blank<K extends keyof T>(name: K, params: Partial<TString.RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query'];
    }): void;
    getCurrentRoute<K extends keyof T>(_name?: K): {
        name: string;
        params: TString.RouteParameters<T[K]['path']>;
        query: Partial<T[K]['query']>;
    };
    interceptLeave(callback: () => Promise<void>): {
        close: () => void;
    };
    defineTo<K extends keyof T>(name: K, params?: Partial<TString.RouteParameters<T[K]['path']>>, options?: {
        query?: T[K]['query'];
    }): {
        query?: T[K]["query"] | undefined;
        name: K;
        params: {};
    };
    pushQuery(params: Record<string, undefined | string | number>): Promise<void>;
}
export {};
