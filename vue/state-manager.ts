import { useVueHooks } from '../core/index'
import { defineModelHook } from './model-hook'

type Model = ReturnType<typeof defineModelHook>['_ModelType']

export const createStateManager = () => {

    type Store = {
        cb: () => any
        data: any
        isModel: boolean
    }

    const { ref, reactive } = useVueHooks()
    const stateStore: Array<Store> = []

    const refModel = <T extends Model>(model: T) => {
        const result = ref(model)
        stateStore.push({
            cb: () => null,
            data: result,
            isModel: true
        })
        return result
    }

    const create = <T extends Record<string, unknown>>(cb: () => T) => {
        const state = reactive(cb())
        stateStore.push({
            cb,
            data: state,
            isModel: false
        })
        return state
    }

    const reset = () => {
        for (let { cb, data, isModel } of stateStore) {
            if (isModel) {
                data.rebuild()
            } else {
                Object.assign(data, cb())
            }
        }
    }

    return {
        reset,
        create,
        refModel
    }
}
