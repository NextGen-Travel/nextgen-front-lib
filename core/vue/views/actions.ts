import { useLibConfirmStore, OpenParams } from './store/confirm'
import { useLibChoicesStore, ChoicesParams } from './store/choices'
import { useLibNotificationStore, MessageType } from './store/notification'

const openConfirm = (message: string, handler: OpenParams['handler']): void => {
    useLibConfirmStore().open({
        message,
        handler
    })
}

const openConfirmPlus = (params: OpenParams): void => {
    useLibConfirmStore().open(params)
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
    openConfirm,
    openConfirmPlus
}
