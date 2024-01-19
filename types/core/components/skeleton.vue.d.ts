import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    width: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    height: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    avatar: {
        type: PropType<boolean>;
        default: () => boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    height: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    avatar: {
        type: PropType<boolean>;
        default: () => boolean;
    };
}>>, {
    height: string;
    width: string;
    avatar: boolean;
}, {}>;
export default _default;
