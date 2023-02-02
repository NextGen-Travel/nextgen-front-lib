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
     * [獲取醫院列表] - no description
     */
    "get@hospitals": {
        body: null;
        query: {
            "pagination[page]" ? : number;
            "pagination[pageSize]" ? : number;
        };
        response: {
            data: {
                id: number;
                institution_tc: string;
                address_tc: string;
                cluster_tc: string;
                latitude: number;
                longitude: number;
                createdAt: string;
                updatedAt: string;
                institution_eng: string;
                locale: string;
                type: {};
                key: string;
            } [];
            meta: {
                page: number;
                perPage: number;
                pageCount: number;
                totalCount: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取指定藥品] - no description
     */
    "get@drugs": {
        body: null;
        query: {
            page ? : string;
        };
        response: {
            data: {
                id: number;
                permitNo: string;
                productName_zh: string;
                productName: string;
                regCertHolderName: string;
                regCertHolderAddress: string;
                regCertHolderCountry: string;
                indication: string;
                side_effect: string;
                registration_date: string;
                legal_classification: string;
                sale_requirement: string;
                precaution: string;
                ingredients: {
                    id: string;
                    name: string;
                    description: string;
                };
                packages: {} [];
            } [];
            meta: {
                page: string;
                perPage: number;
                pageCount: number;
                totalCount: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取指定藥品] - no description
     * @param {string} drugId - 藥品id
     */
    "get@drugs/:drugId": {
        body: null;
        query: null;
        response: {
            id: number;
            permitNo: string;
            productName_zh: string;
            productName: string;
            indication: string;
            registration_date: string;
            precaution: string;
            side_effect: string;
            regCertHolderName: string;
            regCertHolderAddress: string;
            regCertHolderCountry: string;
            legal_classification: string;
            sale_requirement: string;
            ingredients: {
                id: string;
                name: string;
                description: string;
            };
            packages: {} [];
            images: {
                id: number;
                url: string;
            } [];
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
    /**
     * [藥品使用頻率(每天)] - no description
     */
    "get@drugs/frequencies": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                key: string;
                value: string;
                name: string;
                nameEn: string;
                nameZh: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥劑使用方式] - no description
     */
    "get@drugs/usages": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                key: string;
                value: string;
                name: string;
                nameEn: string;
                nameZh: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥劑類型] - no description
     */
    "get@drugs/dosageForms": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                key: string;
                value: string;
                name: string;
                nameEn: string;
                nameZh: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥劑單位] - no description
     */
    "get@drugs/dosageUnits": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                key: string;
                value: string;
                name: string;
                nameEn: string;
                nameZh: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥品分類] - no description
     */
    "get@drug-classifications": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                attributes: {
                    name: string;
                };
            } [];
        };
        contentType: null;
    };
    /**
     * [藥廠列表] - no description
     */
    "get@holders": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    address: string;
                };
            } [];
        };
        contentType: null;
    };
    /**
     * [示警] - no description
     */
    "get@cautions": {
        body: null;
        query: {
            locale ? : string;
            page ? : number;
            perPage ? : number;
        };
        response: {
            data: {
                id: number;
                key: string;
                content: string;
                locale: string;
                value: string;
            } [];
            meta: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [刪除指定檔案] - no description
     * @param {string} id - 檔案id
     */
    "delete@upload/files/:id": {
        body: null;
        query: null;
        response: null;
        contentType: null;
    };
}