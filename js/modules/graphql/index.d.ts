import { OperationContext } from 'urql';
type StrapiData = {
    id?: string | null;
    attributes?: any;
};
type StrapiList<D extends StrapiData[] = StrapiData[], M extends Record<string, any> = Record<string, any>> = {
    data: D;
    meta: M;
};
type ResultToStrapiList<D extends StrapiData[], M> = {
    meta: M;
    data: {
        id: string;
        attributes: NonNullable<D[0]['attributes']>;
    }[];
};
type ResultToStrapiData<D extends StrapiData> = {
    data: {
        id: string;
        attributes: NonNullable<D['attributes']>;
    };
};
type HookChannels<K extends string> = {
    request: {
        name: K;
        context: Partial<OperationContext>;
    };
    response: {
        name: K;
        result: any;
        context: Partial<OperationContext>;
    };
};
export declare class Graphql<D extends Record<string, {
    __apiType?: any;
}>> {
    _resultType: {
        [K in keyof D]: ReturnType<NonNullable<D[K]['__apiType']>>;
    };
    private hooks;
    private client;
    private documents;
    constructor(url: string, documents: D);
    interceptorRequest(cb: (_params: HookChannels<Extract<keyof D, string>>['request']) => Promise<any>): void;
    interceptorResponse(cb: (_params: HookChannels<Extract<keyof D, string>>['response']) => Promise<any>): void;
    query<K extends keyof D, V = Parameters<NonNullable<D[K]['__apiType']>>[0], R = ReturnType<NonNullable<D[K]['__apiType']>>>(name: K, variable: V): Promise<{ [K_2 in keyof R]-?: NonNullable<R[K_2]>; } extends infer T ? { [K_1 in keyof T]: { [K_2 in keyof R]-?: NonNullable<R[K_2]>; }[K_1] extends StrapiList<StrapiData[], Record<string, any>> ? ResultToStrapiList<{ [K_2 in keyof R]-?: NonNullable<R[K_2]>; }[K_1]["data"], { [K_2 in keyof R]-?: NonNullable<R[K_2]>; }[K_1]["meta"]> : { [K_2 in keyof R]-?: NonNullable<R[K_2]>; }[K_1] extends {
        data?: StrapiData | undefined;
    } ? ResultToStrapiData<NonNullable<{ [K_2 in keyof R]-?: NonNullable<R[K_2]>; }[K_1]["data"]>> : { [K_2 in keyof R]-?: NonNullable<R[K_2]>; }[K_1]; } : never>;
}
export {};
