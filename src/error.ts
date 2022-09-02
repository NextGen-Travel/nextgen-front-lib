import { config } from './config'
import { ServiceException } from './modules/service-exception'

export const serviceException = new ServiceException(config.libName)
