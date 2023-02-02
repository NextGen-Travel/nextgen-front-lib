import { reactive } from 'vue'

type Store = {
    cb: () => any
    data: any
}

export const createStateManager = () => {
    const stateStore: Array<Store> = []

    const create = <T extends Record<string, unknown>>(cb: () => T): T => {
        const state: any = reactive(cb())
        stateStore.push({
            cb,
            data: state
        })
        return state
    }

    const reset = () => {
        for (let { cb, data } of stateStore) {
            Object.assign(data, cb())
        }
    }

    return {
        reset,
        create
    }
}

export type StateManager = ReturnType<typeof createStateManager>
