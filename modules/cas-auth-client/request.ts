import Axios from 'axios'
import { Request } from '../request'
import { useLocalStorage } from '../../core/storage'
import { CasAuthDefinitions } from '../../request-types/cas-auth'

export const casApi = new Request<{
    baseUrl: string
}, CasAuthDefinitions>({
    name: 'casApi',
    http: async(context) => {
        let casAuth = useLocalStorage().get('casAuth')
        let headers = {}
        if (context.path.match('/private/')) {
            headers = {
                Authorization: `Bearer ${casAuth?.token}`
            }
        }
        let axios = Axios.create({
            baseURL: context.config.baseUrl,
            headers
        })
        let result: any = await Request.AxiosRequest({
            axios,
            context
        })
        return result.data
    }
})
