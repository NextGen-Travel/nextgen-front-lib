type StrapiList = {
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
    data: {
        id: string;
        attributes: Record<string, any>;
    }[];
};
type LaravelResourcePaginate = {
    data: any[];
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
        per_page: number;
        to: number;
    };
};
export declare const fetchAll: <T, R>(params: {
    pick: (_result: R) => T[];
    done: (_result: R) => boolean;
    fetch: (_page: number) => Promise<R>;
}) => Promise<T[]>;
export declare const fetchAllForStrapi: <T extends StrapiList>(cb: (_page: number) => Promise<T>) => Promise<T["data"][0][]>;
export declare const fetchAllForLaravelPaginate: <T extends LaravelResourcePaginate>(cb: (_page: number) => Promise<T>) => Promise<T["data"][0][]>;
export {};
