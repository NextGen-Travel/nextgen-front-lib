import { element } from 'power-helper'
import { serviceException } from '../../../core/error'

type WechatConfig = {
    appId: string
    webAppId: string
}

const exception = serviceException.checkout('WechatAuth')

function checkInstalled() {
    if (!window.__ng_state.awechat?.installed) {
        throw exception.create('gsi not installed.')
    }
}

export class WechatService {
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

    static isWeixinBrowser() {
        const ua = navigator.userAgent.toLowerCase()
        return (/micromessenger/.test(ua)) ? true : false
    }

    /**
     * 網頁應用要用 qrcode 登入
     */

    static renderQrcode(params: {
        state?: string
        containerId: string
        redirectUri: string
    }) {
        checkInstalled()
        const config = window.__ng_state.awechat.config
        new window.WxLogin({
            id: params.containerId,
            appid: config.webAppId,
            scope: 'snsapi_login',
            redirect_uri: encodeURIComponent(params.redirectUri),
            state: params.state ?? '',
            response_type: 'code'
        })
    }

    /**
     * 獲取登入網址，這只能在微信 app 裡面使用，且要加入申請的微信公眾號
     */

    static getLoginUrl(params: {
        state?: string
        redirectUri: string
    }) {
        const url = new URL('https://open.weixin.qq.com/connect/oauth2/authorize')
        const config = window.__ng_state.awechat.config
        url.searchParams.set('appid', config.appId)
        url.searchParams.set('redirect_uri', params.redirectUri)
        url.searchParams.set('response_type', 'code')
        url.searchParams.set('scope', 'snsapi_userinfo')
        url.searchParams.set('state', params?.state ?? '')
        return url.toString() + '#wechat_redirect'
    }
}
