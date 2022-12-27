type Support = 'php-encryption' | 'crypto-js';
export declare class CryptoAES {
    static decrypt<T extends Support>(from: T, target: string, key: string): string;
    static encrypt<T extends Support>(from: T, target: string, key: string): string;
    static loaclStroageIntercept(ns: string): {
        get(key: string, value: any, { storage, isDefault, defaultValue }: any): any;
        set(key: string, value: any): {
            hash: string;
            data: any;
            createdAt: number;
        };
    };
}
export {};
