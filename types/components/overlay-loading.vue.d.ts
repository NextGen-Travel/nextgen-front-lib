declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    full: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    zIndex: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
    modelValue: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (_value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    full: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    zIndex: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
    modelValue: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((_value: boolean) => any) | undefined;
}, {
    zIndex: number;
    modelValue: boolean;
    full: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
