/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=eyt-private
 */
export type EytPrivateDefinitions = {
    /**
     * [將行為記錄起來] - no description
     */
    "post@visitor/book": {
        body: {
            /**
             * 紀錄類型
             */
            type: "all" | "drug" | "drug_img" | "store" | "post" | "stock";
            /**
             * 關鍵字
             */
            keyword: string;
            options: {};
        };
        query: null;
        response: {};
        contentType: null;
    };
    /**
     * [拿會員中心顯示的個人資料] - no description
     * @param {string} uuid - member uuid
     */
    "get@members/:uuid": {
        body: null;
        query: null;
        response: {
            data: {
                msg: string;
                member: {
                    id: number;
                    createdAt: string;
                    name: string;
                    mobileCountryCode: string;
                    mobile: string;
                    email: string;
                    faxCountryCode: string;
                    fax: string;
                    uuid: string;
                    /**
                     * enum, [female, male, prefer not to say]
                     */
                    gender: string;
                };
            };
        };
        contentType: null;
    };
    /**
     * [修改會員資料] - no description
     * @param {string} uuid - member uuid
     */
    "put@members/:uuid": {
        body: {
            /**
             * name
             */
            name: string;
            /**
             * fax
             */
            fax: string;
            /**
             * fax
             */
            faxCountryCode: string;
            /**
             * enum, [female, male, prefer not to say]
             */
            gender: string;
        };
        query: null;
        response: {
            data: {
                msg: string;
                member: {
                    id: number;
                    createdAt: string;
                    name: string;
                    mobile: string;
                    email: string;
                    fax: string;
                    uuid: string;
                };
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [註銷會員] - no description
     * @param {string} uuid - member uuid
     */
    "delete@members/:uuid": {
        body: null;
        query: {
            confirm ? : string;
        };
        response: {
            data: {
                /**
                 * @example Success
                 */
                msg: string;
            };
        };
        contentType: null;
    };
    /**
     * [member 上傳頭像] - no description
     * @param {string} uuid - member uuid
     */
    "post@members/:uuid/avatar": {
        body: {
            avatar: File;
        };
        query: null;
        response: {
            msg: string;
            data: {
                avatar: {
                    id: number;
                    name: string;
                    alternativeText: string;
                    caption: string;
                    width: number;
                    height: number;
                    formats: string;
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
                };
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [移除 member 頭像] - no description
     * @param {string} uuid - member uuid
     */
    "delete@members/:uuid/avatar": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [refresh member] - no description
     */
    "get@members/me": {
        body: null;
        query: null;
        response: {
            data: {
                member: {
                    id: number;
                    uuid: string;
                    name: string;
                    email: string;
                    /**
                     * @example https://s3.ap-southeast-1.amazonaws.com/medicine-s3.cloudsatlas.com.hk/2023_05_10_4_24_27_175189b4cb.png
                     */
                    avatar: string;
                };
            };
        };
        contentType: null;
    };
    /**
     * [拿會員有連結的第三方登入資料] - no description
     * @param {string} uuid - member uuid
     */
    "get@members/:uuid/third-party-logins": {
        body: null;
        query: null;
        response: {
            data: {
                msg: string;
                thirdPartyLogins: {
                    id: number;
                    platform: string;
                    openId: string;
                    email: string;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [修改會員密碼] - no description
     * @param {string} uuid - member uuid
     */
    "put@members/:uuid/reset-password": {
        body: {
            /**
             * 舊密碼
             */
            oldPassword: string;
            /**
             * 新密碼
             */
            newPassword: string;
            /**
             * 確認新密碼，值要跟新密碼一樣
             */
            confirmNewPassword: string;
        };
        query: null;
        response: {
            data: {
                msg: string;
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [ig 的第三方登入 callback 打這支] - no description
     * @param {string} provider - 全小寫，完整名稱。
     * @param {string} action - 這次動作是 login 或 新增綁定
     * @param {string} from - web or app
     */
    "get@members/oauth/:provider/:action/:from": {
        body: {
            /**
             * wechat 要帶 code
             */
            code: string;
        };
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [EYT, SMS, apple, facebook, google, wechat 的第三方登入 callback 打這支] - no description
     * @param {string} provider - 全小寫，完整名稱。
     * @param {string} action - 這次動作是 login 或 新增綁定
     * @param {string} from - web or app
     */
    "post@members/oauth/:provider/:action/:from": {
        body: {
            /**
             * wechat 或 ios login 要帶 code
             */
            code: string;
            /**
             * apple, facebook, google 要帶 idToken
             */
            idToken: string;
            /**
             * 如果是新增 eyt 要帶
             */
            email: string;
            /**
             * 新增 eyt, sms 要帶
             */
            password: string;
            /**
             * 如果是新增 sms 要帶
             */
            mobile: string;
            /**
             * 如果是新增 sms 要帶
             */
            mobileCountryCode: string;
            /**
             * 如果是新增 sms 要帶
             */
            token: string;
        };
        query: null;
        response: {
            data: {
                action: string;
                msg: string;
                sessionId: string;
            };
        };
        contentType: null;
    };
    /**
     * [第三方綁定或登入] - 舊用戶第三方登入 or 新用戶第三方註冊 or 舊用戶綁定新的第三方(這個要帶 header) 三個都是打這支
     */
    "post@members/third-party-callback": {
        body: {
            /**
             * oauth 那支跟後端拿到的 sessionId
             */
            sessionId: string;
        };
        query: null;
        response: {
            data: {
                msg: string;
                jwt: string;
                member: {
                    id: number;
                    uuid: string;
                    name: string;
                    email: string;
                    avatar: string;
                };
                thirdPartyLogin: {
                    id: number;
                    platform: string;
                    openId: string;
                    email: string;
                };
            };
        };
        contentType: null;
    };
    /**
     * [刪除第三方綁定] - no description
     * @param {string} openId - openId
     */
    "delete@members/third-party-logins/:openId": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [會員搜尋記錄] - no description
     * @param {string} type - 記錄類型
     */
    "get@members/search/history/:type": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 唯一識別碼
                 * @example 68f2a709-e4cd-4f53-9936-dadcc02045c4
                 */
                uuid: string;
                /**
                 * 記錄類型
                 * @example drug
                 */
                type: string;
                /**
                 * 關鍵字
                 * @example 港九
                 */
                keyword: string;
                options: {
                    permitNo: string[];
                };
                /**
                 * 建立時間
                 * @example 2023-05-17T09:43:09.944Z
                 */
                createdAt: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [重複搜尋] - no description
     * @param {string} uuid - 記錄類型
     */
    "get@members/search/repeat/:uuid": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {} [];
        };
        contentType: null;
    };
    /**
     * [清空會員搜尋記錄] - no description
     * @param {string} type - 記錄類型
     */
    "delete@members/search/history/clear/:type": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [chatbot客服] - 回應內容靠 sse 回傳，網址：https://api-dev.e-drugsearch.com.hk/event.sse/:visitor_uuid
     */
    "post@members/chatbot/question": {
        body: {
            /**
             * 問題
             */
            message: string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [重置 chatbot客服 對話] - 重置 對話
     */
    "post@members/chatbot/question/refresh": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [收藏文章] - no description
     */
    "get@collect/posts": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                type: string;
                title: string;
                publishStart: string;
                viewCount: number;
                collectCount: number;
                image: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [收藏文章] - no description
     * @param {string} uuid - post uuid
     */
    "post@collect/posts/:uuid": {
        body: null;
        query: null;
        response: {
            /**
             * @example 收藏文章成功
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取消收藏文章] - no description
     * @param {string} uuid - post uuid
     */
    "put@cancel/posts/:uuid": {
        body: null;
        query: null;
        response: {
            /**
             * @example 取消收藏！
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [加入監聽] - no description
     */
    "post@member-fcm": {
        body: {
            /**
             * token
             */
            token: string;
        };
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [刪除監聽] - no description
     */
    "delete@member-fcm": {
        body: null;
        query: {
            token ? : string;
        };
        response: null;
        contentType: null;
    };
    /**
     * [建立tag] - no description
     */
    "post@add/tags": {
        body: {
            /**
             * 標籤的父層
             */
            parent ? : number;
            /**
             * 標籤名稱
             */
            tagName: string;
            /**
             * 該標籤是屬於分類還是一般標籤，default為 hashTag，分類則帶值categories
             * @example categories
             */
            type ? : string;
            /**
             * 文章語言，上面分別對應 繁體中文，英文，簡體中文
             */
            locale: "zh" | "en" | "zh-CN";
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                tagName: string;
                parent: {
                    /**
                     * 父層tag的名稱（只會有一個父層）
                     */
                    id: number;
                    /**
                     * 父層tag的名稱（只會有一個父層）
                     */
                    tagName: string;
                };
                children: {
                    /**
                     * 子層tag的名稱
                     */
                    id: number;
                    /**
                     * 子層tag的名稱
                     */
                    tagName: string;
                } [];
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [修改tag] - no description
     */
    "put@update/tags/:id": {
        body: {
            /**
             * 標籤的父層
             */
            parent: number;
            /**
             * 標籤名稱
             */
            tagName: string;
            /**
             * 該標籤是屬於分類還是一般標籤，default為 hashTag，分類則帶值categories
             * @example hashTag
             */
            type: number;
            /**
             * 文章語言，上面分別對應 繁體中文，英文，簡體中文
             */
            locale: "zh" | "en" | "zh-CN";
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                tagName: string;
                type: string;
                parent: {
                    id: number;
                    tagName: string;
                };
                children: {
                    id: number;
                    tagName: string;
                } [];
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [獲取該會員的訂閱相關資訊] - no description
     */
    "get@member/subscribe/list": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                emails: string[];
                isSubscribed: boolean;
                uuid: string;
                types: string[];
                tags: string[];
            };
        };
        contentType: null;
    };
    /**
     * [會員訂閱] - no description
     */
    "post@member/subscribe": {
        body: {
            /**
             * 訂閱的信箱
             */
            email: string;
            /**
             * 追蹤的來源
             * @example 1,2,3
             */
            types ? : string;
            /**
             * 追蹤的分類
             * @example 2,4,7
             */
            tags ? : string;
            /**
             * 是否開啟訂閱
             */
            isSubscribed ? : boolean;
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                emails: string[];
                isSubscribed: boolean;
                uuid: string;
                types: string[];
                tags: string[];
            };
        };
        contentType: null;
    };
    /**
     * [更新訂閱的選項] - no description
     * @param {string} uuid - 訂閱的uuid
     */
    "put@member/subscribe/:uuid": {
        body: {
            /**
             * 訂閱的信箱
             */
            email: string;
            /**
             * 追蹤的來源
             * @example 1,2,3
             */
            types: string;
            /**
             * 追蹤的分類
             * @example 2,4,7
             */
            tags: string;
            /**
             * 是否開啟訂閱
             */
            isSubscribed: boolean;
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                emails: string[];
                isSubscribed: boolean;
                uuid: string;
                types: number[];
                tags: number[];
            };
        };
        contentType: null;
    };
    /**
     * [收藏藥品] - no description
     */
    "get@collect/drugs": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                permitNo: string;
                name: string;
                nameZh: string;
                image: string;
                ingredients: string[];
            } [];
        };
        contentType: null;
    };
    /**
     * [收藏藥品] - no description
     * @param {string} permit_no - permit_no
     */
    "post@collect/drugs/:permit_no": {
        body: null;
        query: null;
        response: {
            /**
             * @example 收藏成功
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取消收藏] - no description
     * @param {string} permit_no - permit_no
     */
    "put@collect/drugs/:permit_no/cancel": {
        body: null;
        query: null;
        response: {
            /**
             * @example 取消收藏！
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [上傳藥品圖片] - no description
     */
    "post@search/drugs/uploadImages": {
        body: {
            image: File;
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                imgKey: string;
                url: string;
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [收藏藥房列表] - no description
     */
    "get@collect/stores": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                uuid: string;
                name: string;
                address: string;
                image: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [收藏藥房] - no description
     * @param {string} uuid - 藥房uuid
     */
    "post@collect/stores/:uuid": {
        body: null;
        query: null;
        response: {
            /**
             * @example 收藏成功
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取消收藏] - no description
     * @param {string} uuid - 藥房uuid
     */
    "put@collect/stores/:uuid/cancel": {
        body: null;
        query: null;
        response: {
            /**
             * @example 取消收藏！
             */
            msg: string;
        };
        contentType: null;
    };
}