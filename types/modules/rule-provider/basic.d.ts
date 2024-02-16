import * as Yup from 'yup';
import { SupportLocale } from './index';
export declare const getBasicRules: (locale: SupportLocale) => {
    readonly text: {
        readonly handler: (yup: typeof Yup, meta?: {
            min?: number;
            max?: number;
        }) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    };
    readonly number: {
        readonly handler: (yup: typeof Yup, meta?: {
            min?: number;
            max?: number;
        }) => Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    };
    readonly enum: {
        readonly handler: (yup: typeof Yup, meta?: {
            keys: string[];
        }) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    };
    readonly email: {
        readonly handler: (yup: typeof Yup) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    };
    readonly url: {
        readonly handler: (yup: typeof Yup) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    };
    readonly path: {
        readonly handler: (yup: typeof Yup) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    };
    readonly english: {
        readonly handler: (yup: typeof Yup) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    };
    readonly excludeSpecialChars: {
        readonly handler: (yup: typeof Yup) => Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    };
};
