<template>
    <div>
        <v-dialog
            v-model="state.dialog"
            persistent
            max-width="360px">
            <v-card>
                <v-card-title>{{ $t('ng.confirmTitleText') }}</v-card-title>
                <v-card-text>{{ message }}</v-card-text>
                <v-card-actions class="pb-4">
                    <v-spacer></v-spacer>
                    <v-btn name="ng-confirm-close" @click="close" text :disabled="state.loading">{{ $t('ng.confirmCancelText') }}</v-btn>
                    <v-btn name="ng-confirm-confirm" color="success" @click="commit" :loading="state.loading">
                        {{ $t('ng.confirmConfirmText') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { computed, watch, reactive } from 'vue'
import { useLibConfirmStore } from './store/confirm'

const libConfirmStore = useLibConfirmStore()

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

const open = computed(() => libConfirmStore.state.isOpen)
const message = computed(() => libConfirmStore.state.message)

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
    libConfirmStore.cancel()
    setTimeout(() => {
        state.loading = false
    }, 200)
}

const commit = () => {
    state.loading = true
    libConfirmStore.state.handler(close)
}
</script>
