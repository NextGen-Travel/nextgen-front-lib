import Axios from 'axios'
import { Request } from '../../modules/request'
import { CasAuthDefinitions } from '../../request-types/cas-auth'

export const casApi = new Request<{
    baseUrl: string
}, CasAuthDefinitions>({
    name: 'casApi',
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
