import { PiniaPlugin } from 'pinia'
import { reactive, onUnmounted } from 'vue'

declare module 'pinia' {
    export interface PiniaCustomProperties {
        $destroy: () => void
        $install: (_data: any) => Promise<void>
        $useSetup: (_data: any) => () => Promise<void>
    }
}

export const NextgenPiniaPlugin: PiniaPlugin = ({ store, pinia }) => {
    store.$useSetup = (data?: any) => {
        onUnmounted(() => {
            store.$destroy()
        })
        return async() => {
            await store.$install(data)
        }
    }
    store.$install = async(data) => {
        if (store.__runInstall) {
            await store.__runInstall(data)
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

export const createStoreLifeCycle = <D>() => {
    const state = reactive({
        isDestroyed: false,
        installStack: [] as ((_data: any) => Promise<void>)[],
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
        genOutput: <T>(data: T): T & {
            $install: (_data: D extends never ? never : D) => Promise<void>
            $useSetup: (_data: D extends never ? never : D) => () => Promise<void>
        } => {
            return Object.assign(data as any, {
                __runInstall: async (initData: any) => {
                    await Promise.all(state.installStack.map(cb => cb(initData)))
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
