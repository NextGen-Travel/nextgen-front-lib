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
                    <div>{{ message }}</div>
                    <!-- 驗證輸入 -->
                    <v-text-field
                        v-if="doubleCheckText"
                        v-model="state.doubleCheckText"
                        variant="outlined"
                        class="mt-4"
                        hide-details
                        :placeholder="doubleCheckText"
                        :label="t(
                            $t('ng.confirmDoubleCheckText{N}', { N: doubleCheckText }),
                            { N: doubleCheckText }
                        )">
                    </v-text-field>
                </v-card-text>
                <v-card-actions class="pb-4 px-4">
                    <v-spacer></v-spacer>
                    <v-btn
                        name="ng-confirm-close"
                        text
                        rounded="pill"
                        :disabled="state.loading"
                        @click="libConfirmStore.cancel">
                        {{ t($t('ng.confirmCancelText')) }}
                    </v-btn>
                    <v-btn
                        name="ng-confirm-confirm"
                        color="primary"
                        rounded="pill"
                        :loading="state.loading"
                        :disabled="state.doubleCheckText !== doubleCheckText"
                        @click="commit">
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
    loading: false,
    doubleCheckText: ''
})

// =================
//
// computed
//

const open = computed(() => libConfirmStore.state.isOpen)
const message = computed(() => libConfirmStore.state.message)
const doubleCheckText = computed(() => libConfirmStore.state.doubleCheckText)

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
