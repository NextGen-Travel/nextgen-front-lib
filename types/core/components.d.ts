import 'vue';
import * as components from './components/index';
export type NgComponents<T extends keyof typeof components = keyof typeof components> = {
    [K in T]: typeof components[K];
};
declare module 'vue' {
    interface GlobalComponents extends NgComponents {
    }
}
export {};
