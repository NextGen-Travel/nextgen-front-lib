"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const ruleProvider = new index_1.RuleProvider({
    mode: 'array-format',
    requireMessage: () => 'ouo',
    rules: {
        text: {
            handler: (yup, meta) => {
                let schema = yup.string();
                if (meta && meta.min != null) {
                    schema = schema.min(meta.min);
                }
                if (meta && meta.max != null) {
                    schema = schema.max(meta.max);
                }
                return schema;
            }
        },
        number: {
            handler: (yup, meta) => {
                let schema = yup.number();
                if (meta && meta.min != null) {
                    schema = schema.min(meta.min);
                }
                if (meta && meta.max != null) {
                    schema = schema.max(meta.max);
                }
                return schema.typeError('必須為數字');
            }
        }
    }
});
const validate = ruleProvider.defineValidation(rule => {
    return {
        name: rule('text', false, { max: 1 })
    };
});
validate.get('name');
validate.verifyBy('name', '123');
