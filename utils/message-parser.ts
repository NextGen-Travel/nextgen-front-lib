export const parseMessage = (data: any, def: string): string => {
    if (typeof data === 'string') {
        return data
    }
    // Axios
    if (data.name === 'AxiosError') {
        if (typeof data.response?.data === 'string' && data.response.data) {
            return data.response.data
        }
        // nextgen
        if (data.response?.data?.data?.msg) {
            return data.response?.data?.data?.msg || def
        }
        // laravel
        if (data.response?.data?.errors) {
            let errors = data.response?.data?.errors
            if (Array.isArray(errors)) {
                return errors[0] || def
            } else {
                let [error] = Object.values(errors) as string[]
                return error || def
            }
        }
        // strapi
        if (data.response?.data?.error?.message) {
            let mainMessage = data.response.data.error.message
            let details = data.response?.data?.error?.details
            if (typeof details === 'string' && details) {
                return `${mainMessage} => ${details}`
            }
            return mainMessage
        }
    }
    let message = data.message
    if (message) {
        if (typeof message === 'string' && message) {
            return message
        }
    }
    return def || 'unknown error'
}
