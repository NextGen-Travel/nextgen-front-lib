import { pick } from 'power-helper';
import { serviceException } from '../error';
const exception = serviceException.checkout('StrictObject');
const keyFail = (key) => exception.fail(`Attr ${key} Fail!`);
export const createStrictObject = (envs) => {
    let output = {};
    for (let key in envs) {
        let [type, required, value] = envs[key];
        let valueType = pick.getType(value);
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
