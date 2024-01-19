<template>
    <div>
        <v-dialog
            v-model="state.dialog"
            persistent
            max-width="360px">
            <v-card>
                <v-card-title>
                    {{ title }}
                </v-card-title>
                <v-card-actions class="pb-4 px-4">
                    <v-spacer></v-spacer>
                    <v-btn
                        name="ng-confirm-close"
                        variant="text"
                        rounded="pill"
                        :disabled="state.loading"
                        @click="clickCancel">
                        {{ cancelText }}
                    </v-btn>
                    <v-btn
                        name="ng-confirm-confirm"
                        color="primary"
                        rounded="pill"
                        :loading="state.loading"
                        @click="commit">
                        {{ confirmText }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { computed, watch, reactive } from 'vue'

// =================
//
// define
//

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    cancelText: {
        type: String,
        required: true
    },
    confirmText: {
        type: String,
        required: true
    },
    isOpen: {
        type: Boolean,
        required: true
    },
    clickCancel: {
        type: Function,
        required: true
    },
    clickConfirm: {
        type: Function,
        required: true
    }
})

// =================
//
// state
//

const state = reactive({
    dialog: false,
    loading: false,
    doubleCheckText: ''
})

// =================
//
// computed
//

const open = computed(() => props.isOpen)

// =================
//
// watch
//

watch(() => open.value, () => {
    state.dialog = open.value
    state.doubleCheckText = ''
})

// =================
//
// methods
//

const success = (success = true) => {
    if (success) {
        props.clickCancel()
    }
    setTimeout(() => {
        state.loading = false
    }, 200)
}

const commit = async() => {
    state.loading = true
    props.clickConfirm(success)
}

</script>
