type Handler = (_success: (_state?: boolean) => void) => any;
export type OpenParams = {
    message: string;
    handler: Handler;
    doubleCheckText?: string;
};
export declare const useLibConfirmStore: import("pinia").StoreDefinition<"lib-confirm", import("pinia")._UnwrapAll<Pick<{
    open: ({ doubleCheckText, message, handler }: OpenParams) => void;
    state: {
        isOpen: boolean;
        message: string;
        doubleCheckText: string;
        handler: Handler;
    };
    cancel: () => void;
}, "state">>, Pick<{
    open: ({ doubleCheckText, message, handler }: OpenParams) => void;
    state: {
        isOpen: boolean;
        message: string;
        doubleCheckText: string;
        handler: Handler;
    };
    cancel: () => void;
}, never>, Pick<{
    open: ({ doubleCheckText, message, handler }: OpenParams) => void;
    state: {
        isOpen: boolean;
        message: string;
        doubleCheckText: string;
        handler: Handler;
    };
    cancel: () => void;
}, "open" | "cancel">>;
export {};
