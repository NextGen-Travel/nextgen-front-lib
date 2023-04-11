import { NgAMap } from './amap'
import { GoogleMap } from './google'
import { NavigationParams } from './types'

export const getMapNavigationUrl = (params: NavigationParams) => {
    if (NgAMap.isInstalled()) {
        return NgAMap.getNavigationUrl(params)
    }
    if (GoogleMap.isInstalled()) {
        return GoogleMap.getNavigationUrl(params)
    }
    return ''
}
