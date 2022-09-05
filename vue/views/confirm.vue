<template>
    <div>
        <v-dialog
            v-model="state.dialog"
            persistent
            max-width="500px">
            <v-card>
                <v-card-title>{{ titleText }}</v-card-title>
                <v-card-text>{{ message }}</v-card-text>
                <v-card-actions class="pb-4">
                    <v-spacer></v-spacer>
                    <v-btn @click="close" text :disabled="state.loading">{{ cancelText }}</v-btn>
                    <v-btn color="success" @click="commit" :loading="state.loading">
                        {{ confirmText }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { useVueHooks } from '../../core'
import { computed, watch } from 'vue'
import { useLayoutConfirmStore } from './store/confirm'

const { reactive, defineProps } = useVueHooks()

const confirm = useLayoutConfirmStore()

// =================
//
// defined
//

defineProps({
    titleText: {
        type: String
    },
    cancelText: {
        type: String
    },
    confirmText: {
        type: String
    }
})

// =================
//
// state
//

const state = reactive({
    dialog: false,
    loading: false
})

// =================
//
// computed
//

const open = computed(() => confirm.isOpen)
const message = computed(() => confirm.message)

// =================
//
// watch
//

watch(() => open.value, () => {
    state.dialog = open.value
})

// =================
//
// methods
//

const close = () => {
    confirm.cancel()
    setTimeout(() => {
        state.loading = false
    }, 200)
}

const commit = () => {
    state.loading = true
    confirm.handler(close)
}
</script>
