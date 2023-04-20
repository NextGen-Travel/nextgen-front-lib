import { record } from 'power-helper'
import { reactive, watch } from 'vue'
import { usePersistDataStorage } from '../storage'

type Params = {
    ns: () => string
}

export class PersistStateManager {
    private params: Params
    private aliveMap = new Map<string, any>()

    constructor(params: Params) {
        this.params = params
    }

    private toKey(key: string) {
        return this.params.ns() + '/' + key
    }

    create<T extends Record<string, any>>(key: string, data: T): T {
        const storage = usePersistDataStorage()
        const _key = this.toKey(key)
        if (this.aliveMap.has(_key)) {
            return this.aliveMap.get(_key)
        }
        let origin: any
        try {
            origin = storage.get(_key)
        } catch (error) {
            origin = data
        }
        const state = reactive(record.setMapValue(data, origin))
        watch(() => state, () => storage.set(_key, state), {
            deep: true
        })
        this.aliveMap.set(_key, state)
        return state as T
    }

    remove(key: string) {
        usePersistDataStorage().remove(this.toKey(key))
    }
}
