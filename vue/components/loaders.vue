<template>
    <div>
        <slot
            :error-name="state.errorName"
            :loading="state.loading"
            :error="state.error">
        </slot>
    </div>
</template>

<script lang="ts" setup>
import { Loader } from 'power-helper'
import { PropType, reactive, onUnmounted, defineProps, onMounted } from 'vue'

const props = defineProps({
    autoStart: {
        required: false,
        type: Boolean,
        default: () => true
    },
    items: {
        required: true,
        type: Array as PropType<Loader<any>[]>
    }
})

// =================
//
// State
//

const state = reactive({
    int: null as ReturnType<typeof setInterval> | null,
    error: undefined as any,
    errorName: '',
    called: false,
    loading: true,
    started: false
})

// =================
//
// Computed
//

onMounted(() => {
    setTimeout(() => handler(), 10)
    state.int = setInterval(() => handler(), 500)
    if (props.autoStart) {
        run()
    }
})

onUnmounted(() => {
    if (state.int) {
        clearInterval(state.int)
    }
})

// =================
//
// Methods
//

const run = async() => {
    for (let item of props.items) {
        if (item.called === false) {
            await item.start({})
        }
    }
}

const handler = () => {
    let error
    let errorName = ''
    let called = false
    let loading = false
    let items = props.items || []
    for (let loader of items) {
        if (loader.called) {
            called = true
            break
        }
    }
    for (let loader of items) {
        if (loader.loading) {
            loading = true
            break
        }
    }
    for (let loader of items) {
        if (loader.fail) {
            error = loader.fail.error
            errorName = `Loader: ${loader.fail.name}`
            break
        }
    }
    state.error = error
    state.called = called
    state.loading = loading
    state.errorName = errorName
    state.started = true
}
</script>
