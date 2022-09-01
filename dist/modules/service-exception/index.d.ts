import { Event } from 'power-helper';
declare type Channels = {
    fail: {
        error: any;
        message: string;
    };
};
declare type Options = {
    customPaser: (_data: any) => string | null;
    defaultError: () => string;
};
export declare class ServiceException extends Event<Channels> {
    private serviceName;
    private parent;
    private options;
    constructor(serviceName: string, options?: Partial<Options>);
    _setParent(serviceException: ServiceException): void;
    _getRootModule(): ServiceException;
    get fullName(): string;
    parseMessage(data: any): string;
    fail(error: any): Error;
    checkout(serviceName: string): ServiceException;
}
export {};
