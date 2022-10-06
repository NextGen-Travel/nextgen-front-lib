<template>
    <div :style="state.headerStyleString" class="white">
        <v-row class="component-toolbar-wrapper h-100" no-gutters align="center">
            <div style="height: fit-content;">
                <slot></slot>
            </div>
            <v-spacer></v-spacer>
            <div style="height: fit-content;">
                <slot name="right"></slot>
            </div>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
import { useVueHooks } from '../../core'
import { StyleString } from 'power-helper'

const { reactive, defineProps, onMounted } = useVueHooks()

// =================
//
// define
//

const props = defineProps({
    height: {
        type: String,
        required: false,
        default: () => '48px'
    }
})

// =================
//
// state
//

const state = reactive({
    headerStyleString: ''
})

onMounted(() => {
    let styleString = new StyleString()
    styleString.set('height', props.height)
    state.headerStyleString = styleString.join()
})

</script>

<style lang="scss" scoped>
    .component-toolbar-wrapper {
        flex-wrap: nowrap;
        white-space: nowrap;
        width: 100%;
        overflow-y: hidden;
        overflow-x: auto;
    }
</style>

<script lang="ts">
export default {
    name: 'ng-toolbar'
}
</script>
    