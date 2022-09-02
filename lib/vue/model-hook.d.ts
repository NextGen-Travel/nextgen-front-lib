declare type Context<S> = {
    data: S;
    commit: (_newData: Partial<S>) => void;
};
export declare type ModelType<T extends {
    use: () => any;
}> = ReturnType<T['use']>;
export declare const defineSchema: <D, T extends () => D>(data: T) => T;
export declare const createLaravelPaginate: <T>() => {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
    data: T[];
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
        from: string;
        path: string;
        per_page: number;
        to: string;
    };
};
export declare const defineModelHook: <S extends Record<any, any>, R extends Record<any, any>>(params: {
    name: string;
    schema: () => S;
    mixin: (_data: Context<S>) => R;
}) => {
    use: () => {
        data: import("vue").UnwrapNestedRefs<S>;
        diff: (target: S) => boolean;
        clear: () => void;
        reset: () => void;
        event: import("power-helper/dist/modules/event").Event<{
            update: Record<string, unknown>;
        }>;
        commit: (newData: Partial<S>) => void;
        assign: (newData: Partial<S>) => void;
        isModified: () => boolean;
    } & R;
    from: (data?: S | undefined) => {
        data: import("vue").UnwrapNestedRefs<S>;
        diff: (target: S) => boolean;
        clear: () => void;
        reset: () => void;
        event: import("power-helper/dist/modules/event").Event<{
            update: Record<string, unknown>;
        }>;
        commit: (newData: Partial<S>) => void;
        assign: (newData: Partial<S>) => void;
        isModified: () => boolean;
    } & R;
    /** 只獲取 schema */
    row: () => S;
    /** 同步監聽資料變化 */
    sync: (data: S, emit?: ((_data: S) => void) | undefined) => {
        data: import("vue").UnwrapNestedRefs<S>;
        diff: (target: S) => boolean;
        clear: () => void;
        reset: () => void;
        event: import("power-helper/dist/modules/event").Event<{
            update: Record<string, unknown>;
        }>;
        commit: (newData: Partial<S>) => void;
        assign: (newData: Partial<S>) => void;
        isModified: () => boolean;
    } & R;
};
export {};
