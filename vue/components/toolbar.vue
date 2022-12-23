<template>
    <div :style="state.headerStyleString">
        <v-row class="component-toolbar-wrapper h-100" no-gutters align="center">
            <div :style="style">
                <slot></slot>
            </div>
            <div v-if="self.hasSlot('center')" class="text-center" :style="style">
                <slot name="center"></slot>
            </div>
            <div class="text-right" :style="style">
                <slot name="right"></slot>
            </div>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
import { VueSelf } from '../self'
import { PropType } from 'vue'
import { StyleString } from 'power-helper'
import { reactive, defineProps, onMounted, computed } from 'vue'

const self = VueSelf.use()

// =================
//
// define
//

const props = defineProps({
    height: {
        type: String as PropType<string>,
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

// =================
//
// mounted
//

onMounted(() => {
    let styleString = new StyleString()
    styleString.set('height', props.height)
    state.headerStyleString = styleString.join()
})

// =================
//
// computed
//

const style = computed(() => {
    let width = '50%'
    if (self.hasSlot('center')) {
        width = '33.33333%'
    }
    return `height: fit-content; width: ${width};`
})

</script>

<style lang="scss" scoped>
    .component-toolbar-wrapper {
        flex-wrap: nowrap;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
    }
</style>
