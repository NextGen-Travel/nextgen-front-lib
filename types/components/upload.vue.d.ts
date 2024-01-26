import { PropType } from 'vue';
export type OutputFile = {
    url: string | ArrayBuffer | null;
    file: File;
};
export type UploadData = {
    files: OutputFile[];
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
    loading: boolean;
    multiple: boolean;
    fileType: string;
    preupload: (_file: File) => Promise<File>;
}, {}>, {
    default?(_: {}): any;
    loading?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
