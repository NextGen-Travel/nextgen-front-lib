import { PropType } from 'vue';
export type PieChartItem = {
    value: number;
    label: () => string;
};
declare const _default: import("vue").DefineComponent<{
    items: {
        required: true;
        type: PropType<PieChartItem[]>;
    };
    colors: {
        required: false;
        type: PropType<string[]>;
        default: null;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        required: true;
        type: PropType<PieChartItem[]>;
    };
    colors: {
        required: false;
        type: PropType<string[]>;
        default: null;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    height: number;
    width: number;
    colors: string[];
}, {}>;
export default _default;
