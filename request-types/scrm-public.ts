/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=scrm-public
 */
export type ScrmPublicDefinitions = {
    /**
     * [scrm系統登入] - scrm系統登入
     */
    "post@auth/login": {
        body: {
            /**
             * 登入account
             * @example jintian
             */
            username: string;
            /**
             * 登入密碼
             * @example 1234567890
             */
            password: string;
            /**
             * 屬於哪一間公司
             * @example 6f046e51-fd54-4749-b3ac-68e8a37f5e86
             */
            appId: string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                jwt: string;
                user: {
                    id: number;
                    email: string;
                    displayName: string;
                    username: string;
                    confirmed: boolean;
                    phone: string;
                    notes: string;
                    blocked: boolean;
                    avatar: string;
                    role: string;
                    company: number;
                };
                platform: {
                    platform: string;
                    account: {};
                    enable: boolean;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [nss登入] - nss登入
     */
    "post@auth/cloudsatlas": {
        body: {
            "crm-token": string;
            companyUuid: string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                jwt: string;
                user: {
                    id: number;
                    blocked: boolean;
                    confirmed: boolean;
                    createdAt: string;
                    email: string;
                    updatedAt: string;
                    username: string;
                    displayName: string | null;
                    provider: string | null;
                    avatar: string | null;
                    role: string;
                };
            };
        };
        contentType: null;
    };
    /**
     * [登入取得companies appId] - 登入取得companies appId
     */
    "post@auth/companies": {
        body: {
            /**
             * 登入account
             * @example jintian
             */
            username: string;
            /**
             * 登入密碼
             * @example 1234567890
             */
            password: string;
            /**
             * 哪個品牌
             */
            channel ? : "cas" | "nextgen";
        };
        query: null;
        response: {
            data: string[];
        };
        contentType: null;
    };
    /**
     * [第三方註冊登入] - 前端提供token及provider供後端驗證確認後進行註冊並交換token給前端
     */
    "post@auth/sso/verify": {
        body: {
            /**
             * 從SSO系統拿到的token
             */
            accessToken ? : string;
            /**
             * 個別廠商的uuid
             * @example 6f046e51-fd54-4749-b3ac-68e8a37f5e86
             */
            appId: string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                jwt: string;
                user: {
                    id: number;
                    email: string;
                    displayName: string;
                    username: string;
                    confirmed: boolean;
                    phone: string;
                    notes: string;
                    blocked: boolean;
                    avatar: string;
                    role: string;
                    company: number;
                };
            };
        };
        contentType: null;
    };
    /**
     * [忘記密碼] - 忘記密碼
     */
    "post@auth/forgot-password": {
        body: {
            /**
             * account
             */
            username: string;
            /**
             * email
             */
            email: string;
            /**
             * 個別廠商的uuid
             * @example 6f046e51-fd54-4749-b3ac-68e8a37f5e86
             */
            appId: string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [重設密碼] - 重設密碼
     */
    "post@auth/reset-password": {
        body: {
            /**
             * strapi產的code,接在url中的query
             */
            code: string;
            /**
             * 重設的密碼
             */
            password: string;
            /**
             * 重設密碼確認
             */
            passwordConfirmation: string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
}