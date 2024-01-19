import { reactive } from 'vue'

export const genData = <T>(data: T): T => reactive(data as any)
