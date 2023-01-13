import { reactive } from 'vue'
import { defineStore } from 'pinia'

type Handler = (_close: () => void, _reset: () => void) => any

export const useLibConfirmStore = defineStore('lib-confirm', () => {

    // =================
    //
    // state
    //

    const state = reactive({
        isOpen: false,
        message: '',
        handler: null as unknown as Handler
    })

    // =================
    //
    // actions
    //

    const open = ({ message, handler }: { handler: Handler, message: string }) => {
        state.isOpen = true
        state.message = message
        state.handler = handler
    }

    const cancel = () => {
        state.isOpen = false
    }

    // =================
    //
    // done
    //

    return {
        open,
        state,
        cancel
    }
})