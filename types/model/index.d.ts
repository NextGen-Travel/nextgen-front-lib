import { genStateManager } from '../mixins/state-manager';
type Context<S> = {
    data: S;
    commit: (_newData: Partial<S>) => void;
    stateManager: ReturnType<typeof genStateManager>;
};
export type ModelType<T extends {
    use: () => any;
}> = ReturnType<T['use']>;
export declare const defineSchema: <D, T extends () => D>(data: T) => T;
export declare const defineModel: <S extends Record<any, any>, R extends Record<any, any>>(params: {
    name: string;
    schema: () => S;
    mixin: (_data: Context<S>) => R;
}) => {
    _ModelType: {
        d: import("vue").UnwrapNestedRefs<S>;
        data: import("vue").UnwrapNestedRefs<S>;
        diff: (target: S) => boolean;
        clear: () => void;
        reset: () => void;
        event: import("power-helper/dist/modules/event").Event<{
            update: Record<string, any>;
            rebuild: Record<string, any>;
        }>;
        commit: (newData: Partial<S>) => void;
        assign: (newData: Partial<S>) => void;
        rebuild: () => void;
        isModified: () => boolean;
    } & R;
    _SchemaType: S;
    use: () => {
        d: import("vue").UnwrapNestedRefs<S>;
        data: import("vue").UnwrapNestedRefs<S>;
        diff: (target: S) => boolean;
        clear: () => void;
        reset: () => void;
        event: import("power-helper/dist/modules/event").Event<{
            update: Record<string, any>;
            rebuild: Record<string, any>;
        }>;
        commit: (newData: Partial<S>) => void;
        assign: (newData: Partial<S>) => void;
        rebuild: () => void;
        isModified: () => boolean;
    } & R;
    from: (data?: S | undefined) => {
        d: import("vue").UnwrapNestedRefs<S>;
        data: import("vue").UnwrapNestedRefs<S>;
        diff: (target: S) => boolean;
        clear: () => void;
        reset: () => void;
        event: import("power-helper/dist/modules/event").Event<{
            update: Record<string, any>;
            rebuild: Record<string, any>;
        }>;
        commit: (newData: Partial<S>) => void;
        assign: (newData: Partial<S>) => void;
        rebuild: () => void;
        isModified: () => boolean;
    } & R;
    /** 只獲取 schema */
    raw: () => S;
    /** 同步監聽資料變化 */
    sync: (data: S, emit?: ((_data: S) => void) | undefined) => {
        d: import("vue").UnwrapNestedRefs<S>;
        data: import("vue").UnwrapNestedRefs<S>;
        diff: (target: S) => boolean;
        clear: () => void;
        reset: () => void;
        event: import("power-helper/dist/modules/event").Event<{
            update: Record<string, any>;
            rebuild: Record<string, any>;
        }>;
        commit: (newData: Partial<S>) => void;
        assign: (newData: Partial<S>) => void;
        rebuild: () => void;
        isModified: () => boolean;
    } & R;
};
export {};
