import { PiniaPlugin } from 'pinia'

declare module 'pinia' {
    export interface PiniaCustomProperties {
        $destroy: () => void
    }
}

export const NextgenPiniaPlugin: PiniaPlugin = ({ store, pinia }) => {
    store.$destroy = () => {
        store.$dispose()
        delete pinia.state.value[store.$id]
    }
}
