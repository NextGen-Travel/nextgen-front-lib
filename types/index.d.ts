declare const glob: any;
export declare const getGlob: () => Window & typeof globalThis;
import './index.scss';
import './components';
export { useSelf } from './composables/self';
export { useDebounce } from './composables/debounce';
export { useListenerGroup } from './composables/listener-group';
export { useLoader } from './composables/loader';
export { genRef } from './mixins/refs';
export { genData } from './mixins/data';
export { genStateManager } from './mixins/state-manager';
import { Camera } from './modules/camera';
import { Graphql } from './modules/graphql';
import { Request } from './modules/request';
import { CryptoAES } from './modules/crypto';
import { NextgenMessageTrace } from './modules/nextgen-trace';
import { RuleProvider } from './modules/rule-provider';
import { NextgenWorker } from './modules/nextgen-worker';
import { NextgenInteraction } from './modules/nextgen-interaction';
import { PersistState } from './modules/persist-state';
import { QuerySync } from './modules/query-sync';
export declare const Modules: {
    Camera: typeof Camera;
    CryptoAES: typeof CryptoAES;
    Graphql: typeof Graphql;
    Request: typeof Request;
    RuleProvider: typeof RuleProvider;
    PersistState: typeof PersistState;
    NextgenWorker: typeof NextgenWorker;
    NextgenInteraction: typeof NextgenInteraction;
    NextgenMessageTrace: typeof NextgenMessageTrace;
    QuerySync: typeof QuerySync;
};
export declare const Utils: {
    fetch: {
        fetchAll: <T, R>(params: {
            pick: (_result: R) => T[];
            done: (_result: R) => boolean;
            fetch: (_page: number) => Promise<R>;
        }) => Promise<T[]>;
        fetchAllForLaravelPaginate: <T_1 extends {
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
        }>(cb: (_page: number) => Promise<T_1>) => Promise<T_1["data"][0][]>;
        fetchAllForStrapi: <T_2 extends {
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
        }>(cb: (_page: number) => Promise<T_2>) => Promise<T_2["data"][0][]>;
    };
    ip: {
        getGeoLocation: () => Promise<{
            countryCode: string;
            lat: number;
            lng: number;
        }>;
        inChina: () => Promise<boolean>;
    };
    message: {
        parseMessage: (data: any, def: string) => string;
    };
    serverData: {
        createLaravelPaginate: <T_3>() => {
            total: number;
            per_page: number;
            current_page: number;
            last_page: number;
            from: number;
            to: number;
            data: T_3[];
        };
        createLaravelResourcePaginate: <T_4>() => {
            data: T_4[];
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
        createStrapiList: <T_5>() => {
            msg: string;
            data: T_5[];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        createStrapiListResource: <T_6>() => {
            data: {
                id: string;
                attributes: T_6;
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
    };
    storage: {
        asyncLoaclStroageIntercept: (ns: string, options?: ({
            ttl?: Record<string, number> | undefined;
            version?: number | undefined;
        } & {
            encrypt?: boolean | undefined;
        }) | undefined) => {
            get(key: string, value: any, { storage, isDefault, defaultValue }: any): Promise<any>;
            set(key: string, value: any): Promise<{
                data: any;
                version: number;
                expiredAt: number;
                createdAt: number;
            }>;
        };
        loaclStroageIntercept: (ns: string, options?: {
            ttl?: Record<string, number> | undefined;
            version?: number | undefined;
        } | undefined) => {
            get(key: string, value: any, { storage, isDefault, defaultValue }: any): any;
            set(key: string, value: any): {
                hash: string;
                data: any;
                version: number;
                expiredAt: number;
                createdAt: number;
            };
        };
    };
    table: {
        defineFields: <K extends string>(items: {
            key?: K | undefined;
            label: string | (() => string);
            sortBtn?: boolean | undefined;
            style?: ((_value: any, _key: string, _item: any, _index: number) => any) | undefined;
            textAlign?: "start" | "end" | "center" | undefined;
            formatter?: ((_value: any, _key: string, _item: any, _index: number) => any) | undefined;
            optionShow?: boolean | undefined;
        }[]) => {
            key: string;
            label: () => string;
            sortBtn: boolean;
            textAlign: "start" | "end" | "center";
            style: (_value: any, _key: string, _item: any, _index: number) => string;
            formatter: (..._args: any[]) => any;
            optionShow: boolean;
        }[];
    };
    text: {
        toHump: (text: string) => string;
    };
};
export declare const Model: {
    define: <S extends Record<any, any>, R extends Record<any, any>>(params: {
        name: string;
        schema: () => S;
        mixin: (_data: {
            data: S;
            commit: (_newData: Partial<S>) => void;
            methods: {
                raw: () => Record<any, any>;
                diff: (target: Record<any, any>) => boolean;
                clear: () => void;
                reset: () => void;
                commit: (newData: Partial<Record<any, any>>) => void;
                assign: (newData: Partial<Record<any, any>>) => void;
                rebuild: () => void;
                isModified: () => boolean;
            };
            stateManager: {
                reset: () => void;
                create: <T extends Record<string, any>>(cb: () => T) => T;
            };
        }) => R;
    }) => {
        _ModelType: {
            d: import("vue").UnwrapNestedRefs<S>;
            m: {
                raw: () => import("vue").UnwrapNestedRefs<S>;
                diff: (target: S) => boolean;
                clear: () => void;
                reset: () => void;
                commit: (newData: Partial<S>) => void;
                assign: (newData: Partial<S>) => void;
                rebuild: () => void;
                isModified: () => boolean;
            };
            e: import("power-helper").Event<{
                update: Record<string, any>;
                rebuild: Record<string, any>;
            }>;
        } & R;
        _SchemaType: S;
        gen: () => {
            d: import("vue").UnwrapNestedRefs<S>;
            m: {
                raw: () => import("vue").UnwrapNestedRefs<S>;
                diff: (target: S) => boolean;
                clear: () => void;
                reset: () => void;
                commit: (newData: Partial<S>) => void;
                assign: (newData: Partial<S>) => void;
                rebuild: () => void;
                isModified: () => boolean;
            };
            e: import("power-helper").Event<{
                update: Record<string, any>;
                rebuild: Record<string, any>;
            }>;
        } & R;
        from: (data?: S | undefined) => {
            d: import("vue").UnwrapNestedRefs<S>;
            m: {
                raw: () => import("vue").UnwrapNestedRefs<S>;
                diff: (target: S) => boolean;
                clear: () => void;
                reset: () => void;
                commit: (newData: Partial<S>) => void;
                assign: (newData: Partial<S>) => void;
                rebuild: () => void;
                isModified: () => boolean;
            };
            e: import("power-helper").Event<{
                update: Record<string, any>;
                rebuild: Record<string, any>;
            }>;
        } & R;
        raw: () => S;
        sync: (data: S, emit?: ((_data: S) => void) | undefined) => {
            d: import("vue").UnwrapNestedRefs<S>;
            m: {
                raw: () => import("vue").UnwrapNestedRefs<S>;
                diff: (target: S) => boolean;
                clear: () => void;
                reset: () => void;
                commit: (newData: Partial<S>) => void;
                assign: (newData: Partial<S>) => void;
                rebuild: () => void;
                isModified: () => boolean;
            };
            e: import("power-helper").Event<{
                update: Record<string, any>;
                rebuild: Record<string, any>;
            }>;
        } & R;
    };
    defineSchema: <D, T_1 extends () => D>(data: T_1) => T_1;
};
import { I18nPlus } from './vue-extends/i18n-plus';
import { RouterPlus } from './vue-extends/router-plus';
export { NextgenPiniaPlugin, createStoreLifeCycle } from './vue-extends/pinia-plus';
export declare const VueExtends: {
    I18nPlus: typeof I18nPlus;
    RouterPlus: typeof RouterPlus;
};
import { AppleAuth } from './libraries/third-parties/apple-auth';
import { GoogleAuth } from './libraries/third-parties/google-auth';
import { FacebookService } from './libraries/third-parties/facebook';
import { WechatService } from './libraries/third-parties/wechat';
import { GoogleMap } from './libraries/maps/google';
import { NgAMap } from './libraries/maps/amap';
export declare const Libraries: {
    NgAMap: typeof NgAMap;
    AppleAuth: typeof AppleAuth;
    GoogleMap: typeof GoogleMap;
    GoogleAuth: typeof GoogleAuth;
    FacebookService: typeof FacebookService;
    WechatService: typeof WechatService;
};
export declare const LibStores: {
    createConfirmStore: (params: {
        confirmText: () => string;
        cancelText: () => string;
        title: () => string;
    }) => () => {
        open: ({ message, handler, onReject }: import("./store/confirm").OpenParams) => void;
        isOpen: import("vue").ComputedRef<boolean>;
        props: import("vue").ComputedRef<{
            title: string;
            confirmText: string;
            cancelText: string;
            message: string;
            isOpen: boolean;
            clickCancel: () => void;
            clickConfirm: (success: any) => void;
        }>;
        state: {
            title: string;
            confirmText: string;
            cancelText: string;
            isOpen: boolean;
            message: string;
            handler: (_success: (_state?: boolean | undefined) => void) => any;
            onReject: (() => void) | undefined;
        };
        cancel: () => void;
    };
    createNotificationStore: () => () => {
        push: (params: {
            type: import("./store/notification").MessageType;
            content: string;
        }) => void;
        props: import("vue").ComputedRef<{
            onclear: () => void;
            messages: {
                id: string;
                type: import("./store/notification").MessageType;
                content: string;
                duration: number;
                clicked: boolean;
                onClick: () => void;
            }[];
        }>;
        clear: () => void;
        state: {
            messages: {
                id: string;
                type: import("./store/notification").MessageType;
                content: string;
                duration: number;
                clicked: boolean;
                onClick: () => void;
            }[];
        };
        messages: import("vue").ComputedRef<{
            id: string;
            type: import("./store/notification").MessageType;
            content: string;
            duration: number;
            clicked: boolean;
            onClick: () => void;
        }[]>;
    };
    confirmStoreToActions: (useStore: () => any) => {
        openConfirmPlus: (params: import("./store/confirm").OpenParams) => void;
        openConfirm: (message: string, handler: (_success: (_state?: boolean | undefined) => void) => any, onReject?: (() => void) | undefined) => void;
        isCheckingConfirm: () => any;
        cancelConfirm: () => void;
    };
    notificationStoreToActions: (useStore: () => any) => {
        showToast: (type: import("./store/notification").MessageType, content: string) => void;
        pushNotification: (options: {
            type: "info" | "warning" | "danger" | "success";
            content: string;
            onClick?: (() => void) | undefined;
        }) => void;
    };
};
export type * as NgTypes from './types';
export * as NgComponents from './components/index';
export * as NgLayoutComponents from './layouts/index';
export declare const getLibOptions: () => any;
export declare const getLibEnv: () => any;
export declare const NextgenLib: {
    setOptions: (options: Partial<typeof glob.__ng_config.libOptions>) => void;
    install(app: import('vue').App, params: {
        options: typeof glob.__ng_config.libOptions;
        env: {
            stage: string;
            service: string;
        };
    }): void;
};
