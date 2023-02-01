/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=genius-cart-app
 */
export type GeniusCartAppDefinitions = {
    /**
     * [no summary] - no description
     */
    "post@forgot": {
        body: {
            /**
             * 信箱
             * @example 123@123.com
             */
            email: string;
        };
        query: null;
        response: {
            msg: {};
            /**
             * @example 200
             */
            code: number;
        };
        contentType: null;
    };
    /**
     * [重設密碼] - 重設密碼
     */
    "post@reset": {
        body: {
            /**
             * 打算設定的新密碼
             * @example 777
             */
            new_password: string;
            /**
             * 新密碼確認
             * @example 777
             */
            confirm_password: string;
        };
        query: null;
        response: {
            data: {
                /**
                 * @example 密碼重設成功！
                 */
                msg: string;
                /**
                 * @example 200
                 */
                code: number;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "post@products/search-tags": {
        body: {
            /**
             * 搜尋關鍵字
             * @example airpod
             */
            keyword: string;
        };
        query: null;
        response: {
            data: {
                tags: {
                    product_id: number;
                    name: string;
                } [];
                products: {
                    id: number;
                    sku: string;
                    name: string;
                    photo: string;
                    price: number;
                    previous_price: number;
                    stock: number;
                    tags: string;
                    type: string;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "post@login": {
        body: {
            /**
             * 帳號信箱
             * @example aaa@abc.com
             */
            email: string;
            /**
             * 密碼
             * @example 12345
             */
            password: string;
        };
        query: null;
        response: {
            data: {
                token: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "post@register": {
        body: {
            /**
             * 用戶名稱
             * @example Jin
             */
            name: string;
            /**
             * 帳號信箱
             * @example aaa@abc.com
             */
            email: string;
            /**
             * 密碼
             * @example 12345
             */
            password: string;
            /**
             * 密碼確認
             * @example 12345
             */
            password_confirmation: string;
        };
        query: null;
        response: {
            data: {
                code: string;
                messages: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "post@client/wishlist": {
        body: {
            /**
             * 產品ID
             * @example 123
             */
            product_id: number;
        };
        query: null;
        response: {
            data: {
                code: string;
                wishId: number;
            };
        };
        contentType: null;
    };
    /**
     * [重設密碼] - 重設密碼
     */
    "post@client/reset": {
        body: {
            /**
             * 當前的登入密碼
             * @example 666
             */
            password: string;
            /**
             * 打算設定的新密碼
             * @example 777
             */
            newPassword: string;
            /**
             * 新密碼確認
             * @example 777
             */
            confirmPassword: string;
        };
        query: null;
        response: {
            data: {
                /**
                 * @example 密碼重設成功！
                 */
                msg: string;
            };
        };
        contentType: null;
    };
    /**
     * [轉換點數計算] - 轉換點數計算
     */
    "post@client/rewards/convert": {
        body: {
            /**
             * 轉換使用的點數
             * @example 50
             */
            reward_point: number;
        };
        query: null;
        response: {
            data: {
                /**
                 * 用來轉換的獎勵點數
                 */
                reward_point: number;
            };
        };
        contentType: null;
    };
    /**
     * [提取獎金申請] - 提取獎金申請
     */
    "post@client/affilate/create": {
        body: {
            /**
             * 打算提取的獎金
             * @example 10
             */
            affilate_income: number;
            /**
             * 提取方法
             * @example Bank
             */
            method: string;
            /**
             * 使用者的帳戶
             * @example 822175406331
             */
            iban: string;
            /**
             * 帳戶的持有人名稱
             * @example Jin
             */
            acc_name: string;
            /**
             * Swift代碼
             * @example 666
             */
            swift: string;
            /**
             * 地址
             * @example 陶朱隱園
             */
            address: string;
            /**
             * 附加參考
             */
            reference ? : string;
        };
        query: null;
        response: {
            data: {
                /**
                 * @example 提取申請中
                 */
                msg: string;
            };
        };
        contentType: null;
    };
    /**
     * [加值錢包] - 加值錢包
     */
    "post@client/deposit/create": {
        body: {
            /**
             * 加值獎金的方法ID
             * @example 2
             */
            method: number;
            /**
             * 加值的金額
             * @example 50
             */
            amount: number;
        };
        query: null;
        response: {
            data: {
                /**
                 * @example 加值成功
                 */
                msg: string;
            };
        };
        contentType: null;
    };
    /**
     * [編輯個人檔案] - 編輯個人檔案
     */
    "post@client/profile": {
        body: {
            /**
             * 使用者圖片
             */
            photo ? : File;
            /**
             * 使用者名稱
             * @example 試試看
             */
            name: string;
            /**
             * 傳真號碼
             * @example 666-1456
             */
            fax ? : string;
            /**
             * 電話號碼
             * @example 0912345678
             */
            phone ? : string;
            /**
             * 國家ID
             * @example 215
             */
            country ? : number;
            /**
             * 區域ID
             * @example 45
             */
            state ? : number;
            /**
             * 郵遞區號
             * @example 166
             */
            zip ? : string;
            /**
             * 住址
             * @example 信義區大安路
             */
            address ? : string;
        };
        query: null;
        response: {
            data: {
                /**
                 * @example 已成功更新您的個人檔案！
                 */
                msg: string;
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [新建主題] - 新建主題
     */
    "post@client/admin/messages": {
        body: {
            /**
             * @example Test Api
             */
            subject: string;
            /**
             * @example Test Api
             */
            message: string;
        };
        query: null;
        response: {
            data: {
                id: number;
                /**
                 * @example Success
                 */
                msg: string;
            };
        };
        contentType: null;
    };
    /**
     * [發新訊息] - 發新訊息
     * @param {number} messageId - undefined
     */
    "post@client/admin/messages/:messageId": {
        body: {
            /**
             * @example Test Api
             */
            message: string;
        };
        query: null;
        response: {
            data: {
                id: number;
                /**
                 * @example Success
                 */
                msg: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "post@cart/compute": {
        body: {
            items: unknown[];
            /**
             * 優惠券
             */
            coupon ? : string;
            /**
             * 錢包
             * @example 10
             */
            deposits ? : number;
            /**
             * 運送方式（快速或是一般...)
             * @example 1
             */
            shippings ? : number;
            /**
             * 包裝方式（豪華包裝或是一般...)
             * @example 1
             */
            packages ? : number;
            /**
             * 自取點ID
             */
            pickups ? : number;
            /**
             * 國家ID（計算稅率用）
             */
            country ? : number;
        };
        query: null;
        response: {
            data: {
                /**
                 * 商品總價格
                 */
                amount: number;
                /**
                 * 未達免運金額
                 */
                shipping_free_amount: number;
                /**
                 * 最終價格
                 */
                pay_amount: number;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "post@cart/checkout": {
        body: {
            /**
             * 購買人
             * @example 老高
             */
            customer_name: string;
            /**
             * 帳單區域
             * @example 215
             */
            customer_country: number;
            /**
             * 帳單電話
             * @example 0900123123
             */
            customer_phone: string;
            /**
             * 帳單地址
             * @example 九龍
             */
            customer_address: string;
            /**
             * 帳單區碼
             * @example 123
             */
            customer_zip: string;
            /**
             * 帳單郵件
             * @example zzz@nextgen.com
             */
            customer_email: string;
            /**
             * 帳單州
             * @example 47
             */
            customer_state: number;
            /**
             * 取貨人
             * @example 茉莉
             */
            shipping_name: string;
            /**
             * 送達城市
             * @example 215
             */
            shipping_country: number;
            /**
             * 送達電話
             * @example 0900123123
             */
            shipping_phone: string;
            /**
             * 送達地址
             * @example 新界
             */
            shipping_address: string;
            /**
             * 送達區碼
             * @example 123
             */
            shipping_zip: string;
            /**
             * 送達郵件
             * @example aaa@nextgen.hk.com
             */
            shipping_email: string;
            /**
             * 送達州
             * @example 47
             */
            shipping_state: number;
            /**
             * 自取點
             */
            pickups: number;
            /**
             * 包裝方式
             * @example 1
             */
            packages: number;
            /**
             * 送達方式（快速，一般....)
             * @example 1
             */
            shippings: number;
            /**
             * 付款方式 (現金，信用卡等等，目前只有現金/1)
             * @example 1
             */
            payment_method: number;
            /**
             * 收件人資料 1 同訂購人  / 2 新增收件人資料
             * @example 1
             */
            recipient: number;
            /**
             * 外送(1)或是自取點(2)
             * @example 1
             */
            shipping_type: 1 | 2;
            /**
             * 送達地址是否同顧客地址(0 false /1 true)
             */
            shipping_different: 0 | 1;
            items: {
                product_id: number;
                qty: number;
                sku: string;
            } [];
        };
        query: null;
        response: {
            data: {
                /**
                 * 訂單ID
                 */
                order_id: number;
                /**
                 * 訂單號碼
                 */
                order_number: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "post@client/cart/checkout": {
        body: {
            /**
             * 購買人
             * @example 老高
             */
            customer_name: string;
            /**
             * 帳單區域
             * @example 215
             */
            customer_country: number;
            /**
             * 帳單電話
             * @example 0900123123
             */
            customer_phone: string;
            /**
             * 帳單地址
             * @example 九龍
             */
            customer_address: string;
            /**
             * 帳單區碼
             * @example 123
             */
            customer_zip: string;
            /**
             * 帳單郵件
             * @example zzz@nextgen.com
             */
            customer_email: string;
            /**
             * 帳單州
             * @example 47
             */
            customer_state: number;
            /**
             * 取貨人
             * @example 茉莉
             */
            shipping_name: string;
            /**
             * 送達城市
             * @example 215
             */
            shipping_country: number;
            /**
             * 送達電話
             * @example 0900123123
             */
            shipping_phone: string;
            /**
             * 送達地址
             * @example 新界
             */
            shipping_address: string;
            /**
             * 送達區碼
             * @example 123
             */
            shipping_zip: string;
            /**
             * 送達郵件
             * @example aaa@nextgen.hk.com
             */
            shipping_email: string;
            /**
             * 送達州
             * @example 47
             */
            shipping_state: number;
            /**
             * 自取點
             */
            pickups: number;
            /**
             * 包裝方式
             * @example 1
             */
            packages: number;
            /**
             * 送達方式（快速，一般....)
             * @example 1
             */
            shippings: number;
            /**
             * 付款方式 (現金，信用卡等等，目前只有現金/1)
             * @example 1
             */
            payment_method: number;
            /**
             * 收件人資料 1 同訂購人  / 2 新增收件人資料
             * @example 1
             */
            recipient: number;
            /**
             * 外送(1)或是自取點(2)
             * @example 1
             */
            shipping_type: 1 | 2;
            /**
             * 送達地址是否同顧客地址(0 false /1 true)
             */
            shipping_different: 0 | 1;
            items: {
                product_id: number;
                qty: number;
                sku: string;
            } [];
        };
        query: null;
        response: {
            data: {
                /**
                 * 訂單ID
                 */
                order_id: number;
                /**
                 * 訂單號碼
                 */
                order_number: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "post@cart/product-search": {
        body: {
            items: {
                product_id: number;
                sku: string;
            } [];
        };
        query: null;
        response: {
            data: {
                id: number;
                sku: string;
                name: string;
                photo: string;
                price: number;
                size: string;
                color: string;
                stock: number;
                status: number;
                discount: number;
            } [];
        };
        contentType: null;
    };
    /**
     * [invoke paypal] - invoke paypal
     */
    "post@cart/checkout/paypal-submit": {
        body: {
            /**
             * 訂單編號
             */
            order_number ? : string;
            /**
             * 失敗時的導向url
             * @example https://nss-dev.girlssecrets.com/api/app/open?url_scheme=girlssecrets.link://?entrance=carts
             */
            fail_redirect: string;
            /**
             * 成功時的導向url
             * @example https://nss-dev.girlssecrets.com/api/app/open?url_scheme=girlssecrets.link://?entrance=carts/{orderNumber}
             */
            success_redirect: string;
        };
        query: null;
        response: {
            data: {
                url: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     * @param {string} orderNumber - undefined
     * @param {string} paymentName - undefined
     */
    "post@orders/:orderNumber/pay/:paymentName": {
        body: {
            /**
             * 幣別
             * @example hkd
             */
            currency: string;
        };
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [第三方註冊登入] - 前端提供token及provider供後端驗證確認後進行註冊並交換token給前端
     */
    "post@auth/verify": {
        body: {
            /**
             * 前端提供token
             */
            token: string;
            /**
             * 依照provider設定( facebook || google )
             */
            provider: string;
        };
        query: null;
        response: {
            data: {
                token: string;
            };
        };
        contentType: null;
    };
    /**
     * [第三方註冊登入(google)] - 前端提供token及provider供後端驗證確認後進行註冊並交換token給前端
     */
    "post@auth/verify/google": {
        body: {
            /**
             * 前端提供token
             */
            token: string;
        };
        query: null;
        response: {
            data: {
                token: string;
            };
        };
        contentType: null;
    };
}