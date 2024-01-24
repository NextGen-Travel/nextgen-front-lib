import { getLibEnv } from '../../index'
import { RouterPlus } from '../../vue-extends/router-plus'
import { useDebounce } from '../../composables/debounce'
import { Event, array } from 'power-helper'
import { PersistState } from '../persist-state'
import { Debounce, record, JobsQueue } from 'power-helper'
import { watch, onUnmounted, reactive } from 'vue'

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

const querySyncStateManager = new PersistState({
    ns: () => {
        const env = getLibEnv()
        return `lib-query-sync-${env.service}-${env.stage}`
    }
})

export class QuerySync {
    static define = <T extends Query>(params: {
        ns: () => string
        defs: () => T
        persist: boolean
        install?: (_filter: Filter<T>) => void
        router: () => RouterPlus<any>
    }) => {
        const ns = params.ns()
        const def = params.defs()
        const state = params.persist ? querySyncStateManager.create(ns, params.defs()) : reactive(params.defs())
        const jobsQueue = new JobsQueue({
            concurrentExecutions: 1
        })
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
                queryToState()
            }, 25)
    
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
                jobsQueue.push('', async() => {
                    const defs = params.defs()
                    const query: Record<string, undefined | string> = {}
                    for (let key in defs) {
                        query[getKey(key)] = undefined
                        console.log('CCC', key, state[key], defs[key])
                        let item = state[key]
                        if (item == null) {
                            continue
                        }
                        if (item === defs[key]) {
                            continue
                        }
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        if (Array.isArray(item) && Array.isArray(defs[key]) && item.slice().sort().join(',') === defs[key].sort().join(',')) {
                            continue
                        }
                        query[getKey(key)] = item as any
                    }
                    router.pushQuery(query)
                })
            }
    
            const queryToState = () => {
                jobsQueue.push('', async() => {
                    let route = router.getCurrentRoute()
                    if (route.query) {
                        const query = route.query
                        const queryData: any = {}
                        for (let key in query) {
                            queryData[key.slice(`l-${ns}-`.length)] = query[key]
                        }
                        const newState = record.setMapValue(params.defs(), queryData)
                        if (record.simpleCheckDeepDiff(state, newState)) {
                            Object.assign(state, newState)
                        }
                    }
                })
            }

            queryToState()
    
            // =================
            //
            // event
            //
    
            const routerEvent = router.on('after', () => debounce.input(''))

            // =================
            //
            // mounted
            //
    
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
                return record.simpleCheckDeepDiff(def, state)
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
}
