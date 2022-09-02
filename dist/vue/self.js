(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VueSelf = void 0;
    const index_1 = require("../index");
    class VueSelf {
        use() {
            const hooks = (0, index_1.useVueHooks)();
            const nowCurrentInstance = hooks.getCurrentInstance ? hooks.getCurrentInstance() : null;
            return {
                data(data) {
                    return (0, index_1.useVueHooks)().reactive(data);
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
});
