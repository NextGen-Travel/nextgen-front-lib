import { GlobalComponents, ref } from 'vue'

export const refComponents = <K extends keyof GlobalComponents>(_key: K) => ref<InstanceType<GlobalComponents[K]>>()

// TODO: no doc
export const getComponentsProps = <K extends keyof GlobalComponents>(_key: K, props: Partial<InstanceType<GlobalComponents[K]>['$props']>) => {
    return props
}
