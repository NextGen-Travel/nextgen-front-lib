import { useLibConfirmStore } from './store/confirm'
import { useLibNotificationStore, MessageType } from './store/notification'

const openConfirm = (message: string, handler: (_done: () => void) => void): void => {
    useLibConfirmStore().open({
        message,
        handler
    })
}

const showToast = (type: MessageType, content: string) => {
    useLibNotificationStore().push({
        type,
        content
    })
}

export const actions = {
    showToast,
    openConfirm
}
