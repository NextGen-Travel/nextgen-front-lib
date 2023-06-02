import axios from 'axios'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { flow, JobsQueue } from 'power-helper'
import { useLibEnv } from '../../index'

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
    visitorId: string
    url: string
    service: string
    stage: string
    messages: Message[]
}

type NextgenMessageTraceParams = {
    limitSize: number
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
                fingerId: this.fingerId,
                visitorId: this.visitorId,
                url: window.location.href,
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
