<template>
    <div class="lib-notification">
        <div
            v-for="message of messages"
            class="lib-notification-block mt-2 mr-2"
            :key="message.id">
            <v-card @click="clickMessage(message)" dark :color="getColor(message.type)">
                <v-progress-linear
                    v-if="message.clicked === false"
                    color="light-blue lighten-5"
                    height="3"
                    :value="100 - message.duration">
                </v-progress-linear>
                <v-row class="pa-3" no-gutters align="center">
                    <v-icon dark> mdi-alert</v-icon>
                    <div class="ml-3">{{ message.content }}</div>
                    <v-spacer></v-spacer>
                    <v-btn icon @click.stop="removeMessage(message)">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-row>
            </v-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ticker } from 'power-helper'
import { useVueHooks } from '../../core'
import { useLayoutNotificationStore, Message, MessageType } from './store/notification'

const { reactive, onMounted, onUnmounted, computed } = useVueHooks()

// =================
//
// store
//

const layoutNotificationStore = useLayoutNotificationStore()

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
    return layoutNotificationStore.messages.slice(0, 4)
})

// =================
//
// mounted
//

onMounted(() => {
    state.ticker.on('next', () => {
        let needClear = false
        messages.value.forEach(message => {
            if (message.clicked === false) {
                message.duration += 5
                if (message.duration >= 100) {
                    needClear = true
                }
            }
        })
        if (needClear) {
            layoutNotificationStore.clear()
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
        return 'warning lighten-1'
    }
}

const clickMessage = (message: Message) => {
    message.clicked = true
}

const removeMessage = (message: Message) => {
    setTimeout(() => {
        message.duration = 120
        layoutNotificationStore.clear()
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
</style>
