import { Event } from 'power-helper';
import { RouteParameters } from 'power-helper/types/string';
type ToFormat = `${'get' | 'post' | 'put' | 'delete'}@${string}`;
type ContentTypes = 'json' | 'form' | 'x-www-form-urlencoded' | 'multipart/form-data' | 'multipart/form-data#json';
export type LaravelPaginateQuery<T> = T & {
    page?: number;
};
export type LaravelPaginate<T> = {
    data: T[];
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
};
export type LaravelResourcePaginate<T> = {
    data: T[];
    links: {
        first: string;
        last: string;
        prev: string;
        next: string;
    };
    meta: {
        current_page: number;
        from: number;
        path: string;
        last_page: number;
        total: number;
        per_page: number;
        to: number;
    };
};
export type RequestContext<C = any> = {
    path: string;
    form: HTMLFormElement;
    body: Record<string, any>;
    query: Record<string, any>;
    method: string;
    config: C;
    headers: Record<string, string>;
    contentType: ContentTypes;
    responseType?: 'arraybuffer' | 'json';
};
type StringParams<T extends string, P = RouteParameters<T>> = P extends Record<string, never> ? {
    params?: any;
} : {
    params: {
        [K in keyof P]: K | string | number;
    };
};
type DefinedFormat = {
    body?: unknown;
    query?: unknown;
    contentType?: ContentTypes | null;
    response: unknown;
};
type QueryParams<To extends string, Api extends DefinedFormat> = StringParams<To> & (Api['body'] extends null ? {
    body?: Record<string, any>;
} : {
    body: Api['body'];
}) & (Api['query'] extends null ? {
    query?: Record<string, number | string>;
} : {
    query: Api['query'];
}) & (Api['contentType'] extends null ? {
    contentType?: Api['contentType'];
} : {
    contentType: Api['contentType'];
}) & (Api['response'] extends ArrayBuffer ? {
    responseType: 'arraybuffer';
} : {
    responseType?: 'arraybuffer';
}) & {
    headers?: Record<string, string>;
};
type ModuleParams<R extends Request<any, any>, C> = {
    name: string;
    http: (_context: RequestContext<C>) => Promise<any>;
    install?: (_request: R, _config: C) => Promise<any>;
};
type Channels = {
    useMockAfter: {
        context: RequestContext<any>;
        response: any;
    };
};
export type ApisDefinition<T extends Record<ToFormat, DefinedFormat>> = T;
export declare class Request<Config extends Record<string, string>, ApisDefinition extends Record<ToFormat, DefinedFormat>> extends Event<Channels> {
    private mocks;
    private params;
    private installed;
    private config;
    constructor(params: ModuleParams<Request<Config, ApisDefinition>, Config>);
    get name(): string;
    static parseLaravelResourcePaginateResponse(result: any): any;
    static fakeLaravelPaginateResult<T>(data: T[]): {
        data: T[];
        total: number;
        per_page: number;
        current_page: number;
        last_page: number;
        from: number;
        to: number;
    };
    static fakeLaravelResourcePaginateResult<T>(data: T[]): {
        data: T[];
        links: {
            first: string;
            last: string;
            prev: string;
            next: string;
        };
        meta: {
            current_page: number;
            from: string;
            path: string;
            last_page: number;
            to: number;
            per_page: number;
            total: number;
        };
    };
    static AxiosRequest(params: {
        axios: any;
        context: RequestContext<any>;
    }): Promise<any>;
    private parseUrl;
    mock<T extends keyof ApisDefinition>(to: T, response: (_ctx: RequestContext<any>) => Extract<ApisDefinition[T], DefinedFormat>['response']): void;
    export(): <T extends keyof ApisDefinition>(to: T, params: QueryParams<Extract<T, `get@${string}` | `post@${string}` | `put@${string}` | `delete@${string}`>, Extract<ApisDefinition[T], DefinedFormat>>) => Promise<Extract<ApisDefinition[T], DefinedFormat>["response"]>;
    install(config: Config): Promise<void>;
    http<T extends keyof ApisDefinition>(to: T, params: QueryParams<Extract<T, ToFormat>, Extract<ApisDefinition[T], DefinedFormat>>): Promise<Extract<ApisDefinition[T], DefinedFormat>['response']>;
}
export {};
