// https://www.gushiciku.cn/pl/g2DO/zh-tw

import { reactive, watch } from 'vue'
import { genStateManager } from '../mixins/state-manager'
import { Event, record, json } from 'power-helper'

type Context<S> = {
    data: S
    commit: (_newData: Partial<S>) => void
    stateManager: ReturnType<typeof genStateManager>
}

export type ModelType<T extends { use: () => any }> = ReturnType<T['use']>

export const defineSchema = <D, T extends () => D>(data: T): T => data

export const defineModel = <
    S extends Record<any, any>,
    R extends Record<any, any>
>(params: {
    name: string
    schema: () => S
    mixin: (_data: Context<S>) => R
}) => {
    const gen = () => {
        const data = reactive(params.schema())
        const oridata = params.schema()
        const stateManager = genStateManager()

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
            return record.simpleCheckDeepDiff<S>(data, target)
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

        const raw = () => {
            return json.jpjs(data)
        }

        // =================
        //
        // 輸出資料
        //

        const methods = {
            raw,
            diff,
            clear,
            reset,
            commit,
            assign,
            rebuild,
            isModified
        }

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
            m: methods,
            e: event,
            ...mixin
        }
    }

    /** 當有存在既有資料時可以進行轉換，例如 vuex */

    const from = (data?: S) => {
        let model = gen()
        if (data) {
            model.commit(data)
        }
        return model
    }

    return {
        _ModelType: null as any as ReturnType<typeof gen>,
        _SchemaType: null as any as S,
        gen,
        from,
        /** 只獲取 schema */
        raw: () => params.schema(),
        /** 同步監聽資料變化 */
        sync: (data: S, emit?: (_data: S) => void) => {
            const model = from(data)

            // =================
            //
            // watch
            //

            watch(() => data, () => {
                if (model.m.diff(data)) {
                    model.m.assign(data)
                }
            }, {
                deep: true
            })

            watch(() => model.d, () => {
                if (emit) {
                    emit(model.d)
                }
            }, {
                deep: true
            })

            // =================
            //
            // done
            //

            return model
        }
    }
}
