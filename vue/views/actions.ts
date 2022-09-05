import { useLayoutConfirmStore } from './store/confirm'
import { useLayoutNotificationStore, MessageType } from './store/notification'

const openConfirm = (message: string, handler: (_done: () => void) => void): void => {
    let confirm = useLayoutConfirmStore()
    confirm.open({
        message,
        handler
    })
}

const showToast = (type: MessageType, content: string) => {
    useLayoutNotificationStore().push({
        type,
        content
    })
}

export const actions = {
    showToast,
    openConfirm
}