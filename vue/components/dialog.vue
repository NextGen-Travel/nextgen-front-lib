<template>
    <div>
        <slot name="active" :switchShow="switchShow"></slot>
        <v-dialog
            v-model="state.show"
            :width="fullscreen ? undefined : '90vw'"
            :max-width="fullscreen ? undefined : maxWidth"
            :persistent="persistent"
            :fullscreen="fullscreen">
            <v-card v-if="state.show">
                <template #title>
                    <v-row no-gutters align="center">
                        <h3 v-if="title">{{ title }}</h3>
                        <v-spacer></v-spacer>
                        <v-btn
                            v-if="!hideClose && !self.hasSlot('actions')"
                            variant="plain"
                            icon="mdi-close"
                            @click="state.show = false">
                        </v-btn>
                        <slot name="actions" :switchShow="switchShow"></slot>
                    </v-row>
                </template>
                <v-divider class="mb-5 mt-3"></v-divider>
                <div class="pa-5 pt-0">
                    <slot :switchShow="switchShow"></slot>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
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
    }
})

const emit = defineEmits({
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
