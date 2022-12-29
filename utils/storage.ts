import { CryptoAES } from '../modules/crypto'

type Options = {
    ttl?: Record<string, number>
    version?: number
}

export const loaclStroageIntercept = (ns: string, options?: Options) => {
    const _pkey = 'lib-v2'
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
                    storage.set(key, def)
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
