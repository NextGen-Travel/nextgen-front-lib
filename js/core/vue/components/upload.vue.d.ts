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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    uploaded: (params: {
        files: OutputFile[];
    }) => {
        files: OutputFile[];
    };
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onUploaded?: ((params: {
        files: OutputFile[];
    }) => any) | undefined;
}, {
    loading: boolean;
    multiple: boolean;
    fileType: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
