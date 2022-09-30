export const parseMessage = (data: any, def: string): string => {
    if (typeof data === 'string') {
        return data
    }
    // Axios
    if (data.name === 'AxiosError') {
        if (typeof data.response?.data === 'string') {
            return data.response.data
        }
        // strapi
        if (data.response?.data?.error?.message) {
            let mainMessage = data.response.data.error.message
            let details = data.response?.data?.error?.details
            if (typeof details === 'string') {
                return `${mainMessage} => ${details}`
            }
            return mainMessage
        }
    }
    let message = data.message
    if (message) {
        if (typeof message === 'string') {
            return message
        }
    }
    return def || 'unknown error'
}
