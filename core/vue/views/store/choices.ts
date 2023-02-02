import { reactive } from 'vue'
import { defineStore } from 'pinia'

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

export const useLibChoicesStore = defineStore('lib-choices', () => {

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
