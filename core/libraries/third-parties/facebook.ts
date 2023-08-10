import { element, Event } from 'power-helper'
import { serviceException } from '../../../core/error'

type FacebookConfig = {
    clientId: string
}

const scope = 'public_profile,email'
const exception = serviceException.checkout('FacebookAuth')
const event = new Event<Channels>()

type Channels = {
    login: {
        token: string
    }
}

function checkInstalled() {
    if (!window.__ng_state.afb?.installed) {
        throw exception.create('facebook sdk not installed.')
    }
}

export class FacebookService {
    static async install(config: FacebookConfig) {
        if (window.__ng_state.afb == null) {
            window.__ng_state.afb = {
                installed: false,
                clientId: ''
            }
        }
        if (window.__ng_state.afb.installed === false) {
            window.__ng_state.clientId = config.clientId
            window.fbAsyncInit = () => {
                FB.init({
                    appId: config.clientId,
                    xfbml: true,
                    version: 'v15.0'
                })
            }
            await element.importScript('https://connect.facebook.net/en_US/sdk.js')
            window.__ng_state.afb.installed = true
        }
    }

    static installed() {
        return window.__ng_state.afb?.installed ?? false
    }

    static get on() {
        return event.on.bind(event)
    }

    /**
     * 如果是使用者自己關閉，則回傳 no-action
     */

    static signIn(): Promise<{
        status: 'pass' | 'no-action'
        response: null | fb.AuthResponse
    }> {
        checkInstalled()
        return new Promise((resolve, reject) => {
            FB.login(res => {
                if (res.status === 'connected') {
                    event.emit('login', {
                        token: res.authResponse.accessToken
                    })
                    resolve({
                        status: 'pass',
                        response: res.authResponse
                    })
                } else {
                    if (res.status === 'unknown') {
                        resolve({
                            status: 'no-action',
                            response: null
                        })
                    } else {
                        reject(exception.create(res.status))
                    }
                }
            }, {
                scope,
                enable_profile_selector: true
            })
        })
    }

    static getLoginUrl(params: {
        state?: string
        redirectUri: string
    }) {
        checkInstalled()
        let url = new URL('https://www.facebook.com/v15.0/dialog/oauth')
        url.searchParams.set('scope', scope)
        url.searchParams.set('client_id', window.__ng_state.clientId)
        url.searchParams.set('redirect_uri', params.redirectUri)
        url.searchParams.set('state', params?.state ?? '')
        return url.href
    }

    // TODO: app 內實作
    static async share(params: {
        href: string
    }): Promise<fb.ShareDialogResponse> {
        return new Promise((resolve, reject) => {
            FB.ui({
                display: 'popup',
                method: 'share',
                href: params.href
            }, res => {
                if (res.error_message) {
                    reject(res.error_message)
                } else {
                    resolve(res)
                }
            })
        })
    }
}
