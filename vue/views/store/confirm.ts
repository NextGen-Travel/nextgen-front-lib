import { useVueOptions, useVueHooks } from '../../../core'

type Handler = (_callback: () => void) => any

let store: any = null

export const useLibConfirmStore = () => {
    if (store == null) {
        const options = useVueOptions()
        console.log('DDD', options)
        store = options.pinia.defineStore('lib-confirm', () => {
            const { reactive } = useVueHooks()
        
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