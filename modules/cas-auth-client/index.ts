import jwtDecode from 'jwt-decode'
import { Event } from 'power-helper'
import { casApi } from './request'
import { CryptoAES } from '../crypto'
import { useLocalStorage } from '../../core/storage'
import { serviceException } from '../../core/error'

type Stages = 'dev' | 'stage' | 'prod'
type Services = 'nss' | 'pos' | 'scrm' | 'dispensing'
type Params = {
    stage: Stages
}

type TokenPayload = {
    id: number
    iat: number
    exp: number
    email: string
    username: string
}

type Channels = {
    signIn: {
        client: CasAuthClient
    }
    signOut: {
        client: CasAuthClient
    }
}

const cryptoKey = 'nextgen-key-1234'
const exception = serviceException.checkout('modules cas')
const signInError = () => exception.create('No SingIn.')
const env: Record<Stages, { url: string }> = {
    dev: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api'
    },
    stage: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api'
    },
    prod: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api'
    }
}

const links: Record<Services, Record<Stages, string>> = {
    nss: {
        dev: 'https://dispensing-dev.cloudsatlas.com.hk',
        prod: 'https://dispensing.cloudsatlas.com.hk',
        stage: 'https://dispensing-stage.cloudsatlas.com.hk'
    },
    pos: {
        dev: 'https://dispensing-dev.cloudsatlas.com.hk',
        prod: 'https://dispensing.cloudsatlas.com.hk',
        stage: 'https://dispensing-stage.cloudsatlas.com.hk'
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

export class CasAuthClient extends Event<Channels> {
    private api!: ReturnType<typeof casApi.export>
    private params!: Params
    private payload: null | TokenPayload = null
    private status = {
        appId: '',
        token: ''
    }

    static encode(params: {
        appId: string
        token: string
    }) {
        const json = JSON.stringify(params)
        const base64 = btoa(json)
        const key = CryptoAES.encrypt('crypto-js', base64, cryptoKey)
        return encodeURIComponent(key)
    }

    static decode(context: string) {
        let uri = decodeURIComponent(context)
        let base64 = CryptoAES.decrypt('crypto-js', uri, cryptoKey)
        let json = atob(base64)
        return JSON.parse(json) as {
            appId: string
            token: string
        }
    }

    async install(params: Params) {
        await casApi.install({
            baseUrl: env[params.stage].url
        })
        this.api = casApi.export()
        this.params = params
        let storage = useLocalStorage()
        let auth = storage.get('casAuth')
        if (auth) {
            this.signIn(auth)
            if (this.isSignIn()) {
                await this.refresh()
            }
        }
    }

    signIn(params: {
        appId: string
        token: string
    }) {
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
        let url = new URL(location.href)
        let auth = url.searchParams.get(queryKey)
        let output = {
            isSignIn: false
        }
        if (auth) {
            let data = CasAuthClient.decode(auth)
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
            useLocalStorage().set('casAuth', {
                appId: this.status.appId,
                token: response.data.jwt
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
                    expand: 'profile',
                    service
                }
            })
            return response.data
        } else {
            throw signInError()
        }
    }

    async getServiceLink(service: Services, queryKey = 'auth') {
        let context = CasAuthClient.encode({
            appId: this.status.appId,
            token: this.status.token
        })
        return `${links[service][this.params.stage]}?${queryKey}=${context}`
    }
}
