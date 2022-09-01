import VueI18n, { I18nOptions } from 'vue-i18n';
import { VarParameters } from 'power-helper/types/string';
export declare class VueI18nPlus<Keys extends string> extends VueI18n {
    namespace: string;
    rawParams: I18nOptions;
    static get VueI18n(): typeof VueI18n;
    constructor(namespace: string, params: I18nOptions);
    tt<T extends Keys | `##${string}`>(key: T, params?: VarParameters<'{', '}', T>): string;
}
