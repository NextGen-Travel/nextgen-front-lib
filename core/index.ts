import 'urlpattern-polyfill'
import 'v-calendar/dist/style.css'

import type { App } from 'vue'
import { i18n } from './i18n'
import { Chart, registerables } from 'chart.js'
import Map from './vue/components/map.vue'
import Ani from './vue/components/ani.vue'
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
import SkeletonGroup from './vue/components/skeleton-group.vue'
import DatePicker from './vue/components/date-picker.vue'
import DateRangePicker from './vue/components/date-range-picker.vue'
import Pagination from './vue/components/pagination.vue'
import OutlineText from './vue/components/outline-text.vue'
import OverlayLoading from './vue/components/overlay-loading.vue'
import ChartPie from './vue/components/charts/pie.vue'
import ChartDoughnut from './vue/components/charts/doughnut.vue'

Chart.register(...registerables)

window.__ng_state = {}
window.__ng_config = {
    libOptions: {
        lang: 'en-US',
        staticUrl: '',
        notFoundImage: ''
    },
    libEnv: {
        version: 2,
        stage: '',
        service: '',
    }
}

export const useLibOptions = () => window.__ng_config.libOptions
export const useLibEnv = () => window.__ng_config.libEnv
export const t = (key: string, params = {}) => i18n.key(key as any, params).get(window.__ng_config.libOptions.lang)

export const NextgenLib = {
    setOptions: (options: Partial<typeof window.__ng_config.libOptions>) => {
        for (let key in options) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.__ng_config.libOptions[key] = options[key]
        }
    },
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
        addComponent('App', NgApp)
        addComponent('Img', Img)
        addComponent('Ani', Ani)
        addComponent('Form', Form)
        addComponent('Table', Table)
        addComponent('Search', Search)
        addComponent('Dialog', Dialog)
        addComponent('Upload', Upload)
        addComponent('Loaders', Loaders)
        addComponent('Toolbar', Toolbar)
        addComponent('Skeleton', Skeleton)
        addComponent('SkeletonGroup', SkeletonGroup)
        addComponent('FixedBar', FixedBar)
        addComponent('Pagination', Pagination)
        addComponent('DatePicker', DatePicker)
        addComponent('OutlineText', OutlineText)
        addComponent('VisibleLoad', VisibleLoad)
        addComponent('OverlayLoading', OverlayLoading)
        addComponent('DateRangePicker', DateRangePicker)
        addComponent('PieChart', ChartPie)
        addComponent('DoughnutChart', ChartDoughnut)
        addComponent('Map', Map)
    }
}

export default NextgenLib
