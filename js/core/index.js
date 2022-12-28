"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextgenLib = exports.t = exports.Locales = exports.useLibEnv = exports.useLibOptions = void 0;
const i18n_1 = require("./i18n");
const text_1 = require("../utils/text");
const img_vue_1 = __importDefault(require("../vue/components/img.vue"));
const form_vue_1 = __importDefault(require("../vue/components/form.vue"));
const app_vue_1 = __importDefault(require("../vue/views/app.vue"));
const table_vue_1 = __importDefault(require("../vue/components/table.vue"));
const dialog_vue_1 = __importDefault(require("../vue/components/dialog.vue"));
const upload_vue_1 = __importDefault(require("../vue/components/upload.vue"));
const loaders_vue_1 = __importDefault(require("../vue/components/loaders.vue"));
const toolbar_vue_1 = __importDefault(require("../vue/components/toolbar.vue"));
const fixed_bar_vue_1 = __importDefault(require("../vue/components/fixed-bar.vue"));
const pagination_vue_1 = __importDefault(require("../vue/components/pagination.vue"));
const outline_text_vue_1 = __importDefault(require("../vue/components/outline-text.vue"));
const locales_1 = __importDefault(require("./locales"));
window.__ng_config = {
    libOptions: {
        lang: 'en',
        staticUrl: '',
        notFoundImage: ''
    },
    libEnv: {
        version: 1,
        stage: '',
        service: '',
    }
};
const useLibOptions = () => window.__ng_config.libOptions;
exports.useLibOptions = useLibOptions;
const useLibEnv = () => window.__ng_config.libEnv;
exports.useLibEnv = useLibEnv;
exports.Locales = locales_1.default;
const t = (key) => i18n_1.i18n.key(key).get(window.__ng_config.libOptions.lang);
exports.t = t;
exports.NextgenLib = {
    install(vue, params) {
        for (let key in params.options) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.__ng_config.libOptions[key] = params.options[key];
        }
        for (let key in params.env) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.__ng_config.libEnv[key] = params.env[key];
        }
        const addComponent = (name, component) => {
            vue.component(`ng-${name}`, component);
            vue.component(`Ng${(0, text_1.toHump)(name)}`, component);
        };
        addComponent('app', app_vue_1.default);
        addComponent('img', img_vue_1.default);
        addComponent('form', form_vue_1.default);
        addComponent('table', table_vue_1.default);
        addComponent('dialog', dialog_vue_1.default);
        addComponent('upload', upload_vue_1.default);
        addComponent('loaders', loaders_vue_1.default);
        addComponent('toolbar', toolbar_vue_1.default);
        addComponent('fixed-bar', fixed_bar_vue_1.default);
        addComponent('pagination', pagination_vue_1.default);
        addComponent('outline-text', outline_text_vue_1.default);
    }
};
exports.default = exports.NextgenLib;
