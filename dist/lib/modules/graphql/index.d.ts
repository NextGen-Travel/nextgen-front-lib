import { TypedDocumentNode } from 'urql';
export declare class Graphql<D extends Record<string, TypedDocumentNode>> {
    private client;
    private documents;
    constructor(url: string, documents: D);
    query<K extends keyof D, V = Parameters<NonNullable<D[K]['__apiType']>>[0], R = ReturnType<NonNullable<D[K]['__apiType']>>>(name: K, variable: V): Promise<R>;
}
