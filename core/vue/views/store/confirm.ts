import { reactive } from 'vue'
import { defineStore } from 'pinia'

type Handler = (_success: (_state?: boolean) => void) => any
export type OpenParams = {
    message: string
    handler: Handler
    doubleCheckText?: string
}

export const useLibConfirmStore = defineStore('lib-confirm', () => {

    // =================
    //
    // state
    //

    const state = reactive({
        isOpen: false,
        message: '',
        doubleCheckText: '',
        handler: null as unknown as Handler
    })

    // =================
    //
    // actions
    //

    const open = ({ doubleCheckText, message, handler }: OpenParams) => {
        state.isOpen = true
        state.message = message
        state.doubleCheckText = doubleCheckText || ''
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
