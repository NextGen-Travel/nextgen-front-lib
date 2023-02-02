export const toHump = (text: string) => {
    let output = text.replace(/-([a-z])/g, (all, val) => val.toUpperCase())
    if (output.length >= 1) {
        let first = output[0].toUpperCase()
        output = `${first}${output.slice(1)}`
    }
    return output
}