/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=cas-auth
 */
export type CasAuthDefinitions = {
    /**
     * [取的該帳號可登入公司] - no description
     */
    "post@v1/auth/companies": {
        body: {
            /**
             * 帳號
             * @example developer
             */
            account: string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                appId: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [帳號登錄] - no description
     * @param {string} appId - appId(uuid)
     */
    "post@v1/login/:appId": {
        body: {
            /**
             * 帳號
             * @example developer
             */
            account: string;
            /**
             * 密碼
             * @example 123456789
             */
            password: string;
        };
        query: {
            channel ? : string;
            service ? : string;
        };
        response: {
            msg: string;
            data: {
                jwt: string;
                user: {
                    id: number;
                    username: string;
                    email: string;
                    provider: string;
                    confirmed: boolean;
                    blocked: boolean;
                    createdAt: string;
                    updatedAt: string;
                };
                accessToken: string;
            };
        };
        contentType: null;
    };
    /**
     * [忘記密碼] - no description
     * @param {string} appId - appId(uuid)
     */
    "post@v1/auth/forgot-password/:appId": {
        body: {
            /**
             * 電子郵件
             * @example dev@nextgen.com.hk
             */
            email: string;
        };
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [忘記密碼] - no description
     * @param {string} appId - appId(uuid)
     */
    "post@v1/auth/forgot-password/:appId#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: null;
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [修改密碼] - no description
     */
    "post@auth/reset-password": {
        body: {
            /**
             * 一次性
             * @example 9bec366ab69043e54158b675065296d66c519b1ed9810abbf32d236cc40d7e2030fd2327818e9f9bbba0230c2a9c3403d21da10c7e168b58b3c36fcbe54bb1fd
             */
            code: string;
            /**
             * 密碼
             * @example 123456789
             */
            password: string;
            /**
             * 密碼
             * @example 123456789
             */
            passwordConfirmation: string;
        };
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [修改密碼] - no description
     */
    "post@auth/reset-password#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: null;
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [取得登入 Bearer jwt] - no description
     * @param {string} appId - appId(uuid)
     */
    "get@v1/private/auth/:appId": {
        body: null;
        query: {
            channel ? : string;
            service ? : string;
            expand ? : string;
        };
        response: {
            msg: string;
            data: {
                accessToken: string;
                user: {
                    id: number;
                    username: string;
                    email: string;
                    provider: string;
                    confirmed: boolean;
                    blocked: boolean;
                    createdAt: string;
                    updatedAt: string;
                };
                jwt: string;
            };
        };
        contentType: null;
    };
    /**
     * [更新 Jwt] - no description
     */
    "get@v1/private/auth/renew": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                jwt: string;
            };
        };
        contentType: null;
    };
    /**
     * [確定登入狀態 for client server] - no description
     * @param {string} appId - appId(uuid)
     */
    "post@v1/auth/:appId": {
        body: null;
        query: {
            channel ? : string;
            service ? : string;
            expand ? : string;
        };
        response: {
            msg: string;
            data: {
                accessToken: string;
                user: {
                    id: number;
                    username: string;
                    email: string;
                    provider: string;
                    confirmed: boolean;
                    blocked: boolean;
                    createdAt: string;
                    updatedAt: string;
                };
            };
        };
        contentType: null;
    };
    /**
     * [建立帳號] - no description
     * @param {string} appId - appId(uuid)
     */
    "post@v1/register/:appId": {
        body: {
            /**
             * 帳號
             * @example developer
             */
            account: string;
            /**
             * 電子郵件
             * @example developer@nextgen.com.hk
             */
            email: string;
            /**
             * 密碼
             * @example 123456789
             */
            password: string;
            /**
             * 再次確認密碼
             * @example 123456789
             */
            passwordConfirmation: string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                user: {
                    id: number;
                    username: string;
                    email: string;
                    provider: string;
                    confirmed: boolean;
                    blocked: boolean;
                    createdAt: string;
                    updatedAt: string;
                };
            };
        };
        contentType: null;
    };
    /**
     * [建立帳號 使用 accessToken for client server] - no description
     * @param {string} appId - appId(uuid)
     */
    "post@v1/register/auth/:appId": {
        body: {
            /**
             * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXRzZW5nMUBuZXh0Z2VuLmNvbS5oayIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5IiwiYWNjb3VudCI6InNhbXRzZW5nMSIsImFwcElkIjoiNmYwNDZlNTEtZmQ1NC00NzQ5LWIzYWMtNjhlOGEzN2Y1ZTg2IiwiaXNzIjoi5Ym16K296Jel5oi_IiwiZXhwIjoxNjY3ODExNDU4LCJpYXQiOjE2Njc4MTExNTh9.zcFggF3GsJJlQTS1fxreWvyTCviA6rKhkvSI3kiKYRQ
             */
            accessToken: string;
        };
        query: {
            channel ? : string;
            service ? : string;
        };
        response: {
            msg: string;
            data: {
                user: {
                    id: number;
                    username: string;
                    email: string;
                    provider: string;
                    confirmed: boolean;
                    blocked: boolean;
                    createdAt: string;
                    updatedAt: string;
                };
            };
        };
        contentType: null;
    };
    /**
     * [取得 company 啟用的服務狀態] - no description
     */
    "get@v1/private/company/state": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                channel: string;
                nss: boolean;
                erp: boolean;
                scrm: boolean;
                dispensing: boolean;
                nssCallback: string;
                erpCallback: string;
            };
        };
        contentType: null;
    };
}