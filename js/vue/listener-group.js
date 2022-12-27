"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useListenerGroup = void 0;
const vue_1 = require("vue");
const error_1 = require("../core/error");
const exception = error_1.serviceException.checkout('listener-group');
const useListenerGroup = () => {
    let isOff = false;
    let listeners = [];
    let offAll = () => {
        if (isOff === false) {
            isOff = true;
            listeners.forEach(e => e?.off());
        }
        else {
            throw exception.create('offAll() is failed, because already called.');
        }
    };
    (0, vue_1.onUnmounted)(() => {
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
                throw exception.create('push() is failed, because already called offAll().');
            }
        }
    };
};
exports.useListenerGroup = useListenerGroup;
