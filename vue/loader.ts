import { Loader } from 'power-helper'
import { onMounted, reactive, nextTick } from 'vue'

export const useLoader = (options = {
    autoStart: true
}) => {
    const loader = reactive(new Loader())
    onMounted(() => {
        if (options.autoStart) {
            nextTick(() => loader.start({}))
        }
    })
    return loader as unknown as Loader<any>
}
