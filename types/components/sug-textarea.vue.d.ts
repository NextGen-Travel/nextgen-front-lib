import { PropType } from 'vue';
type TextareaProps = {
    flat: boolean;
    reverse: boolean;
    variant: 'filled' | 'outlined' | 'plain' | 'underlined' | 'solo' | 'solo-inverted' | 'solo-filled';
    error: boolean;
    active: boolean;
    direction: 'horizontal' | 'vertical';
    style: string;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    density: null | 'default' | 'comfortable' | 'compact';
    clearIcon: string;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: any[];
    hideSpinButtons: boolean;
    persistentHint: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    autoGrow: boolean;
    noResize: boolean;
    rows: string | number;
    id: string;
    name: string;
    color: string;
    loading: string | boolean;
    label: string;
    prefix: string;
    class: any;
    placeholder: string;
    theme: string;
    counter: string | number | true;
    rounded: string | number | boolean;
    modelValue: any;
    bgColor: string;
    prependIcon: string;
    appendIcon: string;
    baseColor: string;
    appendInnerIcon: string;
    prependInnerIcon: string;
    validateOn: 'lazy' | ('input' | 'blur' | 'submit') | 'input lazy' | 'blur lazy' | 'submit lazy' | 'lazy input' | 'lazy blur' | 'lazy submit';
    validationValue: any;
    centerAffix: boolean;
    hint: string;
    hideDetails: boolean | 'auto';
    suffix: string;
    counterValue: ((_value: any) => number);
    modelModifiers: Record<string, boolean>;
    maxRows: string | number;
};
declare const _default: import("vue").DefineComponent<{
    modelValue: PropType<any>;
    autocompleteKey: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    sugTexts: {
        type: PropType<string[]>;
        required: false;
        default: () => never[];
    };
    showActions: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    textareaProps: {
        type: PropType<Partial<TextareaProps>>;
        requreid: boolean;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    getRecommand: (args_0: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: PropType<any>;
    autocompleteKey: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    sugTexts: {
        type: PropType<string[]>;
        required: false;
        default: () => never[];
    };
    showActions: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    textareaProps: {
        type: PropType<Partial<TextareaProps>>;
        requreid: boolean;
        default: () => {};
    };
}>> & {
    onGetRecommand?: ((args_0: string) => any) | undefined;
}, {
    autocompleteKey: string;
    sugTexts: string[];
    showActions: boolean;
    textareaProps: Partial<TextareaProps>;
}, {}>;
export default _default;
