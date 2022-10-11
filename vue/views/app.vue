<template>
    <v-app>
        <Confirm
            :title-text="options.confirmTitleText"
            :cancel-text="options.confirmCancelText"
            :confirm-text="options.confirmConfirmText">
        </Confirm>
        <Notification></Notification>
        <slot></slot>
    </v-app>
</template>

<script setup lang="ts">
import Confirm from './confirm.vue'
import Notification from './notification.vue'
import { PropType } from 'vue'

// =================
//
// defined
//

defineProps({
    options: {
        required: true,
        type: Object as PropType<{
            confirmTitleText: string
            confirmCancelText: string
            confirmConfirmText: string
        }>
    }
})

</script>
