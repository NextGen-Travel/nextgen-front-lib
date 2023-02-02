import { Request } from '../../modules/request'
import { MedicinePublicDefinitions } from '../../../request-types/medicine-public'

export const dispensingApi = new Request<MedicinePublicDefinitions>({
    name: 'dispensing',
    http: async(context) => {
        let result: any = await Request.AxiosRequest({
            axios: context.state.axios,
            context
        })
        return result.data
    }
})
