import { reactive } from 'vue'
import { defineStore } from 'pinia'

type Handler = (_success: (_state?: boolean) => void) => any
export type OpenParams = {
    message: string
    handler: Handler
    onReject?: () => void
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
        handler: null as unknown as Handler,
        onReject: undefined as undefined | (() => void)
    })

    // =================
    //
    // actions
    //

    const open = ({ doubleCheckText, message, handler, onReject }: OpenParams) => {
        state.isOpen = true
        state.message = message
        state.doubleCheckText = doubleCheckText || ''
        state.handler = handler
        state.onReject = onReject
    }

    const cancel = () => {
        state.isOpen = false
        state.onReject = undefined
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
