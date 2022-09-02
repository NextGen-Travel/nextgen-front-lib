import { DeepReadonly } from 'power-helper/types/record';
declare type Params = {
    [key: string]: [typeof String | typeof Boolean | typeof Number, boolean, unknown];
};
export declare const createStrictObject: <T extends Params>(envs: T) => DeepReadonly<{ [key in keyof T]: T[key][0] extends StringConstructor ? string : T[key][0] extends NumberConstructor ? number : T[key][0] extends BooleanConstructor ? boolean : unknown; }>;
export {};
