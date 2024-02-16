import * as Yup from 'yup';
import type { AnySchema } from 'yup';
export type SupportLocale = 'zh-TW' | 'zh-CN' | 'en-US';
type Rule = {
    required: boolean;
    handler: (_params: GetParams, _value: any) => string | true;
};
type GetParams = {
    required?: boolean;
};
declare class Validation<T extends Record<string, Rule>> {
    provider: RuleProvider<any>;
    properties: T;
    constructor(provider: RuleProvider<any>, properties: T);
    get<K extends keyof T>(name: K, options?: GetParams): (_value: any) => string | true;
    isRequire<K extends keyof T>(name: K): boolean;
    verify(model: any): true | string;
    verifyBy<K extends keyof T>(name: K, value: any): true | string;
}
type ProviderOptions = {
    rules: Record<string, DefineRule>;
    requireMessage: () => string;
};
export type DefineRule = {
    requireMessage?: () => string;
    handler: (_yup: typeof Yup, _options: any) => AnySchema;
};
export declare class RuleProvider<T extends ProviderOptions> {
    options: ProviderOptions;
    static getBasicRules(locale?: SupportLocale): {
        readonly text: {
            readonly handler: (yup: typeof Yup, meta?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        readonly number: {
            readonly handler: (yup: typeof Yup, meta?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined) => Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
        };
        readonly enum: {
            readonly handler: (yup: typeof Yup, meta?: {
                keys: string[];
            } | undefined) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        readonly email: {
            readonly handler: (yup: typeof Yup) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        readonly path: {
            readonly handler: (yup: typeof Yup) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        readonly url: {
            readonly handler: (yup: typeof Yup) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        readonly english: {
            readonly handler: (yup: typeof Yup) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        readonly excludeSpecialChars: {
            readonly handler: (yup: typeof Yup) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
    };
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
