"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueSelf = void 0;
const index_1 = require("../index");
const { reactive, getCurrentInstance } = index_1.vueHooks;
class VueSelf {
    static use() {
        const nowCurrentInstance = getCurrentInstance();
        return {
            data(data) {
                return reactive(data);
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
exports.VueSelf = VueSelf;
