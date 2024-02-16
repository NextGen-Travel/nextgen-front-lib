const checkState = {
    isSupportWebP: null as null | boolean,
    isSupportAVIF: null as null | boolean
}
const loadImage = (src: string) => {
    return new Promise<HTMLImageElement>((resolve) => {
        let image = new Image()
        image.onload = () => resolve(image)
        image.src = src
    })
}

export const isSupportAVIF = async() => {
    if (checkState.isSupportAVIF == null) {
        const img = await loadImage('data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAIgAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAABAA0AAIAAAAAMYXYxQ4EgAgAAAAAUaXNwZQAAAAAAAAAQAAAAEAAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAACptZGF0EgAKCDgM/9lAQ0AIMhQQAAAAFLm4wN/TRReKCcSo648oag==')
        if (img.naturalWidth > 0 || img.naturalHeight > 0) {
            checkState.isSupportAVIF = true
        } else {
            checkState.isSupportAVIF = false
        }
    }
    return checkState.isSupportAVIF
}

export const isSupportWebP = async() => {
    if (checkState.isSupportWebP == null) {
        const elem = document.createElement('canvas')
        if (elem.getContext && elem.getContext('2d')) {
            checkState.isSupportWebP = elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
        } else {
            checkState.isSupportWebP = false
        }
    }
    return checkState.isSupportWebP
}

export const getSupportImages = async(urls: string[]) => {
    const supportImages = {
        avif: await isSupportAVIF(),
        webp: await isSupportWebP()
    }
    for (let url of urls) {
        if (url.endsWith('.avif') && !supportImages.avif) {
            continue
        }
        if (url.endsWith('.webp') && !supportImages.webp) {
            continue
        }
        return url
    }
    return urls.at(-1)
}
