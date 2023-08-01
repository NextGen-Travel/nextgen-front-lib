type Handler = (_success: (_state?: boolean) => void) => any;
export type OpenParams = {
    message: string;
    handler: Handler;
    onReject?: () => void;
    doubleCheckText?: string;
};
export declare const useLibConfirmStore: import("pinia").StoreDefinition<"lib-confirm", import("pinia")._UnwrapAll<Pick<{
    open: ({ doubleCheckText, message, handler, onReject }: OpenParams) => void;
    state: {
        isOpen: boolean;
        message: string;
        doubleCheckText: string;
        handler: Handler;
        onReject: (() => void) | undefined;
    };
    cancel: () => void;
}, "state">>, Pick<{
    open: ({ doubleCheckText, message, handler, onReject }: OpenParams) => void;
    state: {
        isOpen: boolean;
        message: string;
        doubleCheckText: string;
        handler: Handler;
        onReject: (() => void) | undefined;
    };
    cancel: () => void;
}, never>, Pick<{
    open: ({ doubleCheckText, message, handler, onReject }: OpenParams) => void;
    state: {
        isOpen: boolean;
        message: string;
        doubleCheckText: string;
        handler: Handler;
        onReject: (() => void) | undefined;
    };
    cancel: () => void;
}, "open" | "cancel">>;
export {};
