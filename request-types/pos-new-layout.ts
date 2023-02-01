/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=pos-new-layout
 */
export type PosNewLayoutDefinitions = {
    /**
     * [新增會員] - 新增會員
     *
     * Note: POS原生API
     *
     */
    "post@contacts": {
        body: {
            /**
             * 類型
             */
            type: string;
            /**
             * 類型類別
             */
            contact_type_radio ? : string;
            contact_id ? : string;
            customer_group_id ? : number;
            /**
             * 供應商公司名稱
             */
            supplier_business_name ? : string;
            /**
             * 稱謂
             */
            prefix ? : string;
            /**
             * 名字
             */
            first_name ? : string;
            /**
             * 中間名
             */
            middle_name ? : string;
            /**
             * 姓氏
             */
            last_name ? : string;
            /**
             * 行動電話號碼
             */
            mobile ? : string;
            alternate_number ? : string;
            /**
             * 市話
             */
            landline ? : string;
            /**
             * 信箱
             */
            email ? : string;
            /**
             * 生日
             */
            dob ? : string;
            crm_source ? : string;
            crm_life_stage ? : string;
            position ? : string;
            tax_number ? : string;
            opening_balance ? : number;
            pay_term_number ? : string;
            pay_term_type ? : string;
            credit_limit ? : string;
            /**
             * 地址1
             */
            address_line_1 ? : string;
            /**
             * 地址2
             */
            address_line_2 ? : string;
            /**
             * 縣市
             */
            city ? : string;
            /**
             * 州
             */
            state ? : string;
            /**
             * 國家
             */
            country ? : string;
            /**
             * 郵遞區號
             */
            zip_code ? : string;
            custom_field1 ? : string;
            custom_field2 ? : string;
            custom_field3 ? : string;
            custom_field4 ? : string;
            custom_field5 ? : string;
            custom_field6 ? : string;
            custom_field7 ? : string;
            custom_field8 ? : string;
            custom_field9 ? : string;
            custom_field10 ? : string;
            /**
             * 收件地址
             */
            shipping_address ? : string;
        };
        query: null;
        response: {
            data: {
                /**
                 * 類型
                 */
                type: string;
                /**
                 * 供應商公司名稱
                 */
                supplier_business_name: string;
                /**
                 * 稱謂
                 */
                prefix: string;
                /**
                 * 名字
                 */
                first_name: string;
                /**
                 * 中間名
                 */
                middle_name: string;
                /**
                 * 姓氏
                 */
                last_name: string;
                tax_number: string;
                pay_term_number: string;
                pay_term_type: string;
                /**
                 * 行動電話號碼
                 */
                mobile: string;
                /**
                 * 市話
                 */
                landline: string;
                alternate_number: string;
                /**
                 * 縣市
                 */
                city: string;
                /**
                 * 州
                 */
                state: string;
                /**
                 * 國家
                 */
                country: string;
                /**
                 * 地址1
                 */
                address_line_1: string;
                /**
                 * 地址2
                 */
                address_line_2: string;
                customer_group_id: number;
                /**
                 * 郵遞區號
                 */
                zip_code: string;
                contact_id: string;
                custom_field1: string;
                custom_field2: string;
                custom_field3: string;
                custom_field4: string;
                custom_field5: string;
                custom_field6: string;
                custom_field7: string;
                custom_field8: string;
                custom_field9: string;
                custom_field10: string;
                /**
                 * 信箱
                 */
                email: string;
                /**
                 * 收件地址
                 */
                shipping_address: string;
                position: string;
                /**
                 * 生日
                 */
                dob: string;
                name: string;
                business_id: number;
                created_by: number;
                credit_limit: number;
                updated_at: string;
                created_at: string;
            };
            msg: string;
            success: boolean;
        };
        contentType: null;
    };
    /**
     * [新增會員] - 新增會員
     *
     * Note: POS原生API
     *
     */
    "post@contacts#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 類型
                 */
                type: string;
                /**
                 * 供應商公司名稱
                 */
                supplier_business_name: string;
                /**
                 * 稱謂
                 */
                prefix: string;
                /**
                 * 名字
                 */
                first_name: string;
                /**
                 * 中間名
                 */
                middle_name: string;
                /**
                 * 姓氏
                 */
                last_name: string;
                tax_number: string;
                pay_term_number: string;
                pay_term_type: string;
                /**
                 * 行動電話號碼
                 */
                mobile: string;
                /**
                 * 市話
                 */
                landline: string;
                alternate_number: string;
                /**
                 * 縣市
                 */
                city: string;
                /**
                 * 州
                 */
                state: string;
                /**
                 * 國家
                 */
                country: string;
                /**
                 * 地址1
                 */
                address_line_1: string;
                /**
                 * 地址2
                 */
                address_line_2: string;
                customer_group_id: number;
                /**
                 * 郵遞區號
                 */
                zip_code: string;
                contact_id: string;
                custom_field1: string;
                custom_field2: string;
                custom_field3: string;
                custom_field4: string;
                custom_field5: string;
                custom_field6: string;
                custom_field7: string;
                custom_field8: string;
                custom_field9: string;
                custom_field10: string;
                /**
                 * 信箱
                 */
                email: string;
                /**
                 * 收件地址
                 */
                shipping_address: string;
                position: string;
                /**
                 * 生日
                 */
                dob: string;
                name: string;
                business_id: number;
                created_by: number;
                credit_limit: number;
                updated_at: string;
                created_at: string;
            };
            msg: string;
            success: boolean;
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [建立訂單] - 建立POS訂單.
     *
     * 當is_suspend=1則會儲存為暫存訂單.
     *
     * Note: POS原生API
     *
     */
    "post@pos": {
        body: {
            /**
             * 是否為配藥訂單
             */
            is_medicine ? : boolean;
            /**
             * 營業地點ID
             */
            location_id: number;
            sub_type ? : string;
            /**
             * 客戶ID
             */
            contact_id: number;
            search_product ? : string;
            pay_term_number ? : number;
            pay_term_type ? : string;
            price_group ? : number;
            /**
             * 服務類型ID
             */
            types_of_service_id ? : number;
            types_of_service_price_group ? : number;
            /**
             * 是否為預定發票
             */
            is_recurring ? : boolean;
            /**
             * 包裝支出
             */
            packing_charge ? : number;
            /**
             * 包裝支出的類型(固定 or 百分比)
             */
            packing_charge_type ? : "fixed" | "percent";
            /**
             * 服務自定欄１
             */
            service_custom_field_1 ? : string;
            /**
             * 服務自定欄2
             */
            service_custom_field_2 ? : string;
            /**
             * 服務自定欄3
             */
            service_custom_field_3 ? : string;
            /**
             * 服務自定欄4
             */
            service_custom_field_4 ? : string;
            /**
             * 服務自定欄5
             */
            service_custom_field_5 ? : string;
            /**
             * 服務自定欄6
             */
            service_custom_field_6 ? : string;
            res_table_id ? : number;
            res_waiter_id ? : number;
            transporter_id ? : number;
            driver_id ? : number;
            sell_price_tax ? : string;
            products ? : {
                /**
                 * 產品類別
                 */
                product_type: string;
                /**
                 * 單位價錢
                 */
                unit_price: number;
                /**
                 * 折扣類別
                 */
                line_discount_type: string;
                /**
                 * 折扣金額
                 */
                line_discount_amount: number;
                item_tax: number;
                /**
                 * 稅ID
                 */
                tax_id: number;
                /**
                 * 銷售註記
                 */
                sell_line_note: string;
                lot_no_line_id: number;
                /**
                 * 產品ID
                 */
                product_id: number;
                /**
                 * 規格ID
                 */
                variation_id: number;
                /**
                 * 是否有啟用庫存管理
                 */
                enable_stock: number;
                /**
                 * 數量
                 */
                quantity: number;
                /**
                 * 產品單位ID
                 */
                product_unit_id: number;
                /**
                 * 產品子單位ID
                 */
                sub_unit_id: number;
                /**
                 * 基本單位倍數
                 */
                base_unit_multiplier: number;
                /**
                 * 含稅單位價錢
                 */
                unit_price_inc_tax: number;
            } [];
            /**
             * 折扣類型
             */
            discount_type ? : "fixed" | "percentage";
            /**
             * 折扣金額
             */
            discount_amount ? : number;
            rp_redeemed ? : number;
            rp_redeemed_amount ? : number;
            tax_rate_id ? : number;
            tax_calculation_amount ? : number;
            shipping_details ? : string;
            shipping_address ? : string;
            shipping_status ? : string;
            delivered_to ? : string;
            shipping_charges ? : number;
            advance_balance ? : number;
            payment ? : {
                /**
                 * 交易總金額
                 */
                amount: number;
                account_id: number;
                card_number: string;
                card_holder_name: string;
                card_transaction_number: string;
                card_type: string;
                card_month: number;
                card_year: number;
                card_security: string;
                cheque_number: string;
                bank_account_number: string;
                transaction_no_1: string;
                transaction_no_2: string;
                transaction_no_3: string;
                transaction_no_4: string;
                transaction_no_5: string;
                transaction_no_6: string;
                transaction_no_7: string;
                note: string;
            } [];
            sale_note ? : string;
            staff_note ? : string;
            change_return ? : number;
            additional_notes ? : string;
            /**
             * 是否為暫存訂單
             */
            is_suspend ? : boolean;
            /**
             * 預定發票間隔
             */
            recur_interval ? : number;
            /**
             * 預定發票間隔類型
             */
            recur_interval_type ? : "days" | "months" | "years";
            /**
             * 預定發票重複次數
             */
            recur_repetitions ? : number;
            /**
             * 預定發票重複日期 (當預定發票間隔類型為 months 時才需要)
             */
            subscription_repeat_on ? : string;
            size ? : string;
            is_enabled_stock ? : boolean;
            is_credit_sale ? : boolean;
            /**
             * 總金額
             */
            final_total ? : number;
            discount_type_modal ? : string;
            discount_amount_modal ? : number;
            order_tax_modal ? : string;
            shipping_details_modal ? : string;
            shipping_address_modal ? : string;
            shipping_charges_modal ? : number;
            shipping_status_modal ? : number;
            delivered_to_modal ? : number;
            /**
             * 訂單狀態
             */
            status ? : string;
        };
        query: null;
        response: {
            /**
             * 是否成功
             */
            sussess: boolean;
            /**
             * 訊息
             */
            msg: string;
            /**
             * 發票
             */
            receipt: string;
        };
        contentType: null;
    };
    /**
     * [建立訂單] - 建立POS訂單.
     *
     * 當is_suspend=1則會儲存為暫存訂單.
     *
     * Note: POS原生API
     *
     */
    "post@pos#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            /**
             * 是否成功
             */
            sussess: boolean;
            /**
             * 訊息
             */
            msg: string;
            /**
             * 發票
             */
            receipt: string;
        };
        contentType: "x-www-form-urlencoded";
    };
}