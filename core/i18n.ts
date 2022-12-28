import Locales from './locales'
import { I18n } from 'power-helper'

export const i18n = new I18n<'en' | 'zh', keyof typeof Locales['zh']>({
    def: 'en',
    locales: {
        'en': Locales['en'],
        'zh': Locales['zh']
    }
})
