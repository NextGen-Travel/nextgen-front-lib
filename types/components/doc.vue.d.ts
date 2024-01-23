import 'highlight.js/styles/github.css';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    content: {
        type: StringConstructor;
        required: true;
    };
    langRender: {
        type: PropType<(_code: string, _lang: string) => string>;
        required: false;
        default: null;
    };
    mode: {
        type: PropType<"html" | "text" | "markdown">;
        required: false;
        default: () => string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        required: true;
    };
    langRender: {
        type: PropType<(_code: string, _lang: string) => string>;
        required: false;
        default: null;
    };
    mode: {
        type: PropType<"html" | "text" | "markdown">;
        required: false;
        default: () => string;
    };
}>>, {
    mode: "html" | "text" | "markdown";
    langRender: (_code: string, _lang: string) => string;
}, {}>;
export default _default;
