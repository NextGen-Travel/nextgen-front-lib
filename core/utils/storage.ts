import { CryptoAES } from '../modules/crypto'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

type Options = {
    ttl?: Record<string, number>
    version?: number
}

export const loaclStroageIntercept = (ns: string, options?: Options) => {
    const _pkey = 'lib-v3.1'
    const _options: Required<Options> = Object.assign({
        version: 1,
        ttl: {}
    }, options || {})
    return {
        get(key: string, value: any, { storage, isDefault, defaultValue }: any) {
            if (isDefault) {
                return value
            }
            const now = Date.now()
            const noPass = () => {
                let data = CryptoAES.decrypt('crypto-js', value.hash, `${ns}/${_pkey}`)
                if (data !== JSON.stringify(value.data)) {
                    return true
                }
                if (value.version !== _options.version) {
                    return true
                }
                if (value.expiredAt !== -1 && now > value.expiredAt) {
                    return true
                }
                return false
            }
            try {
                if (noPass()) {
                    const def = defaultValue()
                    storage.remove(key as any)
                    return def
                } else {
                    return value.data
                }
            } catch (error) {
                storage.remove(key as any)
                return defaultValue()
            }
        },
        set(key: string, value: any) {
            let now = Date.now()
            return {
                hash: CryptoAES.encrypt('crypto-js', JSON.stringify(value), `${ns}/${_pkey}`),
                data: value,
                version: _options.version,
                expiredAt: _options.ttl[key] ? now + _options.ttl[key] : -1,
                createdAt: now
            }
        }
    }
}

export const asyncLoaclStroageIntercept = (ns: string, options?: Options & { encrypt?: boolean }) => {
    const _options: Required<Options & { encrypt?: boolean }> = Object.assign({
        version: 1,
        encrypt: false,
        ttl: {}
    }, options || {})
    return {
        async get(key: string, value: any, { storage, isDefault, defaultValue }: any) {
            if (isDefault) {
                return value
            }
            const now = Date.now()
            const fp = await FingerprintJS.load()
            const { visitorId } = await fp.get()
            try {
                const noPass = () => {
                    if (value.version !== _options.version) {
                        return true
                    }
                    if (value.expiredAt !== -1 && now > value.expiredAt) {
                        return true
                    }
                    return false
                }
                if (noPass()) {
                    const def = await defaultValue()
                    await storage.remove(key as any)
                    return def
                } else {
                    return _options.encrypt ? JSON.parse(CryptoAES.decrypt('crypto-js', value.data, visitorId)) : value.data
                }
            } catch (error) {
                await storage.remove(key as any)
                const def = await defaultValue()
                return def
            }
        },
        async set(key: string, value: any) {
            const now = Date.now()
            const fp = await FingerprintJS.load()
            const { visitorId } = await fp.get()
            const data = _options.encrypt ? CryptoAES.encrypt('crypto-js', JSON.stringify(value), visitorId) : value
            return {
                data,
                version: _options.version,
                expiredAt: _options.ttl[key] ? now + _options.ttl[key] : -1,
                createdAt: now
            }
        }
    }
}
