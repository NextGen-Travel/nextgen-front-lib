import Axios from 'axios'
import { Request } from '../../modules/request'
import { MedicinePublicDefinitions } from '../../request-types/medicine-public'

export const dispensingApi = new Request<{
    baseUrl: string
}, MedicinePublicDefinitions>({
    name: 'dispensing',
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
