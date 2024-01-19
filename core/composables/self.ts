import { getCurrentInstance, useSlots, useAttrs } from 'vue'
import { toHump } from '../utils/text'

export const useSelf = () => {
    const slot = useSlots()
    const attrs = useAttrs()
    const nowCurrentInstance = getCurrentInstance ? getCurrentInstance() : null
    return {
        hasSlot(name = 'default') {
            return !!slot[name]
        },
        forceUpdate() {
            nowCurrentInstance?.proxy?.$forceUpdate()
        },
        hasListener(name: string) {
            return !!attrs[`on${toHump(name)}`]
        },
        nextTick(callback: () => void) {
            nowCurrentInstance?.proxy?.$nextTick(callback)
        }
    }
}
