"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
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
                endpoint: 'https://login-dev.nextgen.com.hk'
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
                endpoint: 'https://login-stage.nextgen.com.hk'
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
                endpoint: 'https://login.nextgen.com.hk'
            }
        }
    }
};
