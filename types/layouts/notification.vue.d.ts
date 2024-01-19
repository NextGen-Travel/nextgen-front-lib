import { PropType } from 'vue';
type MessageType = 'info' | 'warning' | 'danger' | 'success';
type Message = {
    id: string;
    type: MessageType;
    clicked: boolean;
    onClick: () => void;
    content: string;
    duration: number;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    onclear: {
        type: PropType<() => void>;
        required: true;
    };
    messages: {
        type: PropType<Message[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    onclear: {
        type: PropType<() => void>;
        required: true;
    };
    messages: {
        type: PropType<Message[]>;
        required: true;
    };
}>>, {}, {}>, {
    default?(_: {
        message: Message;
        color: string | undefined;
        close: () => void;
        stop: () => void;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
