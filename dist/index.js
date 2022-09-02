"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextgenLib = exports.useVueHooks = void 0;
const VueHooks = {};
const useVueHooks = () => VueHooks;
exports.useVueHooks = useVueHooks;
// Utils
exports.NextgenLib = {
    install(_Vue, hooks) {
        for (let key in hooks) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            VueHooks[key] = hooks[key];
        }
    }
};
module.exports = exports.NextgenLib;
module.exports.NextgenLib = exports.NextgenLib;
exports.default = exports.NextgenLib;
