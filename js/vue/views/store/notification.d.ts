export type MessageType = 'info' | 'warning' | 'danger' | 'success';
export type Message = {
    id: string;
    type: MessageType;
    clicked: boolean;
    content: string;
    duration: number;
};
export declare const useLibNotificationStore: import("pinia").StoreDefinition<"lib-notification", import("pinia")._UnwrapAll<Pick<{
    push: (params: {
        type: MessageType;
        content: string;
    }) => void;
    clear: () => void;
    state: {
        messages: {
            id: string;
            type: MessageType;
            clicked: boolean;
            content: string;
            duration: number;
        }[];
    };
    messages: import("vue").ComputedRef<{
        id: string;
        type: MessageType;
        clicked: boolean;
        content: string;
        duration: number;
    }[]>;
}, "state">>, Pick<{
    push: (params: {
        type: MessageType;
        content: string;
    }) => void;
    clear: () => void;
    state: {
        messages: {
            id: string;
            type: MessageType;
            clicked: boolean;
            content: string;
            duration: number;
        }[];
    };
    messages: import("vue").ComputedRef<{
        id: string;
        type: MessageType;
        clicked: boolean;
        content: string;
        duration: number;
    }[]>;
}, "messages">, Pick<{
    push: (params: {
        type: MessageType;
        content: string;
    }) => void;
    clear: () => void;
    state: {
        messages: {
            id: string;
            type: MessageType;
            clicked: boolean;
            content: string;
            duration: number;
        }[];
    };
    messages: import("vue").ComputedRef<{
        id: string;
        type: MessageType;
        clicked: boolean;
        content: string;
        duration: number;
    }[]>;
}, "push" | "clear">>;
