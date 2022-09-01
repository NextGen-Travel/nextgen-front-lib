import * as Yup from 'yup';
import type { AnySchema } from 'yup';
declare type Rule = {
    required: boolean;
    handler: (_value: any) => string | true;
};
declare class Validation<T extends Record<string, Rule>> {
    private properties;
    constructor(properties: T);
    get<K extends keyof T>(name: K): (_value: any) => string | true;
    isRequire<K extends keyof T>(name: K): boolean;
    verify(model: any): string | true;
    verifyBy<K extends keyof T>(name: K, value: any): string | true;
}
declare type ProviderOptions = {
    rules: Record<string, DefineRule>;
    requireMessage: () => string;
};
declare type DefineRule = {
    requireMessage?: () => string;
    handler: (_yup: typeof Yup, _options: any) => AnySchema;
};
export declare class RuleProvider<T extends ProviderOptions> {
    readonly options: ProviderOptions;
    constructor(options: T);
    getRule<K extends keyof T['rules'], M = Parameters<T['rules'][K]['handler']>[1]>(name: K, required: boolean, ...meta: M extends undefined ? [] : [M]): Rule;
    defineValidation<T extends (_rule: this['getRule']) => Record<string, ReturnType<this['getRule']>>>(cb: T): Validation<ReturnType<T>>;
}
export {};
