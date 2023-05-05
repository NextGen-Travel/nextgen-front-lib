<template>
    <div ref="wrapper">
        <v-row>
            <v-col v-for="col of cols" :key="col">
                <Skeleton v-for="i in col" :key="i"></Skeleton>
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
        type: String,
        required: false,
        default: () => '100%'
    },
    maxHeight: {
        type: String,
        required: false,
        default: () => '100%'
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
