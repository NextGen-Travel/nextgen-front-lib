<template>
    <div ref="wrapper" class="mt-4">
        <v-pagination
            v-if="show"
            v-model="page"
            :color="color"
            :length="length"
            :disabled="loading"
            :size="breakpoint.in('sm-and-down') ? 'small' : 'default'"
            :total-visible="breakpoint.in('sm-and-down') ? 4 : 7">
        </v-pagination>
        <v-progress-linear
            v-if="show && loading"
            buffer-value="0"
            indeterminate
            style="max-width: 200px"
            :color="color"
        ></v-progress-linear>
    </div>
</template>

<script lang="ts" setup>
import { ref, PropType, watch, computed } from 'vue'
import { Breakpoint } from 'power-helper'

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
    alwaysShow: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: () => false
    },
    color: {
        type: String as PropType<string>,
        required: false,
        default: () => 'primary'
    },
    total: {
        type: Number as PropType<number>,
        required: false,
        default: () => 1
    },
    prePage: {
        type: Number as PropType<number>,
        required: false,
        default: () => 1
    },
    modelValue: {
        type: Number as PropType<number>,
        required: false,
        default: () => 1
    },
    loading: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: () => false
    },
    scrollTo: {
        type: null as unknown as PropType<HTMLElement | 'top'>,
        required: false,
        default: () => null
    }
})

const emit = defineEmits({
    'update:modelValue': (_value: number) => true
})

// =================
//
// computed
//

const show = computed(() => {
    if (props.alwaysShow) {
        return true
    }
    if (length.value > 1) {
        return true
    }
    return false
})

const page = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value || 1)
})

const length = computed(() => {
    let value = Math.ceil(props.total / props.prePage)
    if (isNaN(value)) {
        return 1
    }
    return value || 1
})

// =================
//
// watch
//

watch(() => page.value, () => {
    if (props.scrollTo) {
        if (props.scrollTo === 'top') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            props.scrollTo.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
})

</script>
