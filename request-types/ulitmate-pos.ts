/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=ulitmate-pos
 */
export type UlitmatePosDefinitions = {
    /**
     * [Business Location 詳細資訊] - 會列出 Location 的詳細資訊
     */
    "get@info": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * @example A藥局
                 */
                name: string;
                /**
                 * @example 0945761435
                 */
                mobile: string;
                /**
                 * @example 香港
                 */
                country: string;
                /**
                 * @example 尖沙嘴頂好北路50巷10號
                 */
                state: string;
                /**
                 * @example 九龍
                 */
                city: string;
                /**
                 * @example 111
                 */
                zip_code: string;
            };
        };
        contentType: null;
    };
    /**
     * [值班人員] - 取得值班店員與值班藥師資訊
     */
    "get@on-duty": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * @example 1
                 */
                user_id: number;
                /**
                 * @example A店員
                 */
                user_name: string;
                /**
                 * @example 2
                 */
                pharmacist_id: number;
                /**
                 * @example 陳藥劑師
                 */
                pharmacist_name: string;
            };
        };
        contentType: null;
    };
    /**
     * [交易清單] - 取得交易清單
     */
    "get@transactions": {
        body: null;
        query: {
            contactId ? : number;
        };
        response: {
            data: {
                /**
                 * @example 180
                 */
                id: number;
                /**
                 * @example 陳藥師
                 */
                pharmacist_name: string;
                /**
                 * @example 頭痛
                 */
                prescription_sign_message: string;
                /**
                 * @example A店員
                 */
                username: string;
                /**
                 * @example A病人
                 */
                contact_name: string;
                /**
                 * @example 2022-10-21T09:33:52.000Z
                 */
                created_at: string;
            } [];
            links: {
                first: string;
                last: string;
                prev: string;
                next: string;
            };
            meta: {
                current_page: number;
                from: number;
                last_page: number;
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [建立一筆交易.] - no description
     */
    "post@transactions": {
        body: {
            /**
             * @example 4
             */
            contact_id ? : number;
            /**
             * 病人姓名
             * @example 桂綸鎂
             */
            contact_name: string;
            /**
             * 醫生姓名
             * @example 王醫師
             */
            doctor_name ? : string;
            /**
             * @example 8
             */
            hospital_key ? : number;
            /**
             * 醫院名稱
             * @example 中九龍診所
             */
            hospital_name ? : string;
            /**
             * 配藥日期
             * @example 2022-10-20T00:00:00.000Z
             */
            prescription_sign_created_at ? : string;
            /**
             * 處方簽症狀
             * @example 頭痛
             */
            prescription_sign_message ? : string;
            products ? : string;
            /**
             * 病人身分證字號
             * @example A12345678
             */
            contact_custom_field1: string;
            /**
             * 病人手機
             * @example 0962875124
             */
            contact_mobile ? : string;
            /**
             * 病人性別
             * @example M
             */
            contact_custom_field2 ? : string;
            /**
             * 病人生日
             * @example 1990/1/20
             */
            contact_dob ? : string;
            /**
             * 病人藥物忌諱
             * @example 八角
             */
            contact_custom_field3 ? : string;
            /**
             * 購買人 id
             * @example 8
             */
            purchase_id ? : number;
            /**
             * 購買人姓名
             * @example 戴立忍
             */
            purchase_name ? : string;
            /**
             * 購買人電話
             * @example 09937645284
             */
            purchase_mobile ? : string;
            /**
             * 購買人身份證字號
             * @example B8230185284
             */
            purchase_identy_number ? : string;
        };
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [單一交易] - 取得單一交易資訊
     * @param {integer} id - ID of transaction to return
     */
    "get@transactions/:id": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                created_at: string;
                contact_id: number;
                contact_dob: string;
                contact_name: string;
                total_amount: string;
            };
        };
        contentType: null;
    };
    /**
     * [交易表裡的產品清單] - 取得交易表裡的產品清單
     * @param {integer} id - ID of transaction to return
     */
    "get@transactions/:id/products": {
        body: null;
        query: null;
        response: {
            data: {
                sell_id: number;
                quantity: number;
                price: string;
                usage_id: number;
                product_id: number;
                days: number;
                total: number;
                dosage: number;
                frequency: number;
                cautions: {} [];
                custom_caution: string;
                dosage_form: string;
            } [];
            links: {
                first: string;
                last: string;
                prev: string;
                next: string;
            };
            meta: {
                current_page: number;
                from: number;
                last_page: number;
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [產品清單] - 取得產品清單
     */
    "get@products": {
        body: null;
        query: {
            keyword ? : string;
        };
        response: {
            data: {
                /**
                 * 藥品 id
                 */
                id: number;
                /**
                 * 藥品 SKU
                 */
                sku: string;
                /**
                 * 藥品名稱
                 */
                name: string;
                /**
                 * 庫存數量
                 */
                qty_available: number;
                /**
                 * 庫存警告數量
                 */
                alert_quantity: string;
                /**
                 * 售價
                 */
                default_sell_price: string;
                /**
                 * 藥品證號
                 */
                product_custom_field1: string;
                /**
                 * 藥品英文名稱
                 */
                product_custom_field2: string;
                /**
                 * 藥廠
                 */
                product_custom_field3: string;
                /**
                 * 藥品主成份
                 */
                product_custom_field4: string;
            } [];
            links: {
                first: string;
                last: string;
                prev: string;
                next: string;
            };
            meta: {
                current_page: number;
                from: number;
                last_page: number;
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得單一產品] - 取得單一產品詳細資訊
     * @param {integer} id - ID of product to return
     */
    "get@products/:id": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 藥品 id
                 */
                id: number;
                /**
                 * 藥品 SKU
                 */
                sku: string;
                /**
                 * 藥品名稱
                 */
                name: string;
                /**
                 * 單位 id
                 */
                unit_id: number;
                /**
                 * 庫存數量
                 */
                qty_available: number;
                /**
                 * 庫存警告數量
                 */
                alert_quantity: string;
                /**
                 * 單位簡稱
                 */
                unit_short_name: string;
                /**
                 * 售價
                 */
                default_sell_price: string;
                /**
                 * 藥品證號
                 */
                product_custom_field1: string;
                /**
                 * 藥品英文名稱
                 */
                product_custom_field2: string;
                /**
                 * 藥廠
                 */
                product_custom_field3: string;
                /**
                 * 藥品主成份
                 */
                product_custom_field4: string;
            };
        };
        contentType: null;
    };
    /**
     * [客戶清單] - 取得客戶清單
     */
    "get@contacts": {
        body: null;
        query: {
            accountNo ? : string;
            neme ? : string;
            mobile ? : string;
            keyword ? : string;
        };
        response: {
            data: {
                /**
                 * 顧客 id
                 * @example 20
                 */
                id: number;
                /**
                 * 顧客類型(病人 or 購買人)
                 * @example customer
                 */
                type: string;
                /**
                 * 顧客名稱
                 * @example 王大明
                 */
                name: string;
                /**
                 * 手機號碼
                 * @example 0934987146
                 */
                mobile: string;
                /**
                 * 身分證字號
                 * @example Z12345678
                 */
                accountNo: string;
                /**
                 * 建立日期
                 * @example 2022-10-21T00:00:00.000Z
                 */
                created_at: string;
            } [];
            links: {
                first: string;
                last: string;
                prev: string;
                next: string;
            };
            meta: {
                current_page: number;
                from: number;
                last_page: number;
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [建立病人/購買人資訊] - 建立病人/購買人資訊
     */
    "post@contacts": {
        body: {
            /**
             * 客戶類型 patient/customer/p_and_c
             * @example patient
             */
            type: string;
            /**
             * 身分證字號
             * @example A12345678
             */
            accountNo ? : string;
            /**
             * 地址
             * @example 九龍灣
             */
            address ? : string;
            allergyDrug ? : string[];
            drugNote ? : string[];
            allergyIngredient ? : string[];
            ingredientNote ? : string[];
            /**
             * 生日
             * @example 2022-10-1
             */
            birthday ? : string;
            /**
             * 藥物忌諱
             * @example 消炎藥
             */
            drugTaBoo ? : string;
            /**
             * 電子信箱
             * @example abcdefg@nextgen.com.hk
             */
            email ? : string;
            /**
             * 性別
             * @example F
             */
            gender ? : string;
            /**
             * 手機號碼
             * @example 0911765872
             */
            mobile ? : string;
            /**
             * 姓名
             * @example 桂綸鎂
             */
            name: string;
            /**
             * 電話
             * @example 025438762
             */
            phoneNumber ? : string;
        };
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [取得單一客戶資訊] - 取得單一客戶詳細資訊
     * @param {integer} id - ID of contact to return
     */
    "get@contacts/:id": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 顧客 id
                 * @example 20
                 */
                id: number;
                /**
                 * 顧客類型(病人 or 購買人)
                 * @example customer
                 */
                type: string;
                /**
                 * 身分證字號
                 * @example 3412753
                 */
                identity_id: string;
                /**
                 * 顧客名稱
                 * @example A病人
                 */
                name: string;
                /**
                 * 性別
                 * @example M
                 */
                gender: string;
                /**
                 * 生日
                 * @example 2022-09-07T00:00:00.000Z
                 */
                birthday: string;
                /**
                 * email
                 * @example allen@nextgen.com.hk
                 */
                email: string;
                /**
                 * 手機號碼
                 * @example 0934184625
                 */
                mobile: string;
                /**
                 * 電話號碼
                 * @example 07 654876
                 */
                phoneNumber: string;
                /**
                 * 地址
                 * @example 大安區, 台北市, 台灣 11033
                 */
                address: string;
                /**
                 * 藥物忌諱
                 * @example 八角
                 */
                drugTaBoo: string;
                allergyDrugs: {
                    /**
                     * 藥品ID
                     */
                    id: number;
                    /**
                     * 藥品備註
                     */
                    note: string;
                } [];
                allergyIngredients: {
                    /**
                     * 主成份 ID
                     */
                    id: number;
                    /**
                     * 主成份過敏備註
                     */
                    note: string;
                } [];
                /**
                 * 建立日期
                 * @example 2022-10-21T00:00:00.000Z
                 */
                created_at: string;
            };
        };
        contentType: null;
    };
    /**
     * [更新病人/購買人資訊] - 更新病人/購買人資訊
     */
    "put@contacts/:id": {
        body: {
            /**
             * 客戶類型 patient/customer/p_and_c
             * @example patient
             */
            type: string;
            /**
             * 身分證字號
             * @example A12345678
             */
            accountNo ? : string;
            /**
             * 地址
             * @example 九龍灣
             */
            address ? : string;
            allergyDrug ? : string[];
            drugNote ? : string[];
            allergyIngredient ? : string[];
            ingredientNote ? : string[];
            /**
             * 生日
             * @example 2022-10-1
             */
            birthday ? : string;
            /**
             * 藥物忌諱
             * @example 消炎藥
             */
            drugTaBoo ? : string;
            /**
             * 電子信箱
             * @example abcdefg@nextgen.com.hk
             */
            email ? : string;
            /**
             * 性別
             * @example F
             */
            gender ? : string;
            /**
             * 手機號碼
             * @example 0911765872
             */
            mobile ? : string;
            /**
             * 姓名
             * @example 桂綸鎂
             */
            name: string;
            /**
             * 電話
             * @example 025438762
             */
            phoneNumber ? : string;
        };
        query: null;
        response: null;
        contentType: null;
    };
}