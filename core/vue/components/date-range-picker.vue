<template>
    <DatePicker
        ref="picker"
        v-model.number="value"
        is-range
        is-required
        :mode="mode"
    />
</template>

<script lang="ts" setup>
// https://vcalendar.io
import { watch, computed, onMounted, ref, nextTick, PropType } from 'vue'
import { DatePicker } from 'v-calendar'

// =================
//
// defined
//

const props = defineProps({
    mode: {
        type: String as PropType<'date' | 'datetime'>,
        required: false,
        default: () => 'date'
    },
    modelValue : {
        type: Array as unknown as PropType<[number | null, number | null]>,
        required: false,
        default: () => [Date.now(), Date.now()] as [number, number]
    }
})

const emit = defineEmits({
    'update:modelValue': (_value: [number | null, number | null]) => true,
    'selected': () => true
})

// =================
//
// ref
//

const picker = ref()

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
