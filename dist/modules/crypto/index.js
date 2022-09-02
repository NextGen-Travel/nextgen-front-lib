(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "crypto-js", "../../error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CryptoAES = void 0;
    const crypto_js_1 = require("crypto-js");
    const error_1 = require("../../error");
    const exception = error_1.serviceException.checkout('CryptoAES');
    class CryptoAES {
        static decrypt(from, target, key) {
            if (from === 'php-encryption') {
                let { iv, value } = JSON.parse(crypto_js_1.enc.Base64.parse(target).toString(crypto_js_1.enc.Utf8));
                let readedIv = crypto_js_1.enc.Base64.parse(iv);
                let encryptKey = crypto_js_1.enc.Utf8.parse(key);
                return crypto_js_1.AES.decrypt(value, encryptKey, { iv: readedIv }).toString(crypto_js_1.enc.Utf8);
            }
            else {
                return crypto_js_1.AES.decrypt(target, key).toString(crypto_js_1.enc.Utf8);
            }
        }
        static encrypt(from, target, key) {
            if (from === 'php-encryption') {
                throw exception.fail('CryptoAES encrypt not support php-encryption');
            }
            else {
                return crypto_js_1.AES.encrypt(target, key).toString();
            }
        }
    }
    exports.CryptoAES = CryptoAES;
});
