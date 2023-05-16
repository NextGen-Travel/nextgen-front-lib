import { ref } from 'vue'
// eslint-disable-next-line vue/prefer-import-from-vue
import type { GlobalComponents } from '@vue/runtime-core'

export const refComponents = <K extends keyof GlobalComponents>(_key: K) => ref<InstanceType<GlobalComponents[K]>>()

// TODO: no doc
export const getComponentsProps = <K extends keyof GlobalComponents>(_key: K, props: Partial<InstanceType<GlobalComponents[K]>['$props']>) => {
    return props
}
