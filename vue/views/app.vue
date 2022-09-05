<template>
    <v-app>
        <Confirm></Confirm>
        <Notification></Notification>
        <slot></slot>
    </v-app>
</template>

<script setup lang="ts">
import Confirm from './confirm.vue'
import Notification from './notification.vue'
</script>
