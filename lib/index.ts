import { Graphql as _Graphql } from './modules/graphql'
import { Request as _Request } from './modules/request'
import { CryptoAES as _CryptoAES } from './modules/crypto'
import { Interaction as _Interaction } from './modules/interaction'
import { RuleProvider as _RuleProvider } from './modules/rule-provider'
import { ServiceException as _ServiceException } from './modules/service-exception'
import { createStrictObject as _createStrictObject } from './utils/strict-object'
import { onMounted, reactive, watch, onUnmounted, getCurrentInstance } from 'vue'

type Hooks = {
    watch: typeof watch
    reactive: typeof reactive
    onMounted: typeof onMounted
    onUnmounted: typeof onUnmounted
    getCurrentInstance: typeof getCurrentInstance
}

export const vueHooks: Hooks = {} as any

// Utils

export const createStrictObject = _createStrictObject

// Modules

export const Graphql = _Graphql
export const Request = _Request
export const CryptoAES = _CryptoAES
export const Interaction = _Interaction
export const RuleProvider = _RuleProvider
export const ServiceException = _ServiceException

export const NextgenLib = {
    createStrictObject,
    Request,
    Graphql,
    CryptoAES,
    Interaction,
    RuleProvider,
    ServiceException,
    install(_Vue: any, hooks: Hooks) {
        Object.assign(vueHooks, hooks)
    }
}

module.exports = NextgenLib
module.exports.NextgenLib = NextgenLib

export default NextgenLib
