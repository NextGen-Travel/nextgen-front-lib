type Options = {
    ttl?: Record<string, number>;
    version?: number;
};
export declare const loaclStroageIntercept: (ns: string, options?: Options) => {
    get(key: string, value: any, { storage, isDefault, defaultValue }: any): any;
    set(key: string, value: any): {
        hash: string;
        data: any;
        version: number;
        expiredAt: number;
        createdAt: number;
    };
};
export declare const asyncLoaclStroageIntercept: (ns: string, options?: Options) => {
    get(key: string, value: any, { storage, isDefault, defaultValue }: any): Promise<any>;
    set(key: string, value: any): Promise<{
        data: string;
        version: number;
        expiredAt: number;
        createdAt: number;
    }>;
};
export {};
