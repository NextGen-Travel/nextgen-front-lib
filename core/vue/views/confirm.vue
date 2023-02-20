<template>
    <div>
        <v-dialog
            v-model="state.dialog"
            persistent
            max-width="360px">
            <v-card>
                <v-card-title>
                    {{ t($t('ng.confirmTitleText')) }}
                </v-card-title>
                <v-card-text>
                    {{ message }}
                </v-card-text>
                <v-card-actions class="pb-4">
                    <v-spacer></v-spacer>
                    <v-btn name="ng-confirm-close" text :disabled="state.loading" @click="libConfirmStore.cancel">
                        {{ t($t('ng.confirmCancelText')) }}
                    </v-btn>
                    <v-btn name="ng-confirm-confirm" color="primary" :loading="state.loading" @click="commit">
                        {{ t($t('ng.confirmConfirmText')) }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { t } from '../../index'
import { useLibConfirmStore } from './store/confirm'
import { computed, watch, reactive } from 'vue'

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

const success = (success = true) => {
    if (success) {
        libConfirmStore.cancel()
    }
    setTimeout(() => {
        state.loading = false
    }, 200)
}

const commit = async() => {
    state.loading = true
    libConfirmStore.state.handler(success)
}
</script>
