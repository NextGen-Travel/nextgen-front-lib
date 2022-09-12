import { usePinia } from '../../../core'
import { createUuid } from '../../../utils/uid'

export type MessageType = 'info' | 'warning' | 'danger' | 'success'

export type Message = {
    id: string
    type: MessageType
    clicked: boolean
    content: string
    duration: number
}

export const useLayoutNotificationStore = usePinia().defineStore('lib-notification', {
    state: () => {
        return {
            messages: [] as Message[]
        }
    },
    actions: {
        push(params: {
            type: MessageType
            content: string
        }) {
            this.$state.messages.push({
                ...params,
                id: createUuid(),
                duration: 0,
                clicked: false
            })
        },
        clear() {
            this.$state.messages = this.$state.messages.filter(e => e.duration <= 100)
        }
    },
    getters: {
        messages: state => state.messages
    }
})
