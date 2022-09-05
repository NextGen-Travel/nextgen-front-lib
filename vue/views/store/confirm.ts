import { defineStore } from 'pinia'

type Handler = (_callback: () => void) => any

export const useLayoutConfirmStore = defineStore('lib-confirm', {
    state: () => ({
        isOpen: false,
        message: '',
        handler: null as unknown as Handler
    }),
    actions: {
        open({ message, handler }: { handler: Handler, message: string }) {
            this.isOpen = true
            this.message = message
            this.handler = handler
        },
        cancel() {
            this.isOpen = false
        }
    }
})
