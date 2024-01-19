<template>
    <div ref="target">
        <div v-if="state.loading">
            <slot v-if="self.hasSlot('loading')" name="loading"></slot>
            <div v-else class="text-center">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </div>
        </div>
        <div v-if="state.error">
            <slot
                v-if="self.hasSlot('error')"
                name="error"
                :error="state.error"
                :message="state.errorMessage">
            </slot>
            <div v-else class="text-error text-center py-2">{{ state.errorMessage }}</div>
        </div>
        <div v-if="!self.hasSlot('default') && !state.loading && !state.error" style="height: 32px"></div>
        <slot :loading="state.loading" :error="state.error" :message="state.errorMessage"></slot>
    </div>
</template>

<script lang="ts" setup>
import { useSelf } from '../composables/self'
import { Hook, Ticker } from 'power-helper'
import { parseMessage } from '../utils/message'
import { useIntersectionObserver } from '@vueuse/core'
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue'

const self = useSelf()

// =================
//
// ref
//

const target = ref<HTMLDivElement>()

// =================
//
// hook
//

const hook = new Hook<{ trigger: any }>()

const attachHook = (cb: () => Promise<any>) => {
    hook.attach('trigger', cb)
}

// =================
//
// defined
//

const props = defineProps({
    disabled: {
        type: Boolean,
        required: false,
        default: () => false
    }
})

const emit = defineEmits({
    inited: (_hook: (_cb: () => Promise<any>) => void) => true,
    error: (_params: {
        error: any
        message: string
    }) => true
})

defineExpose({
    hook: attachHook
})

// =================
//
// observer
//

useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (state.inited === false) {
        emit('inited', attachHook)
    }
    state.inited = true
    state.isIntersecting = isIntersecting
})

// =================
//
// state
//

const state = reactive({
    inited: false,
    error: null as any,
    ticker: new Ticker(500),
    loading: false,
    errorMessage: '',
    isIntersecting: false
})

// =================
//
// computed
//

const canTirgger = computed(() => {
    if (state.inited === false) {
        return false
    }
    if (props.disabled) {
        return false
    }
    if (state.loading) {
        return false
    }
    if (state.error) {
        return false
    }
    return true
})

// =================
//
// mounted
//

onMounted(() => {
    state.ticker.on('next', () => {
        if (state.isIntersecting) {
            trigger()
        }
    })
})

onUnmounted(() => {
    state.ticker.close()
})

// =================
//
// methods
//

const trigger = async() => {
    if (canTirgger.value === false) {
        return null
    }
    try {
        state.loading = true
        await hook.notify('trigger', null)
    } catch (error) {
        state.error = error
        state.errorMessage = parseMessage(error, 'unknown error')
        emit('error', {
            error: state.error,
            message: state.errorMessage
        })
    } finally {
        state.loading = false
    }
}

</script>
