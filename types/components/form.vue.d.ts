declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    lazyValidation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    valid: import("vue").ComputedRef<boolean>;
    validate: (cb: () => any, fail?: ((_errors: any) => any) | undefined) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (_valid: boolean) => void;
    submit: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    lazyValidation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onSubmit?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((_valid: boolean) => any) | undefined;
}, {
    modelValue: boolean;
    disabled: boolean;
    loading: boolean;
    readonly: boolean;
    lazyValidation: boolean;
}, {}>, {
    default?(_: {
        valid: boolean;
        validate: (cb: () => any, fail?: ((_errors: any) => any) | undefined) => Promise<void>;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
