// eslint-disable-next-line
import './index.scss'
import './components'

import * as components from './components/index'
import * as layouts from './layouts/index'

// chart
import { Chart, DoughnutController, ArcElement, LineController, LineElement, PointElement, PieController } from 'chart.js'

Chart.register(
    ArcElement,
    LineElement,
    PointElement,
    DoughnutController,
    LineController,
    PieController
)

// composables
export { useSelf } from './composables/self'
export { useDebounce } from './composables/debounce'
export { useListenerGroup } from './composables/listener-group'
export { useLoader } from './composables/loader'

// mixins
export { genRef } from './mixins/refs'
export { genData } from './mixins/data'
export { genStateManager } from './mixins/state-manager'

// modules
import { Camera } from './modules/camera'
import { Graphql } from './modules/graphql'
import { Request } from './modules/request'
import { CryptoAES } from './modules/crypto'
import { NextgenMessageTrace } from './modules/nextgen-trace'
import { RuleProvider } from './modules/rule-provider'
import { NextgenWorker } from './modules/nextgen-worker'
import { NextgenInteraction } from './modules/nextgen-interaction'
import { PersistState } from './modules/persist-state'
import { QuerySync } from './modules/query-sync'
export const Modules = {
    Camera,
    CryptoAES,
    Graphql,
    Request,
    RuleProvider,
    PersistState,
    NextgenWorker,
    NextgenInteraction,
    NextgenMessageTrace,
    QuerySync
}

// utils
import { fetchAll, fetchAllForLaravelPaginate, fetchAllForStrapi } from './utils/fetch'
import { getGeoLocation, inChina } from './utils/ip'
import { parseMessage } from './utils/message'
import { createLaravelPaginate, createLaravelResourcePaginate, createStrapiList, createStrapiListResource } from './utils/server-data'
import { asyncLoaclStroageIntercept, loaclStroageIntercept } from './utils/storage'
import { defineFields } from './utils/table'
import { toHump } from './utils/text'
export const Utils = {
    fetch: {
        fetchAll,
        fetchAllForLaravelPaginate,
        fetchAllForStrapi
    },
    ip: {
        getGeoLocation,
        inChina
    },
    message: {
        parseMessage
    },
    serverData: {
        createLaravelPaginate,
        createLaravelResourcePaginate,
        createStrapiList,
        createStrapiListResource
    },
    storage: {
        asyncLoaclStroageIntercept,
        loaclStroageIntercept
    },
    table: {
        defineFields
    },
    text: {
        toHump
    }
}

// model
import { defineModel, defineSchema } from './model'
export const Model = {
    define: defineModel,
    defineSchema
}

// vue
import { I18nPlus } from './vue-extends/i18n-plus'
import { RouterPlus } from './vue-extends/router-plus'
export { NextgenPiniaPlugin, createStoreLifeCycle } from './vue-extends/pinia-plus'
export const VueExtends = {
    I18nPlus,
    RouterPlus
}

// libraries
import { AppleAuth } from './libraries/third-parties/apple-auth'
import { GoogleAuth } from './libraries/third-parties/google-auth'
import { FacebookService } from './libraries/third-parties/facebook'
import { WechatService } from './libraries/third-parties/wechat'
import { GoogleMap } from './libraries/maps/google'
import { NgAMap } from './libraries/maps/amap'
export const Libraries = {
    NgAMap,
    AppleAuth,
    GoogleMap,
    GoogleAuth,
    FacebookService,
    WechatService
}

// store
import { createConfirmStore, confirmStoreToActions } from './store/confirm'
import { createNotificationStore, notificationStoreToActions } from './store/notification'
export const LibStores = {
    createConfirmStore,
    createNotificationStore,
    confirmStoreToActions,
    notificationStoreToActions
}

// types
export type * as NgTypes from './types'

// core
window.__ng_state = {}
window.__ng_config = {
    libOptions: {
        staticUrl: '',
        notFoundImage: ''
    },
    libEnv: {
        version: 3,
        stage: '',
        service: '',
    }
}

export * as NgComponents from './components/index'
export * as NgLayoutComponents from './layouts/index'
export const getLibOptions = () => window.__ng_config.libOptions
export const getLibEnv = () => window.__ng_config.libEnv
export const NextgenLib = {
    setOptions: (options: Partial<typeof window.__ng_config.libOptions>) => {
        for (let key in options) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.__ng_config.libOptions[key] = options[key]
        }
    },
    install(app: import('vue').App, params: {
        options: typeof window.__ng_config.libOptions
        env: {
            stage: string
            service: string
        }
    }) {
        for (let key in params.options) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.__ng_config.libOptions[key] = params.options[key]
        }
        for (let key in params.env) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.__ng_config.libEnv[key] = params.env[key]
        }
        for (const name in components) {
            app.component(name, (components as any)[name])
        }
        for (const name in layouts) {
            app.component(name, (layouts as any)[name])
        }
    }
}
