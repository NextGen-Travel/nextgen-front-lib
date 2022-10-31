<template>
    <v-app>
        <div v-if="show">
            <Confirm
                :title-text="options.confirmTitleText"
                :cancel-text="options.confirmCancelText"
                :confirm-text="options.confirmConfirmText">
            </Confirm>
            <Notification></Notification>
            <slot></slot>
        </div>
    </v-app>
</template>

<script setup lang="ts">
import Confirm from './confirm.vue'
import Notification from './notification.vue'
import { PropType } from 'vue'
import { useVueHooks } from '../../core'

const { onMounted, ref } = useVueHooks()

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

// =================
//
// refs
//

const show = ref(false)

// =================
//
// mounted
//

onMounted(() => {
    setTimeout(() => {
        show.value = true
    }, 10)
})
</script>
