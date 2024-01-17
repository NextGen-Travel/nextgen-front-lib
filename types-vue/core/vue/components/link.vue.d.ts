import { PropType } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    to: {
        type: PropType<string | Record<string, any>>;
        required: true;
    };
    target: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    useClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    to: {
        type: PropType<string | Record<string, any>>;
        required: true;
    };
    target: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    useClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: (() => any) | undefined;
}, {
    target: string;
    disabled: boolean;
    inline: boolean;
    useClick: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
