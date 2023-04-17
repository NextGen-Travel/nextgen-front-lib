<template>
    <v-app>
        <div>
            <Choices></Choices>
            <Confirm></Confirm>
            <Notification>
                <slot name="notification"></slot>
            </Notification>
            <slot></slot>
        </div>
    </v-app>
</template>

<script setup lang="ts">
import Choices from './choices.vue'
import Confirm from './confirm.vue'
import Notification from './notification.vue'
</script>
