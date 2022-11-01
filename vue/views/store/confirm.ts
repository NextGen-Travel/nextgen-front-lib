import { useVuePlugins, useVueHooks } from '../../../core'

type Handler = (_callback: () => void) => any

let store: any = null

export const useLibConfirmStore = () => {
    if (store == null) {
        const { pinia } = useVuePlugins()
        const { reactive } = useVueHooks()
        store = pinia.defineStore('lib-confirm', () => {
        
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
    }
    return store()
}