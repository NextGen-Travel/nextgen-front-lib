import { useLibEnv } from './index'
import { LocalStorage } from 'power-helper'

export const useLocalStorage = () => {
    const { service, stage, version } = useLibEnv()
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
            tablefilterMemories: () => ({}) as Record<string, string[]>,
            casAuth: () => {
                return null as null | {
                    appId: string
                    token: string
                }
            }
        }
    })
    return storage
}
