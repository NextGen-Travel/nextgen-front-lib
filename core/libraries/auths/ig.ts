import { serviceException } from '../../../core/error'

type IgConfig = {
    clientId: string
    redirectUri: string
}

const exception = serviceException.checkout('IG')

function checkInstalled() {
    if (!window.__ng_state.igAuth?.installed) {
        throw exception.create('gsi not installed.')
    }
}

export class IgAuth {
    static async install(config: IgConfig) {
        if (window.__ng_state.igAuth == null) {
            window.__ng_state.igAuth = {
                config,
                installed: false
            }
        }
        if (window.__ng_state.igAuth.installed === false) {
            window.__ng_state.igAuth.installed = true
        }
    }

    static login() {
        checkInstalled()
        const url = new URL('https://api.instagram.com/oauth/authorize')
        url.searchParams.set('client_id', window.__ng_state.igAuth.config.clientId)
        url.searchParams.set('redirect_uri', window.__ng_state.igAuth.config.redirectUri)
        url.searchParams.set('scope', 'user_profile,user_media')
        url.searchParams.set('response_type', 'code')
        location.href = url.toString()
    }
}
