<template>
    <RouterLink v-if="vueRouterLinkMode" v-bind="ElProps">
        <slot></slot>
    </RouterLink>
    <a v-else v-bind="ElProps">
        <slot></slot>
    </a>
</template>

<script setup lang="ts">
import { text } from 'power-helper'
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

const linkIsHttp = computed(() => {
    if (typeof props.to === 'string') {
        return text.headMatch(props.to, 'http')
    }
    return false
})

const vueRouterLinkMode = computed(() => {
    if (props.disabled) {
        return false
    }
    if (props.useClick) {
        return false
    }
    if (linkIsHttp.value) {
        return false
    }
    return true
})

const ElProps = computed(() => {
    const output: any = {
        style: {
            color: 'rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))'
        },
        target: props.target,
        class: {
            'ng-link': true,
            'd-block': !props.inline,
            'd-inline': props.inline
        }
    }
    if (props.disabled) {
        return output
    }
    output.onClick = (event: MouseEvent) => {
        event.stopPropagation()
    }
    if (props.useClick) {
        output.onClick = (event: MouseEvent) => {
            event.stopPropagation()
            emit('click')
        }
        return output
    }
    if (linkIsHttp.value) {
        output.href = props.to
        return output
    }
    output.to = props.to
    return output
})

</script>

<style scoped lang="scss">
.ng-link {
    text-decoration: none;
}
</style>
