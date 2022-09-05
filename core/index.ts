import * as Hooks from 'vue'

const VueHooks: typeof Hooks = {} as any

export const useVueHooks = () => VueHooks

// Utils

export const NextgenLib = {
    install(_Vue: any, params: {
        hooks: typeof Hooks
    }) {
        for (let key in params.hooks) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            VueHooks[key] = params.hooks[key]
        }
    }
}

export default NextgenLib
