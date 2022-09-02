var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "vue-i18n", "power-helper", "../error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VueI18nPlus = void 0;
    const vue_i18n_1 = __importDefault(require("vue-i18n"));
    const power_helper_1 = require("power-helper");
    const error_1 = require("../error");
    const exception = error_1.serviceException.checkout('i18n-plus');
    class VueI18nPlus {
        vueI18n;
        namespace;
        rawParams;
        static get VueI18n() {
            return vue_i18n_1.default;
        }
        static get install() {
            return vue_i18n_1.default.install;
        }
        async setup(namespace, params) {
            this.vueI18n = new vue_i18n_1.default(params);
            this.rawParams = params;
            this.namespace = namespace;
            if (this.rawParams.messages && this.rawParams.messages[this.vueI18n.locale][this.namespace] == null) {
                throw exception.fail(`I18n plus need defined "${namespace}" namespace message.`);
            }
        }
        tt(key, params) {
            if (key.slice(0, 2) === '##') {
                return power_helper_1.text.replaceVar({
                    end: '}',
                    start: '{',
                    text: key.slice(2).trim(),
                    vars: params
                });
            }
            if (this.vueI18n) {
                return this.vueI18n.t(`${this.namespace}.${key}`, params).toString();
            }
            else {
                return key;
            }
        }
        export() {
            return this.tt.bind(this);
        }
    }
    exports.VueI18nPlus = VueI18nPlus;
});
