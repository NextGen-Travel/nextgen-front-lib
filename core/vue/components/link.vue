<template>
    <RouterLink v-if="!disabled" v-bind="{ ...attrProps, ...commandProps }">
        <slot></slot>
    </RouterLink>
    <div v-else v-bind="commandProps">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// =================
//
// defined
//

const props = defineProps({
    to: {
        type: Object,
        required: true
    },
    inline: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

// =================
//
// computed
//

const attrProps = computed(() => {
    return {
        to: props.to
    }
})

const commandProps = computed(() => {
    return {
        class: {
            'd-block': !props.inline,
            'd-inline': props.inline,
        }
    }
})

</script>

<style scoped>
.ms-link {
    text-decoration: none;
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
</style>
