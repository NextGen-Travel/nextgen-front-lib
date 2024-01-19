import { text } from 'power-helper'
import { VarParameters } from 'power-helper/types/string'

export class I18nPlus<Keys extends string> {
    vueI18n: import('vue-i18n').I18n
    namespace: string

    constructor(params: {
        vueI18n: import('vue-i18n').I18n
        namespace: string
    }) {
        this.vueI18n = params.vueI18n
        this.namespace = params.namespace
    }

    get t() {
        return this.vueI18n.global.t as (_key: string, _value1?: any, _value2?: any) => string
    }

    tt<
        T extends Keys | `##${string}`,
        V extends VarParameters<'{', '}', T extends string ? T : ''>
    >(key: T, ...vars: T extends `${string}{${string}}${string}` ? [V] : any[]) {
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

    export<T extends Keys | `##${string}`>(locale: string): <K extends T>(
        _key: K,
        ..._vars: K extends `${string}{${string}}${string}` ? [VarParameters<'{', '}', K>] : any[]
    ) => string {
        return (key: string, ...vars: any[])=> {
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
