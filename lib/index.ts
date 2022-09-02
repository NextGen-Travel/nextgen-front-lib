import { onMounted, reactive, watch, onUnmounted, getCurrentInstance } from 'vue'

type Hooks = {
    watch: typeof watch
    reactive: typeof reactive
    onMounted: typeof onMounted
    onUnmounted: typeof onUnmounted
    getCurrentInstance: typeof getCurrentInstance
}

export const vueHooks: Hooks = {} as any

// Utils

export const NextgenLib = {
    install(_Vue: any, hooks: Hooks) {
        Object.assign(vueHooks, hooks)
    }
}

module.exports = NextgenLib
module.exports.NextgenLib = NextgenLib

export default NextgenLib
