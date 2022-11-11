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
            name: Services
            token: string
        }
    }
}

const queryKey = 'cat-auth-key'
const cryptoKey = 'nextgen-key-1234'

const env: Record<Stages, {
    url: string
    oneTapEndpoint: string
}> = {
    dev: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api',
        oneTapEndpoint: 'http://frontend-dedicated.s3-website-ap-southeast-1.amazonaws.com/sso/dev/index.html'
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

    signIn(service: Services): Promise<{
        success: boolean
        token: string | null
    }> {
        return new Promise((resolve, reject) => {
            let url = env[this.stage].oneTapEndpoint
            let isSuccess = false
            let openWindow = window.open(`${url}?cas-origin=${location.origin}`, '_blank', 'height=640, width=480')
            this.elementListenerGroup.clear()
            this.elementListenerGroup.add('message', async(data) => {
                if (data.data.isCasLogin) {
                    isSuccess = true
                    let result = await this.parseAuth(service, data.data.auth)
                    resolve({
                        success: true,
                        token: result.service.token
                    })
                    if (openWindow) {
                        openWindow.close()
                    }
                    this.elementListenerGroup.clear()

                }
            })
            openWindow?.addEventListener('close', () => {
                if (isSuccess === false) {
                    reject({
                        success: false,
                        message: 'user_close_window'
                    })
                }
            })
        })
    }

    async autoSignIn(service: Services) {
        let urls = location.href.split('#')
        let url = new URL(urls[0])
        let auth = url.searchParams.get(queryKey)
        let output = {
            success: false,
            token: null as string | null
        }
        if (auth) {
            let result = await this.parseAuth(service, auth)
            output.success = true
            output.token = result.service.token
            window.history.pushState(null, '', location.href.replace(`${queryKey}=`, `${queryKey}-x=`));
        }
        return output
    }

    private async parseAuth(serviceName: Services, auth: string) {
        let context = this._decode(auth)
        let serviceData = await this.getServiceData(serviceName, {
            appId: context.appId,
            token: context.token
        })
        let service = {
            name: serviceName,
            token: serviceData.jwt
        }
        this.emit('signInResponse', {
            client: this,
            context,
            service
        })
        return {
            context,
            service
        }
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

    _getServiceLink(service: Services, context: Omit<Context, 'payload'>) {
        let key = this._encode(context)
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
