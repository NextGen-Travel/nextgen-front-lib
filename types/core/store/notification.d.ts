export type MessageType = 'info' | 'warning' | 'danger' | 'success';
export type Message = {
    id: string;
    type: MessageType;
    stopped: boolean;
    content: string;
    duration: number;
};
export declare const createNotificationStore: () => () => {
    push: (params: {
        type: MessageType;
        content: string;
    }) => void;
    props: import("vue").ComputedRef<{
        onclear: () => void;
        messages: {
            id: string;
            type: MessageType;
            stopped: boolean;
            content: string;
            duration: number;
        }[];
    }>;
    clear: () => void;
    state: {
        messages: {
            id: string;
            type: MessageType;
            stopped: boolean;
            content: string;
            duration: number;
        }[];
    };
    messages: import("vue").ComputedRef<{
        id: string;
        type: MessageType;
        stopped: boolean;
        content: string;
        duration: number;
    }[]>;
};
export declare const notificationStoreToActions: (useStore: ReturnType<typeof createNotificationStore>) => {
    showToast: (type: MessageType, content: string) => void;
};
