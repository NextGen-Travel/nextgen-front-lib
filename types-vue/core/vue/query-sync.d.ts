import { Event } from 'power-helper';
import { VueRouterPlus } from './router-plus';
type Query = Record<string, undefined | null | string | string[]>;
type Events = {
    input: {
        key: string;
    };
    change: {
        keys: string[];
    };
};
type Filter<T> = {
    state: T;
    reset: () => void;
    event: Event<Events>;
    isChange: () => void;
    stateToQuery: () => void;
};
export declare const defineQuerySync: <T extends Query>(params: {
    ns: () => string;
    defs: () => T;
    persist: boolean;
    install?: ((_filter: Filter<T>) => void) | undefined;
    router: () => VueRouterPlus<any>;
}) => () => {
    state: T | import("vue").UnwrapNestedRefs<T>;
    reset: () => void;
    event: import("power-helper/dist/modules/event").Event<Events>;
    isChange: () => boolean;
    stateToQuery: () => void;
    paramsToQuery: (params: Partial<Record<keyof T, string | string[]>>) => Record<string, string | string[]>;
};
export {};
