import 'vue'
import '@amap/amap-jsapi-types'
import 'apple-signin-api'
import 'facebook-js-sdk'
import 'google.maps'
import 'google.accounts'
import '../shims'

declare module 'vue' {
    export interface ComponentCustomProperties {
        $t: (_key: string, ..._args: any[]) => string
    }
    export interface GlobalComponents {
        NgApp: typeof import('../types-vue/core/vue/views/app.vue')['default']
        NgMap: typeof import('../types-vue/core/vue/components/map.vue')['default']
        NgDialog: typeof import('../types-vue/core/vue/components/dialog.vue')['default']
        NgFixedBar: typeof import('../types-vue/core/vue/components/fixed-bar.vue')['default']
        NgForm: typeof import('../types-vue/core/vue/components/form.vue')['default']
        NgImg: typeof import('../types-vue/core/vue/components/img.vue')['default']
        NgLoaders: typeof import('../types-vue/core/vue/components/loaders.vue')['default']
        NgOutlineText: typeof import('../types-vue/core/vue/components/outline-text.vue')['default']
        NgPagination: typeof import('../types-vue/core/vue/components/pagination.vue')['default']
        NgTable: typeof import('../types-vue/core/vue/components/table.vue')['default']
        NgToolbar: typeof import('../types-vue/core/vue/components/toolbar.vue')['default']
        NgUpload: typeof import('../types-vue/core/vue/components/upload.vue')['default']
        NgSearch: typeof import('../types-vue/core/vue/components/search.vue')['default']
        NgSkeleton: typeof import('../types-vue/core/vue/components/skeleton.vue')['default']
        NgDatePicker: typeof import('../types-vue/core/vue/components/date-picker.vue')['default']
        NgOverlayLoading: typeof import('../types-vue/core/vue/components/overlay-loading.vue')['default']
        NgVisibleLoad: typeof import('../types-vue/core/vue/components/visible-load.vue')['default']
        NgDateRangePicker: typeof import('../types-vue/core/vue/components/date-range-picker.vue')['default']
        NgPieChart: typeof import('../types-vue/core/vue/components/charts/pie.vue')['default']
        NgDoughnutChart: typeof import('../types-vue/core/vue/components/charts/doughnut.vue')['default']
        NgSkeletonGroup: typeof import('../types-vue/core/vue/components/skeleton-group.vue')['default']
        NgAni: typeof import('../types-vue/core/vue/components/ani.vue')['default']
    }
}

declare global {
    interface Window {
        __ng_state: any
        __ng_config: {
            libOptions: {
                lang: 'en-US' | 'zh-TW' | 'zh-CN'
                staticUrl: string
                notFoundImage: string
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
