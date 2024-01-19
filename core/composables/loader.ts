import { Loader } from 'power-helper'
import {  onUnmounted, reactive } from 'vue'

export const useLoader = () => {
    const loader = reactive(new Loader())
    onUnmounted(() => {
        loader.clear()
    })
    return loader as unknown as Loader<any>
}
