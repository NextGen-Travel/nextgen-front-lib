<template>
    <v-app-bar
        height="auto"
        :elevation="elevation"
        :dark="dark"
        :color="color"
        :position="position"
        :class="appClass">
        <slot></slot>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'

// =================
//
// defined
//

const props = defineProps({
    app: {
        type: Boolean,
        required: false,
        default: () => false
    },
    dark: {
        type: Boolean,
        required: false,
        default: () => false
    },
    color: {
        type: String,
        required: false,
        default: () => undefined
    },
    elevation: {
        type: Number,
        required: false,
        default: () => undefined
    },
    position: {
        type: String as PropType<'top' | 'bottom'>,
        required: false,
        default: () => 'bottom'
    }
})

// =================
//
// computed
//

const appClass = computed(() => {
    let outputs: string[] = []
    if (props.app) {
        outputs.push('lib-component-fixed-bar-app')
        if (props.position === 'top') {
            outputs.push('lib-component-fixed-bar-app-top')
        } else {
            outputs.push('lib-component-fixed-bar-app-bottom')
        }
    }
    return outputs.join(' ')
})

</script>

<style lang="scss" scoped>
.lib-component-fixed-bar-app-top {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
}
.lib-component-fixed-bar-app-bottom {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
.lib-component-fixed-bar-app {
    padding-left: constant(safe-area-inset-left);
    padding-left: env(safe-area-inset-left);
    padding-right: constant(safe-area-inset-right);
    padding-right: env(safe-area-inset-right);
}
</style>
