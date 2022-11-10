import jwtDecode from 'jwt-decode'
import { Event, ElementListenerGroup } from 'power-helper'
import { casApi } from './request'
import { CryptoAES } from '../../modules/crypto'
import { useLocalStorage } from '../../core/storage'
import { serviceException } from '../../core/error'
import { useLibEnv } from '../../core'

export type Services = 'nss' | 'pos' | 'scrm' | 'dispensing'

type Stages = 'dev' | 'stage' | 'prod'

type TokenPayload = {
    id: number
    iat: number
    exp: number
    email: string
    username: string
}

type Channels = {
    signIn: {
        client: CasAuthClientConstructor
    }
    refresh: {
        client: CasAuthClientConstructor
    }
    signOut: {
        client: CasAuthClientConstructor
    }
}

const cryptoKey = 'nextgen-key-1234'
const exception = serviceException.checkout('modules cas')
const signInError = () => exception.create('No singin.')
const env: Record<Stages, {
    url: string
    oneTapEndpoint: string
}> = {
    dev: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api',
        oneTapEndpoint: 'http://localhost:8081'
    },
    stage: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api',
        oneTapEndpoint: 'http://frontend-dedicated.s3-website-ap-southeast-1.amazonaws.com/sso/dev/index.html'
    },
    prod: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api',
        oneTapEndpoint: 'http://frontend-dedicated.s3-website-ap-southeast-1.amazonaws.com/sso/dev/index.html'
    }
}

const links: Record<Services, Record<Stages, string>> = {
    nss: {
        dev: 'https://dispensing-dev.cloudsatlas.com.hk',
        prod: 'https://dispensing.cloudsatlas.com.hk',
        stage: 'https://dispensing-stage.cloudsatlas.com.hk'
    },
    pos: {
        dev: 'https://erp-dispensing-dev.cloudsatlas.com.hk',
        prod: 'https://erp-dispensing.cloudsatlas.com.hk',
        stage: 'https://erp-dispensing-stage.cloudsatlas.com.hk'
    },
    scrm: {
        dev: 'https://dispensing-dev.cloudsatlas.com.hk',
        prod: 'https://dispensing.cloudsatlas.com.hk',
        stage: 'https://dispensing-stage.cloudsatlas.com.hk'
    },
    dispensing: {
        dev: 'https://dispensing-dev.cloudsatlas.com.hk',
        prod: 'https://dispensing.cloudsatlas.com.hk',
        stage: 'https://dispensing-stage.cloudsatlas.com.hk'
    }
}

export class CasAuthClientConstructor extends Event<Channels> {
    private api!: ReturnType<typeof casApi.export>
    private payload: null | TokenPayload = null
    private elementListenerGroup = new ElementListenerGroup(window)
    private status = {
        appId: '',
        token: ''
    }

    private get stage() {
        return useLibEnv().stage as Stages
    }

    encode(params: {
        appId: string
        token: string
    }) {
        const json = JSON.stringify(params)
        const base64 = btoa(json)
        const key = CryptoAES.encrypt('crypto-js', base64, cryptoKey)
        return encodeURIComponent(key)
    }

    decode(key: string) {
        let base64 = CryptoAES.decrypt('crypto-js', decodeURIComponent(key), cryptoKey)
        let json = atob(base64)
        return JSON.parse(json) as {
            appId: string
            token: string
        }
    }

    async install() {
        await casApi.install({
            baseUrl: env[this.stage].url
        })
        this.api = casApi.export()
        let storage = useLocalStorage()
        let auth = storage.get('casAuth')
        if (auth) {
            this.signIn(auth)
            if (this.isSignIn()) {
                await this.refresh()
            }
        }
    }

    openSignIn(options?: {
        autoSign?: boolean
    }): Promise<{
        appId: string
        token: string
    }> {
        return new Promise((resolve, reject) => {
            let url = env[this.stage].oneTapEndpoint
            let isSuccess = false
            let isAutoSignIng = options?.autoSign == null ? true : options?.autoSign
            let openWindow = window.open(`${url}?cas-origin=${location.origin}`, '_blank', 'height=640, width=480')
            this.elementListenerGroup.clear()
            this.elementListenerGroup.add('message', (data) => {
                if (data.data.isCasLogin) {
                    isSuccess = true
                    let context = this.decode(data.data.auth)
                    if (isAutoSignIng) {
                        this.signIn({
                            appId: context.appId,
                            token: context.token
                        })
                    }
                    resolve({
                        appId: context.appId,
                        token: context.token
                    })
                    if (openWindow) {
                        openWindow.close()
                    }
                    this.elementListenerGroup.clear()
                }
            })
            openWindow?.addEventListener('close', () => {
                if (isSuccess === false) {
                    reject('user_close_windows')
                }
            })
        })
    }

    signIn(params: {
        appId: string
        token: string
    }) {
        if (this.isSignIn()) {
            this.signOut()
        }
        this.payload = jwtDecode(params.token)
        this.status = {
            appId: params.appId,
            token: params.token
        }
        useLocalStorage().set('casAuth', {
            appId: params.appId,
            token: params.token
        })
        if (this.isExpired()) {
            this.signOut()
        } else {
            this.emit('signIn', {
                client: this
            })
        }
    }

    autoSignIn(queryKey = 'auth') {
        let urls = location.href.split('#')
        let url = new URL(urls[0])
        let auth = url.searchParams.get(queryKey)
        let output = {
            isSignIn: false
        }
        if (auth) {
            let data = this.decode(auth)
            if (data) {
                this.signIn({
                    appId: data.appId,
                    token: data.token
                })
                output.isSignIn = true
            }
        }
        return output
    }

    signOut() {
        if (this.payload) {
            useLocalStorage().remove('casAuth')
            this.payload = null
            this.status = {
                appId: '',
                token: ''
            }
            this.emit('signOut', {
                client: this
            })
        } else {
            throw signInError()
        }
    }

    isSignIn() {
        return this.payload != null
    }

    isExpired() {
        if (this.payload) {
            return Date.now() > (this.payload.exp * 1000)
        } else {
            throw signInError()
        }
    }

    getPayload(): TokenPayload {
        if (this.payload) {
            return this.payload
        } else {
            throw signInError()
        }
    }

    getAppId() {
        if (this.payload) {
            return this.status.appId
        } else {
            throw signInError()
        }
    }

    getToken() {
        if (this.payload) {
            return this.status.token
        } else {
            throw signInError()
        }
    }

    async refresh() {
        if (this.payload) {
            const response = await this.api('get@v1/private/auth/renew', {})
            const data = {
                appId: this.status.appId,
                token: response.data.jwt
            }
            useLocalStorage().set('casAuth', data)
            this.status = data
            this.emit('refresh', {
                client: this
            })
        } else {
            throw signInError()
        }
    }

    async getServiceData(service: Services) {
        if (this.payload) {
            let response = await this.api('get@v1/private/auth/:appId', {
                params: {
                    appId: this.status.appId
                },
                query: {
                    expand: 'profile,validity',
                    service
                }
            })
            return response.data
        } else {
            throw signInError()
        }
    }

    getServiceLink(service: Services, queryKey = 'auth') {
        let key = this.encode({
            appId: this.status.appId,
            token: this.status.token
        })
        let url = new URL(links[service][this.stage])
        url.searchParams.set(queryKey, key)
        return url.href
    }
}

export const CasAuthClient = new CasAuthClientConstructor()

declare global {
    interface Window {
        CasAuthClient: CasAuthClientConstructor
    }
}

window.CasAuthClient = CasAuthClient
