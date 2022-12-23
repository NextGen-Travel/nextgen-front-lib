

import { text } from 'power-helper'
import { VarParameters } from 'power-helper/types/string'
import { serviceException } from '../core/error'
import { I18n, I18nOptions, createI18n } from 'vue-i18n'

const exception = serviceException.checkout('i18n-plus')

export class VueI18nPlus<Keys extends string> {
    vueI18n!: I18n
    namespace!: string
    rawParams!: I18nOptions

    async setup(namespace: string, params: I18nOptions) {
        this.vueI18n = createI18n(params)
        this.rawParams = params
        this.namespace = namespace
        if (params.messages && params.messages?.[params.locale || '']?.[this.namespace] == null) {
            throw exception.create(`I18n plus need defined "${namespace}" namespace message.`)
        }
    }

    get t() {
        return this.vueI18n.global.t as (_key: string, _value1?: any, _value2?: any) => string
    }

    tt<
        T extends Keys | `##${string}`,
        V extends VarParameters<'{', '}', T extends string ? T : ''>
    >(key: T, ...vars: V extends Record<string, never> ? any[] : [V]) {
        if (key.slice(0, 2) === '##') {
            return text.replaceVar({
                end: '}',
                start: '{',
                text: key.slice(2).trim(),
                vars: vars[0] || {}
            })
        }
        if (this.vueI18n) {
            return this.t(`${this.namespace}.${key}`, vars[0])
        } else {
            return key
        }
    }

    path<T extends Keys>(key: T) {
        return `${this.namespace}.${key}`
    }

    export(locale: string) {
        return <
            T extends Keys | `##${string}`,
            V extends VarParameters<'{', '}', T extends string ? T : ''>
        >(key: T, ...vars: V extends Record<string, never> ? any[] : [V]) => {
            if (key.slice(0, 2) === '##') {
                return text.replaceVar({
                    end: '}',
                    start: '{',
                    text: key.slice(2).trim(),
                    vars: vars[0] || {}
                })
            }
            if (this.vueI18n) {
                return this.t(`${this.namespace}.${key}`, locale, vars[0]).toString()
            } else {
                return key
            }
        }
    }
}
