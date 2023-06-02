import axios from 'axios'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { useLibEnv } from '../../index'
import { flow, JobsQueue } from 'power-helper'

declare type Type = 'step' | 'wrong' | 'notify' | 'fail'
declare type Level = 'info' | 'warning' | 'danger' | 'success'

type Message = {
    time: number
    type: Type
    text: string
    level: Level
}

type SendData = {
    fingerId: string
    clientId: string
    visitorId: string
    url: string
    service: string
    stage: string
    messages: Message[]
}

type NextgenMessageTraceParams = {
    limitSize: number
    clientId: () => string
    serverUrl: () => string
}

export class NextgenMessageTrace {
    params: NextgenMessageTraceParams
    messages: Message[] = []
    fingerId = ''
    visitorId = flow.createUuid()
    jobsQueue = new JobsQueue({
        concurrentExecutions: 1
    })

    constructor(params: NextgenMessageTraceParams) {
        this.params = params
    }

    get size() {
        return this.messages.length
    }

    clearMessages() {
        const messages = this.messages.slice(0, this.params.limitSize)
        this.messages = []
        return messages
    }

    collect(message: Omit<Message, 'time'>) {
        this.messages.unshift({
            ...message,
            time: Date.now()
        })
    }

    send() {
        this.jobsQueue.push('send', async() => {
            if (this.fingerId === '') {
                const fp = await FingerprintJS.load()
                const result = await fp.get()
                this.fingerId = result.visitorId
            }
            const env = useLibEnv()
            const messages = this.clearMessages()
            const sendData: SendData = {
                url: window.location.href,
                fingerId: this.fingerId,
                clientId: this.params.clientId(),
                visitorId: this.visitorId,
                service: env.service,
                stage: env.stage,
                messages
            }
            if (messages.length !== 0) {
                await axios.post(this.params.serverUrl(), {
                    body: sendData
                })
            }
        })
    }
}
