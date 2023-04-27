import { watch, onUnmounted } from 'vue'
import { useLibEnv } from '../index'
import { VueRouterPlus } from './router-plus'
import { PersistStateManager } from './persist-state'
import { useDebounce } from './debounce'

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
    router: () => VueRouterPlus<any>
}) => {
    const ns = params.ns()
    const state = querySyncStateManager.create(ns, params.defs())
    return () => {
        const router = params.router()
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
                let item: any = query[`${ns}-${key}`]
                if (item) {
                    if (Array.isArray(defs[key])) {
                        state[key] = item.split(',')
                        continue
                    }
                    if (typeof defs[key] === 'number') {
                        item = Number(item)
                        if (isNaN(item) === false) {
                            state[key] = item
                            continue
                        }
                    }
                    if (typeof defs[key] === 'string') {
                        state[key] = item
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
                query[`${ns}-${key}`] = undefined
                let item = state[key]
                if (item == null) {
                    continue
                }
                if (item === defs[key]) {
                    continue
                }
                if (Array.isArray(item)) {
                    query[`${ns}-${key}`] = item.join(',')
                    continue
                }
                query[`${ns}-${key}`] = item
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
