import { PropType } from 'vue';
export type PieChartItem = {
    value: number;
    color?: string;
    label: () => string;
};
declare const _default: import("vue").DefineComponent<{
    items: {
        required: true;
        type: PropType<PieChartItem[]>;
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
    items: {
        required: true;
        type: PropType<PieChartItem[]>;
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
