/* eslint-disable no-redeclare */

import { createUuid as _createUuid } from './utils/uid'
import { isBreakpoint as _isBreakpoint } from './utils/breakpoints'
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

export const createUuid = _createUuid
export const isBreakpoint = _isBreakpoint
export const createStrictObject = _createStrictObject

export const NextgenLib = {
    createStrictObject,
    install(_Vue: any, hooks: Hooks) {
        Object.assign(vueHooks, hooks)
    }
}

module.exports = NextgenLib
module.exports.NextgenLib = NextgenLib

export default NextgenLib
