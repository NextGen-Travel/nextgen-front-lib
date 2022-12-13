import { useLibConfirmStore } from './store/confirm'
import { useLibChoicesStore, ChoicesParams } from './store/choices'
import { useLibNotificationStore, MessageType } from './store/notification'

const openConfirm = (message: string, handler: (_done: () => void) => void): void => {
    useLibConfirmStore().open({
        message,
        handler
    })
}

const openChoices = (params: ChoicesParams): void => {
    useLibChoicesStore().open(params)
}

const showToast = (type: MessageType, content: string) => {
    useLibNotificationStore().push({
        type,
        content
    })
}

export const actions = {
    showToast,
    openChoices,
    openConfirm
}
