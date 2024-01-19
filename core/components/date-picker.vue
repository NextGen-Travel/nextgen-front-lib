<template>
    <DatePicker
        ref="picker"
        v-model.number="value"
        mode="dateTime"
        is24hr
        is-required
    />
</template>

<script lang="ts" setup>
// https://vcalendar.io
import { computed, onMounted, ref, nextTick } from 'vue'
import { DatePicker } from 'v-calendar'

// =================
//
// defined
//

const props = defineProps({
    modelValue: {
        type: Number,
        required: false,
        default: () => Date.now()
    }
})

const emit = defineEmits({
    'update:modelValue': (_value: number) => true
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
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

</script>
