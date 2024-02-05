import { Debounce } from 'power-helper';
export declare const useDebounce: (cb: () => void, delay?: number, maxValueLength?: number) => Debounce<unknown>;
