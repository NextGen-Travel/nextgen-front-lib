declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    fontColor: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    outlineColor: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    outlineWeight: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    fontColor: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    outlineColor: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    outlineWeight: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
}>>, {
    outlineColor: string;
    disabled: boolean;
    fontColor: string;
    outlineWeight: number;
}, {}>;
export default _default;
