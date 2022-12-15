import { useVuePlugins, useVueHooks } from '../../../core'

type Handler = (_close: () => void) => any
type ChoicesBtn = {
    text: string
    handler: Handler
}
export type ChoicesParams = {
    title: string
    image?: string
    icon?: string
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
                image: '' as string | undefined,
                icon: '' as string | undefined,
                desc: '',
                btns: [] as Array<ChoicesBtn>
            })

            // =================
            //
            // actions
            //
        
            const open = ({ title, image, desc, icon, btns }: ChoicesParams) => {
                state.isOpen = true
                state.title = title
                state.image = image
                state.icon = icon
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