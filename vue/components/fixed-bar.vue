<template>
    <v-toolbar
        class="lib-component-fixed-bar"
        height="auto"
        :dark="dark"
        :color="color"
        :style="position === 'top' ? 'top: 0' : 'bottom: 0'">
        <div :style="`height: ${state.contentHeight}px`"></div>
        <div ref="content" :class="appClass">
            <slot></slot>
        </div>
    </v-toolbar>
</template>

<script lang="ts" setup>
import { useVueHooks } from '../../core'
import { ElementListenerGroup } from 'power-helper'
import { computed, PropType } from 'vue';

const { defineProps, onMounted, onUnmounted, reactive, ref } = useVueHooks()

let elementListenerGroup: null | ElementListenerGroup<HTMLDivElement> = null
let content = ref<HTMLDivElement>()

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
    if (props.app) {
        if (props.position === 'top') {
            return 'lib-component-fixed-bar-app-top lib-component-fixed-bar-app'
        } else {
            return 'lib-component-fixed-bar-app-bottom lib-component-fixed-bar-app'
        }
    }
    return ''
})

// =================
//
// mounted
//

onMounted(() => {
    if (content.value) {
        elementListenerGroup = new ElementListenerGroup(content.value)
        elementListenerGroup.add('resize', () => {
            refresh()
        })
    }
    refresh()
})

onUnmounted(() => {
    if (elementListenerGroup) {
        elementListenerGroup.clear()
    }
})

// =================
//
// methods
//

const refresh = () => {
    if (content.value) {
        state.contentHeight = content.value.clientHeight
    }
}

</script>

<style lang="scss" scoped>
.lib-component-fixed-bar {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 10;
    box-shadow: rgb(99 99 99 / 20%) 0 0px 8px 0;
}
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
