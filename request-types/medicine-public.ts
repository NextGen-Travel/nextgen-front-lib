/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=medicine-public
 */
export type MedicinePublicDefinitions = {
    /**
     * [員工登錄帳號] - no description
     */
    "post@users-permissions/auth/login": {
        body: {
            /**
             * email
             * @example pharmacist
             */
            account: string;
            /**
             * 密碼
             * @example nextgen123
             */
            password: string;
            /**
             * 頻道
             * @example cas
             */
            channel: string;
        };
        query: null;
        response: {
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
                    memo: string;
                    level: string;
                    startedAt: string;
                    finishedAt: string;
                    isPharmacist: boolean;
                    store: {
                        id: number;
                        nameCn: string;
                        nameEn: string;
                        tel: string;
                        address: string;
                        district: string;
                        rxNo: string;
                        createdAt: string;
                        updatedAt: string;
                        publishedAt: string;
                    };
                };
            };
        };
        contentType: null;
    };
    /**
     * [從 SSO 登入後要進到這個系統] - no description
     */
    "post@users-permissions/auth/sso/verify": {
        body: {
            /**
             * uuid
             * @example 77046e51-fd54-4749-b3ac-68e8a37f5e86
             */
            appId: string;
            /**
             * token
             * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijc3MDQ2ZTUxLWZkNTQtNDc0OS1iM2FjLTY4ZThhMzdmNWU4NiIsImlzcyI6Iua4r-S5nea4r1RFU1QiLCJleHAiOjE2NzI0NDQ4MDAsImFjY291bnQiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AMTIzLmNvbSIsInBhc3N3b3JkIjoiQWRtaW4xMjMiLCJpYXQiOjE2NjgwNjMzOTd9.GFO_lF2gb3fKDC3UMR4aTyQvUI8W4gre4h1d21uacEA
             */
            accessToken: string;
        };
        query: null;
        response: {
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
                    memo: string;
                    level: string;
                    startedAt: string;
                    finishedAt: string;
                    isPharmacist: boolean;
                    store: {
                        id: number;
                        nameCn: string;
                        nameEn: string;
                        tel: string;
                        address: string;
                        district: string;
                        rxNo: string;
                        createdAt: string;
                        updatedAt: string;
                        publishedAt: string;
                    };
                };
            };
        };
        contentType: null;
    };
    /**
     * [更新藥品資料] - no description
     * @param {string} drugId - drug id
     */
    "put@drugs/:drugId": {
        body: {
            permitNo: string;
            productName_zh: string;
            productName: string;
            dosage_form: string;
            package: string;
            indication: string;
            side_effect: string;
            drug_detail: string;
            images: string[];
            brand: {
                id: number;
                name: string;
            };
            drugDetail: {
                id: number;
                unit_dose: string;
                usage_and_dosage: string;
                precaution: string;
                drug_id: number;
            };
        };
        query: null;
        response: null;
        contentType: null;
    };
}