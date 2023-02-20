/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=pos-new-layout
 */
export type PosNewLayoutDefinitions = {
    /**
     * [產品清單] - 取得產品清單
     */
    "get@pos-v2/api/products": {
        body: null;
        query: {
            location_id ? : number;
            term ? : string;
            tag_id ? : number;
            per_page ? : number;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 產品衍生規格ID
                 */
                variation_id: number;
                /**
                 * 產品ID
                 */
                product_id: number;
                /**
                 * 產品名稱
                 */
                name: string;
                /**
                 * 產品類型
                 */
                type: string;
                /**
                 * 是否啟用庫存管理
                 */
                enable_stock: number;
                /**
                 * 圖片URL
                 */
                product_image: string;
                /**
                 * 衍生規格名稱
                 */
                variation: string;
                /**
                 * 產品售價 (不含稅)
                 */
                default_sell_price: number;
                /**
                 * 產品售價 (含稅)
                 */
                sell_price_inc_tax: number;
                /**
                 * Sub SKU
                 */
                sub_sku: string;
                /**
                 * 庫存總數量
                 */
                qty_available: number;
                stock: {
                    /**
                     * 採購單ID
                     */
                    purchase_line_id: number;
                    /**
                     * 批號
                     */
                    lot_number: string;
                    /**
                     * 到期日
                     */
                    exp_date: string;
                    /**
                     * 數量
                     */
                    qty_available: number;
                } [];
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
     * [取得單一產品詳細資訊] - 取得單一產品詳細資訊
     *
     */
    "get@pos-v2/api/products/:variation_id": {
        body: null;
        query: {
            location_id ? : number;
            price_group_id ? : number;
        };
        response: {
            /**
             * 產品名稱
             */
            product_name: string;
            /**
             * 產品ID
             */
            product_id: number;
            /**
             * 品牌ID
             */
            brand_id: number;
            /**
             * 圖片URL
             */
            product_image: string;
            /**
             * Sub SKU
             */
            sub_sku: string;
            /**
             * 產品售價 (不含稅)
             */
            default_sell_price: number;
            /**
             * 產品衍生規格ID
             */
            variation_id: number;
            /**
             * 庫存總量
             */
            qty_available: number;
            /**
             * 單位
             */
            unit: string;
            /**
             * 單位ID
             */
            unit_id: number;
            /**
             * 品牌名稱
             */
            brand: string;
            stock: {
                /**
                 * 採購單ID
                 */
                purchase_line_id: number;
                /**
                 * 批號
                 */
                lot_number: string;
                /**
                 * 過期日
                 */
                exp_date: string;
                /**
                 * 可用數量
                 */
                qty_available: number;
            } [];
        };
        contentType: null;
    };
    /**
     * [客戶自訂產品標籤] - 取得客戶自訂產品標籤
     */
    "get@pos-v2/api/custom-tags": {
        body: null;
        query: {
            per_page ? : number;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * id
                 */
                value: number;
                /**
                 * 名稱
                 */
                name: string;
            } [];
            links: {
                /**
                 * 最初頁網址
                 */
                first: string;
                /**
                 * 最末頁網址
                 */
                last: string;
                /**
                 * 上一頁網址
                 */
                prev: string;
                /**
                 * 下一頁網址
                 */
                next: string;
            };
            meta: {
                /**
                 * 當前頁碼
                 */
                current_page: number;
                /**
                 * 最末頁碼
                 */
                last_page: number;
                /**
                 * API網址
                 */
                path: string;
                /**
                 * 每頁筆數
                 */
                per_page: number;
                /**
                 * 本次資料開始筆數
                 */
                from: number;
                /**
                 * 本次資料結束筆數
                 */
                to: number;
                /**
                 * 總筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得店家資訊] - 取得總店資訊以及預設店家及營業員
     */
    "get@pos-v2/api/business-info": {
        body: null;
        query: null;
        response: {
            /**
             * 總店ID
             */
            business_id: number;
            /**
             * 預設分店ID
             */
            default_location_id: number;
            /**
             * 店員ID
             */
            employee_id: number;
            /**
             * 店員名稱
             */
            employee_name: string;
            /**
             * 是否啟用積分(1=啟用, 0=關閉)
             */
            enable_rp: number;
            /**
             * 是否啟用內聯稅於採購及銷售(1=啟用, 0=關閉)
             */
            enable_inline_tax: number;
            /**
             * 積分顯示名稱
             */
            rp_name: string;
            /**
             * 每一積分需要的消費金額
             */
            amount_for_unit_rp: number;
            /**
             * 可獲獎勵的最低消費金額
             */
            min_order_total_for_rp: number;
            /**
             * 每個訂單的最大積分額
             */
            max_rp_per_order: number;
            /**
             * 每一積分的兌換金額
             */
            redeem_amount_per_unit_rp: number;
            /**
             * 可兌換積分的最低消費額
             */
            min_order_total_for_redeem: number;
            /**
             * 最低兌換積分
             */
            min_redeem_point: number;
            /**
             * 每個訂單的最大兌換積分
             */
            max_redeem_point: number;
            /**
             * 獎勵積分有效期限
             */
            rp_expiry_period: number;
            /**
             * 獎勵積分有效期限單位(年/月)
             */
            rp_expiry_type: string;
            /**
             * 貨幣符號
             */
            currency_symbol: string;
            /**
             * 貨幣符號位置
             */
            currency_symbol_placement: "before" | "after";
            /**
             * 全站日期格式
             */
            date_format: string;
            denominations: number[];
        };
        contentType: null;
    };
    /**
     * [取得分店列表] - 取得分店列表
     */
    "get@pos-v2/api/business-locations": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 下拉選單的value
                 */
                value: number;
                /**
                 * 分店名稱
                 */
                name: string;
            } [];
            links: {
                /**
                 * 最初頁網址
                 */
                first: string;
                /**
                 * 最末頁網址
                 */
                last: string;
                /**
                 * 上一頁網址
                 */
                prev: string;
                /**
                 * 下一頁網址
                 */
                next: string;
            };
            meta: {
                /**
                 * 當前頁碼
                 */
                current_page: number;
                /**
                 * 最末頁碼
                 */
                last_page: number;
                /**
                 * API網址
                 */
                path: string;
                /**
                 * 每頁筆數
                 */
                per_page: number;
                /**
                 * 本次資料開始筆數
                 */
                from: number;
                /**
                 * 本次資料結束筆數
                 */
                to: number;
                /**
                 * 總筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [暫存訂單列表] - 取得暫存訂單列表
     *
     */
    "get@pos-v2/api/sells": {
        body: null;
        query: {
            suspended ? : number;
            location_id ? : number;
            per_page ? : number;
            page ? : number;
        };
        response: {
            data: {
                id: number;
                /**
                 * 交易日期
                 */
                transaction_date: string;
                /**
                 * 客戶姓名
                 */
                name: string;
                /**
                 * 總金額
                 */
                final_total: string;
                /**
                 * 額外註記
                 */
                additional_notes: string;
                /**
                 * 銷售日期
                 */
                sale_date: string;
                /**
                 * 分店名稱
                 */
                business_location: string;
                /**
                 * 商品項目總數
                 */
                total_items: number;
                /**
                 * 訂單編號
                 */
                invoice_no: string;
                sell_lines: {
                    id: number;
                    transaction_id: number;
                    product_id: number;
                    variation_id: number;
                    quantity: number;
                    mfg_waste_percent: string;
                    mfg_ingredient_group_id: number;
                    quantity_returned: string;
                    unit_price_before_discount: string;
                    unit_price: string;
                    line_discount_type: string;
                    line_discount_amount: string;
                    unit_price_inc_tax: string;
                    item_tax: string;
                    /**
                     * 稅ID
                     */
                    tax_id: number;
                    /**
                     * 折扣ID
                     */
                    discount_id: number;
                    lot_no_line_id: number;
                    sell_line_note: string;
                    so_line_id: number;
                    so_quantity_invoiced: string;
                    res_service_staff_id: number;
                    res_line_order_status: string;
                    parent_sell_line_id: string;
                    children_type: string;
                    /**
                     * 子單位ID
                     */
                    sub_unit_id: number;
                    created_at: string;
                    updated_at: string;
                } [];
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
     * [取得單一訂單詳細資訊] - 取得單一訂單詳細資訊
     *
     * @param {number} transaction_id - 訂單ID
     */
    "get@pos-v2/api/sells/:transaction_id": {
        body: null;
        query: null;
        response: {
            /**
             * 交易ID
             */
            transaction_id: number;
            /**
             * 分店ID
             */
            location_id: number;
            /**
             * 發票編號
             */
            invoice_no: string;
            /**
             * 交易日期
             */
            transaction_date: string;
            /**
             * 建立者姓名
             */
            creator_name: string;
            /**
             * 額外註記
             */
            additional_notes: string;
            /**
             * 員工備註
             */
            staff_note: string;
            /**
             * 付款狀態
             */
            payment_status: string;
            products: {
                /**
                 * 產品類別
                 */
                type: string;
                /**
                 * 折扣前單位價錢(不含稅)
                 */
                unit_price_before_discount: number;
                /**
                 * 單位價錢(不含稅)
                 */
                unit_price: number;
                /**
                 * 折扣類別
                 */
                line_discount_type: "fixed" | "percentage";
                /**
                 * 折扣金額(使用者輸入的折扣數字)
                 */
                line_discount_amount: number;
                item_tax: number;
                /**
                 * 稅ID
                 */
                tax_id: number | string;
                /**
                 * 銷售註記
                 */
                sell_line_note: string;
                /**
                 * 批號及過期日的ID (Table名稱 -> purchase_lines)
                 */
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
                /**
                 * sell line ID
                 */
                transaction_sell_line_id: number;
                /**
                 * 產品售價 (不含稅)
                 */
                default_sell_price: number;
                /**
                 * 產品售價 (含稅)
                 */
                sell_price_inc_tax: number;
                stock: {
                    /**
                     * 採購單ID
                     */
                    purchase_line_id: number;
                    /**
                     * 批號
                     */
                    lot_number: string;
                    /**
                     * 到期日
                     */
                    exp_date: string;
                    /**
                     * 數量
                     */
                    qty_available: number;
                } [];
                /**
                 * 產品圖片
                 */
                product_image: string;
                /**
                 * 規格名稱
                 */
                variation: string;
                /**
                 * 庫存總數量
                 */
                qty_available: number;
                /**
                 * 產品名稱
                 */
                name: string;
            } [];
            /**
             * 總金額
             */
            final_total: string;
            discount: {
                /**
                 * 折扣類型
                 */
                type: string;
                /**
                 * 折扣數量
                 */
                amount: number;
                /**
                 * 售價群組
                 */
                price_group: number;
            };
            customer: {
                /**
                 * 客戶ID
                 */
                id: number;
                /**
                 * 客戶名稱
                 */
                name: string;
                /**
                 * 客戶自訂ID
                 */
                member_id: string;
                /**
                 * 手機
                 */
                mobile: string;
                /**
                 * 客戶積分
                 */
                total_rp: string;
                /**
                 * 客戶群名稱
                 */
                customer_group_name: string;
                /**
                 * 客戶未付金額
                 */
                contact_due: number;
            };
            transport: {
                /**
                 * 送貨地址
                 */
                shipping_address: string;
                /**
                 * 運費
                 */
                shipping_charges: number;
                /**
                 * 運輸詳情
                 */
                shipping_details: string;
                /**
                 * 發貨狀態
                 */
                shipping_status: string;
                /**
                 * 已送達至
                 */
                delivered_to: string;
            };
            service: {
                /**
                 * 包裝支出
                 */
                packing_charge: number;
                /**
                 * 包裝支出的類型(固定 or 百分比)
                 */
                packing_charge_type: "fixed" | "percentage";
                /**
                 * 服務自定欄１
                 */
                service_custom_field_1: string;
                /**
                 * 服務自定欄2
                 */
                service_custom_field_2: string;
                /**
                 * 服務自定欄3
                 */
                service_custom_field_3: string;
                /**
                 * 服務自定欄4
                 */
                service_custom_field_4: string;
                /**
                 * 服務自定欄5
                 */
                service_custom_field_5: string;
                /**
                 * 服務自定欄6
                 */
                service_custom_field_6: string;
            };
            recurring: {
                /**
                 * 預定發票間隔
                 */
                recur_interval: number;
                /**
                 * 預定發票間隔類型
                 */
                recur_interval_type: "days" | "months" | "years";
                /**
                 * 預定發票間隔類型
                 */
                recur_repetitions: number;
            };
            rp_info: {
                /**
                 * 已兌換積分
                 */
                rp_redeemed: number;
                /**
                 * 已兌換積分轉換後的金額
                 */
                rp_redeemed_amount: string;
                /**
                 * 獲取的積分
                 */
                rp_earned: number;
            };
            payment: {
                /**
                 * payment table id
                 */
                payment_id: number;
                /**
                 * 付款金額
                 */
                amount: number;
                /**
                 * 付款方式
                 */
                method: string;
                account_id: number;
                card_number: string;
                card_holder_name: string;
                card_transaction_number: string;
                card_type: string;
                card_month: string;
                card_year: string;
                card_security: string;
                cheque_number: string;
                bank_account_number: string;
                note: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [會員清單] - 取得會員清單
     */
    "get@pos-v2/api/contacts": {
        body: null;
        query: {
            q ? : string;
            per_page ? : number;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 客戶ID
                 */
                id: number;
                /**
                 * 客戶名稱
                 */
                name: string;
                /**
                 * 客戶自訂ID
                 */
                member_id: string;
                /**
                 * 手機
                 */
                mobile: string;
                /**
                 * 客戶積分
                 */
                total_rp: string;
                /**
                 * 客戶群名稱
                 */
                customer_group_name: string;
                /**
                 * 客戶未付金額
                 */
                contact_due: number;
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
            first_name: string;
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
            mobile: string;
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
            success: number;
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
            success: number;
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [建立訂單] - 建立POS訂單.
     *
     * 當is_suspend=1則會儲存為暫存訂單.
     *
     */
    "post@pos-v2/api/pos": {
        body: {
            /**
             * 是否為配藥訂單
             */
            is_medicine ? : number;
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
            /**
             * 服務類型ID
             */
            types_of_service_id ? : number;
            types_of_service_price_group ? : number;
            /**
             * 是否為預定發票
             */
            is_recurring ? : number;
            /**
             * 包裝支出
             */
            packing_charge ? : number;
            /**
             * 包裝支出的類型(固定 or 百分比)
             */
            packing_charge_type ? : "fixed" | "percentage";
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
            /**
             * 餐桌ID
             */
            res_table_id ? : number;
            /**
             * 服務生ID
             */
            res_waiter_id ? : number;
            /**
             * 車輛ID
             */
            transporter_id ? : number;
            /**
             * 司機ID
             */
            driver_id ? : number;
            sell_price_tax ? : "includes" | "excludes";
            /**
             * 發票計畫ID
             */
            invoice_scheme_id ? : number;
            products: {
                /**
                 * 產品類別
                 */
                product_type: string;
                /**
                 * 單位價錢(不含稅)
                 */
                unit_price: number;
                /**
                 * 折扣類別
                 */
                line_discount_type ? : "fixed" | "percentage";
                /**
                 * 折扣金額(使用者輸入的折扣數字)
                 */
                line_discount_amount ? : number;
                item_tax: number;
                /**
                 * 稅ID
                 */
                tax_id: number | string;
                /**
                 * 銷售註記
                 */
                sell_line_note ? : string;
                /**
                 * 批號及過期日的ID (Table名稱 -> purchase_lines)
                 */
                lot_no_line_id ? : number;
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
                product_unit_id ? : number;
                /**
                 * 產品子單位ID
                 */
                sub_unit_id ? : number;
                /**
                 * 基本單位倍數
                 */
                base_unit_multiplier ? : number;
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
            /**
             * 已兌換積分
             */
            rp_redeemed ? : number;
            /**
             * 已兌換積分轉換後的金額
             */
            rp_redeemed_amount ? : number;
            tax_rate_id: number | string;
            tax_calculation_amount ? : number;
            /**
             * 運輸詳情
             */
            shipping_details ? : string;
            /**
             * 送貨地址
             */
            shipping_address ? : string;
            /**
             * 發貨狀態
             */
            shipping_status ? : string;
            /**
             * 已送達至
             */
            delivered_to ? : string;
            /**
             * 運費
             */
            shipping_charges ? : number;
            advance_balance ? : number;
            payment ? : {
                /**
                 * 交易總金額
                 */
                amount: number;
                /**
                 * 付款方式
                 */
                method: string;
                account_id ? : number;
                card_number ? : string;
                card_holder_name ? : string;
                card_transaction_number ? : string;
                card_type ? : string;
                card_month ? : number;
                card_year ? : number;
                card_security ? : string;
                cheque_number ? : string;
                bank_account_number ? : string;
                transaction_no_1 ? : string;
                transaction_no_2 ? : string;
                transaction_no_3 ? : string;
                transaction_no_4 ? : string;
                transaction_no_5 ? : string;
                transaction_no_6 ? : string;
                transaction_no_7 ? : string;
                /**
                 * 付款註記
                 */
                note ? : string;
            } [];
            /**
             * 銷售備註
             */
            sale_note ? : string;
            /**
             * 員工備註
             */
            staff_note ? : string;
            /**
             * 退費金額
             */
            change_return: number;
            /**
             * 額外備註
             */
            additional_notes ? : string;
            /**
             * 是否為暫存訂單
             */
            is_suspend ? : number;
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
            /**
             * 是否有啟用庫存
             */
            is_enabled_stock ? : number;
            /**
             * 是否為借記銷售
             */
            is_credit_sale ? : number;
            /**
             * 總金額
             */
            final_total: number;
            /**
             * 訂單狀態
             */
            status: string;
        };
        query: null;
        response: {
            /**
             * 是否成功
             */
            success: number;
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
     */
    "post@pos-v2/api/pos#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            /**
             * 是否成功
             */
            success: number;
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
    /**
     * [更新訂單] - 更新POS訂單.
     *
     * 當is_suspend=1則會儲存為暫存訂單.
     *
     * @param {number} transaction_id - 訂單ID
     */
    "put@pos-v2/api/pos/:transaction_id": {
        body: {
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
            /**
             * 餐桌ID
             */
            res_table_id ? : number;
            /**
             * 服務生ID
             */
            res_waiter_id ? : number;
            /**
             * 是否為預定發票
             */
            is_recurring ? : number;
            /**
             * 車輛ID
             */
            transporter_id ? : number;
            /**
             * 司機ID
             */
            driver_id ? : number;
            sell_price_tax ? : "includes" | "excludes";
            products: {
                /**
                 * 產品類別
                 */
                product_type: string;
                /**
                 * 單位價錢(不含稅)
                 */
                unit_price: number;
                /**
                 * 折扣金額(使用者輸入的折扣數字)
                 */
                line_discount_amount ? : number;
                /**
                 * 折扣類別
                 */
                line_discount_type ? : "fixed" | "percentage";
                item_tax: number;
                /**
                 * 稅ID
                 */
                tax_id: number | string;
                /**
                 * 銷售註記
                 */
                sell_line_note ? : string;
                /**
                 * sell line table ID
                 */
                transaction_sell_line_id ? : number;
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
                product_unit_id ? : number;
                /**
                 * 產品子單位ID
                 */
                sub_unit_id ? : number;
                /**
                 * 基本單位倍數
                 */
                base_unit_multiplier ? : number;
                /**
                 * 含稅單位價錢
                 */
                unit_price_inc_tax: number;
                /**
                 * 批號及過期日的ID (Table名稱 -> purchase_lines)
                 */
                lot_no_line_id ? : number;
            } [];
            /**
             * 折扣類型
             */
            discount_type ? : "fixed" | "percentage";
            /**
             * 折扣金額
             */
            discount_amount ? : number;
            /**
             * 已兌換積分
             */
            rp_redeemed ? : number;
            /**
             * 已兌換積分轉換後的金額
             */
            rp_redeemed_amount ? : number;
            tax_rate_id: number | string;
            tax_calculation_amount ? : number;
            /**
             * 運輸詳情
             */
            shipping_details ? : string;
            /**
             * 送貨地址
             */
            shipping_address ? : string;
            /**
             * 發貨狀態
             */
            shipping_status ? : string;
            /**
             * 已送達至
             */
            delivered_to ? : string;
            /**
             * 運費
             */
            shipping_charges ? : number;
            advance_balance ? : number;
            payment ? : {
                /**
                 * Payment table id
                 */
                payment_id ? : number;
                /**
                 * 交易總金額
                 */
                amount: number;
                /**
                 * 付款方式
                 */
                method: string;
                account_id ? : number;
                card_number ? : string;
                card_holder_name ? : string;
                card_transaction_number ? : string;
                card_type ? : string;
                card_month ? : number;
                card_year ? : number;
                card_security ? : string;
                cheque_number ? : string;
                bank_account_number ? : string;
                transaction_no_1 ? : string;
                transaction_no_2 ? : string;
                transaction_no_3 ? : string;
                transaction_no_4 ? : string;
                transaction_no_5 ? : string;
                transaction_no_6 ? : string;
                transaction_no_7 ? : string;
                /**
                 * 付款註記
                 */
                note ? : string;
            } [];
            /**
             * 銷售備註
             */
            sale_note ? : string;
            /**
             * 員工備註
             */
            staff_note ? : string;
            /**
             * 退費金額
             */
            change_return: number;
            /**
             * 額外備註
             */
            additional_notes ? : string;
            /**
             * 是否為暫存訂單
             */
            is_suspend ? : number;
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
            /**
             * 是否有啟用庫存
             */
            is_enabled_stock ? : number;
            /**
             * 是否為借記銷售
             */
            is_credit_sale ? : number;
            /**
             * 總金額
             */
            final_total: number;
            /**
             * 訂單狀態
             */
            status: string;
            /**
             * 服務類型ID
             */
            types_of_service_id ? : number;
            types_of_service_price_group ? : number;
            /**
             * 包裝支出
             */
            packing_charge ? : number;
            /**
             * 包裝支出的類型(固定 or 百分比)
             */
            packing_charge_type ? : "fixed" | "percentage";
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
            /**
             * 發票計畫ID
             */
            invoice_scheme_id ? : number;
        };
        query: null;
        response: {
            /**
             * 0=失敗, 1=成功
             */
            success: number;
            /**
             * 成功訊息
             */
            msg: string;
            receipt: string;
        };
        contentType: null;
    };
    /**
     * [更新訂單] - 更新POS訂單.
     *
     * 當is_suspend=1則會儲存為暫存訂單.
     *
     * @param {number} transaction_id - 訂單ID
     */
    "put@pos-v2/api/pos/:transaction_id#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            /**
             * 0=失敗, 1=成功
             */
            success: number;
            /**
             * 成功訊息
             */
            msg: string;
            receipt: string;
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [取得運輸狀態列表] - 取得運輸狀態列表
     */
    "get@pos-v2/api/transport-status": {
        body: null;
        query: {
            per_page ? : number;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 翻譯後的顯示文字
                 */
                name: string;
                /**
                 * 下拉選單的value
                 */
                value: string;
            } [];
            links: {
                /**
                 * 最初頁網址
                 */
                first: string;
                /**
                 * 最末頁網址
                 */
                last: string;
                /**
                 * 上一頁網址
                 */
                prev: string;
                /**
                 * 下一頁網址
                 */
                next: string;
            };
            meta: {
                /**
                 * 當前頁碼
                 */
                current_page: number;
                /**
                 * 最末頁碼
                 */
                last_page: number;
                /**
                 * API網址
                 */
                path: string;
                /**
                 * 每頁筆數
                 */
                per_page: number;
                /**
                 * 本次資料開始筆數
                 */
                from: number;
                /**
                 * 本次資料結束筆數
                 */
                to: number;
                /**
                 * 總筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得發票清單] - 取得發票清單
     */
    "get@pos-v2/api/invoices": {
        body: null;
        query: {
            per_page ? : number;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 發票名稱
                 */
                name: string;
                /**
                 * 下拉選單的value
                 */
                value: string;
            } [];
            links: {
                /**
                 * 最初頁網址
                 */
                first: string;
                /**
                 * 最末頁網址
                 */
                last: string;
                /**
                 * 上一頁網址
                 */
                prev: string;
                /**
                 * 下一頁網址
                 */
                next: string;
            };
            meta: {
                /**
                 * 當前頁碼
                 */
                current_page: number;
                /**
                 * 最末頁碼
                 */
                last_page: number;
                /**
                 * API網址
                 */
                path: string;
                /**
                 * 每頁筆數
                 */
                per_page: number;
                /**
                 * 本次資料開始筆數
                 */
                from: number;
                /**
                 * 本次資料結束筆數
                 */
                to: number;
                /**
                 * 總筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得客戶群清單] - 取得客戶群清單
     */
    "get@pos-v2/api/contact-group": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 客戶群顯示文字
                 */
                name: string;
                /**
                 * 下拉選單的value
                 */
                value: string;
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
     * [取得付款類型清單] - 取得付款類型清單
     */
    "get@pos-v2/api/payment-type": {
        body: null;
        query: {
            location_id ? : number;
            per_page ? : number;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 發票名稱
                 */
                name: string;
                /**
                 * 下拉選單的value
                 */
                value: string;
            } [];
            links: {
                /**
                 * 最初頁網址
                 */
                first: string;
                /**
                 * 最末頁網址
                 */
                last: string;
                /**
                 * 上一頁網址
                 */
                prev: string;
                /**
                 * 下一頁網址
                 */
                next: string;
            };
            meta: {
                /**
                 * 當前頁碼
                 */
                current_page: number;
                /**
                 * 最末頁碼
                 */
                last_page: number;
                /**
                 * API網址
                 */
                path: string;
                /**
                 * 每頁筆數
                 */
                per_page: number;
                /**
                 * 本次資料開始筆數
                 */
                from: number;
                /**
                 * 本次資料結束筆數
                 */
                to: number;
                /**
                 * 總筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得售價群組清單] - 取得售價群組清單
     */
    "get@pos-v2/api/price-groups": {
        body: null;
        query: {
            per_page ? : number;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 售價群組名稱
                 */
                name: string;
                /**
                 * 下拉選單的value
                 */
                value: number;
            } [];
            links: {
                /**
                 * 最初頁網址
                 */
                first: string;
                /**
                 * 最末頁網址
                 */
                last: string;
                /**
                 * 上一頁網址
                 */
                prev: string;
                /**
                 * 下一頁網址
                 */
                next: string;
            };
            meta: {
                /**
                 * 當前頁碼
                 */
                current_page: number;
                /**
                 * 最末頁碼
                 */
                last_page: number;
                /**
                 * API網址
                 */
                path: string;
                /**
                 * 每頁筆數
                 */
                per_page: number;
                /**
                 * 本次資料開始筆數
                 */
                from: number;
                /**
                 * 本次資料結束筆數
                 */
                to: number;
                /**
                 * 總筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [庫存管理] - 取得產品清單
     */
    "get@pos-v2/api/warehouse/stocks": {
        body: null;
        query: {
            location_id ? : number;
            product_rack_id ? : number | string;
            term ? : string;
            category_id ? : number | string;
            sub_category_id ? : number | string;
            is_only_alert ? : number;
            active_state ? : "all" | "active" | "inactive";
            is_uncategorized ? : number;
            sort ? : {
                /**
                 * 位置
                 */
                rack: "ASC" | "DESC";
                /**
                 * 商品名稱
                 */
                product_name: "ASC" | "DESC";
                /**
                 * 採買金額
                 */
                purchase_price: "ASC" | "DESC";
                /**
                 * 異地庫存
                 */
                offsite_stock: "ASC" | "DESC";
                /**
                 * 本地庫存
                 */
                current_stock: "ASC" | "DESC";
            };
            length ? : number;
            page ? : number;
        };
        response: {
            /**
             * 本頁筆數
             */
            recordsTotal: number;
            /**
             * 總筆數
             */
            total: number;
            /**
             * 總頁數
             */
            pages: number;
            data: {
                /**
                 * 區域
                 */
                position: string;
                /**
                 * 排
                 */
                row: string;
                /**
                 * 貨架
                 */
                rack: string;
                /**
                 * 主分類
                 */
                category: string;
                /**
                 * 子分類
                 */
                sub_category: string;
                /**
                 * 產品名稱
                 */
                product_name: string;
                /**
                 * 是否啟用
                 */
                is_inactive: number;
                /**
                 * 是否啟用
                 */
                active_state: string;
                /**
                 * sku
                 */
                sku: string;
                /**
                 * 警示數量
                 */
                alert_quantity: string;
                /**
                 * 本地庫存
                 */
                current_stock: string;
                /**
                 * 異地庫存量
                 */
                offsite_stock: string;
                /**
                 * 庫存單位
                 */
                unit: string;
                /**
                 * 包裝單位
                 */
                base_unit: string;
                /**
                 * 每包幾入
                 */
                base_unit_multiplier: string;
                /**
                 * 單位售價(最大)
                 */
                max_price: string;
                /**
                 * 單位售價(最小)
                 */
                min_price: number;
                /**
                 * 單位成本(最大)
                 */
                max_purchase_price: string;
                /**
                 * 單位成本(最小)
                 */
                min_purchase_price: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [採購/庫存轉移] - 取得產品清單
     */
    "get@pos-v2/api/warehouse/purchases_or_transfers": {
        body: null;
        query: {
            location_id ? : number;
            type ? : "purchase" | "purchase_transfer";
            term ? : string;
            start_date ? : string;
            end_date ? : string;
            sort ? : {
                /**
                 * 參考號
                 */
                ref_no: "ASC" | "DESC";
                /**
                 * 訂單狀態
                 */
                status: "ASC" | "DESC";
                /**
                 * 預計到達日
                 */
                eta: "ASC" | "DESC";
                /**
                 * 實際到達日
                 */
                ata: "ASC" | "DESC";
                /**
                 * 盤點日
                 */
                inventory_date: "ASC" | "DESC";
            };
            length ? : number;
            page ? : number;
        };
        response: {
            /**
             * 本頁筆數
             */
            recordsTotal: number;
            /**
             * 總筆數
             */
            total: number;
            /**
             * 總頁數
             */
            pages: number;
            data: {
                id: number;
                /**
                 * 類型
                 */
                type: string;
                /**
                 * 參考號
                 */
                ref_no: string;
                /**
                 * 建立日期
                 */
                transaction_date: string;
                DT_RowId: number;
                /**
                 * 地點(由)
                 */
                location_from: string;
                /**
                 * 接收地點
                 */
                location_to: string;
                additional_notes: {};
                /**
                 * 狀態
                 */
                status: string;
                /**
                 * 允許接收
                 */
                received_not_allowed: number;
                /**
                 * 預計出發日
                 */
                transaction_etd: string;
                /**
                 * 預計到達日
                 */
                transaction_eta: string;
                /**
                 * 實際出發日
                 */
                transaction_atd: string;
                /**
                 * 實際到達日
                 */
                transaction_ata: string;
                inventory_transaction_id: {};
                inventory_transaction_date: {};
                /**
                 * 盤點人員
                 */
                inventory_staff: string;
                /**
                 * 總項目
                 */
                item_count: number;
            } [];
        };
        contentType: null;
    };
    /**
     * [取得詳細資訊] - 取得單一產品詳細資訊
     *
     * @param {integer} id - id
     */
    "get@pos-v2/api/warehouse/detail/:id": {
        body: null;
        query: null;
        response: {
            success: number;
            msg: string;
            data: {
                detail: {
                    id: number;
                    /**
                     * 類型
                     */
                    type: string;
                    /**
                     * 參考號
                     */
                    ref_no: string;
                    /**
                     * 建立日期
                     */
                    transaction_date: string;
                    /**
                     * 地點(由)
                     */
                    location_from: string;
                    /**
                     * 接收地點
                     */
                    location_to: string;
                    final_total: string;
                    additional_notes: {};
                    staff_note: {};
                    /**
                     * 狀態
                     */
                    status: string;
                    /**
                     * 付款狀態
                     */
                    payment_status: string;
                    /**
                     * 預計出發日
                     */
                    shipping_etd: string;
                    /**
                     * 預計到達日
                     */
                    shipping_eta: string;
                    /**
                     * 實際出發日
                     */
                    shipping_atd: string;
                    /**
                     * 實際到達日
                     */
                    shipping_ata: string;
                    /**
                     * 處理人員
                     */
                    staff: string;
                    inventory_transaction_id: {};
                    inventory_transaction_date: {};
                    /**
                     * 盤點人員
                     */
                    inventory_staff: string;
                };
                products: {
                    /**
                     * 採購單ID
                     */
                    purchase_line_id: number;
                    product_id: number;
                    variation_id: number;
                    /**
                     * sku
                     */
                    sku: string;
                    /**
                     * 商品名稱
                     */
                    product_name: string;
                    /**
                     * 商品描述
                     */
                    product_description: string;
                    /**
                     * 商品圖片
                     */
                    product_url: string;
                    /**
                     * 批號
                     */
                    lot_number: string;
                    /**
                     * 到期日
                     */
                    exp_date: string;
                    /**
                     * 入庫量
                     */
                    quantity: number;
                    /**
                     * 每單位價格
                     */
                    unit_price: string;
                    /**
                     * 庫存單位
                     */
                    unit: string;
                    /**
                     * 包裝單位
                     */
                    base_unit: string;
                    /**
                     * 每包幾入
                     */
                    base_unit_multiplier: string;
                    /**
                     * 盤點事件 id
                     */
                    inventory_transaction_id: number;
                    /**
                     * 盤點時間
                     */
                    inventory_transaction_date: string;
                    /**
                     * 盤點人員
                     */
                    inventory_staff: string;
                    /**
                     * 調節量
                     */
                    adjust_quantity: string;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [收貨] - 標示『採購/庫存轉移』已接受，並執行商品入庫
     * @param {integer} id - id
     */
    "post@pos-v2/api/warehouse/receive/:id": {
        body: null;
        query: null;
        response: {
            success: number;
            msg: string;
        };
        contentType: null;
    };
    /**
     * [執行盤點] - 盤點採購＆轉移商品 入庫數量是否正確， 若貨品數量與收貨單不符，系統將自動建立庫存調整單
     * @param {integer} id - id
     */
    "post@pos-v2/api/warehouse/inventory/:id": {
        body: {
            inventory_quantity: {
                /**
                 * @example 6
                 */
                purchase_line_id: number;
                /**
                 * 貨品數量
                 * @example 10
                 */
                quantity: number;
            } [];
        };
        query: null;
        response: {
            success: number;
            msg: string;
        };
        contentType: null;
    };
    /**
     * [分類和次分類] - 分類和次分類
     */
    "get@pos-v2/api/warehouse/product/categories": {
        body: null;
        query: null;
        response: {
            /**
             * 主分類
             */
            title: string;
            /**
             * 產品名稱
             */
            value: string;
            subCategories: {
                /**
                 * 主分類
                 */
                title: string;
                /**
                 * 產品名稱
                 */
                value: string;
            } [];
        } [];
        contentType: null;
    };
    /**
     * [訂單狀態] - no description
     */
    "get@pos-v2/api/warehouse/stock/state": {
        body: null;
        query: null;
        response: {
            /**
             * 標題
             */
            title: string;
            /**
             * 內容
             */
            value: string;
        } [];
        contentType: null;
    };
    /**
     * [商品狀態] - no description
     */
    "get@pos-v2/api/warehouse/product/state": {
        body: null;
        query: null;
        response: {
            /**
             * 標題
             */
            title: string;
            /**
             * 內容
             */
            value: string;
        } [];
        contentType: null;
    };
    /**
     * [商品位置] - no description
     */
    "get@pos-v2/api/warehouse/product/racks": {
        body: null;
        query: {
            location_id ? : number;
        };
        response: {
            /**
             * 標題
             */
            title: string;
            /**
             * 內容
             */
            value: string;
        } [];
        contentType: null;
    };
    /**
     * [訂單清單] - 取得訂單清單
     */
    "get@pos-v2/api/orders": {
        body: null;
        query: {
            location_id ? : number;
            st ? : string;
            et ? : string;
            payment_status ? : "all" | "paid" | "due" | "partial";
            term_type ? : "order_num" | "sku" | "contacter" | "servicer";
            term ? : string;
            per_page ? : number;
            page ? : number;
            return_order ? : number;
            pre_sale ? : number;
            sort_column ? : "order_num" | "contact_name" | "creator_name";
            sort_direction ? : "asc" | "desc";
        };
        response: {
            data: {
                /**
                 * 訂單ID
                 */
                order_id: number;
                /**
                 * 訂單編號
                 */
                order_num: string;
                /**
                 * 訂單日期
                 */
                order_date: string;
                /**
                 * 是否為退貨
                 */
                is_return: number;
                /**
                 * 客戶名稱
                 */
                contact_name: string;
                /**
                 * 項目總數
                 */
                total_items: number;
                /**
                 * 金額
                 */
                final_total: string;
                payment_method: string[];
                /**
                 * 退款金額
                 */
                return_paid: string;
                /**
                 * 待退金額
                 */
                return_not_refund: string;
                /**
                 * 服務人員
                 */
                creator_name: string;
                /**
                 * 銷售備註
                 */
                additional_note: string;
            } [];
            links: {
                /**
                 * 最初頁網址
                 */
                first: string;
                /**
                 * 最末頁網址
                 */
                last: string;
                /**
                 * 上一頁網址
                 */
                prev: string;
                /**
                 * 下一頁網址
                 */
                next: string;
            };
            meta: {
                /**
                 * 當前頁碼
                 */
                current_page: number;
                /**
                 * 最末頁碼
                 */
                last_page: number;
                /**
                 * API網址
                 */
                path: string;
                /**
                 * 每頁筆數
                 */
                per_page: number;
                /**
                 * 本次資料開始筆數
                 */
                from: number;
                /**
                 * 本次資料結束筆數
                 */
                to: number;
                /**
                 * 總筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [訂單詳細資料] - 取得訂單詳細資料
     */
    "get@pos-v2/api/orders/:id": {
        body: null;
        query: {
            location_id ? : number;
        };
        response: {
            /**
             * 訂單ID
             */
            order_id: number;
            /**
             * 訂單編號
             */
            order_num: string;
            /**
             * 訂單日期
             */
            order_date: string;
            /**
             * 訂單狀態
             */
            order_status: string;
            /**
             * 訂單ID
             */
            creator_name: string;
            /**
             * 客戶名稱
             */
            contact_name: string;
            /**
             * 銷售備註
             */
            additional_note: string;
            /**
             * 員工備註
             */
            staff_note: string;
            payment_method: string[];
            /**
             * 付費狀態
             */
            payment_status: string;
            /**
             * 運輸狀態
             */
            shipping_status: string;
            /**
             * 送貨地址
             */
            shipping_address: string;
            /**
             * 送貨詳情
             */
            shipping_details: string;
            products: {
                /**
                 * 產品圖片
                 */
                image: string;
                /**
                 * 產品名稱
                 */
                name: string;
                /**
                 * 產品SKU
                 */
                sku: string;
                /**
                 * 數量
                 */
                qty: number;
                /**
                 * 價格
                 */
                price: number;
                /**
                 * 小計
                 */
                subtotal: number;
                /**
                 * 商品販售id
                 */
                sell_line_id: number;
                /**
                 * 退貨數量
                 */
                qty_returned: number;
                /**
                 * 採購批號
                 */
                lot: string;
                /**
                 * EXP
                 */
                exp: string;
            } [];
            /**
             * 商品原價
             */
            total_price: string;
            /**
             * 商品總計
             */
            final_total: string;
            /**
             * 未付金額
             */
            unpaid_amonut: string;
            /**
             * 商品折扣
             */
            product_discount_amount: string;
            /**
             * 稅金
             */
            tax_amount: string;
            /**
             * 運費
             */
            shipping_amount: string;
            /**
             * 包裝
             */
            packing_amount: string;
            /**
             * 全單折扣
             */
            discount_amount: string;
            /**
             * 紅利折扣
             */
            redeemed_amount: string;
            other_amount: {
                /**
                 * 費用名稱
                 */
                name: string;
                /**
                 * 費用金額
                 */
                amount: string;
            } [];
            redeem: {
                /**
                 * 是否啟用
                 */
                enable: number;
                /**
                 * 紅利點數
                 */
                point: number;
                /**
                 * 本次使用
                 */
                cost: number;
                /**
                 * 本次增加
                 */
                earned: number;
                /**
                 * 總計
                 */
                final: number;
            };
        };
        contentType: null;
    };
    /**
     * [訂單詳細資料] - 取得訂單詳細資料
     * @param {integer} id - order id
     */
    "post@pos-v2/api/orders/return/:id": {
        body: null;
        query: {
            location_id ? : number;
            products ? : {
                /**
                 * sell_line_id by order product
                 */
                sell_line_id: number;
                /**
                 * return product quantity
                 */
                qty: number;
            } [];
            discount_type ? : "fixed" | "percentage";
            discount_amount ? : number;
            method ? : string;
            amount ? : number;
        };
        response: null;
        contentType: null;
    };
    /**
     * [繼續結帳] - 繼續結帳
     * @param {integer} id - order id
     */
    "post@pos-v2/api/orders/add-payment/:id": {
        body: {
            /**
             * 營業地點ID
             */
            location_id: number;
            payment: {
                /**
                 * 交易總金額
                 */
                amount: number;
                /**
                 * 付款方式
                 */
                method: string;
                /**
                 * 信用卡號碼
                 */
                card_number ? : string;
                /**
                 * 信用卡持有人
                 */
                card_holder_name ? : string;
                /**
                 * 信用卡交易號碼
                 */
                card_transaction_number ? : string;
                /**
                 * 信用卡種類
                 */
                card_type ? : "credit" | "debit" | "visa" | "master";
                /**
                 * 月
                 */
                card_month ? : number;
                /**
                 * 年
                 */
                card_year ? : number;
                /**
                 * 安全碼
                 */
                card_security ? : string;
                /**
                 * 支票號碼
                 */
                cheque_number ? : string;
                /**
                 * 銀行賬號
                 */
                bank_account_number ? : string;
                /**
                 * 銷售備註
                 */
                transaction_no ? : string;
                /**
                 * 銷售備註
                 */
                note ? : string;
            } [];
        };
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [繼續結帳] - 繼續結帳
     * @param {integer} id - order id
     */
    "post@pos-v2/api/orders/add-payment/:id#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: null;
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [取得收銀機詳細內容] - 取得收銀機詳細內容
     */
    "get@pos-v2/api/cash-register": {
        body: null;
        query: {
            location_id ? : number;
        };
        response: {
            /**
             * 訂單ID
             */
            open_time: string;
            /**
             * 訂單編號
             */
            close_time: string;
            /**
             * 開機現金結餘
             */
            cash_in_hand: number;
            /**
             * 總銷售金額
             */
            total_sell: number;
            /**
             * 總出支金額
             */
            total_expense: number;
            /**
             * 總退回金額
             */
            total_refund: number;
            /**
             * 總未付金額
             */
            total_unpaid: number;
            sell: {
                /**
                 * 付費方式
                 */
                key: string;
                /**
                 * 金額
                 */
                amount: string;
            } [];
            expense: {
                /**
                 * 付費方式
                 */
                key: string;
                /**
                 * 金額
                 */
                amount: string;
            } [];
            refund: {
                /**
                 * 付費方式
                 */
                key: string;
                /**
                 * 金額
                 */
                amount: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取得收銀機狀態] - 取得收銀機狀態
     */
    "get@pos-v2/api/cash-register/status": {
        body: null;
        query: {
            location_id ? : number;
        };
        response: {
            /**
             * 狀態
             */
            status: "open" | "close";
            /**
             * 開機時間
             */
            opened_at: string;
        };
        contentType: null;
    };
    /**
     * [啟動收銀機] - 啟動收銀機
     */
    "post@pos-v2/api/cash-register/open": {
        body: null;
        query: {
            location_id ? : number;
        };
        response: null;
        contentType: null;
    };
    /**
     * [關閉收銀機] - 關閉收銀機
     */
    "post@pos-v2/api/cash-register/close": {
        body: null;
        query: {
            location_id ? : number;
            cash ? : number;
            card_qty ? : number;
            cheque_qty ? : number;
            denominations ? : {
                /**
                 * 面額數量
                 */
                面額: number;
            };
        };
        response: null;
        contentType: null;
    };
    /**
     * [收銀機支出] - 收銀機支出
     */
    "post@pos-v2/api/cash-register/expense": {
        body: null;
        query: {
            location_id ? : number;
            date ? : string;
            amount ? : number;
            method ? : string;
            expense_id ? : number;
            ref_no ? : string;
            employee_id ? : number;
            tax_id ? : number;
            tax_amount ? : number;
            additional_notes ? : string;
            payment_notes ? : string;
        };
        response: null;
        contentType: null;
    };
    /**
     * [班次類型] - no description
     */
    "get@pos-v2/api/employee/shifts": {
        body: null;
        query: null;
        response: {
            /**
             * 標題
             */
            title: string;
            /**
             * 內容
             */
            value: string;
        } [];
        contentType: null;
    };
    /**
     * [出勤紀錄] - 取得產品清單
     */
    "get@pos-v2/api/employee/attendances": {
        body: null;
        query: {
            start_date ? : string;
            end_date ? : string;
            term ? : string;
            shift_id ? : number;
            is_only_alert ? : number;
            sort ? : {
                /**
                 * 時間
                 */
                start_date: "ASC" | "DESC";
                /**
                 * 班次
                 */
                shift: "ASC" | "DESC";
            };
            length ? : number;
            page ? : number;
        };
        response: {
            /**
             * 本頁筆數
             */
            recordsTotal: number;
            /**
             * 總筆數
             */
            total: number;
            /**
             * 總頁數
             */
            pages: number;
            data: {
                id: number;
                /**
                 * 日期
                 */
                date: string;
                /**
                 * 班表
                 */
                shift_name: string;
                /**
                 * 員工姓名
                 */
                full_name: string;
                /**
                 * 上班卡
                 */
                clock_in_time: string;
                /**
                 * 下班卡
                 */
                clock_out_time: string;
                /**
                 * 結算時間
                 */
                end_time: string;
                /**
                 * IP 位置
                 */
                ip_address: string;
                /**
                 * 上班打卡紀錄
                 */
                clock_in_note: string;
                /**
                 * 下班打卡記錄
                 */
                clock_out_note: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [本日值班] - 本日值班
     */
    "get@pos-v2/api/employee/duties": {
        body: null;
        query: null;
        response: {
            /**
             * 總筆數
             */
            success: boolean;
            /**
             * 訊息
             */
            msg: string;
            data: {
                duties: {
                    /**
                     * 員工id
                     */
                    user_id: number;
                    /**
                     * 員工姓名
                     */
                    user_name: string;
                    /**
                     * 班次
                     */
                    shift_name: string;
                    /**
                     * 班次 id
                     */
                    shift_id: number;
                    /**
                     * 班次類型
                     */
                    shift_type: string;
                    /**
                     * 上班時間
                     */
                    start_time: string;
                    /**
                     * 下班時間
                     */
                    end_time: string;
                    /**
                     * 出勤紀錄 id
                     */
                    essentials_attendances_id: number;
                    /**
                     * 上班打卡紀錄
                     */
                    clock_in_note: string;
                    /**
                     * 下班打卡記錄
                     */
                    clock_out_note: string;
                } [];
                leaves: {
                    /**
                     * 員工id
                     */
                    user_id: number;
                    /**
                     * 員工姓名
                     */
                    user_name: string;
                    /**
                     * 班次
                     */
                    shift_name: string;
                    /**
                     * 班次 id
                     */
                    shift_id: number;
                    /**
                     * 班次類型
                     */
                    shift_type: string;
                    /**
                     * 上班時間
                     */
                    start_time: string;
                    /**
                     * 下班時間
                     */
                    end_time: string;
                    /**
                     * 出勤紀錄 id
                     */
                    essentials_attendances_id: number;
                    /**
                     * 上班打卡紀錄
                     */
                    clock_in_note: string;
                    /**
                     * 下班打卡記錄
                     */
                    clock_out_note: string;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [打卡上下班] - 標示『採購/庫存轉移』已接受，並執行商品入庫
     */
    "post@pos-v2/api/warehouse/duty/clockInOrOut": {
        body: {
            /**
             * 員工id
             */
            user_id: number;
            /**
             * 班次id
             */
            shift_id ? : number;
            /**
             * 備註
             */
            note ? : string;
        };
        query: null;
        response: {
            success: number;
            msg: string;
        };
        contentType: null;
    };
}