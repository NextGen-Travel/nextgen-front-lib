(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../index", "../error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useListenerGroup = void 0;
    const index_1 = require("../index");
    const error_1 = require("../error");
    const exception = error_1.serviceException.checkout('listener-group');
    const useListenerGroup = () => {
        let { onUnmounted } = (0, index_1.useVueHooks)();
        let isOff = false;
        let listeners = [];
        let offAll = () => {
            if (isOff === false) {
                isOff = true;
                listeners.forEach(e => e?.off());
            }
            else {
                throw exception.fail('offAll() is failed, because already called.');
            }
        };
        onUnmounted(() => {
            if (isOff === false) {
                offAll();
            }
        });
        return {
            off: () => offAll(),
            push: (ls) => {
                if (isOff === false) {
                    listeners.push(...ls);
                }
                else {
                    throw exception.fail('push() is failed, because already called offAll().');
                }
            }
        };
    };
    exports.useListenerGroup = useListenerGroup;
});
