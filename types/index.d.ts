import 'vue'
import '@amap/amap-jsapi-types'
import 'apple-signin-api'
import 'facebook-js-sdk'
import 'google.maps'
import 'google.accounts'
import '../shims'

export type NgComponents = {
    NgApp: typeof import('../types-vue/core/vue/views/app.vue.d')['default']
    NgMap: typeof import('../types-vue/core/vue/components/map.vue.d')['default']
    NgDialog: typeof import('../types-vue/core/vue/components/dialog.vue.d')['default']
    NgFixedBar: typeof import('../types-vue/core/vue/components/fixed-bar.vue.d')['default']
    NgLink: typeof import('../types-vue/core/vue/components/link.vue.d')['default']
    NgForm: typeof import('../types-vue/core/vue/components/form.vue.d')['default']
    NgImg: typeof import('../types-vue/core/vue/components/img.vue.d')['default']
    NgLoaders: typeof import('../types-vue/core/vue/components/loaders.vue.d')['default']
    NgOutlineText: typeof import('../types-vue/core/vue/components/outline-text.vue.d')['default']
    NgPagination: typeof import('../types-vue/core/vue/components/pagination.vue.d')['default']
    NgTable: typeof import('../types-vue/core/vue/components/table.vue.d')['default']
    NgToolbar: typeof import('../types-vue/core/vue/components/toolbar.vue.d')['default']
    NgUpload: typeof import('../types-vue/core/vue/components/upload.vue.d')['default']
    NgSearch: typeof import('../types-vue/core/vue/components/search.vue.d')['default']
    NgSkeleton: typeof import('../types-vue/core/vue/components/skeleton.vue.d')['default']
    NgDatePicker: typeof import('../types-vue/core/vue/components/date-picker.vue.d')['default']
    NgOverlayLoading: typeof import('../types-vue/core/vue/components/overlay-loading.vue.d')['default']
    NgVisibleLoad: typeof import('../types-vue/core/vue/components/visible-load.vue.d')['default']
    NgDateRangePicker: typeof import('../types-vue/core/vue/components/date-range-picker.vue.d')['default']
    NgPieChart: typeof import('../types-vue/core/vue/components/charts/pie.vue.d')['default']
    NgDoughnutChart: typeof import('../types-vue/core/vue/components/charts/doughnut.vue.d')['default']
    NgSkeletonGroup: typeof import('../types-vue/core/vue/components/skeleton-group.vue.d')['default']
    NgAni: typeof import('../types-vue/core/vue/components/ani.vue.d')['default']
    NgLineChart: typeof import('../types-vue/core/vue/components/charts/line.vue.d')['default']
}

declare module 'vue' {
    export interface ComponentCustomProperties {
        $t: (_key: string, ..._args: any[]) => string
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface GlobalComponents extends NgComponents {

    }
}
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $t: (_key: string, ..._args: any[]) => string
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface GlobalComponents extends NgComponents {

    }
}

declare global {
    interface Window {
        __ng_state: any
        __ng_config: {
            libOptions: {
                lang: 'en-US' | 'zh-TW' | 'zh-CN'
                staticUrl: string
                notFoundImage: string | (() => string)
            },
            libEnv: {
                version: number
                stage: string
                service: string
            }
        }
    }
}

export {}
