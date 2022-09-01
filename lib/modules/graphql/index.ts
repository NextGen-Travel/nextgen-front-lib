// see https://livecycle.io/blogs/graphql-and-typescript/
import { createClient, Client, TypedDocumentNode } from 'urql'

export class Graphql<
    D extends Record<string, TypedDocumentNode>
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
        let result = await this.client.query(this.documents[name], variable as any).toPromise()
        return result.data as unknown as R
    }
}
