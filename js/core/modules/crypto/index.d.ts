type Support = 'php-encryption' | 'crypto-js';
export declare class CryptoAES {
    static decrypt<T extends Support>(from: T, target: string, key: string): string;
    static encrypt<T extends Support>(from: T, target: string, key: string): string;
}
export {};
