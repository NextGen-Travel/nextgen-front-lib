// see https://livecycle.io/blogs/graphql-and-typescript/
import { pick, Hook } from 'power-helper'
import { createClient, Client, OperationContext } from 'urql'

type StrapiData = {
    id?: string | null
    attributes?: any
}

type StrapiList<
    D extends StrapiData[] = StrapiData[],
    M extends Record<string, any> = Record<string, any>
> = {
    data: D
    meta: M
}

type ResultToStrapiList<D extends StrapiData[], M> = {
    meta: M
    data: {
        id: string
        attributes: NonNullable<D[0]['attributes']>
    }[]
}

type ResultToStrapiData<D extends StrapiData> = {
    data: {
        id: string
        attributes: NonNullable<D['attributes']>
    }
}

type HookChannels = {
    request: {
        context: Partial<OperationContext>
    }
}

export class Graphql<
    D extends Record<string, {
        __apiType?: any
    }>
> {
    private hooks = new Hook<HookChannels>()
    private client: Client
    private documents: D
    constructor(url: string, documents: D) {
        this.documents = documents
        this.client = createClient({
            url
        })
    }

    interceptorRequest(cb: (_params: HookChannels['request']) => Promise<any>) {
        this.hooks.attach('request', cb)
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
        let context: Partial<OperationContext> = {}
        // 有無綁定上下文
        await this.hooks.notify('request', { context })

        // 發出請求
        let result = await this.client.query(this.documents[name] as any, fetchNonNullAttr(variable) as any, context).toPromise()
        let output = result.data as unknown as {
            [K in keyof R] - ?: NonNullable<R[K]>
        }

        // 講請求轉換成相應格式
        type Output = typeof output
        return output as unknown as {
            [K in keyof Output]: Output[K] extends StrapiList ? 
                ResultToStrapiList<Output[K]['data'], Output[K]['meta']> :
                Output[K] extends { data?: StrapiData } ? ResultToStrapiData<NonNullable<Output[K]['data']>> : Output[K]
        }
    }
}
