import { getLibEnv } from './index'
import { LocalStorage } from 'power-helper'

export const getLocalStorage = () => {
    const { service, stage, version } = getLibEnv()
    const storage = new LocalStorage(`lib-${service}-${stage}`, {
        intercept: {
            get(key, value, { isDefault, defaultValue }) {
                if (isDefault) {
                    return value
                }
                if (value.version !== version) {
                    storage.remove(key as any)
                    return defaultValue()
                }
                return value.data
            },
            set(key, value) {
                return {
                    data: value,
                    version,
                    createdAt: Date.now()
                }
            }
        },
        defaultColumns: {
            tablefilterMemories: () => ({}) as Record<string, string[]>
        }
    })
    return storage
}

export const getPersistDataStorage = () => {
    const { service, stage, version } = getLibEnv()
    const storage = new LocalStorage(`lib-pd-${service}-${stage}`, {
        storageSystem: sessionStorage,
        intercept: {
            get(key, value, { isDefault, defaultValue }) {
                if (isDefault) {
                    return value
                }
                if (value.version !== version) {
                    storage.remove(key as any)
                    return defaultValue()
                }
                return value.data
            },
            set(key, value) {
                return {
                    data: value,
                    version,
                    createdAt: Date.now()
                }
            }
        },
        defaultColumns: {}
    })
    return storage
}
