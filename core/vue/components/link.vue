<template>
    <RouterLink v-if="linkMode" v-bind="commandProps">
        <slot></slot>
    </RouterLink>
    <div v-else v-bind="commandProps">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'

// =================
//
// defined
//

const props = defineProps({
    to: {
        type: null as unknown as PropType<string | Record<string, any>>,
        required: true
    },
    target: {
        type: String,
        required: false,
        default: () => '_self'
    },
    inline: {
        type: Boolean,
        default: false
    },
    useClick: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits<{
    click: []
}>()

// =================
//
// computed
//

const linkMode = computed(() => {
    if (props.disabled) {
        return false
    }
    if (props.useClick) {
        return false
    }
    return true
})

const commandProps = computed(() => {
    const output: any = {
        to: {},
        style: {},
        target: props.target,
        class: {
            'd-block': !props.inline,
            'd-inline': props.inline
        }
    }
    if (props.disabled) {
        return output
    }
    if (props.useClick) {
        output.onClick = (event: MouseEvent) => {
            event.stopPropagation()
            emit('click')
        }
        return output
    }
    output.to = props.to
    output.class['ng-link'] = true
    output.style = {
        color: 'rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))'
    }
    return output
})

</script>

<style scoped lang="scss">
.ng-link {
    text-decoration: none;
}
</style>