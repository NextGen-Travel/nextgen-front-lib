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
     * [新增員工] - no description
     */
    "post@users": {
        body: {
            /**
             * 帳號
             * @example dev
             */
            account: string;
            /**
             * 員工姓名
             * @example dev 員工
             */
            username: string;
            /**
             * 電子郵件
             * @example dev@nextgen.com.hk
             */
            email: string;
            /**
             * 密碼
             * @example 1234567890
             */
            password: string;
            /**
             * 員工身份 staff or admin
             * @example staff
             */
            level: string;
            /**
             * 是否為藥劑師
             * @example fasle
             */
            isPharmacist: boolean;
            /**
             * 開始日期
             * @example 2022-01-01
             */
            startedAt: string;
            /**
             * 結束日期
             * @example 2022-12-01
             */
            finishedAt: string;
            /**
             * 狀態(啟用/停用)
             * @example true
             */
            blocked: boolean;
            /**
             * 備註
             * @example 備註
             */
            memo: string;
            /**
             * 指定藥房(需 level 為  superadmin 變動才會生效 )
             * @example 2
             */
            store: number;
        };
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
        body: {
            /**
             * 員工姓名
             * @example dev
             */
            username: string;
            /**
             * 電子郵件
             * @example pharmacist@nextgen.com.hk
             */
            email: string;
            /**
             * 密碼
             * @example 1234567890
             */
            password ? : string;
            /**
             * 員工身份 staff or admin
             * @example staff
             */
            level: string;
            /**
             * 是否為藥劑師
             * @example fasle
             */
            isPharmacist: boolean;
            /**
             * 開始日期
             * @example 2022-01-01
             */
            startedAt: string;
            /**
             * 結束日期
             * @example 2022-12-01
             */
            finishedAt: string;
            /**
             * 狀態(啟用/停用)
             * @example true
             */
            blocked: boolean;
            /**
             * 備註
             * @example 備註
             */
            memo: string;
            /**
             * 指定藥房(需 level 為  superadmin 變動才會生效 )
             * @example 2
             */
            store ? : number;
        };
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
     * [新建訂單] - no description
     */
    "post@orders": {
        body: {
            /**
             * 顧客身份 uuid
             * example c764f34b-dd29-454d-9fa0-db9a08e04607
             */
            customerUuid: string;
            /**
             * 配藥日期
             * @example 2021-01-01
             */
            signAt: string;
            /**
             * 開藥醫院 id
             * @example 334
             */
            hospital: string;
            /**
             * 開藥醫生
             * @example 醫生名稱
             */
            doctorName: string;
            /**
             * 處方簽症狀
             * @example 治療發燒、喉嚨痛
             */
            prescriptionSignMessage: string;
            /**
             * 紀錄語系 zh、en
             * @example zh
             */
            lang: string;
            "drug[]": number[];
            "days[]": number[];
            "frequency[]": string[];
            "usage[]": string[];
            "total[]": number[];
            "dosageForm[]": string[];
            "dosage[]": number[];
            "unit[]": string[];
            "customCaution[]": string[];
            "cautions[]": string[];
        };
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
                lang: string;
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [修改訂單] - no description
     * @param {string} orderNo - 訂單唯一識別碼
     */
    "put@orders/:orderNo": {
        body: {
            /**
             * 顧客身份 uuid
             * example c764f34b-dd29-454d-9fa0-db9a08e04607
             */
            customerUuid: string;
            /**
             * 配藥日期
             * @example 2021-01-01
             */
            signAt: string;
            /**
             * 開藥醫院 id
             * @example 334
             */
            hospital: string;
            /**
             * 開藥醫生
             * @example 醫生名稱
             */
            doctorName: string;
            /**
             * 處方簽症狀
             * @example 治療發燒、喉嚨痛
             */
            prescriptionSignMessage: string;
            /**
             * 紀錄語系 zh、en
             * @example zh
             */
            lang: string;
            "drug[]": number[];
            "days[]": number[];
            "frequency[]": string[];
            "usage[]": string[];
            "total[]": number[];
            "dosageForm[]": string[];
            "dosage[]": number[];
            "unit[]": string[];
            "customCaution[]": string[];
            "cautions[]": string[];
        };
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
                lang: string;
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
            sku: string[];
            packageName: string[];
            dosageForm: string[];
            usage: string[];
            dosage: number[];
            unit: string[];
            packageImages: (number | null)[];
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
            sku: string[];
            packageName: string[];
            dosageForm: string[];
            usage: string[];
            dosage: number[];
            unit: string[];
            packageImages: (number | null)[];
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
     * [上傳檔案] - no description
     */
    "post@upload": {
        body: {
            images: File;
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