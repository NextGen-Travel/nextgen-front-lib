import { PropType } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    fullscreen: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    persistent: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    maxWidth: {
        type: PropType<string>;
        required: false;
        default: () => string;
    };
    hideHeader: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    title: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    modelValue: {
        type: PropType<boolean>;
        required: false;
        default: () => null;
    };
    hideClose: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    loading: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    open: () => true;
    close: () => true;
    'update:modelValue': (_value: boolean) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fullscreen: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    persistent: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    maxWidth: {
        type: PropType<string>;
        required: false;
        default: () => string;
    };
    hideHeader: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    title: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    modelValue: {
        type: PropType<boolean>;
        required: false;
        default: () => null;
    };
    hideClose: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    loading: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((_value: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
}, {
    title: string;
    maxWidth: string;
    modelValue: boolean;
    persistent: boolean;
    fullscreen: boolean;
    hideHeader: boolean;
    hideClose: boolean;
    loading: boolean;
}, {}>, {
    active?(_: {
        switchShow: () => void;
    }): any;
    actions?(_: {
        switchShow: () => void;
    }): any;
    default?(_: {
        switchShow: () => void;
    }): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
