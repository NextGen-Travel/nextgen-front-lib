<template>
    <div style="transition: .25s;" :style="`opacity: ${loading ? 0.5 : 1}`">
        <v-form
            ref="checkform"
            v-model="state.valid"
            @submit.stop.prevent="submit"
            :lazy-validation="lazyValidation"
            :readonly="readonly"
            :disabled="disabled || loading">
            <slot :valid="state.valid" :validate="validate"></slot>
        </v-form>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { useVueHooks } from '../../core'

export default {
    name: 'ng-form',
    props: {
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
    },
    emits: {
        input: (_valid: boolean) => true,
        submit: () => true
    },
    setup(props, { emit }) {

        const { reactive, watch, onMounted, ref } = useVueHooks()

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
            valid: false,
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
        })

        // =================
        //
        // methods
        //

        const emitStatus = () => {
            emit('input', state.valid)
        }

        const submit = () => {
            let valid = checkform.value.validate()
            if (valid) {
                emit('submit')
            }
        }

        const validate = (cb: () => any, fail?: () => any) => {
            let valid = checkform.value.validate()
            if (valid) {
                cb()
            } else if (fail) {
                fail()
            }
            emitStatus()
        }

        // =================
        //
        // done
        //

        return {
            state,
            submit,
            validate,
            checkform
        }
    }
}

</script>
