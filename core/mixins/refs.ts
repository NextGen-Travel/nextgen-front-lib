import { ref } from 'vue'
import { NgComponents } from '../components'
import * as VuetifyComponents from 'vuetify/components'

type AllCompoents =  NgComponents & typeof VuetifyComponents

export const genRef = <
    K extends keyof AllCompoents,
    N = AllCompoents[K] extends (abstract new (..._args: any) => any) ? InstanceType<AllCompoents[K]> : unknown
>(_key: K) => ref<N>()
