import { element, Event } from 'power-helper'
import { serviceException } from '../../../core/error'

type AppleConfig = {
    clientId: string
}

type Channels = {
    login: {
        token: string
        user?: {
            email: string
            name: {
                firstName: string
                lastName: string
            }
        }
    }
}

const exception = serviceException.checkout('AppleAuth')
const scope = 'name email'
const event = new Event<Channels>()

function checkInstalled() {
    if (!window.__ng_state.aapple?.installed) {
        throw exception.create('apple login not installed.')
    }
}

export class AppleAuth {
    static async install(config: AppleConfig) {
        if (window.__ng_state.aapple == null) {
            window.__ng_state.aapple = {
                installed: false
            }
        }
        if (window.__ng_state.aapple.installed === false) {
            await element.importScript('https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js')
            window.AppleID.auth.init({
                clientId: config.clientId,
                redirectURI: '',
                scope,
                state: '',
                usePopup: false
            })
            window.__ng_state.aapple.installed = true
        }
    }

    static installed() {
        return window.__ng_state.aapple?.installed ?? false
    }

    static get on() {
        return event.on.bind(event)
    }

    /**
     * 如果是使用者自己關閉，則回傳 no-action
     */

    static async signIn(params: {
        state?: string
        popup?: boolean
        redirectURI: string
    }): Promise<{
        status: 'pass' | 'no-action'
        response: null | AppleSignInAPI.SignInResponseI
    }> {
        checkInstalled()
        let result = await AppleID.auth.signIn({
            state: params?.state ?? '',
            usePopup: params?.popup ?? true,
            redirectURI: params.redirectURI
        })
        if (result.authorization.code && result.authorization.id_token) {
            event.emit('login', {
                token: result.authorization.id_token,
                user: result.user
            })
            return {
                status: 'pass',
                response: result
            }
        }
        // TODO: 未實驗
        return {
            status: 'no-action',
            response: null
        }
    }
}
