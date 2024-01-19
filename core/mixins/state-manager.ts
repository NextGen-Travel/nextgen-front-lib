import { reactive } from 'vue'

type Store = {
    cb: () => any
    data: any
}

export const genStateManager = () => {
    const stateStore: Array<Store> = []

    const create = <T extends Record<string, any>>(cb: () => T): T => {
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

export type StateManager = ReturnType<typeof genStateManager>
