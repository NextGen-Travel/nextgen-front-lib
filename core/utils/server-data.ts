
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

export const createStrapiList = <T>() => {
    return {
        msg: '',
        data: [] as Array<T>,
        pagination: {
            page: 1,
            pageSize: 10,
            pageCount: 0,
            total: 0
        }
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
