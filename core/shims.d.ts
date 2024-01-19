/* eslint-disable @typescript-eslint/no-empty-interface */

declare global {
    interface Window {
        wx: any
        WxLogin: any
        initGoogleMap: any
        __ng_state: any
        __ng_config: {
            libOptions: {
                lang: 'en-US' | 'zh-TW' | 'zh-CN'
                staticUrl: string
                notFoundImage: string | (() => string)
            },
            libEnv: {
                version: number
                stage: string
                service: string
            }
        }
    }
}


export {}
