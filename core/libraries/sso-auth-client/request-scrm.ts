import { Request } from '../../modules/request'
import { ScrmDefinitions } from '../../../request-types/scrm'

export const scrmApi = new Request<ScrmDefinitions>({
    name: 'scrm',
    http: async(context) => {
        let result: any = await Request.AxiosRequest({
            axios: context.state.axios,
            context
        })
        return result.data
    }
})
