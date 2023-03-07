<template>
    <v-overlay
        v-model="value"
        class="align-center justify-center"
        persistent
        :contained="!full"
        :style="`z-index: ${zIndex};`"
        :opacity="0.5"
        :close-on-back="false">
        <v-progress-circular class="mx-auto" color="white" indeterminate size="32"></v-progress-circular>
    </v-overlay>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

// =================
//
// defined
//

const props = defineProps({
    full: {
        type: Boolean,
        required: false,
        default: () => false
    },
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