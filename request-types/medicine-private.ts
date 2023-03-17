/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=medicine-private
 */
export type MedicinePrivateDefinitions = {
    /**
     * [更新jwt 有效間] - no description
     */
    "post@users-permissions/auth/renew": {
        body: null;
        query: null;
        response: {
            data: {
                jwt: string;
            };
        };
        contentType: null;
    };
    /**
     * [新增藥房] - no description
     */
    "post@stores": {
        body: {
            data: {
                /**
                 * 藥局名稱(中文}
                 * @example 大安藥局
                 */
                nameCn: string;
                /**
                 * 藥局名稱(英文}
                 * @example 大安藥局
                 */
                nameEn: string;
                /**
                 * 聯絡電話
                 * @example 1234567890
                 */
                tel: string;
                /**
                 * 地址
                 * @example 安和路
                 */
                address: string;
                /**
                 * 英文地址
                 * @example rd. annho
                 */
                addressEn: string;
                /**
                 * 區域
                 * @example 大安區
                 */
                district: string;
                /**
                 * rxNo
                 * @example NO001
                 */
                rxNo: string;
                /**
                 * 結束日期
                 * @example 2022-12-01
                 */
                finishedAt: string;
                /**
                 * 是否啟用
                 * @example true
                 */
                enable: boolean;
                /**
                 * 是否啟用 SSO
                 * @example true
                 */
                SSO: boolean;
                /**
                 * 若 SSO=true 要有 appId
                 */
                appId: string;
                /**
                 * 若 SSO=true 要有 accessKey
                 */
                accessKey: string;
            };
        };
        query: null;
        response: {
            data: {
                id: number;
                attributes: {
                    nameEn: string;
                    rxNo: string;
                    tel: string;
                    district: string;
                    address: string;
                    addressEn: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                    nameCn: string;
                    enable: boolean;
                };
            };
        };
        contentType: null;
    };
    /**
     * [新增藥房] - no description
     */
    "post@stores#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                attributes: {
                    nameEn: string;
                    rxNo: string;
                    tel: string;
                    district: string;
                    address: string;
                    addressEn: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                    nameCn: string;
                    enable: boolean;
                };
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [新增藥房時跟 CAS 拿 accessKey] - no description
     */
    "post@stores/sync": {
        body: null;
        query: {
            appId ? : string;
        };
        response: {
            data: {
                SSO: boolean;
                accessKey: string;
            };
        };
        contentType: null;
    };
    /**
     * [給 CAS 在那邊的 store 資料有變動時打的] - no description
     */
    "post@stores/sync/cas": {
        body: {
            /**
             * 加密的資料
             * @example 806df46463b15b09323a38ac032e016f:f7a943960b3d2a0be0e06ddb2a5b01f25dab5275ea2de22dcad727d8cef3039121f9162abd9a18d3a6ad8c54b6c85a623d8e90887cede8b0d462c9cfb56c2d0e687ab4cc3f268cdf1ecdfc0ac8fb25ab1a252879a7085f4b9b6ea1da11bc988581719a98bdbcf5fd05958ef921b36726742c3f12ced4f23bdaa11973c46984ada39670ee2a971f7c2e1f1e879c8938f54dbbfdf521a96a531e744be5becead3deb7b5cf080cf99f13449350c23a1afb42bc50095f6dbeec9024eaecc0a9a88c56b0b83211c42e2fcb1b3cb85146b669baca6b945afd47c41dc2baa4f9f514e56
             */
            code: string;
        };
        query: null;
        response: boolean;
        contentType: null;
    };
    /**
     * [修改 藥房] - no description
     * @param {integer} id - 藥房id
     */
    "put@stores/:id": {
        body: {
            data: {
                /**
                 * 藥局名稱(中文}
                 * @example 大安藥局
                 */
                nameCn: string;
                /**
                 * 藥局名稱(英文}
                 * @example 大安藥局
                 */
                nameEn: string;
                /**
                 * 聯絡電話
                 * @example 1234567890
                 */
                tel: string;
                /**
                 * 地址
                 * @example 安和路
                 */
                address: string;
                /**
                 * 英文地址
                 * @example rd. annho
                 */
                addressEn: string;
                /**
                 * 區域
                 * @example 大安區
                 */
                district: string;
                /**
                 * rxNo
                 * @example NO001
                 */
                rxNo: string;
                /**
                 * 結束日期
                 * @example 2022-12-01
                 */
                finishedAt: string;
                /**
                 * 是否啟用
                 * @example true
                 */
                enable: boolean;
                /**
                 * 是否啟用 SSO
                 * @example true
                 */
                SSO: boolean;
                /**
                 * 若 SSO=true 要有 appId
                 */
                appId: string;
                /**
                 * 若 SSO=true 要有 accessKey
                 */
                accessKey: string;
            };
        };
        query: null;
        response: {
            data: {
                id: number;
                attributes: {
                    nameEn: string;
                    rxNo: string;
                    tel: string;
                    district: string;
                    address: string;
                    addressEn: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                    nameCn: string;
                    enable: boolean;
                };
            };
        };
        contentType: null;
    };
    /**
     * [修改 藥房] - no description
     * @param {integer} id - 藥房id
     */
    "put@stores/:id#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                attributes: {
                    nameEn: string;
                    rxNo: string;
                    tel: string;
                    district: string;
                    address: string;
                    addressEn: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                    nameCn: string;
                    enable: boolean;
                };
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [新增員工] - no description
     */
    "post@users": {
        body: null;
        query: null;
        response: {
            id: number;
            account: string;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            createdAt: string;
            updatedAt: string;
            isPharmacist: boolean;
            level: string;
            role: {
                id: number;
                name: string;
                description: string;
                type: string;
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [修改 員工資料] - no description
     * @param {integer} id - 員工id
     */
    "put@users/:id": {
        body: null;
        query: null;
        response: {
            id: number;
            account: string;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            createdAt: string;
            updatedAt: string;
            isPharmacist: boolean;
            level: string;
            role: {
                id: number;
                name: string;
                description: string;
                type: string;
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [取得個人資訊] - no description
     */
    "get@users/me": {
        body: null;
        query: null;
        response: {
            id: number;
            account: string;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            createdAt: string;
            updatedAt: string;
            isPharmacist: boolean;
            level: string;
            role: {
                id: number;
                name: string;
                description: string;
                type: string;
            };
        } & {
            store: {
                id: number;
                nameEn: string;
                nameCn: string;
                rxNo: string;
                tel: string;
                district: string;
                address: string;
                enable: boolean;
            };
        };
        contentType: null;
    };
    /**
     * [客人搜尋] - no description
     */
    "get@customers": {
        body: null;
        query: {
            expand ? : string;
            email ? : string;
            mobile ? : string;
            phoneNumber ? : string;
            accountNo ? : string;
        };
        response: {
            data: {
                id: number;
                uuid: string;
                gender: string;
                address: string;
                email: string;
                birthday: string;
                name: string;
                mobile: string;
                accountNo: string;
                drugTaboo: string;
                store: {
                    id: number;
                    rxNo: string;
                    nameCn: string;
                    nameEn: string;
                    district: string;
                };
                allergyDrugs: {
                    id: number;
                    note: string;
                    drug: {
                        id: number;
                        permitNo: string;
                        productName: string;
                    };
                } [];
                allergyIngredients: {
                    id: number;
                    note: string;
                    ingredient: {
                        id: number;
                        name: string;
                    };
                } [];
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
     * [新建客人] - no description
     */
    "post@customers": {
        body: {
            /**
             * 身份識別碼
             * @example a1234567
             */
            accountNo: string;
            /**
             * 顧客名稱
             * @example 顧客名稱
             */
            name: string;
            /**
             * 性別
             * @example F
             */
            gender: string;
            /**
             * 生日
             * @example 2021-01-01
             */
            birthday: string;
            /**
             * 地址
             * @example 大安區
             */
            address: string;
            /**
             * 電子郵件
             * @example pharmacist@nextgen.com.hk
             */
            email: string;
            /**
             * 行動電話
             * @example 12345
             */
            mobile: string;
            /**
             * 電話號碼
             * @example 12221222
             */
            phoneNumber: string;
            /**
             * 客人的慣用語言
             * @example zh
             */
            language: "zh" | "en" | "zh_en";
            /**
             * 禁忌
             * @example 特定藥品禁忌
             */
            drugTaboo: string;
            allergyDrug: number[];
            drugNote: string[];
            allergyIngredient: string[];
            ingredientNote: string[];
        };
        query: {
            expand ? : string;
        };
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                gender: string;
                address: string;
                email: string;
                birthday: string;
                name: string;
                mobile: string;
                accountNo: string;
                drugTaboo: string;
                store: {
                    id: number;
                    rxNo: string;
                    nameCn: string;
                    nameEn: string;
                    district: string;
                };
                allergyDrugs: {
                    id: number;
                    note: string;
                    drug: {
                        id: number;
                        permitNo: string;
                        productName: string;
                    };
                } [];
                allergyIngredients: {
                    id: number;
                    note: string;
                    ingredient: {
                        id: number;
                        name: string;
                    };
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [新建客人] - no description
     */
    "post@customers#application/x-www-form-urlencoded": {
        body: null;
        query: {
            expand ? : string;
        };
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                gender: string;
                address: string;
                email: string;
                birthday: string;
                name: string;
                mobile: string;
                accountNo: string;
                drugTaboo: string;
                store: {
                    id: number;
                    rxNo: string;
                    nameCn: string;
                    nameEn: string;
                    district: string;
                };
                allergyDrugs: {
                    id: number;
                    note: string;
                    drug: {
                        id: number;
                        permitNo: string;
                        productName: string;
                    };
                } [];
                allergyIngredients: {
                    id: number;
                    note: string;
                    ingredient: {
                        id: number;
                        name: string;
                    };
                } [];
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [修改客人資訊] - no description
     * @param {string} uuid - 客人唯一識別碼
     */
    "put@customers/:uuid": {
        body: {
            /**
             * 身份識別碼
             * @example a1234567
             */
            accountNo: string;
            /**
             * 顧客名稱
             * @example 顧客名稱
             */
            name: string;
            /**
             * 性別
             * @example F
             */
            gender: string;
            /**
             * 生日
             * @example 2021-01-01
             */
            birthday: string;
            /**
             * 地址
             * @example 大安區
             */
            address: string;
            /**
             * 電子郵件
             * @example pharmacist@nextgen.com.hk
             */
            email: string;
            /**
             * 行動電話
             * @example 12345
             */
            mobile: string;
            /**
             * 電話號碼
             * @example 12221222
             */
            phoneNumber: string;
            /**
             * 客人的慣用語言
             * @example zh
             */
            language: "zh" | "en" | "zh_en";
            /**
             * 禁忌
             * @example 特定藥品禁忌
             */
            drugTaboo: string;
            allergyDrug: number[];
            drugNote: string[];
            allergyIngredient: string[];
            ingredientNote: string[];
        };
        query: {
            expand ? : string;
        };
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                gender: string;
                address: string;
                email: string;
                birthday: string;
                name: string;
                mobile: string;
                accountNo: string;
                drugTaboo: string;
                store: {
                    id: number;
                    rxNo: string;
                    nameCn: string;
                    nameEn: string;
                    district: string;
                };
                allergyDrugs: {
                    id: number;
                    note: string;
                    drug: {
                        id: number;
                        permitNo: string;
                        productName: string;
                    };
                } [];
                allergyIngredients: {
                    id: number;
                    note: string;
                    ingredient: {
                        id: number;
                        name: string;
                    };
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [修改客人資訊] - no description
     * @param {string} uuid - 客人唯一識別碼
     */
    "put@customers/:uuid#application/x-www-form-urlencoded": {
        body: null;
        query: {
            expand ? : string;
        };
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                gender: string;
                address: string;
                email: string;
                birthday: string;
                name: string;
                mobile: string;
                accountNo: string;
                drugTaboo: string;
                store: {
                    id: number;
                    rxNo: string;
                    nameCn: string;
                    nameEn: string;
                    district: string;
                };
                allergyDrugs: {
                    id: number;
                    note: string;
                    drug: {
                        id: number;
                        permitNo: string;
                        productName: string;
                    };
                } [];
                allergyIngredients: {
                    id: number;
                    note: string;
                    ingredient: {
                        id: number;
                        name: string;
                    };
                } [];
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [新建訂單] - no description
     */
    "post@orders": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                signAt: string;
                customerName: string;
                doctorName: string;
                prescriptionSignMessage: {};
                hospitalName: string;
                createdAt: string;
                updatedAt: string;
                orderNo: string;
                language: "zh" | "en" | "zh_en";
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [修改訂單] - no description
     * @param {string} orderNo - 訂單唯一識別碼
     */
    "put@orders/:orderNo": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                signAt: string;
                customerName: string;
                doctorName: string;
                prescriptionSignMessage: {};
                hospitalName: string;
                createdAt: string;
                updatedAt: string;
                orderNo: string;
                language: "zh" | "en" | "zh_en";
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [上傳藥品圖片] - no description
     * @param {string} drugId - 藥品id
     */
    "post@drugs/:drugId/uploadImages": {
        body: {
            images: File;
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                name: string;
                alternativeText: string;
                caption: string;
                width: number;
                height: number;
                formats: {
                    large: {
                        ext: string;
                        url: string;
                        hash: string;
                        mime: string;
                        name: string;
                        path: string;
                        size: number;
                        width: number;
                        height: number;
                    };
                    small: {
                        ext: string;
                        url: string;
                        hash: string;
                        mime: string;
                        name: string;
                        path: string;
                        size: number;
                        width: number;
                        height: number;
                    };
                    medium: {
                        ext: string;
                        url: string;
                        hash: string;
                        mime: string;
                        name: string;
                        path: string;
                        size: number;
                        width: number;
                        height: number;
                    };
                    thumbnail: {
                        ext: string;
                        url: string;
                        hash: string;
                        mime: string;
                        name: string;
                        path: string;
                        size: number;
                        width: number;
                        height: number;
                    };
                };
                hash: string;
                ext: string;
                mime: string;
                size: number;
                url: string;
                previewUrl: string;
                provider: string;
                provider_metadata: string;
                createdAt: string;
                updatedAt: string;
            } [];
        };
        contentType: "multipart/form-data";
    };
    /**
     * [申請藥品異動] - no description
     * @param {string} permitNo - 藥品唯一代碼
     */
    "post@drugUpdates/applyRevise/:permitNo": {
        body: {
            /**
             * 適應症狀
             * @example 頭痛、發燒
             */
            indication ? : string;
            /**
             * 預防措施(注意事項)
             * @example 服用後建議不要開車
             */
            precaution ? : string;
            /**
             * 副作用
             * @example 注意力不集中
             */
            side_effect ? : string;
            /**
             * 俗名
             * @example 退燒藥
             */
            productName_zh ? : string;
            images ? : number[];
            sku ? : string[];
            packageName ? : string[];
            dosageForm ? : string[];
            usage ? : string[];
            dosage ? : number[];
            unit ? : string[];
            packageImages ? : number[][];
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                status: string;
                createdAt: string;
                updatedAt: string;
                revise: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
                before: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
            };
        };
        contentType: null;
    };
    /**
     * [申請藥品異動] - no description
     * @param {string} permitNo - 藥品唯一代碼
     */
    "post@drugUpdates/applyRevise/:permitNo#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                status: string;
                createdAt: string;
                updatedAt: string;
                revise: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
                before: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [藥品異動審核] - no description
     * @param {string} uuid - 申請異動唯一識別碼
     */
    "post@drugUpdates/response/:uuid": {
        body: {
            /**
             * approval(核准)、cancel(取消)
             * @example approval
             */
            status: "approval" | "cancel";
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                status: string;
                createdAt: string;
                updatedAt: string;
                revise: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
                before: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
            };
        };
        contentType: null;
    };
    /**
     * [藥品異動審核] - no description
     * @param {string} uuid - 申請異動唯一識別碼
     */
    "post@drugUpdates/response/:uuid#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                status: string;
                createdAt: string;
                updatedAt: string;
                revise: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
                before: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [藥品異動] - no description
     * @param {string} permitNo - 藥品唯一代碼
     */
    "post@drugUpdates/revise/:permitNo": {
        body: {
            /**
             * 適應症狀
             * @example 頭痛、發燒
             */
            indication: string;
            /**
             * 預防措施(注意事項)
             * @example 服用後建議不要開車
             */
            precaution: string;
            /**
             * 副作用
             * @example 注意力不集中
             */
            side_effect: string;
            /**
             * 俗名
             * @example 退燒藥
             */
            productName_zh: string;
            images: number[];
            uuidArr: string[];
            sku: string[];
            packageName: string[];
            dosageForm: string[];
            usage: string[];
            dosage: number[];
            unit: string[];
            packageImages: number[][];
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                status: string;
                createdAt: string;
                updatedAt: string;
                revise: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
                before: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
            };
        };
        contentType: null;
    };
    /**
     * [藥品異動] - no description
     * @param {string} permitNo - 藥品唯一代碼
     */
    "post@drugUpdates/revise/:permitNo#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                status: string;
                createdAt: string;
                updatedAt: string;
                revise: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
                before: {
                    indication: string;
                    prevention: string;
                    side_effect: string;
                    product_name_zh: string;
                    images: number[];
                    packages: {
                        name: string;
                        sku: string;
                        dosage: string;
                        dosageForm: string;
                        usage: string;
                        unit: string;
                    } [];
                };
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [上傳檔案] - no description
     */
    "post@upload": {
        body: {
            files: File;
        };
        query: null;
        response: {
            id: number;
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number;
            height: number;
            formats: {
                large: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
                small: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
                medium: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
                thumbnail: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: string | null;
            createdAt: string;
            updatedAt: string;
        } [];
        contentType: "multipart/form-data";
    };
}