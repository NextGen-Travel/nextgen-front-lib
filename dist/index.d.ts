import { Graphql as _Graphql } from './modules/graphql';
import { Request as _Request } from './modules/request';
import { CryptoAES as _CryptoAES } from './modules/crypto';
import { Interaction as _Interaction } from './modules/interaction';
import { RuleProvider as _RuleProvider } from './modules/rule-provider';
import { ServiceException as _ServiceException } from './modules/service-exception';
import { onMounted, reactive, watch, onUnmounted, getCurrentInstance } from 'vue';
import { VueSelf as _VueSelf } from './vue/self';
import { VueI18nPlus as _VueI18nPlus } from './vue/i18n-plus';
import { VueRouterPlus as _VueRouterPlus } from './vue/router-plus';
declare type Hooks = {
    watch: typeof watch;
    reactive: typeof reactive;
    onMounted: typeof onMounted;
    onUnmounted: typeof onUnmounted;
    getCurrentInstance: typeof getCurrentInstance;
};
export declare const vueHooks: Hooks;
export declare const createUuid: () => string;
export declare const isBreakpoint: (breakpoint: "xs-only" | "xs-and-up" | "xs-and-down" | "sm-only" | "sm-and-up" | "sm-and-down" | "md-only" | "md-and-up" | "md-and-down" | "lg-only" | "lg-and-up" | "lg-and-down", el?: HTMLElement | Window) => boolean;
export declare const createStrictObject: <T extends {
    [key: string]: [StringConstructor | BooleanConstructor | NumberConstructor, boolean, unknown];
}>(envs: T) => import("power-helper/types/record").DeepReadonly<{ [key in keyof T]: T[key][0] extends StringConstructor ? string : T[key][0] extends NumberConstructor ? number : T[key][0] extends BooleanConstructor ? boolean : unknown; }>;
export declare const Graphql: typeof _Graphql;
export declare const Request: typeof _Request;
export declare const CryptoAES: typeof _CryptoAES;
export declare const Interaction: typeof _Interaction;
export declare const RuleProvider: typeof _RuleProvider;
export declare const ServiceException: typeof _ServiceException;
export declare const VueSelf: typeof _VueSelf;
export declare const VueI18nPlus: typeof _VueI18nPlus;
export declare const VueRouterPlus: typeof _VueRouterPlus;
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
