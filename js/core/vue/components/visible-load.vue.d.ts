declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}, {
    hook: (cb: () => Promise<any>) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    inited: (_hook: (_cb: () => Promise<any>) => void) => true;
    error: (_params: {
        error: any;
        message: string;
    }) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}>> & {
    onError?: ((_params: {
        error: any;
        message: string;
    }) => any) | undefined;
    onInited?: ((_hook: (_cb: () => Promise<any>) => void) => any) | undefined;
}, {
    disabled: boolean;
}, {}>, {
    loading?(_: {}): any;
    error?(_: {
        error: any;
        message: string;
    }): any;
    default?(_: {
        loading: boolean;
        error: any;
        message: string;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
