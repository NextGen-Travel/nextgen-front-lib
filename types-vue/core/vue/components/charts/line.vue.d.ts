import { PropType } from 'vue';
export type LineChartItem = {
    label: () => string;
    color?: string;
    values: number[];
};
declare const _default: import("vue").DefineComponent<{
    labels: {
        required: true;
        type: PropType<string[]>;
    };
    items: {
        required: true;
        type: PropType<LineChartItem[]>;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    labels: {
        required: true;
        type: PropType<string[]>;
    };
    items: {
        required: true;
        type: PropType<LineChartItem[]>;
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
}, {}>;
export default _default;
