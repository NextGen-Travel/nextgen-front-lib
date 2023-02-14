<template>
    <v-date-picker
        ref="picker"
        v-model="value"
        is-range
        is-required
        :model-config="state.modelConfig"
    />
</template>

<script lang="ts" setup>
// https://vcalendar.io
import { VueSelf } from '../self'
import { watch, computed, onMounted, ref, nextTick, PropType } from 'vue'

const self = VueSelf.use()

// =================
//
// defined
//

const props = defineProps({
    modelValue: {
        type: Array as unknown as PropType<[number, number]>,
        required: false,
        default: () => [Date.now(), Date.now()]
    }
})

const emit = defineEmits({
    'update:modelValue': (_value: [number, number]) => true,
    'selected': () => true
})

// =================
//
// ref
//

const picker = ref()

// =================
//
// state
//

const state = self.data({
    modelConfig: {
        type: 'number'
    }
})

// =================
//
// mounted
//

onMounted(() => {
    nextTick(() => {
        picker.value.refreshDateParts()
    })
})

// =================
//
// computed
//

const value = computed({
    get: () => {
        return {
            start: props.modelValue[0],
            end: props.modelValue[1]
        }
    },
    set: (value) => emit('update:modelValue', [value.start, value.end])
})

// =================
//
// watch
//

watch(() => value.value, () => {
    if (value.value.end && value.value.start) {
        emit('selected')
    }
}, { deep: true })

</script>
