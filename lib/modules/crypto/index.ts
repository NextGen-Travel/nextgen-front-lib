import { enc, AES } from 'crypto-js'
import { serviceException } from '../../error'

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
            throw exception.fail('CryptoAES encrypt not support php-encryption')
        } else {
            return AES.encrypt(target, key).toString()
        }
    }
}
