type Handler = (_success: (_state?: boolean) => void) => any;
export type OpenParams = {
    message: string;
    handler: Handler;
    onReject?: () => void;
    doubleCheckText?: string;
};
export declare const createConfirmStore: (params: {
    confirmText: () => string;
    cancelText: () => string;
    title: () => string;
}) => () => {
    open: ({ message, handler, onReject }: OpenParams) => void;
    isOpen: import("vue").ComputedRef<boolean>;
    props: import("vue").ComputedRef<{
        title: string;
        confirmText: string;
        cancelText: string;
        message: string;
        isOpen: boolean;
        clickCancel: () => void;
        clickConfirm: (success: any) => void;
    }>;
    state: {
        title: string;
        confirmText: string;
        cancelText: string;
        isOpen: boolean;
        message: string;
        handler: Handler;
        onReject: (() => void) | undefined;
    };
    cancel: () => void;
};
export declare const confirmStoreToActions: (useStore: () => any) => {
    openConfirmPlus: (params: OpenParams) => void;
    openConfirm: (message: string, handler: OpenParams['handler'], onReject?: () => void) => void;
};
export {};
