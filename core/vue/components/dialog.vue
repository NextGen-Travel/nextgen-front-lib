<template>
    <div>
        <slot name="active" :switchShow="switchShow"></slot>
        <v-dialog
            v-model="state.show"
            :width="fullscreen ? undefined : '90vw'"
            :max-width="fullscreen ? undefined : maxWidth"
            :persistent="loading || persistent"
            :fullscreen="fullscreen">
            <v-card v-if="state.show">
                <OverlayLoading :z-index="502" :model-value="loading"></OverlayLoading>
                <div v-for="i in 2" class="w-100 bg-white" :key="i" :class="{
                    'ng-component-dialog': i === 1,
                    'ng-component-dialog-fake': i === 2
                }">
                    <v-row class="px-3 py-1" style="min-height: 56px;" no-gutters align="center">
                        <h3 v-if="title">{{ title }}</h3>
                        <v-spacer></v-spacer>
                        <v-btn
                            v-if="!hideClose && !self.hasSlot('actions')"
                            variant="plain"
                            icon="mdi-close"
                            :disabled="loading"
                            @click="state.show = false">
                        </v-btn>
                        <slot name="actions" :switchShow="switchShow"></slot>
                    </v-row>
                    <v-divider></v-divider>
                </div>
                <div class="pa-3">
                    <slot :switchShow="switchShow"></slot>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import OverlayLoading from './overlay-loading.vue'
import { VueSelf } from '../self'
import { PropType, reactive, watch, onMounted } from 'vue'

const self = VueSelf.use()

// =================
//
// defined
//

const props = defineProps({
    fullscreen: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: () => false
    },
    persistent: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: () => false
    },
    maxWidth: {
        type: String as PropType<string>,
        required: false,
        default: () => '480px'
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
    },
    hideClose: {
        type: Boolean,
        required: false,
        default: () => false
    },
    loading: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: () => false
    }
})

const emit = defineEmits({
    'open': () => true,
    'close': () => true,
    'update:modelValue': (_value: boolean) => true
})

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
    }
})

watch(() => props.modelValue, () => {
    if (state.show !== props.modelValue) {
        state.show = !!props.modelValue
        if (state.show) {
            emit('open')
        } else {
            emit('close')
        }
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

</script>

<style>
    .ng-component-dialog {
        position: fixed;
        z-index: 500;
    }
    .ng-component-dialog-fake {
        visibility: hidden;
        pointer-events: none;
    }
</style>
