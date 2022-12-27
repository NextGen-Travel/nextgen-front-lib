"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueI18nPlus = void 0;
const power_helper_1 = require("power-helper");
const error_1 = require("../core/error");
const vue_i18n_1 = require("vue-i18n");
const exception = error_1.serviceException.checkout('i18n-plus');
class VueI18nPlus {
    vueI18n;
    namespace;
    rawParams;
    async setup(namespace, params) {
        this.vueI18n = (0, vue_i18n_1.createI18n)(params);
        this.rawParams = params;
        this.namespace = namespace;
        if (params.messages && params.messages?.[params.locale || '']?.[this.namespace] == null) {
            throw exception.create(`I18n plus need defined "${namespace}" namespace message.`);
        }
    }
    get t() {
        return this.vueI18n.global.t;
    }
    tt(key, ...vars) {
        if (key.slice(0, 2) === '##') {
            return power_helper_1.text.replaceVar({
                end: '}',
                start: '{',
                text: key.slice(2).trim(),
                vars: vars[0] || {}
            });
        }
        if (this.vueI18n) {
            return this.t(`${this.namespace}.${key}`, vars[0]);
        }
        else {
            return key;
        }
    }
    path(key) {
        return `${this.namespace}.${key}`;
    }
    export(locale) {
        return (key, ...vars) => {
            if (key.slice(0, 2) === '##') {
                return power_helper_1.text.replaceVar({
                    end: '}',
                    start: '{',
                    text: key.slice(2).trim(),
                    vars: vars[0] || {}
                });
            }
            if (this.vueI18n) {
                return this.t(`${this.namespace}.${key}`, locale, vars[0]).toString();
            }
            else {
                return key;
            }
        };
    }
}
exports.VueI18nPlus = VueI18nPlus;
