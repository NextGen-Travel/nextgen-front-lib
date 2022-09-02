import VueI18n from 'vue-i18n';
import { text } from 'power-helper';
import { serviceException } from '../error';
const exception = serviceException.checkout('i18n-plus');
export class VueI18nPlus {
    vueI18n;
    namespace;
    rawParams;
    static get VueI18n() {
        return VueI18n;
    }
    static get install() {
        return VueI18n.install;
    }
    async setup(namespace, params) {
        this.vueI18n = new VueI18n(params);
        this.rawParams = params;
        this.namespace = namespace;
        if (this.rawParams.messages && this.rawParams.messages[this.vueI18n.locale][this.namespace] == null) {
            throw exception.fail(`I18n plus need defined "${namespace}" namespace message.`);
        }
    }
    tt(key, params) {
        if (key.slice(0, 2) === '##') {
            return text.replaceVar({
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
