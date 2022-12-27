import type { App } from 'vue'
import { toHump } from '../utils/text'
import Img from '../vue/components/img.vue'
import Form from '../vue/components/form.vue'
import NgApp from '../vue/views/app.vue'
import Table from '../vue/components/table.vue'
import Dialog from '../vue/components/dialog.vue'
import Upload from '../vue/components/upload.vue'
import Loaders from '../vue/components/loaders.vue'
import Toolbar from '../vue/components/toolbar.vue'
import FixedBar from '../vue/components/fixed-bar.vue'
import Pagination from '../vue/components/pagination.vue'
import OutlineText from '../vue/components/outline-text.vue'
import _Locales from './locales'

window.__ng_config = {
    libOptions: {
        staticUrl: '',
        notFoundImage: ''
    },
    libEnv: {
        version: 1,
        stage: '',
        service: '',
    }
}

export const useLibOptions = () => window.__ng_config.libOptions
export const useLibEnv = () => window.__ng_config.libEnv
export const Locales = _Locales

export const NextgenLib = {
    install(vue: App, params: {
        env: typeof window.__ng_config.libEnv
        options: typeof window.__ng_config.libOptions
    }) {
        for (let key in params.options) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.__ng_config.libOptions[key] = params.options[key]
        }
        for (let key in params.env) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.__ng_config.libEnv[key] = params.env[key]
        }
        const addComponent = (name: string, component: any) => {
            vue.component(`ng-${name}`, component)
            vue.component(`Ng${toHump(name)}`, component)
        }
        addComponent('app', NgApp)
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
