import * as Hooks from 'vue'
import * as Pinia from 'pinia'
import Img from '../vue/components/img.vue'
import Form from '../vue/components/form.vue'
import Table from '../vue/components/table.vue'
import Dialog from '../vue/components/dialog.vue'
import Upload from '../vue/components/upload.vue'
import Loaders from '../vue/components/loaders.vue'
import Toolbar from '../vue/components/toolbar.vue'
import FixedBar from '../vue/components/fixed-bar.vue'
import Pagination from '../vue/components/pagination.vue'
import OutlineText from '../vue/components/outline-text.vue'
import _Locales from './locales'
import type {} from 'node_modules/vue-i18n/types/index'
import type {} from 'node_modules/vue-router/types/index'

let VueHooks: typeof Hooks = {} as any

let VuePlugins: {
    pinia: typeof Pinia
} = {
    pinia: null as any
}

let libOptions: {
    staticUrl: string
    notFoundImage: string
} = {
    staticUrl: '',
    notFoundImage: ''
}

let libEnv = {
    version: 1,
    stage: '',
    service: '',
}

export const useVueHooks = () => VueHooks
export const useVuePlugins = () => VuePlugins
export const useLibOptions = () => libOptions
export const useLibEnv = () => libEnv
export const Locales = _Locales

export const NextgenLib = {
    install(_Vue: any, params: {
        env: typeof libEnv
        hooks: typeof Hooks
        pinia: typeof Pinia
        options: typeof libOptions
    }) {
        for (let key in params.hooks) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            VueHooks[key] = params.hooks[key]
        }
        for (let key in params.options) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            libOptions[key] = params.options[key]
        }
        for (let key in params.env) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            libEnv[key] = params.env[key]
        }
        VuePlugins.pinia = params.pinia
        const addComponent = (name: string, component: any) => _Vue.component(`ng-${name}`, component)
        addComponent('img', Img)
        addComponent('form', Form)
        addComponent('table', Table)
        addComponent('dialog', Dialog)
        addComponent('upload', Upload)
        addComponent('loaders', Loaders)
        addComponent('toolbar', Toolbar)
        addComponent('fixed-bar', FixedBar)
        addComponent('pagination', Pagination)
        addComponent('outline-text', OutlineText)
    }
}

export default NextgenLib
