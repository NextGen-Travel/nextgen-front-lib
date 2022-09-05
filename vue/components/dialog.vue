<template>
    <v-dialog :max-width="maxWidth" v-model="state.show">
        <v-card v-if="state.show">
            <v-card-title class="pb-0">
                <span v-if="title">{{ title }}</span>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon @click="state.show = false">mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <div class="pa-5 pt-0">
                <slot></slot>
            </div>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { useVueHooks } from '../../core'

const { reactive, watch, onMounted } = useVueHooks()

// =================
//
// define
//

const props = defineProps({
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

</script>