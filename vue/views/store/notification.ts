import { flow } from 'power-helper'
import { defineStore } from 'pinia'

export type MessageType = 'info' | 'warning' | 'danger' | 'success'

export type Message = {
    id: string
    type: MessageType
    clicked: boolean
    content: string
    duration: number
}

export const useLayoutNotificationStore = defineStore('lib-notification', {
    state: () => {
        return {
            _messages: [] as Message[]
        }
    },
    actions: {
        push(params: {
            type: MessageType
            content: string
        }) {
            this.$state._messages.push({
                ...params,
                id: flow.createUuid(),
                duration: 0,
                clicked: false
            })
        },
        clear() {
            this.$state._messages = this.$state._messages.filter(e => e.duration <= 100)
        }
    },
    getters: {
        messages: state => state._messages
    }
})
