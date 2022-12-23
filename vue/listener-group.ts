import { onUnmounted } from 'vue'
import { serviceException } from '../core/error'

const exception = serviceException.checkout('listener-group')

type Listener = { off: () => any } | undefined

export const useListenerGroup = () => {
    let isOff = false
    let listeners: Array<Listener> = []
    let offAll = () => {
        if (isOff === false) {
            isOff = true
            listeners.forEach(e => e?.off())
        } else {
            throw exception.create('offAll() is failed, because already called.')
        }
    }
    onUnmounted(() => {
        if (isOff === false) {
            offAll()
        }
    })
    return {
        off: () => offAll(),
        push: (ls: Listener[]) => {
            if (isOff === false) {
                listeners.push(...ls)
            } else {
                throw exception.create('push() is failed, because already called offAll().')
            }
        }
    }
}
