"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHump = void 0;
const toHump = (text) => {
    let output = text.replace(/-([a-z])/g, (all, val) => val.toUpperCase());
    if (output.length >= 1) {
        let first = output[0].toUpperCase();
        output = `${first}${output.slice(1)}`;
    }
    return output;
};
exports.toHump = toHump;
