import { PiniaPlugin } from 'pinia';
declare module 'pinia' {
    interface PiniaCustomProperties {
        $build: () => (() => Promise<void>);
        $destroy: () => void;
        $install: () => Promise<void>;
    }
}
export declare const NextgenPiniaPlugin: PiniaPlugin;
export declare const createStoreLifeCycle: () => {
    onInstall: (cb: () => Promise<void>) => void;
    onDestroy: (cb: () => void) => void;
    isAlive: () => boolean;
    isDestroyed: () => boolean;
    getOutput: <T>(data: T) => T;
};
