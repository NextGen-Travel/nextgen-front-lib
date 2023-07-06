import { RouteParameters } from 'power-helper/types/string';
type Route = {
    query: any;
};
type Params = {
    baseUrl: () => string;
    readCurrentTarget?: () => string;
};
export declare class StaticRoute<P extends Record<string, Route>> {
    params: Params;
    constructor(params: Params);
    getCurrent<T extends Extract<keyof P, string>>(path: T): {
        url: URL;
        pattern: URLPattern;
        query: Partial<P[T]["query"]>;
        params: RouteParameters<T>;
    };
    to<T extends Extract<keyof P, string>>(path: T, params: RouteParameters<T>, query?: Partial<P[T]['query']>): void;
}
export {};
