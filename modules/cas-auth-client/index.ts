import jwtDecode from 'jwt-decode'
import { Event } from 'power-helper'
import { casApi } from './request'
import { useLocalStorage } from '../../core/storage'
import { serviceException } from '../../core/error'

type Params = {
    stage: 'dev' | 'prod'
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

const exception = serviceException.checkout('modules cas')
const signInError = () => exception.create('No SingIn.')
const env = {
    dev: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api'
    },
    prod: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api'
    }
}

export class CasAuthClient extends Event<Channels> {
    private api!: ReturnType<typeof casApi.export>
    private payload: null | TokenPayload = null
    private status = {
        appId: '',
        token: ''
    }

    static encode(params: {
        appId: string
        token: string
    }) {
        return encodeURIComponent(btoa(JSON.stringify(params)))
    }

    static decode(context: string) {
        return JSON.parse(atob(decodeURIComponent(context))) as {
            appId: string
            token: string
        }
    }

    async install(params: Params) {
        await casApi.install({
            baseUrl: env[params.stage].url
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

    autoSignIn() {
        let url = new URL(location.href)
        let auth = url.searchParams.get('auth')
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
        }
        throw signInError()
    }

    isSignIn() {
        return this.payload != null
    }

    isExpired() {
        if (this.payload) {
            return Date.now() > (this.payload.exp * 1000)
        }
        throw signInError()
    }

    getPayload(): TokenPayload {
        if (this.payload) {
            return this.payload
        }
        throw signInError()
    }

    getAppId() {
        if (this.payload) {
            return this.status.appId
        }
        throw signInError()
    }

    getToken() {
        if (this.payload) {
            return this.status.token
        }
        throw signInError()
    }

    async refresh() {
        if (this.payload) {
            const response = await this.api('get@v1/private/auth/renew', {})
            useLocalStorage().set('casAuth', {
                appId: this.status.appId,
                token: response.data.jwt
            })
        }
        throw signInError()
    }

    async getServiceToken(service: 'nss' | 'pos' | 'scrm' | 'dispensing') {
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
            return response.data.accessToken
        }
        throw signInError()
    }
}
