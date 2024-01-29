import { flow, Event, ElementListenerGroup, json } from 'power-helper'

type MessageContext = {
    id: string
    type: 'event' | 'method'
    name: string
    data: any
    error?: any
    isError: boolean
}

export type NextgenWorkerFrom<
    T extends ReturnType<typeof NextgenWorker.define>,
    E extends Event<any> = T['_event'],
    M extends Record<string, (..._args: any[]) => Promise<any>> = T['_methods']
> = {
    on: E['on']
    methods: M
    terminate: () => void
}

export class NextgenWorker {
    static inWorker() {
        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
            return true
        } else {
            return false
        }
    }
    static define<
        E extends Event<any>,
        M extends Record<string, (..._args: any[]) => Promise<any>>
    >(cb: (_event: E) => M) {
        if (NextgenWorker.inWorker()) {
            const event = new Event() as E
            const methods = cb(event)
            event.on('*', ({ data, event }) => {
                self.postMessage({
                    name: event,
                    type: 'event',
                    data,
                    isError: false
                })
            })
            self.addEventListener('message', async (e: MessageEvent<Omit<MessageContext, 'error'>>) => {
                const { id, type, name, data } = e.data
                if (type === 'method' && methods[name]) {
                    try {
                        const result = await methods[name](...data)
                        self.postMessage({
                            id,
                            name,
                            type,
                            data: result,
                            isError: false
                        })
                    } catch (error: any) {
                        const e = json.nonStrictJSONStringify(error)
                        self.postMessage({
                            id,
                            name,
                            type,
                            error: e,
                            isError: true
                        })
                    }
                } else {
                    self.postMessage({
                        id,
                        name,
                        type,
                        error: `Method ${name} not found`,
                        isError: true
                    })
                }
            })
        }
        return {
            _event: null as unknown as E,
            _methods: null as unknown as M,
            createInMainProcess: () => {
                const event = new Event() as E
                const methods = cb(event)
                const state = {
                    isClosed: false
                }
                return {
                    on: event.on.bind(event) as E['on'],
                    methods: methods as unknown as M,
                    terminate: () => {
                        if (state.isClosed === false) {
                            state.isClosed = true
                            event.listeners.clear()
                        }
                    }
                }
            }
        }
    }
    static from<
        T extends ReturnType<typeof NextgenWorker.define>,
        E extends Event<any> = T['_event'],
        M extends Record<string, (..._args: any[]) => Promise<any>> = T['_methods']
    >(workerInstance: Worker | (new () => Worker)) {
        const state = {
            isClosed: false
        }
        const instance = typeof workerInstance === 'function' ? new workerInstance() : workerInstance
        const publicEvent = new Event() as E
        const privateEvent = new Event<Record<string, MessageContext>>()
        const elementListenerGroup = new ElementListenerGroup(instance)
        elementListenerGroup.add('message', (e: MessageEvent<MessageContext>) => {
            console.log('CCC', e)
            let { id, type, name, data } = e.data
            if (type === 'event') {
                publicEvent.emit(name, data)
            }
            if (type === 'method') {
                privateEvent.emit(id, e.data)
            }
        })
        const methods = new Proxy({}, {
            get(target, name: string) {
                return (...args: any[]) => {
                    if (state.isClosed) {
                        return Promise.reject(new Error('Worker is closed'))
                    }
                    return new Promise((resolve, reject) => {
                        const id = flow.createUuid()
                        privateEvent.on(id, (context, { off }) => {
                            off()
                            if (context.isError) {
                                reject(context.error || new Error('Unknown error'))
                            } else {
                                resolve(context.data)
                            }
                        })
                        instance.postMessage({
                            id,
                            type: 'method',
                            name,
                            data: args
                        })
                    })
                }
            }
        }) as unknown as M
        return {
            on: publicEvent.on.bind(publicEvent) as typeof publicEvent['on'],
            methods,
            terminate: () => {
                if (state.isClosed === false) {
                    state.isClosed = true
                    elementListenerGroup.clear()
                    publicEvent.listeners.clear()
                    privateEvent.listeners.clear()
                    instance.terminate()
                }
            }
        }
    }
}