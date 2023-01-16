import '@vue/runtime-core'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        NgApp: typeof import('../vue/views/app.vue')['default']
        NgDialog: typeof import('../vue/components/dialog.vue')['default']
        NgFixedBar: typeof import('../vue/components/fixed-bar.vue')['default']
        NgForm: typeof import('../vue/components/form.vue')['default']
        NgImg: typeof import('../vue/components/img.vue')['default']
        NgLoaders: typeof import('../vue/components/loaders.vue')['default']
        NgOutlineText: typeof import('../vue/components/outline-text.vue')['default']
        NgPagination: typeof import('../vue/components/pagination.vue')['default']
        NgTable: typeof import('../vue/components/table.vue')['default']
        NgToolbar: typeof import('../vue/components/toolbar.vue')['default']
        NgUpload: typeof import('../vue/components/upload.vue')['default']
        NgSkeleton: typeof import('../vue/components/skeleton.vue')['default']
        NgDatePicker: typeof import('../vue/components/date-picker.vue')['default']
        NgOverlayLoading: typeof import('../vue/components/overlay-loading.vue')['default']
        NgVisibleLoad: typeof import('../vue/components/visible-load.vue')['default']
        NgDateRangePicker: typeof import('../vue/components/date-range-picker.vue')['default']
    }
}
declare global {
    interface Window {
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
