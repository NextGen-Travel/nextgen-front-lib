import { PropType } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    app: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    dark: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    color: {
        type: StringConstructor;
        required: false;
        default: () => undefined;
    };
    elevation: {
        type: NumberConstructor;
        required: false;
        default: () => undefined;
    };
    hideSpace: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    position: {
        type: PropType<"bottom" | "top">;
        required: false;
        default: () => string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    app: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    dark: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    color: {
        type: StringConstructor;
        required: false;
        default: () => undefined;
    };
    elevation: {
        type: NumberConstructor;
        required: false;
        default: () => undefined;
    };
    hideSpace: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    position: {
        type: PropType<"bottom" | "top">;
        required: false;
        default: () => string;
    };
}>>, {
    color: string;
    position: "bottom" | "top";
    elevation: number;
    app: boolean;
    dark: boolean;
    hideSpace: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
