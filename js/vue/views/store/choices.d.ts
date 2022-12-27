type Handler = (_close: () => void) => any;
type ChoicesBtn = {
    text: string;
    handler: Handler;
};
export type ChoicesParams = {
    title: string;
    image?: string;
    icon?: string;
    desc: string;
    btns: Array<ChoicesBtn>;
};
export declare const useLibChoicesStore: import("pinia").StoreDefinition<"lib-choices", import("pinia")._UnwrapAll<Pick<{
    open: ({ title, image, desc, icon, btns }: ChoicesParams) => void;
    state: {
        isOpen: boolean;
        title: string;
        image: string | undefined;
        icon: string | undefined;
        desc: string;
        btns: {
            text: string;
            handler: Handler;
        }[];
    };
    cancel: () => void;
}, "state">>, Pick<{
    open: ({ title, image, desc, icon, btns }: ChoicesParams) => void;
    state: {
        isOpen: boolean;
        title: string;
        image: string | undefined;
        icon: string | undefined;
        desc: string;
        btns: {
            text: string;
            handler: Handler;
        }[];
    };
    cancel: () => void;
}, never>, Pick<{
    open: ({ title, image, desc, icon, btns }: ChoicesParams) => void;
    state: {
        isOpen: boolean;
        title: string;
        image: string | undefined;
        icon: string | undefined;
        desc: string;
        btns: {
            text: string;
            handler: Handler;
        }[];
    };
    cancel: () => void;
}, "cancel" | "open">>;
export {};
