import { LocalStorage } from 'power-helper';
export declare const getLocalStorage: () => LocalStorage<{
    tablefilterMemories: Record<string, string[]>;
}>;
export declare const getPersistDataStorage: () => LocalStorage<Record<string, any>>;
