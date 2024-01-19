import { PropType } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    searchValue: {
        type: StringConstructor;
        required: true;
    };
    items: {
        type: PropType<(string | Record<string, any>)[]>;
        required: false;
        default: () => never[];
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    itemTitle: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    selected: (_item: any) => void;
    closed: () => void;
    changed: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    searchValue: {
        type: StringConstructor;
        required: true;
    };
    items: {
        type: PropType<(string | Record<string, any>)[]>;
        required: false;
        default: () => never[];
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    itemTitle: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
}>> & {
    onSelected?: ((_item: any) => any) | undefined;
    onClosed?: (() => any) | undefined;
    onChanged?: (() => any) | undefined;
}, {
    loading: boolean;
    items: (string | Record<string, any>)[];
    itemTitle: string;
}, {}>, {
    default?(_: {}): any;
    loading?(_: {}): any;
    list?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
