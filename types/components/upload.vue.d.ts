import { PropType } from 'vue';
export type OutputFile = {
    url: string | ArrayBuffer | null;
    file: File;
};
export type UploadData = {
    files: OutputFile[];
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: PropType<any>;
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    enabledDrag: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    loading: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    multiple: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    fileType: {
        type: PropType<string>;
        required: false;
        default: () => string;
    };
    preupload: {
        type: PropType<(_file: File) => Promise<File>>;
        required: false;
        default: null;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (args_0: Error) => void;
    uploaded: (args_0: {
        files: OutputFile[];
    }) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: PropType<any>;
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    enabledDrag: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    loading: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    multiple: {
        type: PropType<boolean>;
        required: false;
        default: () => boolean;
    };
    fileType: {
        type: PropType<string>;
        required: false;
        default: () => string;
    };
    preupload: {
        type: PropType<(_file: File) => Promise<File>>;
        required: false;
        default: null;
    };
}>> & {
    onError?: ((args_0: Error) => any) | undefined;
    onUploaded?: ((args_0: {
        files: OutputFile[];
    }) => any) | undefined;
}, {
    disabled: boolean;
    loading: boolean;
    multiple: boolean;
    enabledDrag: boolean;
    fileType: string;
    preupload: (_file: File) => Promise<File>;
}, {}>, {
    default?(_: {
        draging: boolean;
        reading: boolean;
    }): any;
    loading?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
