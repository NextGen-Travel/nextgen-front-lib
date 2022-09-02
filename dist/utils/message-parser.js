export const parseMessage = (data, def) => {
    if (typeof data === 'string') {
        return data;
    }
    let message = data.message;
    if (message && message.response && typeof message.response.data === 'string') {
        return message.response.data;
    }
    if (message && typeof message.message === 'string') {
        return message.message;
    }
    if (typeof message === 'string') {
        return message;
    }
    return def || 'unknown error';
};
