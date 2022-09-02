import VueI18n, { I18nOptions } from 'vue-i18n';
import { VarParameters } from 'power-helper/types/string';
export declare class VueI18nPlus<Keys extends string> {
    i18n: VueI18n;
    namespace: string;
    rawParams: I18nOptions;
    static get VueI18n(): typeof VueI18n;
    static get install(): import("vue").PluginFunction<VueI18n.PluignOptions>;
    setup(namespace: string, params: I18nOptions): Promise<void>;
    tt<T extends Keys | `##${string}`>(key: T, params?: VarParameters<'{', '}', T>): string;
    exportApi(): <T extends Keys | `##${string}`>(key: T, params?: VarParameters<"{", "}", T> | undefined) => string;
}
