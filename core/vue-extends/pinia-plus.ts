import { PiniaPlugin } from 'pinia'
import { reactive, onUnmounted } from 'vue'

declare module 'pinia' {
    export interface PiniaCustomProperties {
        $build: () => (() => Promise<void>)
        $destroy: () => void
        $install: () => Promise<void>
    }
}

export const NextgenPiniaPlugin: PiniaPlugin = ({ store, pinia }) => {
    store.$build = () => {
        onUnmounted(() => {
            store.$destroy()
        })
        return async() => {
            await store.$install()
        }
    }
    store.$install = async() => {
        if (store.__runInstall) {
            await store.__runInstall()
        }
    }
    store.$destroy = () => {
        if (store.__runDestroy) {
            store.__runDestroy()
        }
        store.$dispose()
        delete pinia.state.value[store.$id]
    }
}

export const createStoreLifeCycle = () => {
    const state = reactive({
        isDestroyed: false,
        installStack: [] as (() => Promise<void>)[],
        destroyStack: [] as (() => void)[]
    })
    return {
        onInstall: (cb: () => Promise<void>) => {
            state.installStack.push(cb)
        },
        onDestroy: (cb: () => void) => {
            state.destroyStack.push(cb)
        },
        isAlive: () => {
            return !state.isDestroyed
        },
        isDestroyed: () => {
            return state.isDestroyed
        },
        getOutput: <T>(data: T): T => {
            return Object.assign(data as any, {
                __runInstall: async () => {
                    await Promise.all(state.installStack.map(cb => cb()))
                },
                __runDestroy: () => {
                    state.isDestroyed = true
                    for (const cb of state.destroyStack) {
                        cb()
                    }
                },
                __lifrCycleState: state
            })
        }
    }
}
