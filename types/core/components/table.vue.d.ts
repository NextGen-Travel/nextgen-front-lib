import { PropType } from 'vue';
type Field = {
    key: string;
    label: () => string;
    style: (_value: any, _key: string, _item: any, _index: number) => string;
    sortBtn: boolean;
    textAlign: 'start' | 'center' | 'end';
    formatter: (..._args: any[]) => any;
    optionShow: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    height: {
        type: StringConstructor;
        required: false;
        default: () => undefined;
    };
    sorts: {
        type: PropType<Record<string, any>>;
        required: false;
        default: () => {};
    };
    sortUpValue: {
        type: PropType<any>;
        required: false;
        default: () => boolean;
    };
    sortDownValue: {
        type: PropType<any>;
        required: false;
        default: () => boolean;
    };
    elevation: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
    fixedHeader: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    headerColor: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    textNowrap: {
        type: PropType<"body" | "head" | "all" | "none">;
        required: false;
        default: () => string;
    };
    rowStyle: {
        type: PropType<(_item: any, _index: number) => string>;
        required: false;
        default: () => () => "";
    };
    filterMemory: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    filterShow: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    filterTitle: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    fields: {
        required: true;
        type: PropType<Field[]>;
    };
    items: {
        required: true;
        type: PropType<any[]>;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click-item": (_item: any) => void;
    "click-sort": (_key: string, _value: any) => void;
    "update:sorts": (_status: Record<string, any>) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: StringConstructor;
        required: false;
        default: () => undefined;
    };
    sorts: {
        type: PropType<Record<string, any>>;
        required: false;
        default: () => {};
    };
    sortUpValue: {
        type: PropType<any>;
        required: false;
        default: () => boolean;
    };
    sortDownValue: {
        type: PropType<any>;
        required: false;
        default: () => boolean;
    };
    elevation: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
    fixedHeader: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    headerColor: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    textNowrap: {
        type: PropType<"body" | "head" | "all" | "none">;
        required: false;
        default: () => string;
    };
    rowStyle: {
        type: PropType<(_item: any, _index: number) => string>;
        required: false;
        default: () => () => "";
    };
    filterMemory: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    filterShow: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    filterTitle: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    fields: {
        required: true;
        type: PropType<Field[]>;
    };
    items: {
        required: true;
        type: PropType<any[]>;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}>> & {
    "onClick-item"?: ((_item: any) => any) | undefined;
    "onClick-sort"?: ((_key: string, _value: any) => any) | undefined;
    "onUpdate:sorts"?: ((_status: Record<string, any>) => any) | undefined;
}, {
    height: string;
    loading: boolean;
    elevation: number;
    sorts: Record<string, any>;
    sortUpValue: any;
    sortDownValue: any;
    fixedHeader: boolean;
    headerColor: string;
    textNowrap: "body" | "head" | "all" | "none";
    rowStyle: (_item: any, _index: number) => string;
    filterMemory: string;
    filterShow: boolean;
    filterTitle: string;
}, {}>, Partial<Record<string, (_: {
    field: Field;
    item: null;
    value: string;
}) => any>> & Partial<Record<string, (_: {
    item: any;
    field: Field;
    value: any;
}) => any>> & {
    details?(_: {
        class: string;
        item: any;
    }): any;
    end?(_: {}): any;
    "no-data"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
