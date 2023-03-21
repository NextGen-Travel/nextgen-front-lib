import { element, Event } from 'power-helper'
import { serviceException } from '../../../core/error'

type FacebookConfig = {
    clientId: string
    postBackUri: string
    redirectUri: string
}

const scope = 'public_profile,email'
const exception = serviceException.checkout('FacebookAuth')
const event = new Event<Channels>()
const state = {
    installed: false
}

const facebookConfig: FacebookConfig = {
    clientId: '',
    postBackUri: '',
    redirectUri: ''
}

type Channels = {
    login: {
        token: string
    }
}

function checkInstalled() {
    if (state.installed === false) {
        throw exception.create('facebook sdk not installed.')
    }
}

export class FacebookAuth {
    static async install(config: FacebookConfig) {
        if (state.installed === false) {
            state.installed = true
            facebookConfig.clientId = config.clientId
            facebookConfig.postBackUri = config.postBackUri
            facebookConfig.redirectUri = config.redirectUri
            window.fbAsyncInit = () => {
                FB.init({
                    appId: config.clientId,
                    version: 'v15.0'
                })
            }
            await element.importScript('https://connect.facebook.net/en_US/sdk.js')
        }
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
                scope
            })
        })
    }

    static getLoginUrl() {
        checkInstalled()
        let url = new URL('https://www.facebook.com/v15.0/dialog/oauth')
        url.searchParams.set('scope', scope)
        url.searchParams.set('client_id', facebookConfig.clientId)
        url.searchParams.set('redirect_uri', facebookConfig.postBackUri)
        url.searchParams.set('state', JSON.stringify({
            urlScheme: facebookConfig.redirectUri
        }))
        return url.href
    }
}
