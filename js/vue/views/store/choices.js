"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLibChoicesStore = void 0;
const vue_1 = require("vue");
const pinia_1 = require("pinia");
exports.useLibChoicesStore = (0, pinia_1.defineStore)('lib-choices', () => {
    // =================
    //
    // state
    //
    const state = (0, vue_1.reactive)({
        isOpen: false,
        title: '',
        image: '',
        icon: '',
        desc: '',
        btns: []
    });
    // =================
    //
    // actions
    //
    const open = ({ title, image, desc, icon, btns }) => {
        state.isOpen = true;
        state.title = title;
        state.image = image;
        state.icon = icon;
        state.desc = desc;
        state.btns = btns;
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
