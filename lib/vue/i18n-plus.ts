import VueI18n, { I18nOptions } from 'vue-i18n'
import { text } from 'power-helper'
import { VarParameters } from 'power-helper/types/string'
import { serviceException } from '../error'

const exception = serviceException.checkout('i18n-plus')

export class VueI18nPlus<Keys extends string> extends VueI18n {
    namespace: string
    rawParams: I18nOptions

    static get VueI18n() {
        return VueI18n
    }

    constructor(namespace: string, params: I18nOptions) {
        super(params)
        this.rawParams = params
        this.namespace = namespace
        if (this.rawParams.messages && this.rawParams.messages[this.locale][this.namespace] == null) {
            throw exception.fail(`I18n plus need defined "${namespace}" namespace message.`)
        }
    }

    tt<T extends Keys | `##${string}`>(key: T, params?: VarParameters<'{', '}', T>) {
        if (key.slice(0, 2) === '##') {
            return text.replaceVar({
                end: '}',
                start: '{',
                text: key.slice(2).trim(),
                vars: params as any
            })
        }
        return this.t(`${this.namespace}.${key}`, params).toString()
    }
}
