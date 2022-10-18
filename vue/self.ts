import Vue from 'vue'
import { useVueHooks } from '../core/index'

export class VueSelf {
    static use() {
        return (new VueSelf()).use()
    }
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
            hasListener(name: string) {
                let proxy = nowCurrentInstance?.proxy as any
                if (proxy) {
                    return !!proxy.$listeners || !!proxy.$listeners[name]
                }
                return false
            },
            children() {
                let output: InstanceType<typeof Vue>[] = []
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