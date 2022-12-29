<template>
    <div class="component-skeleton" :style="style"></div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue'
import { StyleString } from 'power-helper'

// =================
//
// define
//

const props = defineProps({
    width: {
        type: String,
        required: false,
        default: () => '100%'
    },
    height: {
        type: String,
        required: false,
        default: () => '100%'
    },
    avatar: {
        type: Boolean as PropType<boolean>,
        default: () => false
    }
})

// =================
//
// computed
//

const style = computed(() => {
    const ss = new StyleString()
    ss.set('borderRadius', props.avatar ? '100em' : '8px')
    ss.set('width', props.width)
    ss.set('height', props.height)
    return ss.join()
})

</script>

<style lang="scss" scoped>
    .component-skeleton {
        background-color: #ccc;
        animation-name: component-skeleton-breath;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    @keyframes component-skeleton-breath {
        from {
            opacity: 0.5;
        }
        50% {
            opacity: 0.75;
        }
        to {
            opacity: 0.5;
        }
    }
</style>
