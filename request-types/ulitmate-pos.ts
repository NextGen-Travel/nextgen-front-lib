/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=ulitmate-pos
 */
export type UlitmatePosDefinitions = {
    /**
     * [建立一筆交易.] - no description
     */
    "post@transactions": {
        body: null;
        query: null;
        response: null;
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [暫存交易] - no description
     */
    "post@transactions/suspend": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * success code
                 */
                success: number;
                /**
                 * response message
                 */
                msg: string;
                /**
                 * 暫存交易 id
                 */
                transaction_id: number;
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [建立病人/購買人資訊] - 建立病人/購買人資訊
     */
    "post@contacts": {
        body: null;
        query: null;
        response: {
            /**
             * 顧客 id
             */
            contactId: number;
            /**
             * 是否成功
             */
            success: boolean;
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [更新病人/購買人資訊] - 更新病人/購買人資訊
     */
    "put@contacts/:id": {
        body: null;
        query: null;
        response: null;
        contentType: "x-www-form-urlencoded";
    };
}