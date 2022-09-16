<template>
    <div>
        <v-pagination
            class="mt-4"
            v-model="page"
            :length="length"
            :disabled="loading"
            :total-visible="7">
        </v-pagination>
        <v-progress-linear
            v-if="loading"
            color="primary"
            buffer-value="0"
            class="mx-auto"
            indeterminate
            style="max-width: 200px"
        ></v-progress-linear>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { useVueHooks } from '../../core'

const { watch, computed } = useVueHooks()

// =================
//
// define
//

const props = defineProps({
    total: {
        type: Number,
        required: false,
        default: () => 1
    },
    prePage: {
        type: Number,
        required: false,
        default: () => 1
    },
    value: {
        type: Number,
        required: false,
        default: () => 1
    },
    loading: {
        type: Boolean,
        required: false,
        default: () => false
    },
    scrollTo: {
        type: Object as PropType<HTMLElement | 'top'>,
        required: false
    }
})

const emit = defineEmits({
    input: (_value: number) => true
})

// =================
//
// computed
//

const page = computed({
    get: () => props.value,
    set: value => emit('input', value || 1)
})

const length = computed(() => {
    return Math.ceil(props.total / props.prePage)
})

// =================
//
// watch
//

watch(() => page, () => {
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
    