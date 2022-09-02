import { useVueHooks } from '../index';
export class VueSelf {
    use() {
        const hooks = useVueHooks();
        const nowCurrentInstance = hooks.getCurrentInstance ? hooks.getCurrentInstance() : null;
        return {
            data(data) {
                return useVueHooks().reactive(data);
            },
            hasSlot(name = 'default') {
                let proxy = nowCurrentInstance?.proxy;
                if (proxy) {
                    return !!proxy.$slots[name] || !!proxy.$scopedSlots[name];
                }
                return false;
            },
            children() {
                let output = [];
                let concat = (instance) => {
                    output = output.concat(instance.$children);
                    for (let child of instance.$children) {
                        concat(child);
                    }
                };
                if (nowCurrentInstance) {
                    concat(nowCurrentInstance.proxy);
                }
                return output;
            },
            forceUpdate() {
                nowCurrentInstance?.proxy?.$forceUpdate();
            },
            nextTick(callback) {
                nowCurrentInstance?.proxy?.$nextTick(callback);
            }
        };
    }
}
