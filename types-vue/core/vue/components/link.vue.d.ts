declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    to: {
        type: ObjectConstructor;
        required: true;
    };
    target: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    to: {
        type: ObjectConstructor;
        required: true;
    };
    target: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    target: string;
    disabled: boolean;
    inline: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
