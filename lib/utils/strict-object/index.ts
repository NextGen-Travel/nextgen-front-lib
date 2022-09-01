import { pick } from 'power-helper'
import { DeepReadonly } from 'power-helper/types/record'
import { serviceException } from '../../error'

type Params = {
    [key: string]: [typeof String | typeof Boolean | typeof Number, boolean, unknown]
}

const exception = serviceException.checkout('StrictObject')
const keyFail = (key: string) => exception.fail(`Attr ${key} Fail!`)

export const createStrictObject = <T extends Params>(envs: T): DeepReadonly<{
    [key in keyof T]:
        T[key][0] extends typeof String ? string : (
            T[key][0] extends typeof Number ? number : (
                T[key][0] extends typeof Boolean ? boolean : unknown
            )
        )
}> => {
    let output = {} as any
    for (let key in envs) {
        let [type, required, value] = envs[key]
        let valueType = pick.getType(value)
        let outputValue: any = value
        if (valueType === 'empty') {
            if (required) {
                throw keyFail(key)
            }
        }
        if (type === String) {
            if (valueType !== 'string') {
                throw keyFail(key)
            }
            if (required && outputValue.trim() === '') {
                throw keyFail(key)
            }
        }
        if (type === Number) {
            if (valueType !== 'number' && valueType !== 'string') {
                throw keyFail(key)
            }
            if (valueType === 'string') {
                outputValue = Number(outputValue.trim())
            }
            if (isNaN(outputValue)) {
                throw keyFail(key)
            }
        }
        if (type === Boolean) {
            if (valueType === 'string') {
                outputValue = outputValue.trim()
                if (outputValue !== 'true' && outputValue !== 'false') {
                    throw keyFail(key)
                } else {
                    outputValue = outputValue === 'true'
                }
            }
            if (outputValue !== true && outputValue !== false) {
                throw keyFail(key)
            }
        }
        output[key] = outputValue
    }
    return Object.freeze(output)
}
