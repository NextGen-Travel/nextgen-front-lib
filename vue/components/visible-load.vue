<template>
    <div>
        <div v-if="state.loading">
            <slot v-if="self.hasSlot('loading')" name="loading"></slot>
            <v-progress-circular
                v-else
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>
        <div v-if="state.error">
            <slot v-if="self.hasSlot('error')" name="error" :error="state.error" :message="state.errorMessage"></slot>
            <div v-else class="text-error text-center py-2">{{ state.errorMessage }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Hook } from 'power-helper'
import { VueSelf } from '../self'
import { watch, computed } from 'vue'
import { parseMessage } from '../../utils/message-parser'
import { useDocumentVisibility } from '@vueuse/core'

const self = VueSelf.use()
const hook = new Hook<{ trigger: any }>()
const visibility = useDocumentVisibility()

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
    error: (_params: {
        error: any
        message: string
    }) => true
})

defineExpose({
    hook(cb: () => Promise<any>) {
        hook.attach('trigger', cb)
    }
})

// =================
//
// state
//

const state = self.data({
    loading: false,
    error: null as any,
    errorMessage: ''
})

// =================
//
// computed
//

const canTirgger = computed(() => {
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
// watch
//

watch(visibility, (current) => {
    if (current === 'visible') {
        trigger()
    }
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
