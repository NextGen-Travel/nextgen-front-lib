import VueRouter, { RouteConfig, RouterOptions, Route as _Route } from 'vue-router';
import { RouteParameters } from 'power-helper/types/string';
export declare type RouteMixin<P extends Route, T extends Route> = {
    path: `${P['path']}/${T['path']}`;
    query: RouteQuery<P['query']> & RouteQuery<T['query']>;
};
export declare type RouteMap<T extends Record<string, Route>> = {
    [K in keyof T]: {
        path: T[K]['path'];
        query: RouteQuery<T[K]['query']>;
    };
};
declare type Route = {
    path: string;
    name?: string;
    query?: Record<string, string>;
    parent?: string;
};
export declare type Routes<Names extends string> = RouteConfig & {
    children?: Array<Routes<Names>>;
    name?: Names | '*' | '/';
    meta?: Record<string, any>;
};
declare type RouteQuery<T> = T extends Record<any, any> ? T : Record<string, never>;
export declare class VueRouterPlus<T extends RouteMap<any>> extends VueRouter {
    readonly event: import("power-helper/dist/modules/event").Event<{
        after: {
            to: _Route;
            from: _Route;
        };
        before: {
            to: _Route;
            from: _Route;
        };
    }>;
    constructor(options: RouterOptions & {
        routes: Routes<Extract<string, keyof T>>;
    });
    static get VueRouter(): typeof VueRouter;
    to<K extends keyof T>(name: T, params?: RouteParameters<T[K]['path']>, options?: {
        query?: T[K]['query'];
    }): void;
    getCurrentRoute<K extends keyof T>(_name?: T): {
        name: string;
        params: RouteParameters<T[K]['path']>;
        query: Partial<T[K]['query']>;
    };
}
export {};
