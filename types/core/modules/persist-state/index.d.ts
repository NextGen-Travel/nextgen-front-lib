type Params = {
    ns: () => string;
};
export declare class PersistState {
    private params;
    private aliveMap;
    constructor(params: Params);
    private toKey;
    create<T extends Record<string, any>>(key: string, data: T): T;
    remove(key: string): void;
}
export {};
