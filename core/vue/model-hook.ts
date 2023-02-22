// https://www.gushiciku.cn/pl/g2DO/zh-tw

import { diff as _diff } from 'deep-object-diff'
import { reactive, watch } from 'vue'
import { useListenerGroup } from './listener-group'
import { createStateManager } from './state-manager'
import { Event, record, json } from 'power-helper'

type Context<S> = {
    data: S
    commit: (_newData: Partial<S>) => void
    stateManager: ReturnType<typeof createStateManager>
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
            from: 0,
            path: '',
            per_page: 10,
            to: 0
        }
    }
}

export const createStrapiListResource = <T>() => {
    return {
        data: [] as {
            id: string
            attributes: T
        }[],
        meta: {
            pagination: {
                page: 1,
                pageSize: 10,
                pageCount: 0,
                total: 0
            }
        }
    }
}

export const defineModelHook = <
    S extends Record<any, any>,
    R extends Record<any, any>,
    T extends Record<any, (..._args: any[]) => any>,
>(params: {
    name: string
    schema: () => S
    static?: T,
    mixin: (_data: Context<S>) => R
}) => {
    const use = () => {
        const data = reactive(params.schema())
        const oridata = params.schema()
        const stateManager = createStateManager()

        // =================
        //
        // 負責監聽資料變化
        //

        const event = new Event<{
            update: Record<string, any>
            rebuild: Record<string, any>
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

        /** 將資料重新設定成最後 commit 的資料 */
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

        /** 比較現在的狀態與 最後 commit 的資料是否有異 */
        const isModified = () => {
            return diff(oridata)
        }

        /** 將資料重新設定成初始資料，並將儲存的資料也改成初始資料 */
        const rebuild = () => {
            stateManager.reset()
            clear()
            Object.assign(oridata, params.schema())
            event.emit('rebuild', {})
        }

        // =================
        //
        // 輸出資料
        //

        const mixin = params.mixin({
            data,
            commit,
            stateManager
        })

        // =================
        //
        // done
        //

        return {
            d: data,
            data,
            diff,
            clear,
            reset,
            event,
            commit,
            assign,
            rebuild,
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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ...params.static!,
        _ModelType: null as any as ReturnType<typeof use>,
        _SchemaType: null as any as S,
        use,
        from,
        /** 只獲取 schema */
        row: () => params.schema(),
        /** 同步監聽資料變化 */
        sync: (data: S, emit?: (_data: S) => void) => {
            const model = from(data)
            const listenerGroup = useListenerGroup()

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
                listenerGroup.push([
                    model.event.on('update', () => emit(model.data))
                ])
            }

            // =================
            //
            // done
            //

            return model
        }
    }
}
