import * as Yup from 'yup';
import { serviceException } from '../../error';
const exception = serviceException.checkout('validate');
// Validation
class Validation {
    properties;
    constructor(properties) {
        this.properties = properties;
    }
    get(name) {
        return this.properties[name].handler;
    }
    isRequire(name) {
        return this.properties[name].required;
    }
    verify(model) {
        for (let key in this.properties) {
            let result = this.get(key)(model[key]);
            if (result !== true) {
                return result;
            }
        }
        return true;
    }
    verifyBy(name, value) {
        return this.get(name)(value);
    }
}
const isEmpty = (value) => {
    if (typeof value === 'string' && value.trim() === '') {
        return true;
    }
    if (value == null) {
        return true;
    }
    return false;
};
export class RuleProvider {
    options = {
        rules: {},
        requireMessage: () => 'required'
    };
    constructor(options) {
        if (options) {
            Object.assign(this.options, options);
        }
    }
    getRule(name, required, ...meta) {
        let rule = this.options.rules[name];
        if (rule == null) {
            throw exception.fail(`Rule ${name} not found.`);
        }
        return {
            required,
            handler: (value) => {
                if (required && isEmpty(value)) {
                    return rule.requireMessage ? rule.requireMessage() : this.options.requireMessage();
                }
                if (required === false && isEmpty(value)) {
                    return true;
                }
                try {
                    rule.handler(Yup, meta).notRequired().validateSync(value);
                }
                catch (error) {
                    return typeof error === 'string' ? error : error.errors[0];
                }
                return true;
            }
        };
    }
    defineValidation(cb) {
        return new Validation(cb(this.getRule.bind(this)));
    }
}
