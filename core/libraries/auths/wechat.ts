import { Event, element } from 'power-helper'
import { serviceException } from '../../../core/error'

type WechatConfig = {
    appId: string
    redirectUri: string
}

type Channels = {
    login: {
        token: string
    }
}

const exception = serviceException.checkout('WechatAuth')
const event = new Event<Channels>()

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
            window.__ng_state.awechat.installed = true
            await element.importScript('https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js')
        }
    }

    static get on() {
        return event.on.bind(event)
    }

    static signIn(params: {
        containerId: string
    }) {
        checkInstalled()
        const config = window.__ng_state.awechat.config
        new window.WxLogin({
            id: params.containerId,
            appid: config.appId,
            scope: 'snsapi_login',
            redirect_uri: encodeURIComponent(config.redirectUri),
            state: 'nextgen-state',
            response_type: 'code'
        })
    }
}
