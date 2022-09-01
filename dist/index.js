"use strict";
/* eslint-disable no-redeclare */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextgenLib = exports.createStrictObject = exports.isBreakpoint = exports.createUuid = exports.vueHooks = void 0;
const uid_1 = require("./utils/uid");
const breakpoints_1 = require("./utils/breakpoints");
const strict_object_1 = require("./utils/strict-object");
exports.vueHooks = {};
// Utils
exports.createUuid = uid_1.createUuid;
exports.isBreakpoint = breakpoints_1.isBreakpoint;
exports.createStrictObject = strict_object_1.createStrictObject;
exports.NextgenLib = {
    createStrictObject: exports.createStrictObject,
    install(_Vue, hooks) {
        Object.assign(exports.vueHooks, hooks);
    }
};
module.exports = exports.NextgenLib;
module.exports.NextgenLib = exports.NextgenLib;
exports.default = exports.NextgenLib;
