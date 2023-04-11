import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { serviceException } from '../../../core/error'
import { detect, Event, element } from 'power-helper'

type GoogleConfig = {
    /** 彈出視窗模式或是倒轉模式 */
    uxMode: 'popup' | 'redirect'
    /** 應用程式 ID */
    clientId: string
    /** 倒轉網址，當 ux mode 為 redirect 需要填寫 */
    loginUri?: string
}

type Channels = {
    login: {
        token: string
        payload: {
            iss: string
            nbf: number
            aud: string
            sub: string
            email: string
            email_verified: boolean
            azp: string
            name: string
            picture: string
            given_name: string
            iat: number
            exp: number
            jti: string
        }
    }
}

const exception = serviceException.checkout('GoogleAuth')
const event = new Event<Channels>()

function checkInstalled() {
    if (!window.__ng_state.agoogle?.installed) {
        throw exception.create('gsi not installed.')
    }
}

export class GoogleAuth {
    static async install(config: GoogleConfig) {
        if (window.__ng_state.agoogle == null) {
            window.__ng_state.agoogle = {
                installed: false
            }
        }
        if (window.__ng_state.agoogle.installed === false) {
            window.__ng_state.agoogle.installed = true
            try {
                await element.importScript('https://accounts.google.com/gsi/client')
                google.accounts.id.initialize({
                    ux_mode: config.uxMode,
                    client_id: config.clientId,
                    login_uri: config.loginUri,
                    auto_select: false,
                    callback: (credentialResponse) => {
                        event.emit('login', {
                            token: credentialResponse.credential,
                            payload: jwtDecode(credentialResponse.credential)
                        })
                    }
                })
            } catch (error) {
                window.__ng_state.agoogle.installed = false
                throw error
            }
        }
    }

    static get on() {
        return event.on.bind(event)
    }
    
    /** 渲染出登入按鈕 */

    static renderButton(element: HTMLElement, options: google.accounts.id.GsiButtonConfiguration) {
        checkInstalled()
        google.accounts.id.renderButton(element, options)
    }

    /**
     * 如果瀏覽器從未登入過 google 帳號，會打不開，並回傳 no-logged
     * 如果是使用者自己關閉，則回傳 no-action
     */

    static oneTap(): Promise<{
        status: 'pass' | 'no-logged' | 'no-action'
    }> {
        if (detect.inAppBrowser()) {
            throw exception.create('noSupportBrowser')
        }
        checkInstalled()
        return new Promise((resolve, reject) => {
            Cookies.remove('g_state')
            google.accounts.id.prompt((notification) => {
                if (notification.isNotDisplayed()) {
                    let error = notification.getNotDisplayedReason()
                    if (error === 'opt_out_or_no_session') {
                        resolve({
                            status: 'no-logged'
                        })
                    } else {
                        reject(exception.create(error))
                    }
                } else if (notification.isSkippedMoment()) {
                    let noActions = ['tap_outside', 'user_cancel']
                    let error = notification.getSkippedReason()
                    if (noActions.includes(error)) {
                        resolve({
                            status: 'no-action'
                        })
                    } else {
                        reject(exception.create(error))
                    }
                } else if (notification.getDismissedReason() === 'credential_returned') {
                    resolve({
                        status: 'pass'
                    })
                }
            })
        })
    }
}
