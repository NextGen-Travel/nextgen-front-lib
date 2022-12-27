import { toHump } from '../utils/text'
import { getCurrentInstance, reactive, useSlots, useAttrs, ref } from 'vue'

export class VueSelf {
    static use() {
        return (new VueSelf()).use()
    }
    use() {
        const slot = useSlots()
        const attrs = useAttrs()
        const nowCurrentInstance = getCurrentInstance ? getCurrentInstance() : null
        return {
            ref<T>(data: T) {
                return ref(data as any) as {
                    value: T
                }
            },
            data<T>(data: T) {
                return reactive(data as any) as T
            },
            hasSlot(name = 'default') {
                return !!slot[name]
            },
            hasListener(name: string) {
                return !!attrs[`on${toHump(name)}`]
            },
            forceUpdate() {
                nowCurrentInstance?.proxy?.$forceUpdate()
            },
            nextTick(callback: () => void) {
                nowCurrentInstance?.proxy?.$nextTick(callback)
            }
        }
    }
}