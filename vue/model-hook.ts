// https://www.gushiciku.cn/pl/g2DO/zh-tw

import { useVueHooks } from '../core/index'
import { diff as _diff } from 'deep-object-diff'
import { Event, record, json } from 'power-helper'

type Context<S> = {
    data: S
    commit: (_newData: Partial<S>) => void
}

export type ModelType<T extends { use: () => any }> = ReturnType<T['use']>

export const defineSchema = <D, T extends () => D>(data: T): T => data

export const createLaravelPaginate = <T>() => {
    return {
        total: 1,
        per_page: 1,
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 1,
        data: [] as T[]
    }
}

export const createLaravelResourcePaginate = <T>() => {
    return {
        data: [] as T[],
        links: {
            first: '',
            last: '',
            prev: '',
            next: ''
        },
        meta: {
            current_page: 1,
            last_page: 0,
            total: 0,
            from: '',
            path: '',
            per_page: 10,
            to: ''
        }
    }
}

export const createStrapiListResource = <T>() => {
    return {
        data: [] as {
            id: number
            attributes: T
        }[],
        meta: {
            pagination: {
                page: 1,
                pageSize: 10,
                pageCount: 0,
                total: 0,
                start: 0,
                limit: 10
            }
        }
    }
}

export const defineModelHook = <
    S extends Record<any, any>,
    R extends Record<any, any>
>(params: {
    name: string
    schema: () => S
    mixin: (_data: Context<S>) => R
}) => {
    const use = () => {
        const { reactive, watch } = useVueHooks()
        const data = reactive(params.schema())
        const oridata = params.schema()

        // =================
        //
        // 負責監聽資料變化
        //

        const event = new Event<{
            update: Record<string, unknown>
        }>()

        watch(() => data, () => event.emit('update', {}), {
            deep: true
        })

        // =================
        //
        // methods
        //

        /** 將資料重新設定成初始資料 */
        const clear = () => {
            Object.assign(data, params.schema())
        }

        /** 將資料重新設定成最後儲存的資料 */
        const reset = () => {
            Object.assign(data, json.jpjs(oridata))
        }

        /** 賦予資料 */
        const assign = (newData: Partial<S>) => {
            Object.assign(data, record.setMapValue(data, newData))
        }

        /** 將既有資料存為原始資料 */
        const commit = (newData: Partial<S>) => {
            assign(newData)
            Object.assign(oridata, json.jpjs(data))
        }

        /** 比較資料是否有異 */
        const diff = (target: S) => {
            return Object.keys(_diff(data, target)).length !== 0
        }

        /** 比較與原始資料是否有異 */
        const isModified = () => {
            return diff(oridata)
        }

        // =================
        //
        // 輸出資料
        //

        const mixin = params.mixin({
            data,
            commit
        })

        return {
            data,
            diff,
            clear,
            reset,
            event,
            commit,
            assign,
            isModified,
            ...mixin
        }
    }

    /** 當有存在既有資料時可以進行轉換，例如 vuex */

    const from = (data?: S) => {
        let model = use()
        if (data) {
            model.commit(data)
        }
        return model
    }

    return {
        use,
        from,
        /** 只獲取 schema */
        row: () => params.schema(),
        /** 同步監聽資料變化 */
        sync: (data: S, emit?: (_data: S) => void) => {
            const { onUnmounted, watch } = useVueHooks()
            const model = from(data)

            // =================
            //
            // watch
            //

            watch(() => data, () => {
                if (model.diff(data)) {
                    model.assign(data)
                }
            }, {
                deep: true
            })

            // =================
            //
            // listener
            //

            if (emit) {
                const listener = model.event.on('update', () => emit(model.data))
                onUnmounted(() => listener.off())
            }

            // =================
            //
            // done
            //

            return model
        }
    }
}
