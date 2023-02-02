
import { Request } from '../../modules/request'
import { CasAuthDefinitions } from '../../../request-types/cas-auth'

export const casApi = new Request<CasAuthDefinitions>({
    name: 'casApi',
    http: async(context) => {
        let result: any = await Request.AxiosRequest({
            axios: context.state.axios,
            context
        })
        return result.data
    }
})
