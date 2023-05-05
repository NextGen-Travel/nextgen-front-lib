<template>
    <div ref="wrapper" :style="{ height: `${height}px` }">
        <v-row no-gutters class="my-n2 w-100 h-100 flex-nowrap">
            <v-col v-for="col, ci of cols" :key="ci" :cols="col[0]">
                <div
                    v-for="i of col[1]"
                    :key="i"
                    :style="{
                        height: `${height / col[1]}px`
                    }"
                    class="pa-2">
                    <Skeleton></Skeleton>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
import Skeleton from './skeleton.vue'
import { ref, PropType } from 'vue'
import { Breakpoint } from 'power-helper'
import { computed } from 'vue'

const breakpoint = new Breakpoint({
    defCheckValue: () => wrapper.value?.clientWidth || 0,
    points: Breakpoint.bootstrapBreakpoints
})

// =================
//
// ref
//

const wrapper = ref<HTMLElement>()

// =================
//
// define
//

const props = defineProps({
    mobile: {
        type: Array as PropType<number[][]>,
        required: false,
        default: () => null
    },
    desktop: {
        type: Array as PropType<number[][]>,
        required: true,
        default: () => []
    },
    height: {
        type: Number,
        required: false,
        default: () => 300
    }
})

// =================
//
// computed
//

const cols = computed(() => {
    if (props.mobile && breakpoint.in('sm-and-down')) {
        return props.mobile
    }
    return props.desktop
})

</script>
