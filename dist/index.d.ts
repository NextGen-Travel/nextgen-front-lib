import { onMounted, reactive, watch, onUnmounted, getCurrentInstance } from 'vue';
declare type Hooks = {
    watch: typeof watch;
    reactive: typeof reactive;
    onMounted: typeof onMounted;
    onUnmounted: typeof onUnmounted;
    getCurrentInstance: typeof getCurrentInstance;
};
export declare const vueHooks: Hooks;
export declare const NextgenLib: {
    install(_Vue: any, hooks: Hooks): void;
};
export default NextgenLib;
