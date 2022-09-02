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
    exports.parseMessage = void 0;
    const parseMessage = (data, def) => {
        if (typeof data === 'string') {
            return data;
        }
        let message = data.message;
        if (message && message.response && typeof message.response.data === 'string') {
            return message.response.data;
        }
        if (message && typeof message.message === 'string') {
            return message.message;
        }
        if (typeof message === 'string') {
            return message;
        }
        return def || 'unknown error';
    };
    exports.parseMessage = parseMessage;
});
