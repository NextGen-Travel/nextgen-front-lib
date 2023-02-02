import 'v-calendar/dist/style.css'

import type { App } from 'vue'
import { i18n } from './i18n'
import { toHump } from './utils/text'
import { Chart, registerables } from 'chart.js'
import VCalendar from 'v-calendar'
import Img from './vue/components/img.vue'
import Form from './vue/components/form.vue'
import NgApp from './vue/views/app.vue'
import Table from './vue/components/table.vue'
import Dialog from './vue/components/dialog.vue'
import Upload from './vue/components/upload.vue'
import VisibleLoad from './vue/components/visible-load.vue'
import Loaders from './vue/components/loaders.vue'
import Toolbar from './vue/components/toolbar.vue'
import FixedBar from './vue/components/fixed-bar.vue'
import Skeleton from './vue/components/skeleton.vue'
import DatePicker from './vue/components/date-picker.vue'
import DateRangePicker from './vue/components/date-range-picker.vue'
import Pagination from './vue/components/pagination.vue'
import OutlineText from './vue/components/outline-text.vue'
import OverlayLoading from './vue/components/overlay-loading.vue'
import ChartPie from './vue/components/charts/pie.vue'
import ChartDoughnut from './vue/components/charts/doughnut.vue'
import _Locales from './locales'

window.__ng_config = {
    libOptions: {
        lang: 'en',
        staticUrl: '',
        notFoundImage: ''
    },
    libEnv: {
        version: 2,
        stage: '',
        service: '',
    }
}

Chart.register(...registerables)

export const useLibOptions = () => window.__ng_config.libOptions
export const useLibEnv = () => window.__ng_config.libEnv
export const Locales = _Locales
export const t = (key: string) => i18n.key(key as any).get(window.__ng_config.libOptions.lang)

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
        vue.use(VCalendar)
        addComponent('app', NgApp)
        addComponent('img', Img)
        addComponent('form', Form)
        addComponent('table', Table)
        addComponent('dialog', Dialog)
        addComponent('upload', Upload)
        addComponent('loaders', Loaders)
        addComponent('toolbar', Toolbar)
        addComponent('skeleton', Skeleton)
        addComponent('fixed-bar', FixedBar)
        addComponent('pagination', Pagination)
        addComponent('date-picker', DatePicker)
        addComponent('outline-text', OutlineText)
        addComponent('visible-load', VisibleLoad)
        addComponent('overlay-loading', OverlayLoading)
        addComponent('date-range-picker', DateRangePicker)
        addComponent('pie-chart', ChartPie)
        addComponent('doughnut-chart', ChartDoughnut)
    }
}

export default NextgenLib
