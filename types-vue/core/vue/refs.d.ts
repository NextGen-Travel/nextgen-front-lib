import { GlobalComponents } from 'vue';
import { NgComponents } from '../../types/index';
type AllCompoents = GlobalComponents & NgComponents;
export declare const refComponents: <K extends keyof GlobalComponents | keyof NgComponents, N = AllCompoents[K] extends abstract new (..._args: any) => any ? InstanceType<AllCompoents[K]> : unknown>(_key: K) => import("vue").Ref<N | undefined>;
export {};
