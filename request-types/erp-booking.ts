/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=erp-booking
 */
export type ErpBookingDefinitions = {
    /**
     * [取得服務人員列表] - 取得服務人員
     */
    "get@booking/service-staff": {
        body: null;
        query: {
            location_id ? : number;
        };
        response: {
            success: boolean;
            date: {
                /**
                 * 服務人員ID
                 */
                id: number;
                /**
                 * 服務人員名稱
                 */
                full_name: string;
                /**
                 * 服務人員email
                 */
                email: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [服務人員詳細資訊及可預約場次] - 取得指定服務人員詳細資訊及可預約場次
     * @param {integer} id - The ID of the user to return.
     */
    "get@booking/service-staff/:id": {
        body: null;
        query: {
            location_id ? : number;
        };
        response: {
            /**
             * 服務人員ID
             */
            id: number;
            /**
             * 服務人員名稱
             */
            full_name: string;
            /**
             * 服務人員 email
             */
            email: string;
            product_specific_sys_activities: {
                /**
                 * 活動ID
                 */
                product_specific_sys_activity_id: number;
                /**
                 * 服務人員ID
                 * @example 5
                 */
                user_id: number;
                /**
                 * 營業地點ID
                 * @example 2
                 */
                location_id: number;
                /**
                 * 活動開始時間
                 * @example 2023-02-07T08:00:00+08:00
                 */
                start_time: string;
                /**
                 * 活動結束時間
                 * @example 2023-02-07T09:00:00+08:00
                 */
                end_time: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取得預約列表] - 取得預約列表
     */
    "get@booking": {
        body: null;
        query: {
            /**
             * @example e475e794-8105-11ed-a6ed-0242ac170005
             */
            contact_uuid ? : string;
            status ? : "all" | "booked" | "cancelled" | "completed";
            page ? : number;
            per_page ? : 10 | 20 | 50;
            location_id ? : number;
        };
        response: {
            /**
             * optional, booked status
             */
            success: boolean;
            data: {
                contact: {
                    /**
                     * required, 顧客名稱
                     * @example 好健康
                     */
                    name: string;
                    /**
                     * 顧客 email
                     * @example i.am.grandpa@paid.money
                     */
                    email ? : string;
                    /**
                     * 顧客手機
                     * @example 0912654980
                     */
                    mobile ? : string;
                };
                booking_records: {
                    product: {
                        /**
                         * ERP Product UUID
                         * @example 703e2de9-b330-11ed-b4f9-0242ac170002
                         */
                        uuid: string;
                        /**
                         * 商業活動名稱
                         * @example 頸椎治療
                         */
                        name ? : string;
                        /**
                         * Product image url<br> 僅供參考, NSS 可以調整商品圖片
                         *
                         * @example https://dcq8lblln1b30.cloudfront.net/assets/images/1673839860.png
                         */
                        image_url ? : string;
                        /**
                         * ERP Product UUID<br> 僅供參考, NSS 可以調整商品圖片
                         *
                         * @example 頸椎治療<br>頸椎治療<br>頸椎治療<br>頸椎治療
                         */
                        description ? : string;
                    };
                    /**
                     * 商業活動場次ID
                     * @example 8
                     */
                    product_specific_sys_activity_id: number;
                    /**
                     * booking id
                     * @example 165
                     */
                    booking_id: number;
                    /**
                     * 可被再次預約<br> 當 product, user, location 都存在時<br> 並且 booking_status 為 cancelled 或 completed<br> 可以再次預約 (value = 1)<br> 反之則不可再次預約 (value = 0)
                     *
                     * @example 1
                     */
                    can_rebook: 1 | 0;
                    /**
                     * 活動開始時間
                     * @example 2023-02-07T08:00:00+08:00
                     */
                    start_time: string;
                    /**
                     * 活動結束時間
                     * @example 2023-02-07T09:00:00+08:00
                     */
                    end_time: string;
                    /**
                     * 服務人員名稱
                     * @example 九龍包租公
                     */
                    user_name ? : string;
                    /**
                     * 分店名稱
                     * @example 九龍城寨
                     */
                    location_name ? : string;
                    /**
                     * 預約時的備註訊息
                     * @example 我的頸椎最近常落枕, 可能需要特別處理
                     */
                    booking_note: string;
                    /**
                     * 此預定的活動是否已完成服務:<br>
                     * br>
                     * 預約<br>
                     * 預約
                     *
                     * @example completed
                     */
                    booking_status: "booked" | "cancelled" | "completed";
                    /**
                     * 服務人員ID
                     * @example 165
                     */
                    user_id ? : number;
                    /**
                     * 分店ID
                     * @example 4
                     */
                    location_id ? : number;
                } [];
                pagination: {
                    /**
                     * 每頁筆數
                     * @example 10
                     */
                    per_page: 10 | 20 | 50;
                    /**
                     * 當前頁碼
                     * @example 4
                     */
                    current_page: number;
                    /**
                     * 全部筆數
                     * @example 124
                     */
                    total: number;
                    /**
                     * 本頁筆數
                     * @example 10
                     */
                    count: number;
                    /**
                     * 最後頁碼
                     * @example 13
                     */
                    last_page: number;
                };
            };
        };
        contentType: null;
    };
    /**
     * [新增預約] - 新增預約
     */
    "post@booking": {
        body: {
            /**
             * optional
             *
             * <br>
             * ic_sys_activity_id
             *
             *
             * <br>
             *
             * br>
             * >
             * <br>
             * br>
             * >
             * >
             *
             * @example activity
             */
            book_type ? : "activity" | "product";
            /**
             * required, 顧客 UUID
             * @example e475e794-8105-11ed-a6ed-0242ac170005
             */
            contact_uuid: string;
            /**
             * required, 顧客姓名
             * @example Next Gen
             */
            contact_name: string;
            /**
             * required, 顧客手機
             */
            contact_mobile: string;
            /**
             * required, 顧客 email
             */
            contact_email: string;
            /**
             * only required when book_type = activity , ERP 活動場次 ID
             */
            product_specific_sys_activity_id ? : number;
            /**
             * only required when book_type = product, ERP 商品 ID
             */
            product_id ? : number;
            /**
             * optional, 服務生ID
             */
            res_waiter_id ? : number;
            /**
             * only required when book_type = product, 總店ID
             */
            business_id ? : number;
            /**
             * only required when book_type = product, 分店ID
             */
            location_id ? : number;
            /**
             * 預約開始時間
             */
            booking_start ? : string;
            /**
             * 預約結束時間
             */
            booking_end ? : string;
            /**
             * 預約備註
             * @example 海景第一排
             */
            booking_note ? : string;
            /**
             * 付款狀態
             * @example unpaid
             */
            payment_status ? : string;
        };
        query: null;
        response: {
            /**
             * 執行結果(1=成功, 0=失敗)
             */
            success: boolean;
            /**
             * 結果訊息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [更新顧客預約] - 更新顧客預約
     * @param {integer} booking_id - The ID of the booking.
     */
    "put@booking/:booking_id": {
        body: {
            /**
             * optional
             *
             * <br>
             * ic_sys_activity_id
             *
             *
             * <br>
             *
             * br>
             * >
             * <br>
             * br>
             * >
             *
             * @example activity
             */
            book_type: "activity" | "product";
            /**
             * required, ERP 活動場次 ID
             * @example 6
             */
            product_specific_sys_activity_id: number;
            /**
             * optional, 服務生ID
             */
            res_waiter_id: number;
            /**
             * only required in ERP, 分店ID
             */
            location_id: number;
            /**
             * 預約開始時間
             */
            booking_start: string;
            /**
             * 預約結束時間
             */
            booking_end: string;
        };
        query: null;
        response: {
            /**
             * 執行結果(1=成功, 0=失敗)
             */
            success: boolean;
            /**
             * 結果訊息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [刪除顧客預約] - 刪除顧客預約
     * @param {integer} booking_id - The ID of the booking.
     */
    "delete@booking/:booking_id": {
        body: {
            /**
             * @example activity
             */
            book_type: "activity" | "product";
        };
        query: null;
        response: {
            /**
             * 執行結果(1=成功, 0=失敗)
             */
            success: boolean;
            /**
             * 結果訊息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [服務人員詳細資訊及可預約場次] - 取得指定服務人員詳細資訊及可預約場次
     * @param {string} uuid - ERP Product uuid
     */
    "get@product/:uuid": {
        body: null;
        query: {
            start_time ? : number;
            end_time ? : number;
            user_id ? : number;
            location_id ? : number;
            no_users ? : boolean;
            no_locations ? : boolean;
        };
        response: {
            /**
             * 成功 = true, 失敗 = false
             */
            success: boolean;
            data: {
                users: {
                    user_id: number;
                    user_name: string;
                } [];
                locations: {
                    location_id: number;
                    location_name: string;
                } [];
                product_specific_sys_activities: {
                    /**
                     * 活動ID
                     */
                    product_specific_sys_activity_id: number;
                    /**
                     * 服務人員ID
                     * @example 5
                     */
                    user_id: number;
                    /**
                     * 營業地點ID
                     * @example 2
                     */
                    location_id: number;
                    /**
                     * 活動開始時間
                     * @example 2023-02-07T08:00:00+08:00
                     */
                    start_time: string;
                    /**
                     * 活動結束時間
                     * @example 2023-02-07T09:00:00+08:00
                     */
                    end_time: string;
                } [];
            };
        };
        contentType: null;
    };
}