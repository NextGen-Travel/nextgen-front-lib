<template>
    <v-app>
        <div>
            <Confirm></Confirm>
            <Notification></Notification>
            <slot></slot>
        </div>
    </v-app>
</template>

<script setup lang="ts">
import Confirm from './confirm.vue'
import Notification from './notification.vue'
</script>
