import { Event } from 'power-helper';
declare type StepTypes = 'step' | 'wrong' | 'notify';
declare type StepLevel = 'info' | 'warning' | 'danger' | 'success';
declare type Step = {
    type: StepTypes;
    meta?: any;
    level: StepLevel;
    message: string;
    createdAt: number;
    checkoutAt: string;
};
declare type Channels = {
    action: Step;
};
declare type Options = {
    name: string;
    parent?: Interaction;
    interceptorMessage: (_data: any) => string;
};
export declare class Interaction extends Event<Channels> {
    name: string;
    steps: Step[];
    parent?: Interaction;
    interceptorMessage: Options['interceptorMessage'];
    constructor({ name, parent, interceptorMessage }: Options);
    private pushStep;
    each(cb: (_step: Step) => void): void;
    step(message: string, meta?: any): void;
    wrong(message: any): void;
    checkout(name: string): Pick<Interaction, 'wrong' | 'notify' | 'checkout' | 'step'>;
    notify<T>(type: 'info' | 'warning' | 'danger' | 'success', content: T): void;
}
export {};
