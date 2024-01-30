declare type Type = 'step' | 'wrong' | 'notify' | 'fail';
declare type Level = 'info' | 'warning' | 'danger' | 'success';
type Message = {
    url: string;
    time: number;
    type: Type;
    text: string;
    level: Level;
};
type NextgenMessageTraceParams = {
    limitSize: number;
    platform: 'web' | 'android' | 'ios' | 'server';
    appVersion: () => Promise<string>;
    clientId: () => string;
    serverUrl: () => string;
};
export declare class NextgenMessageTrace {
    params: NextgenMessageTraceParams;
    messages: Message[];
    fingerId: string;
    visitorId: string;
    jobsQueue: import("power-helper/dist/modules/jobs-queue").JobsQueue;
    constructor(params: NextgenMessageTraceParams);
    get size(): number;
    clearMessages(): Message[];
    collect(message: Omit<Message, 'time' | 'url'>): void;
    send(): void;
}
export {};
