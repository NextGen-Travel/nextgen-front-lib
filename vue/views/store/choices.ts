import { useVuePlugins, useVueHooks } from '../../../core'

type Handler = (_close: () => void) => any
type ChoicesBtn = {
    text: string
    handler: Handler
}
export type ChoicesParams = {
    title: string
    image: string
    desc: string
    btns: Array<ChoicesBtn>
}

let store: any = null

export const useLibChoicesStore = () => {
    if (store == null) {
        const { pinia } = useVuePlugins()
        const { reactive } = useVueHooks()
        store = pinia.defineStore('lib-choices', () => {

            // =================
            //
            // state
            //
        
            const state = reactive({
                isOpen: false,
                title: '',
                image: '',
                desc: '',
                btns: [] as Array<ChoicesBtn>
            })

            // =================
            //
            // actions
            //
        
            const open = ({ title, image, desc, btns }: ChoicesParams) => {
                state.isOpen = true
                state.title = title
                state.image = image
                state.desc = desc
                state.btns = btns
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