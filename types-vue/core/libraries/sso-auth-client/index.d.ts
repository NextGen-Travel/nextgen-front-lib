import { ScrmDefinitions } from '../../../request-types/scrm';
import { MedicinePublicDefinitions } from '../../../request-types/medicine-public';
export type Services = 'nss' | 'erp' | 'scrm' | 'dispensing';
export type Context = {
    appId: string;
    serviceName: Services;
    serviceToken: string;
};
export type Stages = 'dev' | 'stage' | 'prod' | 'pro';
export declare const QueryKey = "sso-key";
export declare const QueryOriginKey = "sso-origin";
export declare const QueryServiceKey = "sso-service";
export declare const QueryRedirectKey = "sso-redirect";
type ServiceUser<T extends Services> = T extends 'scrm' ? ScrmDefinitions['post@auth/sso/verify']['response']['data']['user'] : (T extends 'dispensing' ? MedicinePublicDefinitions['post@users-permissions/auth/sso/verify']['response']['data']['user'] : undefined);
type OutputData<T extends Services> = {
    user?: ServiceUser<T>;
    appId: string;
    success: boolean;
    serviceToken: string;
};
type InstallParams = {
    organization: 'cas' | 'nextgen';
};
export declare class SsoAuthClientConstructor {
    private params;
    private elementListenerGroup;
    private get stage();
    private get organization();
    install(params: InstallParams): Promise<void>;
    /**
     * 打開登入視窗
     * @param service 登入的服務名稱
     */
    signIn<T extends Services>(service: T): Promise<OutputData<T>>;
    redirectSignIn(service: Services, redirectUrl?: string): void;
    /**
     * 驗證網址是否含有登入資訊
     * @param service 登入的服務名稱
     */
    autoSignIn<T extends Services>(): Promise<OutputData<T>>;
}
export declare const SsoAuthClient: SsoAuthClientConstructor;
declare global {
    interface Window {
        SsoAuthClient: SsoAuthClientConstructor;
    }
}
export {};
