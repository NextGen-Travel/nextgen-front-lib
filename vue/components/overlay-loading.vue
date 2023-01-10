<template>
    <v-overlay
        contained
        v-model="value"
        class="align-center justify-center"
        persistent
        :style="`z-index: ${zIndex};`"
        :opacity="0.5"
        :close-on-back="false">
        <v-progress-circular color="white" indeterminate size="32"></v-progress-circular>
    </v-overlay>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

// =================
//
// defined
//

const props = defineProps({
    zIndex: {
        type: Number,
        required: false,
        default: () => 100
    },
    modelValue: {
        type: Boolean,
        required: false,
        default: () => true
    }
})

const emit = defineEmits({
    'update:modelValue': (_value: boolean) => true
})

// =================
//
// computed
//

const value = computed({
    get: () => props.modelValue,
    set: (val: boolean) => emit('update:modelValue', val)
})

</script>