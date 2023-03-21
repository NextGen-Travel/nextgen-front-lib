import '@vue/runtime-core'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        NgApp: typeof import('../core/vue/views/app.vue')['default']
        NgMap: typeof import('../core/vue/components/map.vue')['default']
        NgDialog: typeof import('../core/vue/components/dialog.vue')['default']
        NgFixedBar: typeof import('../core/vue/components/fixed-bar.vue')['default']
        NgForm: typeof import('../core/vue/components/form.vue')['default']
        NgImg: typeof import('../core/vue/components/img.vue')['default']
        NgLoaders: typeof import('../core/vue/components/loaders.vue')['default']
        NgOutlineText: typeof import('../core/vue/components/outline-text.vue')['default']
        NgPagination: typeof import('../core/vue/components/pagination.vue')['default']
        NgTable: typeof import('../core/vue/components/table.vue')['default']
        NgToolbar: typeof import('../core/vue/components/toolbar.vue')['default']
        NgUpload: typeof import('../core/vue/components/upload.vue')['default']
        NgSearch: typeof import('../core/vue/components/search.vue')['default']
        NgSkeleton: typeof import('../core/vue/components/skeleton.vue')['default']
        NgDatePicker: typeof import('../core/vue/components/date-picker.vue')['default']
        NgOverlayLoading: typeof import('../core/vue/components/overlay-loading.vue')['default']
        NgVisibleLoad: typeof import('../core/vue/components/visible-load.vue')['default']
        NgDateRangePicker: typeof import('../core/vue/components/date-range-picker.vue')['default']
        NgPieChart: typeof import('../core/vue/components/charts/pie.vue')['default']
        NgDoughnutChart: typeof import('../core/vue/components/charts/doughnut.vue')['default']
    }
}

declare global {
    interface Window {
        __ng_state: any
        __ng_config: {
            libOptions: {
                lang: 'en' | 'zh'
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
