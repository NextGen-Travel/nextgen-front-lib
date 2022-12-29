<template>
    <v-overlay
        contained
        v-model="value"
        style="z-index: 100;"
        class="align-center justify-center"
        persistent
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
