<template>
    <div style="transition: .25s;" :style="`opacity: ${loading ? 0.5 : 1}`">
        <v-form
            ref="checkform"
            :readonly="readonly"
            :disabled="disabled || loading"
            @update:model-value="update"
            @submit.stop.prevent="submit">
            <slot :valid="state.valid" :validate="validate"></slot>
        </v-form>
    </div>
</template>

<script lang="ts" setup>
import { VForm } from 'vuetify/components'
import { computed, nextTick, onMounted, reactive, ref } from 'vue'

// =================
//
// define
//

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: false,
        default: false
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    },
    readonly: {
        type: Boolean,
        required: false,
        default: false
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    },
    lazyValidation: {
        type: Boolean,
        required: false,
        default: false
    }
})

const emit = defineEmits({
    'update:modelValue': (_valid: boolean) => true,
    submit: () => true
})

defineExpose({
    valid: computed(() => state.valid),
    validate: (...args: Parameters<typeof validate>) => validate(...args)
})

// =================
//
// ref
//

const checkform = ref<InstanceType<typeof VForm>>()

// =================
//
// state
//

const state = reactive({
    valid: props.lazyValidation
})

// =================
//
// mounted
//

onMounted(() => {
    nextTick(() => {
        if (props.lazyValidation) {
            update(true)
        }
    })
})

// =================
//
// methods
//

const update = (value: boolean | null) => {
    state.valid = value !== false
    emit('update:modelValue', state.valid)
}

const submit = async() => {
    let result = await checkform.value?.validate()
    if (result && result.valid) {
        emit('submit')
    }
}

const validate = async(cb: () => any, fail?: (_errors: any) => any) => {
    let result = await checkform.value?.validate()
    if (result) {
        if (result.valid) {
            cb()
        } else if (fail) {
            fail(result.errors)
        }
    }
}

</script>
