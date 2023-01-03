<template>
    <div>
        <v-date-picker
            ref="picker"
            v-model="value"
            mode="dateTime"
            is24hr
            is-required
            :model-config="state.modelConfig"
        />
    </div>
</template>

<script lang="ts" setup>
// https://vcalendar.io
import { VueSelf } from '../self'
import { computed, onMounted, ref, nextTick } from 'vue'

const self = VueSelf.use()

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
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

</script>
