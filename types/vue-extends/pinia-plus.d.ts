import { PiniaPlugin } from 'pinia';
declare module 'pinia' {
    interface PiniaCustomProperties {
        $destroy: () => void;
    }
}
export declare const NextgenPiniaPlugin: PiniaPlugin;
export declare const createStoreLifeCycle: <D>() => {
    onInstall: (cb: (_dat: D) => Promise<void>) => void;
    onDestroy: (cb: () => void) => void;
    isAlive: () => boolean;
    isDestroyed: () => boolean;
    genOutput: <T>(data: T) => T & {
        $install: (_data: D) => Promise<void>;
        $useSetup: (_data: D) => () => Promise<void>;
    };
};
