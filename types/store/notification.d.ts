export type MessageType = 'info' | 'warning' | 'danger' | 'success';
export type Message = {
    id: string;
    type: MessageType;
    content: string;
    duration: number;
    clicked: boolean;
    onClick: () => void;
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
            content: string;
            duration: number;
            clicked: boolean;
            onClick: () => void;
        }[];
    }>;
    clear: () => void;
    state: {
        messages: {
            id: string;
            type: MessageType;
            content: string;
            duration: number;
            clicked: boolean;
            onClick: () => void;
        }[];
    };
    messages: import("vue").ComputedRef<{
        id: string;
        type: MessageType;
        content: string;
        duration: number;
        clicked: boolean;
        onClick: () => void;
    }[]>;
};
export declare const notificationStoreToActions: (useStore: () => any) => {
    showToast: (type: MessageType, content: string) => void;
    pushNotification: (options: {
        type: 'info' | 'warning' | 'danger' | 'success';
        content: string;
        onClick?: () => void;
    }) => void;
};
