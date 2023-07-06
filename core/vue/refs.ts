import { GlobalComponents, ref } from 'vue'
import { NgComponents } from '../../types/index'
import * as VuetifyComponents from 'vuetify/components'

type AllCompoents = GlobalComponents & NgComponents & typeof VuetifyComponents

export const refComponents = <
    K extends keyof AllCompoents,
    N = AllCompoents[K] extends (abstract new (..._args: any) => any) ? InstanceType<AllCompoents[K]> : unknown
>(_key: K) => ref<N>()
