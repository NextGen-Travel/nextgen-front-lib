import { pick } from 'power-helper'

export const parseMessage = (data: any, def: string): string => {
    if (typeof data === 'string') {
        return data
    }
    let message = data.message
    if (message && message.response && typeof message.response.data === 'string') {
        return message.response.data
    }
    if (message && message.response && pick.getType(message.response.data) === 'object') {
        if (message.response.data.error && message.response.data.error.message) {
            return message.response.data.error.message
        }
    }
    if (message && typeof message.message === 'string') {
        return message.message
    }
    if (typeof message === 'string') {
        return message
    }
    return def || 'unknown error'
}
