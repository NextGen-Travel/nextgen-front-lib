<template>
    <div>
        <slot name="active" :switchShow="switchShow"></slot>
        <v-dialog v-model="state.show" width="90vw" :max-width="maxWidth" :persistent="persistent">
            <v-card v-if="state.show">
                <v-card-title class="pb-0">
                    <span v-if="title">{{ title }}</span>
                    <v-spacer></v-spacer>
                    <v-btn name="ng-dialog-close" v-if="!hideClose" icon @click="state.show = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-divider class="mb-5 mt-3"></v-divider>
                <div class="pa-5 pt-0">
                    <slot :switchShow="switchShow"></slot>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { PropType, reactive, watch, onMounted } from 'vue'
export default {
    props: {
        persistent: {
            type: Boolean as PropType<boolean>,
            required: false,
            default: () => false
        },
        maxWidth: {
            type: String as PropType<string>,
            required: false,
            default: () => '360px'
        },
        hideClose: {
            type: Boolean,
            required: false,
            default: () => false
        },
        title: {
            type: String as PropType<string>,
            required: false,
            default: () => null
        },
        modelValue: {
            type: Boolean as PropType<boolean>,
            required: false,
            default: () => null
        }
    },
    emits: {
        'update:modelValue': (_value: boolean) => true,
        close: () => true
    },
    setup(props, { emit }) {

        // =================
        //
        // state
        //

        const state = reactive({
            show: false
        })

        // =================
        //
        // watch
        //

        watch(() => state.show, () => {
            if (state.show !== props.modelValue) {
                emit('update:modelValue', state.show)
                if (state.show === false) {
                    emit('close')
                }
            }
        })

        watch(() => props.modelValue, () => {
            if (state.show !== props.modelValue) {
                state.show = !!props.modelValue
            }
        })

        // =================
        //
        // mounted
        //

        onMounted(() => {
            state.show = !!props.modelValue
        })

        // =================
        //
        // metohds
        //

        const switchShow = () => {
            state.show = !state.show
        }

        // =================
        //
        // done
        //

        return {
            state,
            switchShow
        }
    }
}
</script>
