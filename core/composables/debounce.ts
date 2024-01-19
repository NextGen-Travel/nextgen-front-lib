import { Debounce } from 'power-helper'
import { onMounted, onUnmounted } from 'vue'

export const useDebounce = (cb: () => void, delay = 100, maxValueLength = 100) => {
    const debounce = new Debounce({
        delay,
        maxValueLength
    })

    onMounted(() => {
        debounce.on('trigger', cb)
    })

    onUnmounted(() => {
        debounce.close()
    })

    return debounce
}
