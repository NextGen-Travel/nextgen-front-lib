import { record } from 'power-helper'
import { reactive, watch } from 'vue'
import { serviceException } from '../error'
import { usePersistDataStorage } from '../storage'

type Params = {
    ns: () => string
}

export class PersistStateManager {
    params: Params
    aliveKeys: string[] = []

    constructor(params: Params) {
        this.params = params
    }

    private toKey(key: string) {
        return this.params.ns() + '/' + key
    }

    create<T extends Record<string, unknown>>(key: string, data: T): T {
        let _key=  this.toKey(key)
        if (this.aliveKeys.includes(_key)) {
            throw serviceException.create(`Persist state key "${key}" already used.`)
        } else {
            this.aliveKeys.push(_key)
        }
    
        const storage = usePersistDataStorage()
        const origin = storage.get(_key)
        const state = reactive(record.setMapValue(data, origin))

        watch(() => state, () => storage.set(_key, data), {
            deep: true
        })

        return state as T
    }

    remove(key: string) {
        usePersistDataStorage().remove(this.toKey(key))
    }
}
