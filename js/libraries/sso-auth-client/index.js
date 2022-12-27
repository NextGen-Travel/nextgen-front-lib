"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsoAuthClient = exports.SsoAuthClientConstructor = exports.QueryRedirectKey = exports.QueryServiceKey = exports.QueryOriginKey = exports.QueryKey = void 0;
const request_1 = require("./request");
const config_1 = require("./config");
const request_scrm_1 = require("./request-scrm");
const core_1 = require("../../core");
const request_dispensing_1 = require("./request-dispensing");
const power_helper_1 = require("power-helper");
exports.QueryKey = 'sso-key';
exports.QueryOriginKey = 'sso-origin';
exports.QueryServiceKey = 'sso-service';
exports.QueryRedirectKey = 'sso-redirect';
// =================
//
// private
//
const decode = (key) => {
    let json = decodeURIComponent(atob(key));
    let data = JSON.parse(json);
    return data;
};
const parseAuth = async (auth) => {
    let context = decode(auth);
    let service = await getServiceData(context);
    return {
        context,
        service
    };
};
const getServiceData = async (context) => {
    let output = {
        jwt: '',
        user: undefined
    };
    if (context.serviceName === 'scrm') {
        let api = request_scrm_1.scrmApi.export();
        let result = await api('post@auth/sso/verify', {
            body: {
                appId: context.appId,
                accessToken: context.serviceToken
            }
        });
        output.jwt = result.data.jwt;
        output.user = result.data.user;
    }
    if (context.serviceName === 'dispensing') {
        let api = request_dispensing_1.dispensingApi.export();
        let result = await api('post@users-permissions/auth/sso/verify', {
            body: {
                appId: context.appId,
                accessToken: context.serviceToken
            }
        });
        output.jwt = result.data.jwt;
        output.user = result.data.user;
    }
    return output;
};
class SsoAuthClientConstructor {
    params;
    elementListenerGroup = new power_helper_1.ElementListenerGroup(window);
    get stage() {
        return (0, core_1.useLibEnv)().stage;
    }
    get organization() {
        return config_1.config[this.stage].organizations[this.params.organization];
    }
    async install(params) {
        this.params = params;
        await Promise.all([
            request_1.casApi.install({
                baseUrl: this.organization.url
            }),
            request_scrm_1.scrmApi.install({
                baseUrl: this.organization.scrmUrl
            }),
            request_dispensing_1.dispensingApi.install({
                baseUrl: this.organization.dispensingUrl
            })
        ]);
    }
    /**
     * 打開登入視窗
     * @param service 登入的服務名稱
     */
    signIn(service) {
        let endpoint = this.organization.endpoint;
        let url = new URL(endpoint);
        url.searchParams.set(exports.QueryOriginKey, location.origin);
        url.searchParams.set(exports.QueryServiceKey, service);
        let isSuccess = false;
        let openWindow = window.open(url.href, '_blank', 'height=720, width=480');
        return new Promise((resolve, reject) => {
            this.elementListenerGroup.clear();
            this.elementListenerGroup.add('message', async (data) => {
                if (power_helper_1.text.headMatch(data.origin, endpoint) === false) {
                    return null;
                }
                if (data.data.isCasLogin) {
                    isSuccess = true;
                    let result = await parseAuth(data.data.key);
                    let output = {
                        user: result.service.user,
                        appId: result.context.appId,
                        success: true,
                        serviceToken: result.service.jwt
                    };
                    resolve(output);
                    if (openWindow) {
                        openWindow.close();
                    }
                    this.elementListenerGroup.clear();
                }
            });
            openWindow?.addEventListener('close', () => {
                if (isSuccess === false) {
                    reject({
                        success: false,
                        message: 'user_close_window'
                    });
                }
            });
        });
    }
    redirectSignIn(service, redirectUrl) {
        let url = new URL(this.organization.endpoint);
        url.searchParams.set(exports.QueryRedirectKey, redirectUrl || location.origin);
        url.searchParams.set(exports.QueryServiceKey, service);
        window.open(url.href, '_self');
    }
    /**
     * 驗證網址是否含有登入資訊
     * @param service 登入的服務名稱
     */
    async autoSignIn() {
        let urls = location.href.split('#');
        let url = new URL(urls[0]);
        let auth = url.searchParams.get(exports.QueryKey);
        let output = {
            user: undefined,
            appId: '',
            success: false,
            serviceToken: ''
        };
        if (auth) {
            let result = await parseAuth(auth);
            output.user = result.service.user;
            output.appId = result.context.appId;
            output.success = true;
            output.serviceToken = result.service.jwt;
            window.history.pushState(null, '', location.href.replace(`${exports.QueryKey}=`, `${exports.QueryKey}-x=`));
        }
        return output;
    }
}
exports.SsoAuthClientConstructor = SsoAuthClientConstructor;
exports.SsoAuthClient = new SsoAuthClientConstructor();
window.SsoAuthClient = exports.SsoAuthClient;
