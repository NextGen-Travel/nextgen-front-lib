import * as Hooks from 'vue'
import Img from '../vue/components/img.vue'
import Form from '../vue/components/form.vue'
import Table from '../vue/components/table.vue'
import Dialog from '../vue/components/dialog.vue'
import Upload from '../vue/components/upload.vue'
import Loaders from '../vue/components/loaders.vue'
import Toolbar from '../vue/components/toolbar.vue'
import FixedBar from '../vue/components/fixed-bar.vue'
import Pagination from '../vue/components/pagination.vue'

import type {} from 'node_modules/vue-i18n/types/index'
import type {} from 'node_modules/vue-router/types/index'

let VueHooks: typeof Hooks = {} as any
let VueOptions: {
    staticUrl: string
    notFoundImage: string
} = {
    staticUrl: '',
    notFoundImage: ''
}

export const useVueHooks = () => VueHooks
export const useVueOptions = () => VueOptions

export const NextgenLib = {
    install(_Vue: any, params: {
        hooks: typeof Hooks
        options: typeof VueOptions
    }) {
        for (let key in params.hooks) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            VueHooks[key] = params.hooks[key]
        }
        for (let key in (params.options || {})) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            VueOptions[key] = params.options[key]
        }
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
    }
}

export default NextgenLib
