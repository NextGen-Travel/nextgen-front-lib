"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueSelf = void 0;
const text_1 = require("../utils/text");
const vue_1 = require("vue");
class VueSelf {
    static use() {
        return (new VueSelf()).use();
    }
    use() {
        const slot = (0, vue_1.useSlots)();
        const attrs = (0, vue_1.useAttrs)();
        const nowCurrentInstance = vue_1.getCurrentInstance ? (0, vue_1.getCurrentInstance)() : null;
        return {
            ref(data) {
                return (0, vue_1.ref)(data);
            },
            data(data) {
                return (0, vue_1.reactive)(data);
            },
            hasSlot(name = 'default') {
                return !!slot[name];
            },
            hasListener(name) {
                return !!attrs[`on${(0, text_1.toHump)(name)}`];
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
