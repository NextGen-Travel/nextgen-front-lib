import { reactive, computed } from 'vue'

type Handler = (_success: (_state?: boolean) => void) => any

export type OpenParams = {
    message: string
    handler: Handler
    onReject?: () => void
    doubleCheckText?: string
}

export const createConfirmStore = (params: {
    confirmText: () => string
    cancelText: () => string
    title: () => string
}) => {
    return () => {

        // =================
        //
        // state
        //
    
        const state = reactive({
            title: params.title(),
            confirmText: params.confirmText(),
            cancelText: params.cancelText(),
            isOpen: false,
            message: '',
            handler: null as unknown as Handler,
            onReject: undefined as undefined | (() => void)
        })
    
        // =================
        //
        // actions
        //
    
        const open = ({ message, handler, onReject }: OpenParams) => {
            state.isOpen = true
            state.message = message
            state.handler = handler
            state.onReject = onReject
        }
    
        const cancel = () => {
            state.isOpen = false
            state.onReject = undefined
        }

        // =================
        //
        // getters
        //
    
        const isOpen = computed(() => state.isOpen)
        const props = computed(() => {
            return {
                title: state.title,
                confirmText: state.confirmText,
                cancelText: state.cancelText,
                message: state.message,
                isOpen: state.isOpen,
                clickCancel: cancel,
                clickConfirm: (success: any) => {
                    state.handler(success)
                }
            }
        })

        // =================
        //
        // done
        //
    
        return {
            open,
            isOpen,
            props,
            state,
            cancel
        }
    }
}

export const confirmStoreToActions = (useStore: () => any) => {
    return {
        openConfirmPlus: (params: OpenParams) => {
            useStore().open(params)
        },
        openConfirm: (message: string, handler: OpenParams['handler'], onReject?: () => void): void => {
            useStore().open({
                message,
                handler,
                onReject
            })
        }        
    }
}
