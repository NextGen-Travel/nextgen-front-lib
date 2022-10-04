export function createStaticPathParser(def: (_path: string) => string = (path) => `./static/${path}`) {
    return (path: string) => {
        if (typeof path !== 'string') {
            return ''
        }
        if (path && path.trim().slice(0, 4) === 'http') {
            return path
        } else if (path.match('base64') && path.trim().slice(0, 5) === 'data:') {
            return path
        } else {
            return def(path)
        }
    }
}
