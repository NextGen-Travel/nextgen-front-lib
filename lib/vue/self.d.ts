import Vue from 'vue';
export declare class VueSelf {
    use(): {
        data<T>(data: T): T;
        hasSlot(name?: string): boolean;
        children(): import("vue").VueConstructor<Vue>[];
        forceUpdate(): void;
        nextTick(callback: () => void): void;
    };
}
