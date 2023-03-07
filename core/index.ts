import 'urlpattern-polyfill'
import 'v-calendar/dist/style.css'
// TODO: 這是修復 vuetify 某些狀況的 bug, 現在 vuetify 已經修正，可刪除
import 'requestidlecallback-polyfill'

import type { App } from 'vue'
import { i18n } from './i18n'
import { Chart, registerables } from 'chart.js'
import VCalendar from 'v-calendar'
import Img from './vue/components/img.vue'
import Form from './vue/components/form.vue'
import NgApp from './vue/views/app.vue'
import Table from './vue/components/table.vue'
import Dialog from './vue/components/dialog.vue'
import Upload from './vue/components/upload.vue'
import Search from './vue/components/search.vue'
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
export const t = (key: string) => i18n.key(key as any).get(window.__ng_config.libOptions.lang)

export const NextgenLib = {
    install(vue: App, params: {
        options: typeof window.__ng_config.libOptions
        env: {
            stage: string
            service: string
        }
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
            vue.component(`Ng${name}`, component)
        }
        vue.use(VCalendar)
        addComponent('App', NgApp)
        addComponent('Img', Img)
        addComponent('Form', Form)
        addComponent('Table', Table)
        addComponent('Search', Search)
        addComponent('Dialog', Dialog)
        addComponent('Upload', Upload)
        addComponent('Loaders', Loaders)
        addComponent('Toolbar', Toolbar)
        addComponent('Skeleton', Skeleton)
        addComponent('FixedBar', FixedBar)
        addComponent('Pagination', Pagination)
        addComponent('DatePicker', DatePicker)
        addComponent('OutlineText', OutlineText)
        addComponent('VisibleLoad', VisibleLoad)
        addComponent('OverlayLoading', OverlayLoading)
        addComponent('DateRangePicker', DateRangePicker)
        addComponent('PieChart', ChartPie)
        addComponent('DoughnutChart', ChartDoughnut)
    }
}

export default NextgenLib
