declare type Listener = {
    off: () => any;
} | undefined;
export declare const useListenerGroup: () => {
    off: () => void;
    push: (ls: Listener[]) => void;
};
export {};
