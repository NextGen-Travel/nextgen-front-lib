<template>
    <v-app>
        <div>
            <Choices></Choices>
            <Confirm></Confirm>
            <Notification>
                <template #default="props">
                    <slot name="notification" v-bind="props"></slot>
                </template>
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
