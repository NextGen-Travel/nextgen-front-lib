import { PiniaPlugin } from 'pinia';
declare module 'pinia' {
    interface PiniaCustomProperties {
        $destroy: () => void;
    }
}
export declare const NextgenPiniaPlugin: PiniaPlugin;
