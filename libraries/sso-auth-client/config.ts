import { Stages } from './index'
export const config: Record<Stages, {
    organizations: Record<'cas' | 'nextgen', {
        url: string
        scrmUrl: string
        endpoint: string
        dispensingUrl: string
    }>
}> = {
    dev: {
        organizations: {
            cas: {
                url: 'https://cas-api-dev.cloudsatlas.com.hk/api',
                scrmUrl: 'https://scrm-api-dev.cloudsatlas.com.hk/api',
                dispensingUrl: 'https://medicine-api-dev.cloudsatlas.com.hk/api',
                endpoint: 'https://login-dev.cloudsatlas.com.hk'
            },
            nextgen: {
                url: 'https://cas-api-dev.cloudsatlas.com.hk/api',
                scrmUrl: 'https://scrm-api-dev.cloudsatlas.com.hk/api',
                dispensingUrl: 'https://medicine-api-dev.cloudsatlas.com.hk/api',
                endpoint: 'https://login-dev.cloudsatlas.com.hk'
            }
        }
    },
    stage: {
        organizations: {
            cas: {
                url: 'https://cas-api-stage.cloudsatlas.com.hk/api',
                scrmUrl: 'https://scrm-api-stage.cloudsatlas.com.hk/api',
                dispensingUrl: 'https://medicine-api-stage.cloudsatlas.com.hk/api',
                endpoint: 'https://login-stage.cloudsatlas.com.hk'
            },
            nextgen: {
                url: 'https://cas-api-stage.cloudsatlas.com.hk/api',
                scrmUrl: 'https://scrm-api-stage.cloudsatlas.com.hk/api',
                dispensingUrl: 'https://medicine-api-stage.cloudsatlas.com.hk/api',
                endpoint: 'https://login-stage.cloudsatlas.com.hk'
            }
        }
    },
    prod: {
        organizations: {
            cas: {
                url: 'https://cas-api.cloudsatlas.com.hk/api',
                scrmUrl: 'https://scrm-api.cloudsatlas.com.hk/api',
                dispensingUrl: 'https://medicine-api.cloudsatlas.com.hk/api',
                endpoint: 'https://login.cloudsatlas.com.hk'
            },
            nextgen: {
                url: 'https://cas-api.cloudsatlas.com.hk/api',
                scrmUrl: 'https://scrm-api.cloudsatlas.com.hk/api',
                dispensingUrl: 'https://medicine-api.cloudsatlas.com.hk/api',
                endpoint: 'https://login.cloudsatlas.com.hk'
            }
        }
    }
}