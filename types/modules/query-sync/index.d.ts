import { RouterPlus } from '../../vue-extends/router-plus';
import { Event } from 'power-helper';
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
export declare class QuerySync {
    static define: <T extends Query>(params: {
        ns: () => string;
        defs: () => T;
        persist: boolean;
        install?: ((_filter: Filter<T>) => void) | undefined;
        router: () => RouterPlus<any>;
    }) => () => {
        state: T | import("vue").UnwrapNestedRefs<T>;
        reset: () => void;
        event: import("power-helper/dist/modules/event").Event<Events>;
        isChange: () => boolean;
        stateToQuery: () => void;
        paramsToQuery: (params: Partial<Record<keyof T, string | string[]>>) => Record<string, string | string[]>;
    };
}
export {};
