import * as Hooks from 'vue'

const VueHooks: typeof Hooks = {} as any
const VueOptions: {
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
    }
}

export default NextgenLib
