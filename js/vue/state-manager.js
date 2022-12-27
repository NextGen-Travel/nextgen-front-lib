"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStateManager = void 0;
const vue_1 = require("vue");
const createStateManager = () => {
    const stateStore = [];
    const create = (cb) => {
        const state = (0, vue_1.reactive)(cb());
        stateStore.push({
            cb,
            data: state
        });
        return state;
    };
    const reset = () => {
        for (let { cb, data } of stateStore) {
            Object.assign(data, cb());
        }
    };
    return {
        reset,
        create
    };
};
exports.createStateManager = createStateManager;
