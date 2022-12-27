"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoAES = void 0;
const crypto_js_1 = require("crypto-js");
const error_1 = require("../../core/error");
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
            throw exception.create('CryptoAES encrypt not support php-encryption');
        }
        else {
            return crypto_js_1.AES.encrypt(target, key).toString();
        }
    }
    static loaclStroageIntercept(ns) {
        return {
            get(key, value, { storage, isDefault, defaultValue }) {
                if (isDefault) {
                    return value;
                }
                try {
                    let data = CryptoAES.decrypt('crypto-js', value.hash, `${ns}/1234`);
                    if (data !== JSON.stringify(value.data)) {
                        storage.remove(key);
                        return defaultValue();
                    }
                    else {
                        return value.data;
                    }
                }
                catch (error) {
                    storage.remove(key);
                    return defaultValue();
                }
            },
            set(key, value) {
                return {
                    hash: CryptoAES.encrypt('crypto-js', JSON.stringify(value), `${ns}/1234`),
                    data: value,
                    createdAt: Date.now()
                };
            }
        };
    }
}
exports.CryptoAES = CryptoAES;
