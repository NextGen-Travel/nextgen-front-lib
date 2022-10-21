// import { useVueHooks } from '../core/index'
// import { defineModelHook } from './model-hook'
// import { diff as _diff } from 'deep-object-diff'
// import { Cache, QueryCollection } from 'power-helper'

// type Hook = ReturnType<typeof defineModelHook>
// type Params<T extends () => Promise<any>> = {
//     fetch: T
// }

// const defaultParams: Partial<Params> = {
    
// }

// export const defineModelPool = <T extends Hook>(hook: T, params: Params) => {

//     const queryCollection = new QueryCollection<T, ReturnType<T['use']>>({
//         waitTime: 100,
//         query: async(items) => {

//         }
//     })

//     const dataCache = new Cache<string>({
//         keepAlive: 1000 * 60 * 5,
//         key: ({ name }) => name,
//         pick: async({ name }) => {
//             let users = await collection.push({ name })
//             return users.find(user => user.name === name)
//         }
//     })

//     return {
//         use: () => {
//             return {
//                 fetch() {
//                     return hook.use()
//                 },
//                 batchFetch() {

//                 },
//                 toKey() {

//                 },
//                 remove(key: string) {
//                     dataCache.remove(key)
//                 },
//                 clear() {
//                     dataCache.clear()
//                 }
//             }
//         }
//     }
// }
