/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=pos-origin
 */
export type PosOriginDefinitions = {
    /**
     * [取得客戶列表] - 取得客戶列表
     */
    "get@contacts/customers": {
        body: null;
        query: {
            q ? : string;
        };
        response: {
            /**
             * 客戶ID
             */
            id: number;
            /**
             * 客戶名稱
             */
            text: string;
            /**
             * 手機
             */
            mobile: string;
            address_line_1: string;
            address_line_2: string;
            city: string;
            state: string;
            country: string;
            zip_code: string;
            /**
             * 寄件地址
             */
            shipping_address: string;
            pay_term_number: string;
            pay_term_type: string;
            balance: string;
            supplier_business_name: string;
            discount_percent: string;
            price_calculation_type: string;
            selling_price_group_id: number;
            shipping_custom_field_details: string;
            is_export: number;
            export_custom_field_1: string;
            export_custom_field_2: string;
            export_custom_field_3: string;
            export_custom_field_4: string;
            export_custom_field_5: string;
            export_custom_field_6: string;
            passportNo: string;
            passportName: string;
            HKID: number;
            prefix: string;
            /**
             * 信箱
             */
            email: string;
            /**
             * 姓
             */
            last_name: string;
            /**
             * 名
             */
            first_name: string;
        } [];
        contentType: null;
    };
    /**
     * [取得產品列表] - 取得產品列表
     */
    "get@products/list": {
        body: null;
        query: {
            price_group ? : number;
            location_id ? : number;
            term ? : string;
            not_for_selling ? : number;
            search_fields ? : unknown[];
        };
        response: {
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
             * 是否啟用庫存
             */
            enable_stock: number;
            /**
             * 規格ID
             */
            variation_id: number;
            /**
             * 規格名稱
             */
            variation: string;
            /**
             * 庫存數量
             */
            qty_available: number;
            /**
             * 售價
             */
            selling_price: number;
            /**
             * Sub SKU
             */
            sub_sku: string;
            /**
             * 單位
             */
            unit: string;
            /**
             * 分類ID
             */
            category_id: number;
            /**
             * Purchase Line ID
             */
            purchase_line_id: number;
            /**
             * 批號
             */
            lot_number: string;
            /**
             * 圖片URL
             */
            image_url: string;
        } [];
        contentType: null;
    };
    /**
     * [取得單一產品規格資訊] - 取得單一產品規格資訊
     * @param {integer} variation_id - 規格ID
     * @param {integer} location_id - 分店ID
     */
    "get@sells/pos/get_product_row/:variation_id/:location_id": {
        body: null;
        query: {
            product_row ? : number;
            customer_id ? : number;
            is_direct_sell ? : boolean;
            price_group ? : number;
            purchase_line_id ? : number;
            weighing_scale_barcode ? : number;
            quantity ? : number;
            is_sales_order ? : boolean;
        };
        response: {
            enable_sr_no: number;
            /**
             * HTML
             */
            html_content: string;
            /**
             * 是否成功
             */
            success: boolean;
            /**
             * popup訊息
             */
            popup_note: string;
        };
        contentType: null;
    };
    /**
     * [取得客戶分類帳] - 取得客戶分類帳詳細資訊
     */
    "get@contacts/ledger": {
        body: null;
        query: {
            contact_id ? : number;
            start_date ? : number;
            show_payments ? : boolean;
            end_date ? : number;
            format ? : "format_1" | "format_2";
            location_id ? : number;
        };
        response: null;
        contentType: null;
    };
}