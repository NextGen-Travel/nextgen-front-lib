import { ref } from 'vue'
import { GlobalComponents } from '@vue/runtime-core'

export const refComponents = <K extends keyof GlobalComponents>(_key: K) => ref<InstanceType<GlobalComponents[K]>>()
