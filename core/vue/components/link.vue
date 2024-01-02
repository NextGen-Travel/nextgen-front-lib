<template>
    <RouterLink v-if="!disabled" v-bind="commandProps">
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

const commandProps = computed(() => {
    if (props.disabled) {
        return {
            to: {},
            style: {
                color: 'rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))'
            },
            class: {
                'd-block': !props.inline,
                'd-inline': props.inline
            }
        }
    }
    return {
        to: props.to,
        style: {
            color: 'rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))'
        },
        class: {
            'ng-link': true,
            'd-block': !props.inline,
            'd-inline': props.inline
        }
    }
})

</script>

<style scoped lang="scss">
.ng-link {
    text-decoration: none;
}
</style>