<template>
    <div>
        <slot name="active" :switchShow="switchShow"></slot>
        <v-dialog v-model="state.show" width="90vw" :max-width="maxWidth" :persistent="persistent">
            <v-card v-if="state.show">
                <v-card-title class="pb-0">
                    <span v-if="title">{{ title }}</span>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="state.show = false">
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

<script lang="ts" setup>
import { useVueHooks } from '../../core'

const { reactive, watch, onMounted } = useVueHooks()

// =================
//
// define
//

const props = defineProps({
    persistent: {
        type: Boolean,
        required: false,
        default: () => false
    },
    maxWidth: {
        type: String,
        required: false,
        default: () => '480px'
    },
    title: {
        type: String,
        required: false
    },
    value: {
        type: Boolean,
        required: false
    }
})

const emit = defineEmits({
    input: (_value: boolean) => true
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
    if (state.show !== props.value) {
        emit('input', state.show)
    }
})

watch(() => props.value, () => {
    if (state.show !== props.value) {
        state.show = props.value
    }
})

// =================
//
// mounted
//

onMounted(() => {
    state.show = props.value
})

// =================
//
// metohds
//

const switchShow = (show?: boolean) => {
    if (show == null) {
        state.show = !state.show
    } else {
        state.show = show
    }
}

</script>
