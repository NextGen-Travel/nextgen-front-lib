import { onMounted, reactive, watch, onUnmounted, getCurrentInstance } from 'vue'

type Hooks = {
    watch: typeof watch
    reactive: typeof reactive
    onMounted: typeof onMounted
    onUnmounted: typeof onUnmounted
    getCurrentInstance: typeof getCurrentInstance
}

const VueHooks: Hooks = {} as any

export const useVueHooks = () => VueHooks

// Utils

export const NextgenLib = {
    install(_Vue: any, hooks: Hooks) {
        for (let key in hooks) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            VueHooks[key] = hooks[key]
        }
    }
}

module.exports = NextgenLib
module.exports.NextgenLib = NextgenLib

export default NextgenLib
