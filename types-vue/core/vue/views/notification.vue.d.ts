import { MessageType } from './store/notification';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, {
    default?(_: {
        message: {
            id: string;
            type: MessageType;
            stopped: boolean;
            content: string;
            duration: number;
        };
        color: string | undefined;
        close: () => void;
        stop: () => void;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
