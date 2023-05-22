import { Event, array } from 'power-helper'
import { useLibEnv } from '../index'
import { useDebounce } from './debounce'
import { Debounce } from 'power-helper'
import { VueRouterPlus } from './router-plus'
import { PersistStateManager } from './persist-state'
import { watch, onUnmounted, reactive } from 'vue'
import { diff as _diff } from 'deep-object-diff'

type Query = Record<string, undefined | null | string | string[]>
type Events = {
    input: {
        key: string
    }
    change: {
        keys: string[]
    }
}

type Filter<T> = {
    state: T
    reset: () => void
    event: Event<Events>
    isChange: () => void
    stateToQuery: () => void
}

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
    install?: (_filter: Filter<T>) => void
    router: () => VueRouterPlus<any>
}) => {
    const ns = params.ns()
    const def = params.defs()
    const state = params.persist ? querySyncStateManager.create(ns, params.defs()) : reactive(params.defs())
    const globState = {
        installed: false
    }
    return () => {
        const router = params.router()
        const getKey = (key: string) => `l-${ns}-${key}`
        const event = new Event<Events>()

        // =================
        //
        // debounce
        //

        const debounce = useDebounce(() => {
            let route = router.getCurrentRoute()
            if (route.query) {
                queryToState(route.query)
            }
        })

        const changeDebounce = new Debounce<string>({
            delay: 100,
            maxValueLength: 100
        })

        changeDebounce.on('trigger', ({ values }) => {
            event.emit('change', {
                keys: array.unique(values)
            })
        })

        // =================
        //
        // sync
        //

        const stateToQuery = () => {
            const defs = params.defs()
            const query: Record<string, undefined | string> = {}
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
        }

        const queryToState = (query: Query) => {
            const defs = params.defs()
            for (let key in defs) {
                let item: any = query[getKey(key)]
                if (item) {
                    if (Array.isArray(defs[key])) {
                        if (Array.isArray(item)) {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            if (state[key] && item.toString() !== state[key].toString()) {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                state[key] = item
                            }
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        } else if (state[key] && item.toString() !== state[key].toString()) {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            state[key] = [item]
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

        queryToState(router.getCurrentRoute().query)

        // =================
        //
        // event
        //

        const routerEvent = router.on('after', () => debounce.input(''))

        onUnmounted(() => {
            routerEvent.off()
            changeDebounce.close()
        })

        // =================
        //
        // watch
        //
    
        for (let key in state) {
            watch(() => state[key], () => {
                stateToQuery()
                event.emit('input', { key })
                changeDebounce.input(key)
            }, {
                deep: true
            })
        }

        // =================
        //
        // methods
        //

        const reset = () => {
            Object.assign(state, params.defs())
        }

        const isChange = () => {
            return Object.keys(_diff(def, state)).length !== 0
        }

        const paramsToQuery = (params: Partial<Record<keyof T, string | string[]>>) => {
            const outputs: Record<string, string | string[]> = {}
            for (let key in params) {
                outputs[getKey(key)] = params[key] as any
            }
            return outputs
        }

        // =================
        //
        // done
        //

        const output = {
            state,
            reset,
            event,
            isChange,
            stateToQuery,
            paramsToQuery
        }

        if (globState.installed === false) {
            globState.installed = true
            if (params.install) {
                params.install(output as any)
            }
        }

        return output
    }
}
