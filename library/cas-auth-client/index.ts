import jwtDecode from 'jwt-decode'
import { casApi } from './request'
import { useLibEnv } from '../../core'
import { ElementListenerGroup } from 'power-helper'

export type Services = 'nss' | 'pos' | 'scrm' | 'dispensing'

type Stages = 'dev' | 'stage' | 'prod'

type Context = {
    appId: string
    serviceName: Services
    serviceToken: string
}

type TokenPayload = {
    id: number
    iat: number
    exp: number
    email: string
    username: string
}

const QueryKey = 'cas-auth-key'
const QueryOriginKey = 'cas-origin'
const QueryServiceKey = 'cas-service'

const env: Record<Stages, {
    url: string
    endpoint: string
}> = {
    dev: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api',
        endpoint: 'http://frontend-dedicated.s3-website-ap-southeast-1.amazonaws.com/sso/dev/index.html'
    },
    stage: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api',
        endpoint: 'http://frontend-dedicated.s3-website-ap-southeast-1.amazonaws.com/sso/dev/index.html'
    },
    prod: {
        url: 'https://cas-api-dev.cloudsatlas.com.hk/api',
        endpoint: 'http://frontend-dedicated.s3-website-ap-southeast-1.amazonaws.com/sso/dev/index.html'
    }
}

const links: Record<Services, Record<Stages, string>> = {
    nss: {
        dev: '',
        prod: '',
        stage: ''
    },
    pos: {
        dev: '',
        prod: '',
        stage: ''
    },
    scrm: {
        dev: '', // 'scrm-dev.cloudsatlas.com.hk'
        prod: '',
        stage: '', // 'scrm.cloudsatlas.com.hk'
    },
    dispensing: {
        dev: 'https://dispensing-dev.cloudsatlas.com.hk',
        prod: '', // 'https://dispensing.cloudsatlas.com.hk'
        stage: '' // 'https://dispensing-stage.cloudsatlas.com.hk'
    }
}

export class CasAuthClientConstructor {
    private api!: ReturnType<typeof casApi.export>
    private elementListenerGroup = new ElementListenerGroup(window)

    private get stage() {
        return useLibEnv().stage as Stages
    }

    async install() {
        await casApi.install({
            baseUrl: env[this.stage].url
        })
        this.api = casApi.export()
    }

    /**
     * 打開登入視窗
     * @param service 登入的服務名稱
     */

    signIn(service: Services): Promise<{
        success: boolean
        serviceToken: string | null
    }> {
        let url = new URL(env[this.stage].endpoint)
        url.searchParams.set(QueryOriginKey, location.origin)
        url.searchParams.set(QueryServiceKey, service)
        let isSuccess = false
        let openWindow = window.open(url.href, '_blank', 'height=˙720, width=480')
        return new Promise((resolve, reject) => {
            this.elementListenerGroup.clear()
            this.elementListenerGroup.add('message', async(data) => {
                if (data.data.isCasLogin) {
                    isSuccess = true
                    let result = await this.parseAuth(data.data.auth)
                    resolve({
                        success: true,
                        serviceToken: result.service.jwt
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

    /**
     * 驗證網址是否含有登入資訊
     * @param service 登入的服務名稱
     */

    async autoSignIn() {
        let urls = location.href.split('#')
        let url = new URL(urls[0])
        let auth = url.searchParams.get(QueryKey)
        let output = {
            success: false,
            serviceToken: null as string | null
        }
        if (auth) {
            let result = await this.parseAuth(auth)
            output.serviceToken = result.service.jwt
            output.success = true
            window.history.pushState(null, '', location.href.replace(`${QueryKey}=`, `${QueryKey}-x=`));
        }
        return output
    }

    private async parseAuth(auth: string) {
        let context = this._decode(auth)
        let service = await this.getServiceData(context)
        return {
            context,
            service
        }
    }

    // TODO: 依照個別服務額外處理
    async getServiceData(_context: Context) {
        return {
            jwt: '123'
        }
    }

    isSupportService(service: Services) {
        return !!links[service][this.stage]
    }

    // =================
    //
    // 系統專用
    //

    _encode(params: Context) {
        const json = JSON.stringify(params)
        const base64 = btoa(json)
        return encodeURIComponent(base64)
    }

    _decode(key: string): Context {
        let json = decodeURIComponent(atob(key))
        let data = JSON.parse(json)
        return data
    }

    _parseJwtToken(token: string) {
        let payload: TokenPayload = jwtDecode(token)
        return {
            payload,
            isExpired: Date.now() > (payload.exp * 1000)
        }
    }

    _getServiceLink(context: Context) {
        let key = this._encode(context)
        let url = new URL(links[context.serviceName][this.stage])
        url.searchParams.set(QueryKey, key)
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
