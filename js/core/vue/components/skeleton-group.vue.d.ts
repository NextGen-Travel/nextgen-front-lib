import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    mobile: {
        type: PropType<number[][]>;
        required: false;
        default: () => null;
    };
    desktop: {
        type: PropType<number[][]>;
        required: true;
        default: () => never[];
    };
    height: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mobile: {
        type: PropType<number[][]>;
        required: false;
        default: () => null;
    };
    desktop: {
        type: PropType<number[][]>;
        required: true;
        default: () => never[];
    };
    height: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
}>>, {
    height: number;
    mobile: number[][];
    desktop: number[][];
}, {}>;
export default _default;
