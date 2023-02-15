import { record } from 'power-helper'
import { reactive, watch } from 'vue'
import { serviceException } from '../error'
import { usePersistDataStorage } from '../storage'

type Params = {
    ns: () => string
}

export class PersistStateManager {
    private params: Params
    private aliveKeys: string[] = []

    constructor(params: Params) {
        this.params = params
    }

    private toKey(key: string) {
        return this.params.ns() + '/' + key
    }

    create<T extends Record<string, unknown>>(key: string, data: () => T): T {
        const storage = usePersistDataStorage()
        const _key=  this.toKey(key)
        if (this.aliveKeys.includes(_key)) {
            throw serviceException.create(`Persist state key "${key}" already used.`)
        } else {
            this.aliveKeys.push(_key)
        }
    
        let origin: any
        try {
            origin = storage.get(_key)
        } catch (error) {
            origin = data()
        }

        const state = reactive(record.setMapValue(data(), origin))
        watch(() => state, () => storage.set(_key, state), {
            deep: true
        })

        return state as T
    }

    remove(key: string) {
        usePersistDataStorage().remove(this.toKey(key))
    }
}
