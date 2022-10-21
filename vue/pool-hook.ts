import { Cache, QueryCollection } from 'power-helper'

type Params<P, D> = {
    find: (_data: D, _params: P) => boolean
    fetch: (_params: P[]) => D[]
    waitTime?: number
    keepAlive?: number
}

export const definePoolHook = <P, D>({ find, fetch, waitTime, keepAlive }: Params<P, D>) => {

    const collection = new QueryCollection<P, D>({
        waitTime: waitTime || 100,
        query: async(items) => {
            let result = await fetch(items)
            return result
        }
    })

    const dataCache = new Cache<P, D>({
        keepAlive: keepAlive || 1000 * 60 * 5,
        key: params => JSON.stringify(params),
        pick: async(params) => {
            let items = await collection.push(params)
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return items.find(item => find(item, params))!
        }
    })

    return {
        use: () => {
            return {
                async find(params: P) {
                    const result = dataCache.get(params)
                    return result
                },
                async list(items: P[]) {
                    const result = await Promise.all(items.map(params => dataCache.get(params)))
                    return result
                },
                remove(params: P) {
                    dataCache.remove(params)
                },
                clear() {
                    dataCache.clear()
                }
            }
        }
    }
}
