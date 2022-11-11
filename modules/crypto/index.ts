import { enc, AES } from 'crypto-js'
import { serviceException } from '../../core/error'

type Support = 'php-encryption' | 'crypto-js'

const exception = serviceException.checkout('CryptoAES')

export class CryptoAES {
    static decrypt<T extends Support>(from: T, target: string, key: string): string {
        if (from === 'php-encryption') {
            let { iv, value } = JSON.parse(enc.Base64.parse(target).toString(enc.Utf8))
            let readedIv = enc.Base64.parse(iv)
            let encryptKey = enc.Utf8.parse(key)
            return AES.decrypt(value, encryptKey, { iv: readedIv }).toString(enc.Utf8)
        } else {
            return AES.decrypt(target, key).toString(enc.Utf8)
        }
    }

    static encrypt<T extends Support>(from: T, target: string, key: string): string {
        if (from === 'php-encryption') {
            throw exception.create('CryptoAES encrypt not support php-encryption')
        } else {
            return AES.encrypt(target, key).toString()
        }
    }

    static loaclStroageIntercept(ns: string) {
        return {
            get(key: string, value: any, { storage, isDefault, defaultValue }: any) {
                if (isDefault) {
                    return value
                }
                try {
                    let data = CryptoAES.decrypt('crypto-js', value.hash, `${ns}/1234`)
                    if (data !== JSON.stringify(value.data)) {
                        storage.remove(key as any)
                        return defaultValue()
                    } else {
                        return value.data
                    }
                } catch (error) {
                    storage.remove(key as any)
                    return defaultValue()
                }
            },
            set(key: string, value: any) {
                return {
                    hash: CryptoAES.encrypt('crypto-js', JSON.stringify(value), `${ns}/1234`),
                    data: value,
                    createdAt: Date.now()
                }
            }
        }
    }
}
