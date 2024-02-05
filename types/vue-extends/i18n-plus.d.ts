import { TString } from 'power-helper';
export declare class I18nPlus<Keys extends string> {
    vueI18n: import('vue-i18n').I18n;
    namespace: string;
    constructor(params: {
        vueI18n: import('vue-i18n').I18n;
        namespace: string;
    });
    get t(): (_key: string, _value1?: any, _value2?: any) => string;
    tt<T extends Keys | `##${string}`, V extends TString.VarParameters<'{', '}', T extends string ? T : ''>>(key: T, ...vars: T extends `${string}{${string}}${string}` ? [V] : any[]): string;
    path<T extends Keys>(key: T): string;
    export<T extends Keys | `##${string}`>(locale: string): <K extends T>(_key: K, ..._vars: K extends `${string}{${string}}${string}` ? [TString.VarParameters<'{', '}', K>] : any[]) => string;
}
