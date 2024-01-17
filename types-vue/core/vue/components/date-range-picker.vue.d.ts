import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<"date" | "datetime">;
        required: false;
        default: () => string;
    };
    modelValue: {
        type: PropType<[number | null, number | null]>;
        required: false;
        default: () => [number, number];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (_value: [number | null, number | null]) => true;
    selected: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: PropType<"date" | "datetime">;
        required: false;
        default: () => string;
    };
    modelValue: {
        type: PropType<[number | null, number | null]>;
        required: false;
        default: () => [number, number];
    };
}>> & {
    "onUpdate:modelValue"?: ((_value: [number | null, number | null]) => any) | undefined;
    onSelected?: (() => any) | undefined;
}, {
    mode: "date" | "datetime";
    modelValue: [number | null, number | null];
}, {}>;
export default _default;
