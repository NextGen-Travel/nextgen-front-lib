<template>
    <div class="component-loading-wrapper">
        <slot></slot>
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
    </div>
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


<style lang="scss" scoped>
    .component-loading-wrapper {
        position: relative;
        width: fit-content;
        height: fit-content;
    }
</style>
