// see https://livecycle.io/blogs/graphql-and-typescript/
import { pick } from 'power-helper'
import { createClient, Client } from 'urql'

type StrapiList<
    D extends { id?: string | null, attributes?: any }[] = { id?: string | null, attributes?: any }[],
    M extends Record<string, any> = Record<string, any>
> = {
    data: D
    meta: M
}

type ResultToStrapiList<D extends { id?: string | null, attributes?: any }[], M> = {
    meta: M
    data: {
        id: string
        attributes: NonNullable<D[0]['attributes']>
    }[]
}

export class Graphql<
    D extends Record<string, {
        __apiType?: any
    }>
> {
    private client: Client
    private documents: D
    constructor(url: string, documents: D) {
        this.documents = documents
        this.client = createClient({
            url
        })
    }

    async query<
        K extends keyof D,
        V = Parameters<NonNullable<D[K]['__apiType']>>[0],
        R = ReturnType<NonNullable<D[K]['__apiType']>>
    >(name: K, variable: V) {
        let fetchNonNullAttr = (data: any) => {
            if (pick.getType(data) === 'object') {
                let output: any = {}
                for (let key in data) {
                    if (data[key] != null) {
                        output[key] = data[key]
                    }
                }
                return output
            } else {
                return {}
            }
        }
        let result = await this.client.query(this.documents[name] as any, fetchNonNullAttr(variable) as any).toPromise()
        let output = result.data as unknown as {
            [K in keyof R] - ?: NonNullable<R[K]>
        }
        type Output = typeof output
        return output as unknown as {
            [K in keyof Output]: Output[K] extends StrapiList ? ResultToStrapiList<Output[K]['data'], Output[K]['meta']> : Output[K]
        }
    }
}
