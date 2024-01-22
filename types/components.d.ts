import 'vue';
import * as components from './components/index';
import * as layouts from './layouts/index';
export type NgComponents<T extends keyof typeof components = keyof typeof components, L extends keyof typeof layouts = keyof typeof layouts> = {
    [K in T]: typeof components[K];
} & {
    [K in L]: typeof layouts[K];
};
declare module 'vue' {
    interface GlobalComponents extends NgComponents {
    }
}
export {};
