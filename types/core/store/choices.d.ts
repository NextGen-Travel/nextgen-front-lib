type Handler = (_close: () => void) => any;
type ChoicesBtn = {
    text: string;
    handler: Handler;
};
type ChoicesParams = {
    title: string;
    image?: string;
    icon?: string;
    desc: string;
    btns: Array<ChoicesBtn>;
};
export declare const createChoicesStore: () => () => {
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
};
export declare const choicesStoreToActions: (useStore: ReturnType<typeof createChoicesStore>) => {
    open: (params: ChoicesParams) => void;
};
export {};
