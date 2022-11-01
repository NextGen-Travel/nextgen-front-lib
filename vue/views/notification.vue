<template>
    <div class="lib-notification">
        <transition-group name="lib-notification-list">
            <div
                v-for="message of messages"
                class="lib-notification-block mt-2 mr-2"
                :key="message.id">
                <v-card outlined @click="clickMessage(message)">
                    <v-progress-linear
                        v-if="message.clicked === false"
                        height="2"
                        :color="getColor(message.type)"
                        :value="100 - message.duration">
                    </v-progress-linear>
                    <v-row class="pa-3 flex-nowrap" no-gutters align="center" :class="`${getColor(message.type)}--text`">
                        <v-icon :color="getColor(message.type)">{{ getIcon(message.type) }}</v-icon>
                        <div class="ml-3" style="overflow: auto;">{{ message.content }}</div>
                        <v-spacer></v-spacer>
                        <v-btn icon @click.stop="removeMessage(message)" :color="getColor(message.type)">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                </v-card>
            </div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { Ticker } from 'power-helper'
import { useVueHooks } from '../../core'
import { useLibNotificationStore, Message, MessageType } from './store/notification'

const { reactive, onMounted, onUnmounted, computed } = useVueHooks()

// =================
//
// store
//

const libNotificationStore = useLibNotificationStore()

// =================
//
// state
//

const state = reactive({
    dialog: false,
    ticker: new Ticker(100)
})

// =================
//
// computed
//

const messages = computed(() => {
    return libNotificationStore.messages.slice(0, 4)
})

// =================
//
// mounted
//

onMounted(() => {
    state.ticker.on('next', () => {
        let needClear = false
        messages.value.forEach((message: any) => {
            if (message.clicked === false) {
                message.duration += 5
                if (message.duration >= 100) {
                    needClear = true
                }
            }
        })
        if (needClear) {
            libNotificationStore.clear()
        }
    })
})

onUnmounted(() => {
    state.ticker.close()
})

// =================
//
// methods
//

const getColor = (type: MessageType) => {
    if (type === 'danger') {
        return 'error'
    }
    if (type === 'info') {
        return 'info'
    }
    if (type === 'success') {
        return 'success'
    }
    if (type === 'warning') {
        return 'warning'
    }
}

const getIcon = (type: MessageType) => {
    if (type === 'danger') {
        return 'mdi-alert-circle'
    }
    if (type === 'info') {
        return 'mdi-email'
    }
    if (type === 'success') {
        return 'mdi-check'
    }
    if (type === 'warning') {
        return 'mdi-comment-alert'
    }
}

const clickMessage = (message: Message) => {
    message.clicked = true
}

const removeMessage = (message: Message) => {
    setTimeout(() => {
        message.duration = 120
        libNotificationStore.clear()
    }, 100)
}
</script>

<style lang="scss" scoped>
    .lib-notification {
        position: fixed;
        z-index: 1000;
        right: 0;
        top: 0;
        .lib-notification-block {
            width: 320px;
            min-width: 260px;
        }
    }
    .lib-notification-list-move, .lib-notification-list-enter-active, .lib-notification-list-leave-active {
        transition: all 0.25s;
    }

    .lib-notification-list-leave-to {
        opacity: 0;
    }

    .lib-notification-list-enter {
        opacity: 0;
        transform: translateY(30px);
    }

    .lib-notification-list-leave-active:not(:last-child) {
        position: absolute;
    }
</style>
