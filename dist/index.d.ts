import { onMounted, reactive, watch, onUnmounted, getCurrentInstance } from 'vue';
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
export declare const NextgenLib: {
    createStrictObject: <T extends {
        [key: string]: [StringConstructor | BooleanConstructor | NumberConstructor, boolean, unknown];
    }>(envs: T) => import("power-helper/types/record").DeepReadonly<{ [key in keyof T]: T[key][0] extends StringConstructor ? string : T[key][0] extends NumberConstructor ? number : T[key][0] extends BooleanConstructor ? boolean : unknown; }>;
    install(_Vue: any, hooks: Hooks): void;
};
export default NextgenLib;
