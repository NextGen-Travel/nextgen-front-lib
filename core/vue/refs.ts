import { GlobalComponents, ref } from 'vue'

export const refComponents = <
    K extends keyof GlobalComponents,
    N = GlobalComponents[K] extends (abstract new (..._args: any) => any) ? InstanceType<GlobalComponents[K]> : unknown
>(_key: K) => ref<N>()
