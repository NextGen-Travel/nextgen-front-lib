declare const _default: import("vue").DefineComponent<{
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
    'update:modelValue': (_value: boolean) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {}>;
export default _default;
