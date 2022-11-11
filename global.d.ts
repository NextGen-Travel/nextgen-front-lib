import { CasAuthClientConstructor } from './library/cas-auth-client'

declare global {
    interface Window {
        CasAuthClient: CasAuthClientConstructor
    }
}

export {}
