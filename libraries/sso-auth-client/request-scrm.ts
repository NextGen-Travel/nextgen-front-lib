import Axios from 'axios'
import { Request } from '../../modules/request'
import { ScrmDefinitions } from '../../request-types/scrm'

export const scrmApi = new Request<{
    baseUrl: string
}, ScrmDefinitions>({
    name: 'scrm',
    http: async(context) => {
        let axios = Axios.create({
            baseURL: context.config.baseUrl,
            headers: context.headers
        })
        let result: any = await Request.AxiosRequest({
            axios,
            context
        })
        return result.data
    }
})
