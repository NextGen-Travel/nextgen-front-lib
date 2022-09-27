export const parseMessage = (data: any, def: string): string => {
    console.dir('Parse Error =>', data)
    if (typeof data === 'string') {
        return data
    }
    // Axios
    if (data.name === 'AxiosError') {
        if (data.response && typeof data.response.data === 'string') {
            return data.response.data
        }
        if (data.response.error && data.response.message) {
            return data.response.message
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
