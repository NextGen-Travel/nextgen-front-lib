import { flow } from 'power-helper'
import { reactive, computed } from 'vue'

export type MessageType = 'info' | 'warning' | 'danger' | 'success'

export type Message = {
    id: string
    type: MessageType
    content: string
    duration: number
    clicked: boolean
    onClick: () => void
}

export const createNotificationStore = () => {
    return () => {
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
                clicked: params.type === 'danger',
                onClick: () => ''
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
        const props = computed(() => {
            return {
                onclear: clear,
                messages: state.messages
            }
        })

        // =================
        //
        // done
        //
    
        return {
            push,
            props,
            clear,
            state,
            messages
        }
    }    
}

export const notificationStoreToActions = (useStore: () => any) => {
    return {
        showToast: (type: MessageType, content: string) => {
            useStore().push({
                type,
                content
            })
        },
        pushNotification: (options: {
            type: 'info' | 'warning' | 'danger' | 'success'
            content: string
            onClick?: () => void
        }) => {
            const store = useStore()
            store.push({
                ...options,
                onClick: options.onClick || (() => null)
            })
        }
    }
}
