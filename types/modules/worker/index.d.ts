import { Event } from 'power-helper';
export type NextGenWorkerFrom<T extends ReturnType<typeof NextGenWorker.define>, E extends Event<any> = T['_event'], M extends Record<string, (..._args: any[]) => Promise<any>> = T['_methods']> = {
    on: E['on'];
    methods: M;
    terminate: () => void;
};
export declare class NextGenWorker {
    static inWorker(): boolean;
    static define<E extends Event<any>, M extends Record<string, (..._args: any[]) => Promise<any>>>(cb: (_event: E) => M): {
        _event: E;
        _methods: M;
        createInMainProcess: () => {
            on: E["on"];
            methods: M;
            terminate: () => void;
        };
    };
    static from<T extends ReturnType<typeof NextGenWorker.define>, E extends Event<any> = T['_event'], M extends Record<string, (..._args: any[]) => Promise<any>> = T['_methods']>(workerInstance: Worker | (new () => Worker)): {
        on: E["on"];
        methods: M;
        terminate: () => void;
    };
}
