type StrapiList = {
    meta: {
        pagination: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
    data: {
        id: string
        attributes: Record<string, any>
    }[]
}

export const fetchAll = async<T, R>(params: {
    pick: (_result: R) => T[]
    done: (_result: R) => boolean
    fetch: (_page: number) => Promise<R>
}) => {
    let page = 1
    let outputs: T[] = []
    let loops = 100
    while (loops > 0) {
        let result = await params.fetch(page)
        outputs.push(...params.pick(result))
        page += 1
        loops -= 1
        if (params.done(result)) {
            break
        }
    }
    return outputs
}

export const fetchAllForStrapi = async<T extends StrapiList>(cb: (_page: number) => Promise<T>) => {
    const items = await fetchAll<T['data'][0], T>({
        done: result => result.meta.pagination.total <= (result.meta.pagination.page * result.meta.pagination.pageSize),
        pick: result => result.data,
        fetch: async(page) => {
            let result = await cb(page)
            return result
        }
    })
    return items
}
