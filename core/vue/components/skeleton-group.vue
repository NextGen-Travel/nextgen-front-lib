<template>
    <div ref="wrapper" :style="{ height: `${height}px` }">
        <v-row class="w-100 h-100 flex-nowrap">
            <v-col v-for="col of cols" :key="col" :style="{ width: `${100 / cols.length}%` }">
                <Skeleton v-for="i in col" :key="i" :height="`${height / col}px`"></Skeleton>
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
        type: Array as PropType<number[]>,
        required: false,
        default: () => null
    },
    desktop: {
        type: Array as PropType<number[]>,
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
