"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoader = void 0;
const power_helper_1 = require("power-helper");
const vue_1 = require("vue");
const useLoader = (options = {
    autoStart: true
}) => {
    const loader = (0, vue_1.reactive)(new power_helper_1.Loader());
    (0, vue_1.onMounted)(() => {
        if (options.autoStart) {
            (0, vue_1.nextTick)(() => loader.start({}));
        }
    });
    return loader;
};
exports.useLoader = useLoader;
