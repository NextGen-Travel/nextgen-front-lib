import { I18n } from 'power-helper'
import { Locales } from '../../i18n'
import { DefineRule } from './index'

const zhTW = {
    '只能為英文': '只能為英文',
    '必須為數字': '必須為數字',
    '必須為網址': '必須為網址',
    '不能含特殊字元': '不能含特殊字元',
    '必須為電子郵件': '必須為電子郵件'
}

const i18n = new I18n<Locales, keyof typeof zhTW>({
    def: 'zh-TW',
    locales: {
        'zh-TW': zhTW,
        'zh-CN': {
            '只能為英文': '只能为英文',
            '必須為數字': '必须为数字',
            '必須為網址': '必须为网址',
            '不能含特殊字元': '不能含特殊字元',
            '必須為電子郵件': '必须为电子邮件'
        },
        'en-US': {
            '只能為英文': 'Only English',
            '必須為數字': 'Must be a number',
            '必須為網址': 'Must be a URL',
            '不能含特殊字元': 'Cannot contain special characters',
            '必須為電子郵件': 'Must be an email'
        }
    }
})

const t = (key: keyof typeof zhTW) => i18n.key(key).get(window.__ng_config.libOptions.lang)

export const BasicRules = {
    text: {
        handler: (yup, meta?: { min?: number, max?: number }) => {
            let schema = yup.string()
            if (meta && meta.min != null) {
                schema = schema.min(meta.min)
            }
            if (meta && meta.max != null) {
                schema = schema.max(meta.max)
            }
            return schema
        }
    } as DefineRule,
    number: {
        handler: (yup, meta?: { min?: number, max?: number }) => {
            let schema = yup.number()
            if (meta && meta.min != null) {
                schema = schema.min(meta.min)
            }
            if (meta && meta.max != null) {
                schema = schema.max(meta.max)
            }
            return schema.typeError(t('必須為數字'))
        }
    } as DefineRule,
    enum: {
        handler: (yup, meta?: { keys: string[] }) => {
            return yup.string().oneOf(meta?.keys || [])
        }
    } as DefineRule,
    email: {
        handler: (yup) => {
            return yup.string().trim().email(t('必須為電子郵件'))
        }
    } as DefineRule,
    url: {
        handler: (yup) => {
            return yup.string().trim().url(t('必須為網址'))
        }
    } as DefineRule,
    english: {
        handler: (yup) => {
            return yup.string().trim().matches(/^[^\u4e00-\u9eff]+$/, t('只能為英文'))
        }
    } as DefineRule,
    excludeSpecialChars: {
        handler: (yup) => {
            return yup.string().matches(/^[^()[\]{}<>+*/?"_\\|~`!@#$%^&=]*$/, t('不能含特殊字元'))
        }
    } as DefineRule
} as const