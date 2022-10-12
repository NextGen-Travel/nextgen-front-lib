<template>
    <div style="transition: .25s;" :style="`opacity: ${loading ? 0.5 : 1}`">
        <v-form
            v-model="state.valid"
            @submit.stop.prevent="submit"
            :disabled="readonly || loading">
            <slot :valid="state.valid"></slot>
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
        }
    },
    emits: {
        input: (_valid: boolean) => true,
        submit: () => true
    },
    setup(props, { emit }) {

        const { reactive, watch, onMounted } = useVueHooks()

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

        // =================
        //
        // done
        //

        return {
            state,
            submit
        }
    }
}

</script>
