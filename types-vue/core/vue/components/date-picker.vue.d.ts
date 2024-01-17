declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (_value: number) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
}>> & {
    "onUpdate:modelValue"?: ((_value: number) => any) | undefined;
}, {
    modelValue: number;
}, {}>;
export default _default;
