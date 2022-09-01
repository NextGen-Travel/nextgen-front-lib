"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStrictObject = void 0;
const power_helper_1 = require("power-helper");
const error_1 = require("../error");
const exception = error_1.serviceException.checkout('StrictObject');
const keyFail = (key) => exception.fail(`Attr ${key} Fail!`);
const createStrictObject = (envs) => {
    let output = {};
    for (let key in envs) {
        let [type, required, value] = envs[key];
        let valueType = power_helper_1.pick.getType(value);
        let outputValue = value;
        if (valueType === 'empty') {
            if (required) {
                throw keyFail(key);
            }
        }
        if (type === String) {
            if (valueType !== 'string') {
                throw keyFail(key);
            }
            if (required && outputValue.trim() === '') {
                throw keyFail(key);
            }
        }
        if (type === Number) {
            if (valueType !== 'number' && valueType !== 'string') {
                throw keyFail(key);
            }
            if (valueType === 'string') {
                outputValue = Number(outputValue.trim());
            }
            if (isNaN(outputValue)) {
                throw keyFail(key);
            }
        }
        if (type === Boolean) {
            if (valueType === 'string') {
                outputValue = outputValue.trim();
                if (outputValue !== 'true' && outputValue !== 'false') {
                    throw keyFail(key);
                }
                else {
                    outputValue = outputValue === 'true';
                }
            }
            if (outputValue !== true && outputValue !== false) {
                throw keyFail(key);
            }
        }
        output[key] = outputValue;
    }
    return Object.freeze(output);
};
exports.createStrictObject = createStrictObject;
