import * as Yup from 'yup';
import type { AnySchema } from 'yup';
type Rule = {
    required: boolean;
    handler: (_params: GetParams, _value: any) => string | true;
};
type GetParams = {
    required?: boolean;
};
declare class Validation<T extends Record<string, Rule>> {
    private provider;
    private properties;
    constructor(provider: RuleProvider<any>, properties: T);
    get<K extends keyof T>(name: K, options?: GetParams): (_value: any) => string | true;
    isRequire<K extends keyof T>(name: K): boolean;
    verify(model: any): string | true;
    verifyBy<K extends keyof T>(name: K, value: any): string | true;
}
type ProviderOptions = {
    rules: Record<string, DefineRule>;
    requireMessage: () => string;
};
type DefineRule = {
    requireMessage?: () => string;
    handler: (_yup: typeof Yup, _options: any) => AnySchema;
};
export declare class RuleProvider<T extends ProviderOptions> {
    readonly options: ProviderOptions;
    constructor(options: T);
    getRule<K extends keyof T['rules'], M = Parameters<T['rules'][K]['handler']>[1]>(name: K, required: boolean, ...meta: M extends undefined ? [] : [M]): Rule;
    customize(rule: DefineRule & {
        required: boolean;
    }): {
        required: boolean;
        handler: (params: GetParams, value: any) => string | true;
    };
    defineValidation<T extends (_rule: this['getRule'], _customize: this['customize']) => Record<string, ReturnType<this['getRule']>>>(cb: T): Validation<ReturnType<T>>;
}
export {};
