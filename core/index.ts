import * as Pinia from 'pinia'
import * as Hooks from 'vue'

let VueHooks: typeof Hooks = {} as any
let VueOptions: {
    staticUrl: string
    notFoundImage: string
} = {
    staticUrl: '',
    notFoundImage: ''
}
let plugins: {
    pinia: typeof Pinia
} = {} as any

export const usePinia = () => plugins.pinia
export const useVueHooks = () => VueHooks
export const useVueOptions = () => VueOptions

export const NextgenLib = {
    install(_Vue: any, params: {
        hooks: typeof Hooks
        pinia: typeof Pinia
        options: typeof VueOptions
    }) {
        plugins.pinia = params.pinia
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
    }
}

export default NextgenLib
