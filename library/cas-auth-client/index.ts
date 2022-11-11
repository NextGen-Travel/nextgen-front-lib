import jwtDecode from 'jwt-decode'
import { casApi } from './request'
import { CryptoAES } from '../../modules/crypto'
import { useLibEnv } from '../../core'
import { Event, ElementListenerGroup } from 'power-helper'

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
    signInResponse: {
        client: CasAuthClientConstructor
        context: Context
        service: {
            token: string
        }
    }
}

const cryptoKey = 'nextgen-key-1234'

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

type Context = {
    appId: string
    token: string
    payload: TokenPayload
}

export class CasAuthClientConstructor extends Event<Channels> {
    private api!: ReturnType<typeof casApi.export>
    private elementListenerGroup = new ElementListenerGroup(window)

    private get stage() {
        return useLibEnv().stage as Stages
    }

    private toContext(data: Omit<Context, 'payload'>): Context {
        return {
            appId: data.appId,
            token: data.token,
            payload: jwtDecode(data.token)
        }
    }

    _encode(params: {
        appId: string
        token: string
    }) {
        const json = JSON.stringify(params)
        const base64 = btoa(json)
        const key = CryptoAES.encrypt('crypto-js', base64, cryptoKey)
        return encodeURIComponent(key)
    }

    _decode(key: string) {
        let base64 = CryptoAES.decrypt('crypto-js', decodeURIComponent(key), cryptoKey)
        let json = atob(base64)
        return this.toContext(JSON.parse(json))
    }

    async install() {
        await casApi.install({
            baseUrl: env[this.stage].url
        })
        this.api = casApi.export()
    }

    signIn(service: Services): Promise<Context> {
        return new Promise((resolve, reject) => {
            let url = env[this.stage].oneTapEndpoint
            let isSuccess = false
            let openWindow = window.open(`${url}?cas-origin=${location.origin}`, '_blank', 'height=640, width=480')
            this.elementListenerGroup.clear()
            this.elementListenerGroup.add('message', (data) => {
                if (data.data.isCasLogin) {
                    isSuccess = true
                    let context = this._decode(data.data.auth)
                    resolve(context)
                    if (openWindow) {
                        openWindow.close()
                    }
                    this.elementListenerGroup.clear()
                    this.signInAfter(service, context)
                }
            })
            openWindow?.addEventListener('close', () => {
                if (isSuccess === false) {
                    reject('user_close_windows')
                }
            })
        })
    }

    autoSignIn(service: Services, queryKey = 'auth') {
        let urls = location.href.split('#')
        let url = new URL(urls[0])
        let auth = url.searchParams.get(queryKey)
        let output = {
            success: false
        }
        if (auth) {
            let data = this._decode(auth)
            if (data) {
                this.signInAfter(service, data)
                output.success = true
            }
        }
        return output
    }

    private async signInAfter(service: Services, context: Context) {
        let response = await this.getServiceData(service, context)
        this.emit('signInResponse', {
            client: this,
            context,
            service: {
                token: response.jwt
            }
        })
    }

    parseToken(token: string) {
        let payload: TokenPayload = jwtDecode(token)
        return {
            payload,
            isExpired: Date.now() > (payload.exp * 1000)
        }
    }

    async getServiceData(service: Services, context: Omit<Context, 'payload'>) {
        let response = await this.api('get@v1/private/auth/:appId', {
            params: {
                appId: context.appId
            },
            query: {
                expand: 'profile,validity',
                service
            },
            headers: {
                Authorization: `Bearer ${context.token}`
            }
        })
        return response.data
    }

    _getServiceLink(service: Services, context: Omit<Context, 'payload'>, queryKey = 'auth') {
        let key = this._encode(context)
        let url = new URL(links[service][this.stage])
        url.searchParams.set(queryKey, key)
        return url.href
    }
}

export const CasAuthClient = new CasAuthClientConstructor()

window.CasAuthClient = CasAuthClient
