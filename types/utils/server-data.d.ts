export declare const createLaravelPaginate: <T>() => {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
    data: T[];
};
export declare const createStrapiList: <T>() => {
    msg: string;
    data: T[];
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
};
export declare const createLaravelResourcePaginate: <T>() => {
    data: T[];
    links: {
        first: string;
        last: string;
        prev: string;
        next: string;
    };
    meta: {
        current_page: number;
        last_page: number;
        total: number;
        from: number;
        path: string;
        per_page: number;
        to: number;
    };
};
export declare const createStrapiListResource: <T>() => {
    data: {
        id: string;
        attributes: T;
    }[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
};
