/* eslint-disable @typescript-eslint/no-empty-interface */
import 'apple-signin-api'
import 'facebook-js-sdk'
import 'google.maps'
import 'google.accounts'
declare global {
    interface Window {
        wx: any
        WxLogin: any
        initGoogleMap: any
    }
}

export {}
