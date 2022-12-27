"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineFields = void 0;
const power_helper_1 = require("power-helper");
const defineFields = (items) => {
    return items.map(e => {
        return {
            ...e,
            key: e.key == null ? power_helper_1.flow.createUuid() : e.key,
            style: e.style == null ? (() => '') : e.style,
            formatter: e.formatter == null ? (v) => v : e.formatter,
            optionShow: e.optionShow == null ? false : e.optionShow
        };
    });
};
exports.defineFields = defineFields;
