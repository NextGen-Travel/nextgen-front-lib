"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleProvider = void 0;
const Yup = __importStar(require("yup"));
const error_1 = require("../../error");
const exception = error_1.serviceException.checkout('validate');
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
class RuleProvider {
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
exports.RuleProvider = RuleProvider;
