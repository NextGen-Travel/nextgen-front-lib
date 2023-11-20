/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=genius-cart-app
 */
export type GeniusCartAppDefinitions = {
    /**
     * [測試還有沒有活著用的] - 測試還有沒有活著用的
     */
    "get@hello": {
        body: null;
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [測試app url跳轉使用] - no description
     */
    "get@redirect": {
        body: null;
        query: {
            url_scheme ? : string;
        };
        response: null;
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "get@sliders": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                id: number;
                subtitle_text: string;
                subtitle_size: string;
                subtitle_color: string;
                subtitle_anime: string;
                title_text: string;
                title_size: string;
                title_color: string;
                title_anime: string;
                details_text: string;
                details_size: string;
                details_color: string;
                details_anime: string;
                photo: string;
                link: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "get@payments": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                id: number;
                name: string;
                title: string;
                subtitle: string;
                type: "manual" | "automatic";
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得限時活動資訊] - 取得限時活動資訊
     */
    "get@deal-of-the-day": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 活動標題
                 */
                deal_title: string;
                /**
                 * 活動細節
                 */
                deal_details: string;
                /**
                 * 活動結束時間 yyyy-mm-dd Thh:mm:ss
                 * @example 2022-07-28 T00:00:00
                 */
                deal_time: string;
                /**
                 * 活動背景圖片url
                 */
                deal_background: string;
            };
        };
        contentType: null;
    };
    /**
     * [取得系統設定資訊] - 取得系統設定資訊
     */
    "get@general": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 網站logo url
                 */
                logo: string;
                /**
                 * 網站名稱
                 */
                title: string;
                /**
                 * 網站顏色
                 */
                colors: string;
                /**
                 * 是否有使用二次行銷
                 */
                is_affilate: number;
                /**
                 * 是否開啟訪客結帳
                 */
                is_guest_checkout: number;
                /**
                 * 購物車是否顯示包裝方式
                 */
                is_packaging: number;
                /**
                 * 購物車是否顯示運送方式
                 */
                is_shipping: number;
                /**
                 * 購物車是否顯示稅項
                 */
                is_tax: number;
            };
        };
        contentType: null;
    };
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
     * [取得包裝方式] - 取得包裝方式
     */
    "get@packages": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 類別ID
                 */
                id: number;
                /**
                 * 包裝名稱
                 */
                title: string;
                /**
                 * 子標題
                 */
                subtitle: string;
                /**
                 * 價格
                 */
                price: number;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得運送方式] - 取得運送方式
     */
    "get@shippings": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 類別ID
                 */
                id: number;
                /**
                 * 運送方式名稱
                 */
                title: string;
                /**
                 * 子標題（所需時間）
                 */
                subtitle: string;
                /**
                 * 價格
                 */
                price: number;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得幣別及幣值資料（以港幣為基準）] - 取得幣別及幣值資料（以港幣為基準）
     */
    "get@currency": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 幣別
                 */
                currency_sign: string;
                /**
                 * 幣值（以港幣為基準）
                 */
                currency_value: number;
                /**
                 * 貨幣代碼（以港幣為基準）
                 */
                currency_name: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "get@countries": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                id: number;
                name: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     * @param {number} countryId - undefined
     */
    "get@countries/:countryId/states": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                id: number;
                name: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     * @param {number} country_id - undefined
     */
    "get@countries/:country_id/tax": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 該國家稅率
                 */
                tax: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得產品第一層類別] - 取得產品第一層類別
     */
    "get@categories": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                id: number;
                name: string;
                photo: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定第一層產品類別] - 取得特定第一層產品類別
     * @param {number} category - undefined
     */
    "get@categories/:category": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 類別ID
                 */
                id: number;
                /**
                 * 類別名稱
                 */
                name: string;
                /**
                 * 類別圖片url
                 */
                photo: string;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定第一層產品類別的所有子類別（第二層）] - 取得特定第一層產品類別的所有子類別（第二層）
     * @param {number} category - undefined
     */
    "get@categories/:category/subs": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                id: number;
                name: string;
                photo: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定第一層產品類別下的特定子類別（第二層）] - 取得特定第一層產品類別底下的特定子類別（第二層）
     * @param {number} category - undefined
     * @param {number} sub - undefined
     */
    "get@categories/:category/subs/:sub": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                category_id: number;
                name: string;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定第二層類別的所有子類別（第三層）] - 取得特定第二層類別的所有子類別（第三層）
     * @param {number} subcategory_id - undefined
     */
    "get@subcategories/:subcategory_id/children": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                id: number;
                name: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定第二層類別的特定子類別（第三層）] - 取得特定第二層類別的特定子類別（第三層）
     * @param {number} subcategory_id - undefined
     * @param {number} child - undefined
     */
    "get@subcategories/:subcategory_id/children/:child": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 類別ID
                 */
                id: number;
                /**
                 * 上層類別ID
                 */
                subcategory_id: number;
                /**
                 * 類別名稱
                 */
                name: string;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定第三層類別的所有子類別（第四層）] - 取得特定第三層類別的所有子類別（第四層）
     * @param {number} childcategory_id - undefined
     */
    "get@childcategories/:childcategory_id/fourths": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                id: number;
                name: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定第三層類別的特定子類別（第四層）] - 取得特定第三層類別的特定子類別（第四層）
     * @param {number} childcategory_id - undefined
     * @param {number} fourth - undefined
     */
    "get@childcategories/:childcategory_id/fourths/:fourth": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 類別ID
                 */
                id: number;
                /**
                 * 上層類別ID
                 */
                childcategory_id: number;
                /**
                 * 類別名稱
                 */
                name: string;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定第四層類別的所有子類別（第五層）] - 取得特定第四層類別的所有子類別（第五層）
     * @param {number} fourthcategory_id - undefined
     */
    "get@fourthcategories/:fourthcategory_id/fifths": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                id: number;
                name: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定第四層類別的特定子類別（第五層）] - 取得特定第四層類別的特定子類別（第五層）
     * @param {number} fourthcategory_id - undefined
     * @param {number} fifth - undefined
     */
    "get@fourthcategories/:fourthcategory_id/fifths/:fifth": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 類別ID
                 */
                id: number;
                /**
                 * 上層類別ID
                 */
                fourthcategory_id: number;
                /**
                 * 類別圖片url
                 */
                name: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "get@products": {
        body: null;
        query: {
            status ? : 1 | 0;
            hot ? : number;
            hotSort ? : number;
            new ? : number;
            sale ? : number;
            category ? : number;
            subcategory ? : number;
            childcategory ? : number;
            fourthcategory ? : number;
            fifthcategory ? : number;
            best ? : number;
            featured ? : number;
            trending ? : number;
            in ? : string;
            /**
             * @example apple
             */
            keyword ? : string;
            page ? : number;
            min_price ? : number;
            /**
             * @example 2000000
             */
            max_price ? : number;
            order_by ? : "updated_at" | "price";
            sort ? : "asc" | "desc";
        };
        response: {
            data: {
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     * @param {number} id - undefined
     */
    "get@products/:id": {
        body: null;
        query: null;
        response: {
            data: {
                images: string[];
                name: string;
                details: string;
                policy: string;
                sku: string;
                stock: number;
                /**
                 * true 表示有開啟多規格，反之則無
                 */
                specification_type: boolean;
                specification: {
                    size: string;
                    color: string;
                    size_qty: number;
                    size_price: number;
                    total_price: number;
                } [];
                id: number;
                brand_name: string;
                max_price: number;
                min_price: number;
                tags: string[];
                type: string;
                price: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得該產品的多個規格內容] - 取得該產品的多個規格內容
     * @param {number} id - undefined
     */
    "get@products/:id/skus": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                sku: string;
                size: string;
                price: number;
                color: string;
                stock: number;
                previous_price: number;
                discount: number;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得該產品的所有分類ID及名稱] - 取得該產品的所有分類ID及名稱
     * @param {number} id - undefined
     */
    "get@products/:id/categories": {
        body: null;
        query: null;
        response: {
            data: {
                category_id: number;
                category_name: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "get@products/search-tags": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                name: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
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
    "get@client": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                photo: string;
                name: string;
                email: string;
                fax: string;
                phone: string;
                country: number;
                state: number;
                zip: string;
                address: string;
                created_at: string;
                updated_at: string;
                balance: number;
                provider: string;
            };
        };
        contentType: null;
    };
    /**
     * [取得收藏商品] - 取得收藏商品
     */
    "get@client/wishlist": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                id: number;
                product_id: number;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
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
     * [no summary] - no description
     * @param {number} wishId - undefined
     */
    "delete@client/wishlist/:wishId": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * @example Deleted success!
                 */
                msg: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "get@client/orders": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                order_number: string;
                total_qty: string;
                pay_amount: number;
                currency_sign: string;
                currency_value: number;
                shipping_fee: number;
                status: string;
                payment_status: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     * @param {number} clientId - undefined
     */
    "post@client/:clientId/confirmDelete": {
        body: {
            /**
             * 確認是否刪除
             * @example DELETE
             */
            confirm: string;
        };
        query: null;
        response: {
            data: {
                /**
                 * @example 成功刪除！!
                 */
                msg: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "get@client/dashboard": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 錢包餘額
                 * @example 100
                 */
                balance: number;
                /**
                 * 會員獎勵點數
                 * @example 60
                 */
                reward: number;
                /**
                 * 二次行銷獎勵
                 * @example 150
                 */
                affilate_income: number;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "get@client/dashboard/orders": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 訂單編號
                 * @example 2CiO1662602659
                 */
                order_number: string;
                /**
                 * 訂單金額
                 * @example 140
                 */
                pay_amount: number;
                /**
                 * 訂單狀態
                 * @example pending
                 */
                status: string;
                /**
                 * 訂單付款狀態
                 * @example pending
                 */
                payment_status: string;
                /**
                 * 訂單成立時間
                 * @example 2022-09-08
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     */
    "get@client/dashboard/orders/pending": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 未付款訂單數量
                 * @example 2
                 */
                totalPending: number;
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
     * [取得使用者當前獎勵點數及最大可轉換金額以及轉換公式資訊] - 取得使用者當前獎勵點數及最大可轉換金額以及轉換公式資訊
     */
    "get@client/rewards": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 會員獎勵點數
                 * @example 1000
                 */
                user_reward_point: number;
                /**
                 * 轉換公式點數
                 * @example 20
                 */
                reward_point: number;
                /**
                 * 轉換公式金額
                 * @example 1
                 */
                reward_dollar: number;
                /**
                 * 最多可兌換的金額（會員獎勵點數＊上轉換公式）
                 * @example 50
                 */
                max_reward: number;
                /**
                 * 轉換公式 (轉換公式金額／轉換公式點數)
                 * @example 0.5
                 */
                reward_formula: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得使用者過往獎勵點數轉換紀錄] - 取得使用者過往獎勵點數轉換紀錄
     */
    "get@client/rewards/transactions": {
        body: null;
        query: {
            keyword ? : string;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 用來轉換的獎勵點數
                 */
                reward_point: number;
                /**
                 * 轉換後得到的金額
                 */
                reward_dollar: number;
                /**
                 * 轉換時間
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
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
                /**
                 * Success
                 */
                msg: string;
            };
        };
        contentType: null;
    };
    /**
     * [取得使用者當前的二次行銷獎金] - 取得使用者當前的二次行銷獎金
     */
    "get@client/affilate": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 會員二次行銷獎勵獎金
                 * @example 1000
                 */
                user_affilate_income: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得二次行銷獎金的相關條件] - 取得二次行銷獎金的相關條件
     */
    "get@client/affilate/affilate_info": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 提取固定手續費用
                 * @example 10
                 */
                fixed_commission: number;
                /**
                 * 提取百分比費用
                 * @example 5
                 */
                percentage_commission: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得二次行銷獎金計畫的敘述] - 取得二次行銷獎金計畫的敘述
     */
    "get@client/affilate/program": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 合作商鏈接
                 */
                user_affilate_link: string;
                /**
                 * 聯盟行銷橫額
                 */
                affilate_banner: string;
            };
        };
        contentType: null;
    };
    /**
     * [取得使用者的行銷紀錄] - 取得使用者的行銷紀錄
     */
    "get@client/affilate/affilate_list": {
        body: null;
        query: {
            keyword ? : string;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 下線
                 */
                username: string;
                /**
                 * 下線購買的商品
                 */
                item: string;
                /**
                 * 獎金
                 */
                affilate_income: number;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得使用者的提取紀錄] - 取得使用者的提取紀錄
     */
    "get@client/affilate/withdraw_list": {
        body: null;
        query: {
            keyword ? : string;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 銀行帳戶
                 */
                bank_account: string;
                /**
                 * 狀態
                 */
                status: string;
                /**
                 * 提出的金額（扣除手續費及相關費用）
                 */
                amount: number;
                /**
                 * 提取的日期
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
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
     * [取得使用者當前的錢包餘額] - 取得使用者當前的錢包餘額
     */
    "get@client/deposit": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 使用者當前的錢包餘額
                 * @example 60000
                 */
                deposits: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得使用者的錢包加值紀錄] - 取得使用者的錢包加值紀錄
     */
    "get@client/deposit/index": {
        body: null;
        query: {
            keyword ? : string;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 加值日期
                 * @example 2022-09-08
                 */
                date: string;
                /**
                 * 加值方法
                 * @example Paypal
                 */
                method: string;
                /**
                 * 狀態
                 * @example 1／0
                 */
                status: number;
                /**
                 * 加值金額
                 * @example 60
                 */
                amount: number;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得錢包的加值方式] - 取得錢包的加值方式
     */
    "get@client/deposit/create": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 加值方式的ID
                 * @example 2
                 */
                id: number;
                /**
                 * 加值方式
                 * @example Paypal
                 */
                method: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
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
     * [取得使用者所有錢包交易紀錄] - 取得使用者所有錢包交易紀錄
     */
    "get@client/deposit/transactions": {
        body: null;
        query: {
            keyword ? : string;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 交易紀錄的ID
                 * @example 18
                 */
                id: number;
                /**
                 * 交易結果的金額
                 * @example +HK$ 18
                 */
                amount: string;
                /**
                 * 屬於哪一種型式的交易紀錄
                 * @example 點數兌換／錢包付款／錢包加值
                 */
                type: string;
                /**
                 * 交易詳情
                 * @example Payment Deposit
                 */
                details: string;
                /**
                 * 交易日期
                 * @example 2022-09-08
                 */
                created_at: string;
                /**
                 * 交易ID（系統產生）
                 */
                txnid: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定錢包交易紀錄] - 取得特定錢包交易紀錄
     * @param {number} transactionId - undefined
     */
    "get@client/deposit/transactions/:transactionId": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 交易紀錄的ID
                 * @example 18
                 */
                id: number;
                /**
                 * 交易結果的金額
                 * @example +HK$ 18
                 */
                amount: string;
                /**
                 * 屬於哪一種型式的交易紀錄
                 * @example 點數兌換／錢包付款／錢包加值
                 */
                type: string;
                /**
                 * 交易詳情
                 * @example Payment Deposit
                 */
                details: string;
                /**
                 * 交易日期
                 * @example 2022-09-08
                 */
                created_at: string;
                /**
                 * 交易ID（系統產生）
                 */
                txnid: string;
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
     * [取得使用者所有傳給客服的訊息紀錄] - 取得使用者所有訊息紀錄
     */
    "get@client/admin/messages": {
        body: null;
        query: {
            keyword ? : string;
            page ? : number;
        };
        response: {
            data: {
                id: number;
                subject: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
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
     * [取得特定訊息紀錄] - 取得特定訊息紀錄
     * @param {number} messageId - undefined
     */
    "get@client/admin/messages/:messageId": {
        body: null;
        query: {
            page ? : number;
        };
        response: {
            data: {
                from: string;
                message: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
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
     * @param {number} messageId - undefined
     */
    "delete@client/admin/messages/:messageId": {
        body: null;
        query: null;
        response: {
            data: {
                code: string;
                message: string;
            };
        };
        contentType: null;
    };
    /**
     * [取得特定訊息標題跟時間] - 取得特定訊息標題跟時間
     * @param {number} messageId - undefined
     */
    "get@client/admin/messages/:messageId/title": {
        body: null;
        query: null;
        response: {
            data: {
                subject: string;
                created_at: string;
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
                /**
                 * 稅項
                 */
                tax: number;
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
     * [取得免運費資料] - 取得免運費資料
     */
    "get@cart/checkout-info": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 基礎運費
                 * @example 50
                 */
                shipping_fee: number;
                /**
                 * 免運費門檻
                 * @example 200
                 */
                shipping_free: number;
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
     */
    "get@orders/:orderNumber": {
        body: null;
        query: null;
        response: {
            data: {
                order_number: string;
                customer_name: string;
                customer_email: string;
                customer_phone: string;
                customer_address: string;
                customer_country: string;
                customer_state: string;
                shipping_name: string;
                shipping_email: string;
                shipping_phone: string;
                shipping_address: string;
                shipping: string;
                shipping_title: string;
                shipping_cost: number;
                shipping_fee: number;
                packing_title: string;
                packing_cost: number;
                pickup_location: string;
                pickup_cost: number;
                payment_method: string;
                deposits: number;
                coupon_code: string;
                coupon_discount: number;
                pay_amount: number;
                amount: number;
                currency_sign: string;
                currency_value: number;
                tax: number;
                status: string;
                payment_status: string;
                created_at: string;
            };
        };
        contentType: null;
    };
    /**
     * [no summary] - no description
     * @param {string} orderNumber - undefined
     */
    "get@orders/:orderNumber/products": {
        body: null;
        query: null;
        response: {
            data: {
                product_id: number;
                qty: number;
                sku: string;
                size: string;
                color: string;
                price: number;
                stock: number;
                photo: string;
                name: string;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
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
     * [取得自取點] - 取得特定國家下的自取點
     * @param {number} countryId - undefined
     */
    "get@pickups/:countryId": {
        body: null;
        query: {
            stateId ? : number;
            page ? : number;
        };
        response: {
            data: {
                /**
                 * 自取點ID
                 * @example 1
                 */
                id: number;
                /**
                 * 自取點位置
                 */
                location: string;
                /**
                 * 自取點詳細地址
                 */
                address: string;
                /**
                 * 自取點相關內容
                 */
                note: string;
                /**
                 * 自取點費用
                 * @example 10
                 */
                cost: number;
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
                links: {
                    url: string;
                    label: string;
                    active: boolean;
                } [];
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得該優惠卷] - 取得特定國家下的自取點
     * @param {string} couponCode - undefined
     */
    "get@coupons/price/:couponCode": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 優惠卷類別 (1表示現金折抵 0表示百分比折抵)
                 * @example 1
                 */
                type: number;
                /**
                 * 優惠卷折扣金額or百分比
                 */
                price: number;
            };
        };
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
    /**
     * [第三方註冊登入(facebook)] - 前端呼叫第三方登入進行驗證後交換token給前端
     */
    "get@auth/verify/facebook": {
        body: null;
        query: null;
        response: {
            data: {
                token: string;
            };
        };
        contentType: null;
    };
}