<template>
    <div>
        <div :style="`height: ${state.contentHeight}px`"></div>
        <v-toolbar
            ref="content"
            class="lib-component-fixed-bar"
            height="auto"
            :dark="dark"
            :color="color"
            :class="appClass">
            <slot></slot>
        </v-toolbar>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType, defineProps, onMounted, onUnmounted, reactive, ref } from 'vue'

const content = ref()
const observer = new ResizeObserver(() => refresh())

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
    position: {
        type: String as PropType<'top' | 'bottom'>,
        required: false,
        default: () => 'bottom'
    }
})

// =================
//
// state
//

const state = reactive({
    style: '',
    contentHeight: 0
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

// =================
//
// mounted
//

onMounted(() => {
    if (content.value) {
        observer.observe(content.value.$el)
    }
    refresh()
})

onUnmounted(() => {
    observer.disconnect()
})

// =================
//
// methods
//

const refresh = () => {
    if (content.value) {
        state.contentHeight = content.value.$el.clientHeight
    }
}

</script>

<style lang="scss" scoped>
.lib-component-fixed-bar {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 1100;
}
.lib-component-fixed-bar-app-top {
    top: 0;
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
}
.lib-component-fixed-bar-app-bottom {
    bottom: 0;
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
