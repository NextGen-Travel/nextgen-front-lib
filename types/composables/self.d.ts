export declare const useSelf: () => {
    hasSlot(name?: string): boolean;
    forceUpdate(): void;
    hasListener(name: string): boolean;
    nextTick(callback: () => void): void;
};
