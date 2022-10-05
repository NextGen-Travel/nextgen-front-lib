import { flow } from 'power-helper'
import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export type MessageType = 'info' | 'warning' | 'danger' | 'success'

export type Message = {
    id: string
    type: MessageType
    clicked: boolean
    content: string
    duration: number
}

export const useLibNotificationStore = defineStore('lib-notification', () => {
    // =================
    //
    // state
    //

    const state = reactive({
        messages: [] as Message[]
    })

    // =================
    //
    // actions
    //

    const push = (params: {
        type: MessageType
        content: string
    }) => {
        state.messages.push({
            ...params,
            id: flow.createUuid(),
            duration: 0,
            clicked: false
        })
    }

    const clear = () => {
        state.messages = state.messages.filter(e => e.duration <= 100)
    }

    // =================
    //
    // getters
    //

    const messages = computed(() => state.messages)

    // =================
    //
    // done
    //

    return {
        push,
        clear,
        state,
        messages
    }
})
