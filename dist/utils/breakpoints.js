(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBreakpoint = void 0;
    const breakpoints = {
        xs: {
            min: 0,
            max: 767
        },
        sm: {
            min: 768,
            max: 991
        },
        md: {
            min: 992,
            max: 1199
        },
        lg: {
            min: 1200,
            max: Infinity
        }
    };
    const isBreakpoint = function (breakpoint, el = window) {
        let width = el instanceof Window ? el.innerWidth : el.clientWidth;
        let matchs = [];
        for (let name in breakpoints) {
            let { min, max } = breakpoints[name];
            if (width >= min && width <= max) {
                matchs.push(`${name}-only`);
            }
            else if (width >= min) {
                matchs.push(`${name}-and-up`);
            }
            else if (width <= max) {
                matchs.push(`${name}-and-down`);
            }
        }
        return matchs.includes(breakpoint);
    };
    exports.isBreakpoint = isBreakpoint;
});
