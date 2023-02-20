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
        query: null;
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
        query: null;
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
                id: number;
                /**
                 * 服務人員ID
                 */
                user_id: number;
                /**
                 * 活動開始時間
                 */
                start_time: string;
                /**
                 * 活動結束時間
                 */
                end_time: string;
                /**
                 * 人數上限
                 */
                max_contacts: number;
                /**
                 * 已預約人數
                 */
                signed_up_contacts: number;
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
            customer_id ? : number;
        };
        response: null;
        contentType: null;
    };
    /**
     * [新增預約] - 新增預約
     */
    "post@booking": {
        body: {
            /**
             * 總店ID
             */
            business_id: number;
            /**
             * 分店ID
             */
            location_id: number;
            /**
             * 顧客ID
             */
            contact_id: number;
            /**
             * 顧客姓名
             */
            contact_name: string;
            /**
             * 顧客手機
             */
            contact_mobile: string;
            /**
             * 顧客 email
             */
            contact_email: string;
            /**
             * 顧客 UUID
             */
            contact_uuid: string;
            /**
             * 服務生ID
             */
            res_waiter_id: number;
            /**
             * 預約開始時間
             */
            booking_start: string;
            /**
             * 預約結束時間
             */
            booking_end: string;
            /**
             * 預約備註
             */
            booking_note: string;
            /**
             * 產品ID
             */
            product_id: number;
            /**
             * 活動相關ID
             */
            product_specific_sys_activities_id: number;
            /**
             * 付款狀態
             */
            payment_status: string;
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
             * 分店ID
             */
            location_id: number;
            /**
             * 服務生ID
             */
            res_waiter_id: number;
            /**
             * 預約開始時間
             */
            booking_start: string;
            /**
             * 預約結束時間
             */
            booking_end: string;
            /**
             * 產品ID
             */
            product_id: number;
            /**
             * 活動相關ID
             */
            product_specific_sys_activities_id: number;
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
        body: null;
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
}