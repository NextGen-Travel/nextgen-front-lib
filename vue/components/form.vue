<template>
    <div style="transition: .25s;" :style="`opacity: ${loading ? 0.5 : 1}`">
        <v-form
            ref="checkform"
            @update:model-value="updateValid"
            @submit.stop.prevent="submit"
            :lazy-validation="lazyValidation"
            :readonly="readonly"
            :disabled="disabled || loading">
            <slot :valid="state.valid" :validate="validate"></slot>
        </v-form>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { reactive, watch, onMounted, ref } from 'vue'

// =================
//
// define
//

const props = defineProps({
    loading: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: false
    },
    readonly: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: false
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: false
    },
    lazyValidation: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: false
    }
})

const emit = defineEmits({
    'update:modelValue': (_valid: boolean) => true,
    submit: () => true
})

// =================
//
// ref
//

const checkform = ref()

// =================
//
// state
//

const state = reactive({
    valid: props.lazyValidation,
    loaded: false
})

// =================
//
// watch
//

watch(() => state.valid, () => {
    emitStatus()
})

// =================
//
// mounted
//

onMounted(() => {
    state.loaded = true
    emitStatus()
})

// =================
//
// methods
//

const updateValid = (value: boolean | null) => {
    state.valid = !!value
    emitStatus()
}

const emitStatus = () => {
    emit('update:modelValue', state.valid !== false)
}

const submit = () => {
    let valid = checkform.value.validate()
    if (valid) {
        emit('submit')
    }
}

const validate = async(cb: () => any, fail?: (_errors: any) => any) => {
    let { valid, errors } = await checkform.value.validate()
    if (valid) {
        cb()
    } else if (fail) {
        fail(errors)
    }
    emitStatus()
}

</script>
