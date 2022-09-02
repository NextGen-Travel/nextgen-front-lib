"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextgenLib = exports.vueHooks = void 0;
exports.vueHooks = {};
// Utils
exports.NextgenLib = {
    install(_Vue, hooks) {
        Object.assign(exports.vueHooks, hooks);
    }
};
module.exports = exports.NextgenLib;
module.exports.NextgenLib = exports.NextgenLib;
exports.default = exports.NextgenLib;
