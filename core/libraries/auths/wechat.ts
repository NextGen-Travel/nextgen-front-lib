import { element } from 'power-helper'
import { serviceException } from '../../../core/error'

type WechatConfig = {
    appId: string
    redirectUri: string
}

const exception = serviceException.checkout('WechatAuth')

function checkInstalled() {
    if (!window.__ng_state.awechat?.installed) {
        throw exception.create('gsi not installed.')
    }
}

export class WechatAuth {
    static async install(config: WechatConfig) {
        if (window.__ng_state.awechat == null) {
            window.__ng_state.awechat = {
                config,
                installed: false
            }
        }
        if (window.__ng_state.awechat.installed === false) {
            await element.importScript('https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js')
            window.__ng_state.awechat.installed = true
        }
    }

    static installed() {
        return window.__ng_state.awechat?.installed ?? false
    }

    static renderQrcode(params: {
        state?: string
        containerId: string
    }) {
        checkInstalled()
        const config = window.__ng_state.awechat.config
        new window.WxLogin({
            id: params.containerId,
            appid: config.appId,
            scope: 'snsapi_login',
            redirect_uri: encodeURIComponent(config.redirectUri),
            state: params.state ?? '',
            response_type: 'code'
        })
    }

    static getLoginUrl(params?: {
        state?: string
        redirectUri?: string
    }) {
        const url = new URL('https://open.weixin.qq.com/connect/oauth2/authorize')
        const config = window.__ng_state.awechat.config
        url.searchParams.set('appid', config.appId)
        url.searchParams.set('redirect_uri', params?.redirectUri ?? config.redirectUri)
        url.searchParams.set('response_type', 'code')
        url.searchParams.set('scope', 'snsapi_base')
        url.searchParams.set('state', params?.state ?? '')
        return url.toString()
    }
}
