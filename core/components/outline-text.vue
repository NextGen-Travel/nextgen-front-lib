<template>
    <div v-if="disabled === false" class="component-outline-text py-2">
        <div class="w-100 component-outline-text-stroke" :style="`-webkit-text-stroke: ${outlineWeight}px ${outlineColorComputed}`">{{ text }}</div>
        <div class="w-100 component-outline-text-no-stroke" :style="{ color: fontColor }">{{ text }}</div>
        <div class="w-100 opacity-0">{{ text }}</div>
    </div>
    <div v-else>
        <div>{{ text }}</div>
    </div>
</template>

<script setup lang="ts">
import { text as _text } from 'power-helper'
import { computed } from 'vue'

// =================
//
// define
//

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        required: false,
        default: () => false
    },
    fontColor: {
        type: String,
        required: false,
        default: () => 'white'
    },
    outlineColor: {
        type: String,
        required: false,
        default: () => 'cas-primary'
    },
    outlineWeight: {
        type: Number,
        required: false,
        default: () => 2
    }
})

// =================
//
// computed
//

const outlineColorComputed = computed(() => {
    if (props.outlineColor === 'cas-primary') {
        return '#005A8E'
    }
    if (props.outlineColor === 'cas-secondary') {
        return '#5E3013'
    }
    if (_text.headMatch(props.outlineColor, '--')) {
        return `var(${props.outlineColor})`
    } else {
        return props.outlineColor
    }
})

</script>

<style lang="scss" scoped>
    .component-outline-text {
        position: relative;
    }
    .component-outline-text-stroke {
        position: absolute;
    }
    .component-outline-text-no-stroke {
        position: absolute;
    }
</style>
