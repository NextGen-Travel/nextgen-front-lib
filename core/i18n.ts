import { I18n } from 'power-helper'
import { Locales } from './locales'

const flatObj = (data: Record<string, any>) => {
    let output: any = {}
    for (let key in data) {
        output[`ng.${key}`] = data[key]
    }
    return output
}

export const i18n = new I18n<'en' | 'zh', `ng.${keyof typeof Locales['zh']}`>({
    def: 'en',
    locales: {
        en: flatObj(Locales['en']),
        zh: flatObj(Locales['zh'])
    }
})
