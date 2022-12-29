"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loaclStroageIntercept = void 0;
const crypto_1 = require("../modules/crypto");
const loaclStroageIntercept = (ns, options) => {
    const _pkey = 'lib-v2';
    const _options = Object.assign({
        version: 1,
        ttl: {}
    }, options || {});
    return {
        get(key, value, { storage, isDefault, defaultValue }) {
            if (isDefault) {
                return value;
            }
            const now = Date.now();
            const noPass = () => {
                let data = crypto_1.CryptoAES.decrypt('crypto-js', value.hash, `${ns}/${_pkey}`);
                if (data !== JSON.stringify(value.data)) {
                    return true;
                }
                if (value.version !== _options.version) {
                    return true;
                }
                if (value.expiredAt !== -1 && now > value.expiredAt) {
                    return true;
                }
                return false;
            };
            try {
                if (noPass()) {
                    const def = defaultValue();
                    storage.remove(key);
                    return def;
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
            let now = Date.now();
            return {
                hash: crypto_1.CryptoAES.encrypt('crypto-js', JSON.stringify(value), `${ns}/${_pkey}`),
                data: value,
                version: _options.version,
                expiredAt: _options.ttl[key] ? now + _options.ttl[key] : -1,
                createdAt: now
            };
        }
    };
};
exports.loaclStroageIntercept = loaclStroageIntercept;
