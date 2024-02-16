import { PropType } from 'vue';
type Display = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'smAndUp' | 'mdAndUp' | 'lgAndUp' | 'xlAndUp' | 'smAndDown' | 'mdAndDown' | 'lgAndDown' | 'xlAndDown';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    skeleton: {
        type: PropType<"auto" | "hide" | "always">;
        required: false;
        default: () => string;
    };
    width: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    loading: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    minWidth: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    maxWidth: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    height: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    minHeight: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    maxHeight: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    radius: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    avatar: {
        type: PropType<boolean>;
        default: () => boolean;
    };
    cover: {
        type: PropType<boolean>;
        default: () => boolean;
    };
    src: {
        type: PropType<string | File | (string | [Display, string])[]>;
        required: false;
        default: () => string;
    };
    block: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    ratio: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    square: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onClick: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    skeleton: {
        type: PropType<"auto" | "hide" | "always">;
        required: false;
        default: () => string;
    };
    width: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    loading: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    minWidth: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    maxWidth: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    height: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    minHeight: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    maxHeight: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    radius: {
        type: PropType<string>;
        required: false;
        default: () => null;
    };
    avatar: {
        type: PropType<boolean>;
        default: () => boolean;
    };
    cover: {
        type: PropType<boolean>;
        default: () => boolean;
    };
    src: {
        type: PropType<string | File | (string | [Display, string])[]>;
        required: false;
        default: () => string;
    };
    block: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    ratio: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    square: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}>> & {
    onOnClick?: (() => any) | undefined;
}, {
    height: string;
    maxHeight: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    width: string;
    block: boolean;
    loading: boolean;
    avatar: boolean;
    skeleton: "auto" | "hide" | "always";
    src: string | File | (string | [Display, string])[];
    square: boolean;
    radius: string;
    cover: boolean;
    ratio: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
