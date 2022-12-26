<template>
    <div>
        <v-dialog
            v-model="state.dialog"
            persistent
            max-width="360px">
            <v-card style="position: relative;" theme="light">
                <v-card-title class="pt-3 text-center">
                    {{ title }}
                </v-card-title>
                <div class="text-center">
                    <v-icon v-if="icon" color="primary" style="font-size: 200px">{{ icon }}</v-icon>
                    <img v-if="image" class="w-100" :src="image">
                </div>
                <v-card-text v-if="desc" class="mb-3">{{ desc }}</v-card-text>
                <div class="pa-4 pt-0">
                    <v-btn
                        v-for="btn of btns"
                        variant="text"
                        block
                        color="primary"
                        @click="commit(btn.handler)"
                        :key="btn.text"
                        :name="`ng-choices-${btn.text}`">
                        {{ btn.text }}
                    </v-btn>
                    <v-btn
                        variant="text"
                        name="ng-choices-close"
                        block
                        @click="close"
                        :disabled="state.loading">
                        {{ $t('ng.confirmCancelText') }}
                    </v-btn>
                </div>
                <v-overlay contained v-model="state.loading" class="w-100 align-center">
                    <v-progress-circular
                        class="mx-auto"
                        color="white"
                        indeterminate
                        size="64"
                    ></v-progress-circular>
                </v-overlay>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { useLibChoicesStore } from './store/choices'
import { computed, watch, reactive } from 'vue'

const libChoicesStore = useLibChoicesStore()

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

const open = computed(() => libChoicesStore.state.isOpen)
const icon = computed(() => libChoicesStore.state.icon)
const desc = computed(() => libChoicesStore.state.desc)
const btns = computed(() => libChoicesStore.state.btns)
const title = computed(() => libChoicesStore.state.title)
const image = computed(() => libChoicesStore.state.image)

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
    libChoicesStore.cancel()
    setTimeout(() => {
        state.loading = false
    }, 200)
}

const commit = (handler: (close: () => void) => any) => {
    state.loading = true
    handler(close)
}
</script>
