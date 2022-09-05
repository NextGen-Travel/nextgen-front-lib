<template>
    <v-form v-model="state.valid" @submit.stop.prevent="submit" :disabled="readonly || loading">
        <slot :valid="state.valid"></slot>
    </v-form>
</template>

<script lang="ts" setup>
import { useVueHooks } from '../../core'

const { reactive, defineEmits, defineProps, watch, onMounted } = useVueHooks()

// =================
//
// defined
//

defineProps({
    loading: {
        required: false,
        default: false
    },
    readonly: {
        required: false,
        default: false
    }
})

const emit = defineEmits({
    input: (_valid: boolean) => true,
    submit: () => true
})

// =================
//
// state
//

const state = reactive({
    valid: false,
    loaded: false
})

// =================
//
// watch
//

watch(() => state.valid, () => {
    emit('input', state.valid)
})

// =================
//
// mounted
//

onMounted(() => {
    state.loaded = true
})

// =================
//
// methods
//

const submit = () => {
    if (state.valid) {
        emit('submit')
    }
}

</script>
