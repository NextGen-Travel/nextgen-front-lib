"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebounce = void 0;
const power_helper_1 = require("power-helper");
const vue_1 = require("vue");
const useDebounce = (cb, delay = 100) => {
    const debounce = new power_helper_1.Debounce({
        delay
    });
    (0, vue_1.onMounted)(() => {
        debounce.on('trigger', cb);
    });
    (0, vue_1.onUnmounted)(() => {
        debounce.close();
    });
    return debounce;
};
exports.useDebounce = useDebounce;
