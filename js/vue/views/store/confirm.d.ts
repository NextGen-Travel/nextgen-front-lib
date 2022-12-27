type Handler = (_callback: () => void) => any;
export declare const useLibConfirmStore: import("pinia").StoreDefinition<"lib-confirm", import("pinia")._UnwrapAll<Pick<{
    open: ({ message, handler }: {
        handler: Handler;
        message: string;
    }) => void;
    state: {
        isOpen: boolean;
        message: string;
        handler: Handler;
    };
    cancel: () => void;
}, "state">>, Pick<{
    open: ({ message, handler }: {
        handler: Handler;
        message: string;
    }) => void;
    state: {
        isOpen: boolean;
        message: string;
        handler: Handler;
    };
    cancel: () => void;
}, never>, Pick<{
    open: ({ message, handler }: {
        handler: Handler;
        message: string;
    }) => void;
    state: {
        isOpen: boolean;
        message: string;
        handler: Handler;
    };
    cancel: () => void;
}, "cancel" | "open">>;
export {};
