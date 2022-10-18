import VueI18n, { I18nOptions } from 'vue-i18n'
import { text } from 'power-helper'
import { VarParameters } from 'power-helper/types/string'
import { serviceException } from '../core/error'

const exception = serviceException.checkout('i18n-plus')

export class VueI18nPlus<Keys extends string> {
    vueI18n!: VueI18n
    namespace!: string
    rawParams!: I18nOptions

    static get VueI18n() {
        return VueI18n
    }

    static get install() {
        return VueI18n.install
    }

    async setup(namespace: string, params: I18nOptions) {
        this.vueI18n = new VueI18n(params)
        this.rawParams = params
        this.namespace = namespace
        if (this.rawParams.messages && this.rawParams.messages[this.vueI18n.locale][this.namespace] == null) {
            throw exception.create(`I18n plus need defined "${namespace}" namespace message.`)
        }
    }

    /**
     * 強化版本的 $t，可以讓 Typescript 協助判定是否定義過 key 與自動偵測變數，也可以透過 ## 前綴符號進行暫時定義。
     * @example 
     * i18n.tt('hello {N}', { N: 'dave' })
     * // 如果尚未定義，也可以透過 ## 前綴暫時不檢查
     * i18n.tt('## hello {N}', { N: 'dave' })
     */

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
            return this.vueI18n.t(`${this.namespace}.${key}`, ...vars).toString()
        } else {
            return key
        }
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
                return this.vueI18n.t(`${this.namespace}.${key}`, locale, ...vars).toString()
            } else {
                return key
            }
        }
    }
}
