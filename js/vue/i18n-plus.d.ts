import { VarParameters } from 'power-helper/types/string';
import { I18n, I18nOptions } from 'vue-i18n';
export declare class VueI18nPlus<Keys extends string> {
    vueI18n: I18n;
    namespace: string;
    rawParams: I18nOptions;
    setup(namespace: string, params: I18nOptions): Promise<void>;
    get t(): (_key: string, _value1?: any, _value2?: any) => string;
    tt<T extends Keys | `##${string}`, V extends VarParameters<'{', '}', T extends string ? T : ''>>(key: T, ...vars: V extends Record<string, never> ? any[] : [V]): string;
    path<T extends Keys>(key: T): string;
    export(locale: string): <T extends Keys | `##${string}`, V extends VarParameters<"{", "}", T extends string ? T : "">>(key: T, ...vars: V extends Record<string, never> ? any[] : [V]) => string;
}
