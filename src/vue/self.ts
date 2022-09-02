import Vue from 'vue'
import { useVueHooks } from '../index'

export class VueSelf {
    use() {
        const hooks = useVueHooks()
        const nowCurrentInstance = hooks.getCurrentInstance ? hooks.getCurrentInstance() : null
        return {
            data<T>(data: T) {
                return useVueHooks().reactive(data as any) as T
            },
            hasSlot(name = 'default') {
                let proxy = nowCurrentInstance?.proxy as any
                if (proxy) {
                    return !!proxy.$slots[name] || !!proxy.$scopedSlots[name]
                }
                return false
            },
            children() {
                let output: typeof Vue[] = []
                let concat = (instance: any) => {
                    output = output.concat(instance.$children)
                    for (let child of instance.$children) {
                        concat(child)
                    }
                }
                if (nowCurrentInstance) {
                    concat(nowCurrentInstance.proxy)
                }
                return output
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
