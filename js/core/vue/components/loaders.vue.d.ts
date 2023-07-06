import { Loader } from 'power-helper';
import { PropType } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    autoStart: {
        required: false;
        type: BooleanConstructor;
        default: () => boolean;
    };
    items: {
        required: true;
        type: PropType<Loader<any>[]>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    autoStart: {
        required: false;
        type: BooleanConstructor;
        default: () => boolean;
    };
    items: {
        required: true;
        type: PropType<Loader<any>[]>;
    };
}>>, {
    autoStart: boolean;
}, {}>, {
    default?(_: {
        errorName: string;
        loading: boolean;
        error: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
