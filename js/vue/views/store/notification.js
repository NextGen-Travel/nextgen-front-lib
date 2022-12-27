"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLibNotificationStore = void 0;
const power_helper_1 = require("power-helper");
const pinia_1 = require("pinia");
const vue_1 = require("vue");
exports.useLibNotificationStore = (0, pinia_1.defineStore)('lib-notification', () => {
    // =================
    //
    // state
    //
    const state = (0, vue_1.reactive)({
        messages: []
    });
    // =================
    //
    // actions
    //
    const push = (params) => {
        state.messages.push({
            ...params,
            id: power_helper_1.flow.createUuid(),
            duration: 0,
            clicked: params.type === 'danger'
        });
    };
    const clear = () => {
        state.messages = state.messages.filter(e => e.duration <= 100);
    };
    // =================
    //
    // getters
    //
    const messages = (0, vue_1.computed)(() => state.messages);
    // =================
    //
    // done
    //
    return {
        push,
        clear,
        state,
        messages
    };
});
