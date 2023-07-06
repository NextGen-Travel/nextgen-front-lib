import { GlobalComponents, ref } from 'vue'

export const refComponents = <K extends keyof GlobalComponents>(_key: K) => ref<InstanceType<GlobalComponents[K] & (new (..._args: any[]) => any)>>()
