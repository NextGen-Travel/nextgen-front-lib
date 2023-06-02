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

export class NextgenMessageTrace {
    messages: Message[] = []
    fingerId = ''
    serverUrl = ''
    visitorId = flow.createUuid()
    jobsQueue = new JobsQueue({
        concurrentExecutions: 1
    })

    get size() {
        return this.messages.length
    }

    setServerUrl(url: string) {
        this.serverUrl = url
    }

    clearMessages() {
        const messages = this.messages.slice()
        this.messages = []
        return messages
    }

    collect(message: Omit<Message, 'time'>) {
        this.messages.push({
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
                await axios.post(this.serverUrl, {
                    body: sendData
                })
            }
        })
    }
}
