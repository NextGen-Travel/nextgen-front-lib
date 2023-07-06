export declare class VueSelf {
    static use(): {
        ref<T>(data: T): {
            value: T;
        };
        data<T_1>(data: T_1): T_1;
        hasSlot(name?: string): boolean;
        hasListener(name: string): boolean;
        forceUpdate(): void;
        nextTick(callback: () => void): void;
    };
    use(): {
        ref<T>(data: T): {
            value: T;
        };
        data<T_1>(data: T_1): T_1;
        hasSlot(name?: string): boolean;
        hasListener(name: string): boolean;
        forceUpdate(): void;
        nextTick(callback: () => void): void;
    };
}
