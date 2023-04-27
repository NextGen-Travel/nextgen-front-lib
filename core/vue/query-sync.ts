import { Event } from 'power-helper'
import { useLibEnv } from '../index'
import { useDebounce } from './debounce'
import { VueRouterPlus } from './router-plus'
import { PersistStateManager } from './persist-state'
import { watch, onUnmounted, reactive } from 'vue'

type Query = Record<string, undefined | string | number | string[]>

const querySyncStateManager = new PersistStateManager({
    ns: () => {
        const env = useLibEnv()
        return `lib-query-sync-${env.service}-${env.stage}`
    }
})

export const defineQuerySync = <T extends Query>(params: {
    ns: () => string
    defs: () => T
    persist: boolean
    router: () => VueRouterPlus<any>
}) => {
    const ns = params.ns()
    const state: Record<string, any> = params.persist ? querySyncStateManager.create(ns, params.defs()) : reactive(params.defs())
    return () => {
        const router = params.router()
        const getKey = (key: string) => `l-${ns}-${key}`
        const event = new Event<{
            change: any
        }>()

        // =================
        //
        // debounce
        //

        const debounce = useDebounce(() => {
            let route = router.getCurrentRoute()
            if (route.query) {
                syncQuery(route.query)
            }
        })

        const changeDebounce = useDebounce(() => {
            event.emit('change', {})
        })

        // =================
        //
        // sync query
        //

        const syncQuery = (query: Query) => {
            const defs = params.defs()
            for (let key in defs) {
                let item: any = query[getKey(key)]
                if (item) {
                    if (Array.isArray(defs[key])) {
                        if (Array.isArray(item)) {
                            if (state[key] && item.toString() !== state[key].toString()) {
                                state[key] = item
                            }
                        } else if (state[key] && item.toString() !== state[key].toString()) {
                            state[key] = [item]
                        }
                        continue
                    }
                    if (typeof defs[key] === 'number') {
                        item = Number(item)
                        if (isNaN(item) === false && item !== state[key]) {
                            state[key] = item
                        }
                        continue
                    }
                    if (typeof defs[key] === 'string') {
                        if (item !== state[key]) {
                            state[key] = item
                        }
                        continue
                    }
                }
            }
        }

        syncQuery(router.getCurrentRoute().query)

        // =================
        //
        // event
        //

        const routerEvent = router.on('after', () => debounce.input(''))

        onUnmounted(() => {
            routerEvent.off()
        })

        // =================
        //
        // watch
        //
    
        watch(() => state, () => {
            const defs = params.defs()
            const query: Record<string, undefined | number | string> = {}
            for (let key in defs) {
                query[getKey(key)] = undefined
                let item = state[key]
                if (item == null) {
                    continue
                }
                if (item === defs[key]) {
                    continue
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (Array.isArray(item) && Array.isArray(defs[key]) && item.join(',') === defs[key].join(',')) {
                    continue
                }
                query[getKey(key)] = item as any
            }
            router.pushQuery(query)
            changeDebounce.input('')
        }, {
            deep: true
        })

        // =================
        //
        // reset
        //

        const reset = () => {
            Object.assign(state, params.defs())
        }

        // =================
        //
        // done
        //

        return {
            state,
            reset,
            event
        }
    }
}
