"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLibConfirmStore = void 0;
const vue_1 = require("vue");
const pinia_1 = require("pinia");
exports.useLibConfirmStore = (0, pinia_1.defineStore)('lib-confirm', () => {
    // =================
    //
    // state
    //
    const state = (0, vue_1.reactive)({
        isOpen: false,
        message: '',
        handler: null
    });
    // =================
    //
    // actions
    //
    const open = ({ message, handler }) => {
        state.isOpen = true;
        state.message = message;
        state.handler = handler;
    };
    const cancel = () => {
        state.isOpen = false;
    };
    // =================
    //
    // done
    //
    return {
        open,
        state,
        cancel
    };
});
