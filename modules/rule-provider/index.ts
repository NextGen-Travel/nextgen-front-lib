import * as Yup from 'yup'
import type { AnySchema } from 'yup'
import { serviceException } from '../../core/error'

const exception = serviceException.checkout('validate')

type Rule = {
    required: boolean
    handler: (_value: any) => string | true
}

// Validation

class Validation<T extends Record<string, Rule>> {
    private properties: T
    constructor(properties: T) {
        this.properties = properties
    }

    get<K extends keyof T>(name: K) {
        return this.properties[name].handler
    }

    isRequire<K extends keyof T>(name: K) {
        return this.properties[name].required
    }

    verify(model: any) {
        for (let key in this.properties) {
            let result = this.get(key)(model[key])
            if (result !== true) {
                return result
            }
        }
        return true
    }

    verifyBy<K extends keyof T>(name: K, value: any) {
        return this.get(name)(value)
    }
}

// Provider

type ProviderOptions = {
    rules: Record<string, DefineRule>
    requireMessage: () => string
}

type DefineRule = {
    requireMessage?: () => string,
    handler: (_yup: typeof Yup, _options: any) => AnySchema
}

const isEmpty = (value: any) => {
    if (typeof value === 'string' && value.trim() === '') {
        return true
    }
    if (value == null) {
        return true
    }
    return false
}

export class RuleProvider<T extends ProviderOptions> {
    readonly options: ProviderOptions = {
        rules: {},
        requireMessage: () => 'required'
    }
    constructor(options: T) {
        if (options) {
            Object.assign(this.options, options)
        }
    }

    getRule<
        K extends keyof T['rules'],
        M = Parameters<T['rules'][K]['handler']>[1]
    >(
        name: K,
        required: boolean,
        ...meta: M extends undefined ? [] : [M]
    ): Rule {
        let rule = this.options.rules[name as string]
        if (rule == null) {
            throw exception.fail(`Rule ${name as string} not found.`)
        }
        return {
            required,
            handler: (value: any): true | string => {
                if (required && isEmpty(value)) {
                    return rule.requireMessage ? rule.requireMessage() : this.options.requireMessage()
                }
                if (required === false && isEmpty(value)) {
                    return true
                }
                try {
                    rule.handler(Yup, meta).notRequired().validateSync(value)
                } catch (error: any) {
                    return typeof error === 'string' ? error : error.errors[0]
                }
                return true
            }
        }
    }

    defineValidation<
        T extends (_rule: this['getRule']) => Record<
            string,
            ReturnType<this['getRule']>
        >
    >(cb: T): Validation<ReturnType<T>> {
        return new Validation(cb(this.getRule.bind(this))) as any
    }
}
