import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    alwaysShow: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    color: {
        type: PropType<string>;
        required: false;
        default: () => string;
    };
    total: {
        type: PropType<number>;
        required: false;
        default: () => number;
    };
    prePage: {
        type: PropType<number>;
        required: false;
        default: () => number;
    };
    modelValue: {
        type: PropType<number>;
        required: false;
        default: () => number;
    };
    loading: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    scrollTo: {
        type: PropType<HTMLElement | "top">;
        required: false;
        default: () => null;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (_value: number) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    alwaysShow: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    color: {
        type: PropType<string>;
        required: false;
        default: () => string;
    };
    total: {
        type: PropType<number>;
        required: false;
        default: () => number;
    };
    prePage: {
        type: PropType<number>;
        required: false;
        default: () => number;
    };
    modelValue: {
        type: PropType<number>;
        required: false;
        default: () => number;
    };
    loading: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    scrollTo: {
        type: PropType<HTMLElement | "top">;
        required: false;
        default: () => null;
    };
}>> & {
    "onUpdate:modelValue"?: ((_value: number) => any) | undefined;
}, {
    color: string;
    modelValue: number;
    loading: boolean;
    scrollTo: HTMLElement | "top";
    alwaysShow: boolean;
    total: number;
    prePage: number;
}, {}>;
export default _default;
