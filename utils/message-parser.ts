export const parseMessage = (data: any, def: string): string => {
    if (typeof data === 'string') {
        return data
    }
    // Axios
    if (data.name === 'AxiosError') {
        if (data.response && data.response.data) {
            if (typeof data.response.data === 'string') {
                return data.response.data
            }
            if (data.response.data.error && data.response.data.message) {
                return data.response.message
            }
        }
    }
    // Gql
    let message = data.message
    if (message) {
        if (typeof message === 'string') {
            return message
        }
    }
    return def || 'unknown error'
}
