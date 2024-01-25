import { PiniaPlugin } from 'pinia';
declare module 'pinia' {
    interface PiniaCustomProperties {
        $destroy: () => void;
        $install: (_data: any) => Promise<void>;
        $useSetup: (_data: any) => () => Promise<void>;
    }
}
export declare const NextgenPiniaPlugin: PiniaPlugin;
export declare const createStoreLifeCycle: <D>() => {
    onInstall: (cb: (_dat: D) => Promise<void>) => void;
    onDestroy: (cb: () => void) => void;
    isAlive: () => boolean;
    isDestroyed: () => boolean;
    genOutput: <T>(data: T) => T & {
        $install: (_data: D extends never ? never : D) => Promise<void>;
        $useSetup: (_data: D extends never ? never : D) => () => Promise<void>;
    };
};
