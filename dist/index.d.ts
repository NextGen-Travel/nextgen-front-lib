import { Graphql as _Graphql } from './modules/graphql';
import { Request as _Request } from './modules/request';
import { CryptoAES as _CryptoAES } from './modules/crypto';
import { Interaction as _Interaction } from './modules/interaction';
import { RuleProvider as _RuleProvider } from './modules/rule-provider';
import { ServiceException as _ServiceException } from './modules/service-exception';
import { onMounted, reactive, watch, onUnmounted, getCurrentInstance } from 'vue';
declare type Hooks = {
    watch: typeof watch;
    reactive: typeof reactive;
    onMounted: typeof onMounted;
    onUnmounted: typeof onUnmounted;
    getCurrentInstance: typeof getCurrentInstance;
};
export declare const vueHooks: Hooks;
export declare const createStrictObject: <T extends {
    [key: string]: [StringConstructor | BooleanConstructor | NumberConstructor, boolean, unknown];
}>(envs: T) => import("power-helper/types/record").DeepReadonly<{ [key in keyof T]: T[key][0] extends StringConstructor ? string : T[key][0] extends NumberConstructor ? number : T[key][0] extends BooleanConstructor ? boolean : unknown; }>;
export declare const Graphql: typeof _Graphql;
export declare const Request: typeof _Request;
export declare const CryptoAES: typeof _CryptoAES;
export declare const Interaction: typeof _Interaction;
export declare const RuleProvider: typeof _RuleProvider;
export declare const ServiceException: typeof _ServiceException;
export declare const NextgenLib: {
    createStrictObject: <T extends {
        [key: string]: [StringConstructor | BooleanConstructor | NumberConstructor, boolean, unknown];
    }>(envs: T) => import("power-helper/types/record").DeepReadonly<{ [key in keyof T]: T[key][0] extends StringConstructor ? string : T[key][0] extends NumberConstructor ? number : T[key][0] extends BooleanConstructor ? boolean : unknown; }>;
    Request: typeof _Request;
    Graphql: typeof _Graphql;
    CryptoAES: typeof _CryptoAES;
    Interaction: typeof _Interaction;
    RuleProvider: typeof _RuleProvider;
    ServiceException: typeof _ServiceException;
    install(_Vue: any, hooks: Hooks): void;
};
export default NextgenLib;
