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
    const state = params.persist ? querySyncStateManager.create(ns, params.defs()) : reactive(params.defs())
    return () => {
        const router = params.router()
        const getKey = (key: string) => `l-${ns}-${key}`
        const debounce = useDebounce(() => {
            let route = router.getCurrentRoute()
            if (route.query) {
                syncQuery(route.query)
            }
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
                        console.log('DDD', item)
                        let value = item.split(',')
                        if (value !== state[key]) {
                            state[key] = item
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
            reset
        }
    }
}
