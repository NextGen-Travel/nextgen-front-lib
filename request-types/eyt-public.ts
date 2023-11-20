/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=eyt-public
 */
export type EytPublicDefinitions = {
    /**
     * [後台使用者帳號登錄] - 後台使用者帳號登錄
     */
    "post@users-permissions/auth/login": {
        body: {
            /**
             * 帳號
             * @example dev
             */
            account: string;
            /**
             * 密碼
             * @example nextgen123
             */
            password: string;
        };
        query: null;
        response: {
            data: {
                jwt: string;
                user: {
                    id: number;
                    username: string;
                    email: string;
                    provider: string;
                    confirmed: boolean;
                    blocked: boolean;
                    createdAt: string;
                    updatedAt: string;
                    store: {
                        id: number;
                        uuid: string;
                        type: string;
                        name: string;
                        tel: string;
                        address: string;
                        district: string;
                        rxNo: string;
                        createdAt: string;
                        updatedAt: string;
                        publishedAt: string;
                    };
                };
            };
        };
        contentType: null;
    };
    /**
     * [取的訪問者 token] - 首次訪問，首次訪問該網站時呼叫，回傳的 data 用於記錄 訪客的 觀看紀錄
     * @param {string} mode - 訪客使用手機app或web
     */
    "get@visitor/token/:mode": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            /**
             * visitor token
             * @example false663c8908-c8f8-4ea2-8869-5b1f42819a51
             */
            data: string;
        };
        contentType: null;
    };
    /**
     * [記錄藥品查詢] - 取得藥品明細前需要先呼叫該api 用於統計
     * @param {string} permitNo - 藥品核准碼
     */
    "post@visitor/drug/:permit_no": {
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
     * [記錄藥房查詢] - 查詢藥房，取得藥房明細前需要先呼叫該api 用於統計
     * @param {string} uuid - 藥房唯一代碼
     */
    "post@visitor/store/:uuid": {
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
     * [記錄文章讀取] - 文章讀取，取得文章明細前需要先呼叫該api 用於統計
     * @param {string} uuid - 文章唯一代碼
     */
    "post@visitor/post/:uuid": {
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
     * [熱搜] - 取得 熱搜
     */
    "get@visitor/hot/search": {
        body: null;
        query: {
            perPage ? : number;
            type ? : "all" | "drug" | "store" | "post" | "stock";
        };
        response: {
            msg: string;
            data: string[];
        };
        contentType: null;
    };
    /**
     * [會員註冊 EYT 帳號] - 用 mobile/email 註冊，只能選一種不能同時存在
     */
    "post@members/register": {
        body: {
            /**
             * @example test
             */
            name: string;
            /**
             * @example test@123.com
             */
            email: string;
            /**
             * @example 只有數字，ex: 0912345678
             */
            mobile: string;
            /**
             * @example 只有數字，ex: 886
             */
            mobileCountryCode: string;
            /**
             * @example 手機註冊要加這個 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUwNjY3MDEsImV4cCI6MTY4NTA2NzYwMX0.4Bl2Yk36k2sizsYAwxjWI-pqnqwwJpFlvU2n_pnjmjA
             */
            token: string;
            /**
             * @example 123
             */
            password: string;
            /**
             * @example 123
             */
            confirmPassword: string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [會員登入 EYT email/mobile 註冊的帳號] - no description
     */
    "post@members/login": {
        body: {
            /**
             * @example test@123.com
             */
            email: string;
            /**
             * @example 123
             */
            password: string;
            /**
             * @example 只有數字，ex: 0919123456
             */
            mobile: string;
            /**
             * @example 只有數字，ex: 886
             */
            mobileCountryCode: string;
            /**
             * @example 手機的驗證碼登入 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUwNjY3MDEsImV4cCI6MTY4NTA2NzYwMX0.4Bl2Yk36k2sizsYAwxjWI-pqnqwwJpFlvU2n_pnjmjA
             */
            token: string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                jwt: string;
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
     * [取得微信的簽名] - no description
     */
    "get@wechatSignature": {
        body: null;
        query: {
            url ? : string;
        };
        response: {
            msg: string;
            data: {
                signature: string;
                nonceStr: string;
                timestamp: number;
                url: string;
                appId: string;
                ticket: string;
            };
        };
        contentType: null;
    };
    /**
     * [登入機器人驗證] - 登入前請先call此api，驗證通過後再call登入的api
     */
    "post@hcaptcha-verify": {
        body: string;
        query: null;
        response: {
            data: {
                msg: string;
            };
        };
        contentType: null;
    };
    /**
     * [忘記密碼/註冊帳號/手機登入 拿驗證碼] - 打這個 api 後，申請的信箱會收到一封驗證碼的信
     * @param {string} action - 用途，忘記密碼 forgot-password / 註冊 register / 手機登入 login
     */
    "post@verification-code/:action": {
        body: {
            /**
             * member 信箱
             * @example test@123.com
             */
            email: string;
            /**
             * @example 只有數字，ex: 0919123456
             */
            mobile: string;
            /**
             * @example 只有數字，ex: 886
             */
            mobileCountryCode: string;
        };
        query: null;
        response: {
            /**
             * @example Success.
             */
            msg: string;
            data: {
                /**
                 * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODQzOTExMjEsImV4cCI6MTY4NDM5MjAyMX0.eE00SIAyBBbWkIkSg6lklG-jwAveTnBGml6wCxTrxeE
                 */
                token: string;
                /**
                 * @example 12345
                 */
                verificationCode: string;
            };
        };
        contentType: null;
    };
    /**
     * [verify 驗證碼] - no description
     */
    "post@verification-code/verify": {
        body: {
            /**
             * 上一步拿到的 token
             * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODQzOTIxNDMsImV4cCI6MTY4NDM5MzA0M30.agDt9R_X33r4ryE-v3jXklHoqdg9tz2OzC08KSHyPEM
             */
            token: string;
            /**
             * 發到信箱的六碼驗證碼
             * @example 161321
             */
            verificationCode: string;
        };
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
     * [用 token 重設密碼] - no description
     */
    "post@verification-code/reset-password": {
        body: {
            /**
             * 上一步拿到的 token
             * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODQzOTIxNDMsImV4cCI6MTY4NDM5MzA0M30.agDt9R_X33r4ryE-v3jXklHoqdg9tz2OzC08KSHyPEM
             */
            token: string;
            newPassword: string;
            confirmNewPassword: string;
        };
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
     * [聯絡我們] - no description
     */
    "post@contact-uses/connect": {
        body: {
            /**
             * @example 小明
             */
            name: string;
            /**
             * @example 0912345678
             */
            phone: string;
            /**
             * @example nextgen@nextgen.com.hk
             */
            email: string;
            /**
             * @example 主旨
             */
            title: string;
            /**
             * @example 醫藥淘相關問題
             */
            type: string;
            /**
             * @example 訊息內容
             */
            content: string;
        };
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
     * [獲取文章列表] - no description
     */
    "get@all/posts": {
        body: null;
        query: {
            keyword ? : string;
            category ? : string;
            startTime ? : string;
            endTime ? : string;
            storeName ? : string;
            sort ? : "nameAsc" | "nameDesc" | "timeAsc" | "timeDesc" | "collectDesc" | "priorityDesc";
            perPage ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                /**
                 * 文章uuid
                 */
                uuid: string;
                /**
                 * 文章標題
                 */
                title: string;
                /**
                 * 文章內容
                 */
                content: string;
                type: {
                    id: number;
                    /**
                     * 分類的名稱
                     */
                    name: string;
                };
                /**
                 * 文章瀏覽數
                 */
                viewCount: number;
                store: {
                    /**
                     * 來源的uuid
                     */
                    uuid: string;
                    /**
                     * 文章來源
                     */
                    name: string;
                };
                tags: {
                    id: number;
                    /**
                     * 標籤名稱
                     */
                    name: string;
                } [];
                publishedAt: string;
                /**
                 * 收藏數
                 */
                collectCount: number;
            } [];
            pagination: {
                /**
                 * 當前頁面
                 */
                page: number;
                /**
                 * 每頁筆數
                 */
                pageSize: number;
                /**
                 * 總共頁數
                 */
                pageCount: number;
                /**
                 * 總共筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取指定文章] - no description
     * @param {string} uuid - 文章uuid
     */
    "get@all/posts/:uuid": {
        body: null;
        query: null;
        response: {
            msg: string;
            post: {
                /**
                 * 文章uuid
                 */
                uuid: string;
                /**
                 * 文章標題
                 */
                title: string;
                /**
                 * 文章內容
                 */
                content: string;
                store: {
                    /**
                     * 文章來源uuid
                     */
                    uuid: string;
                    /**
                     * 文章來源
                     */
                    name: string;
                };
                type: {
                    id: number;
                    /**
                     * 分類的名稱
                     */
                    name: string;
                };
                /**
                 * 文章瀏覽數
                 */
                viewCount: number;
                image: string;
                tags: {
                    id: number;
                    /**
                     * hashTag 名稱
                     */
                    name: string;
                } [];
                publishedAt: string;
                /**
                 * 文章收藏數
                 */
                collectCount: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取延伸閱讀文章 三篇] - no description
     * @param {string} uuid - 文章uuid
     */
    "get@all/posts/:uuid/extends": {
        body: null;
        query: {
            limit ? : number;
        };
        response: {
            msg: string;
            data: {
                /**
                 * 文章uuid
                 */
                uuid: string;
                title: string;
                content: string;
                type: {
                    id: number;
                    /**
                     * 分類的名稱
                     */
                    name: string;
                };
                viewCount: number;
                image: string;
                store: {
                    uuid: string;
                    name: string;
                };
                tags: {
                    id: number;
                    name: string;
                } [];
                publishedAt: string;
                collectCount: number;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取最新文章] - no description
     */
    "get@new/posts": {
        body: null;
        query: {
            limit ? : number;
        };
        response: {
            msg: string;
            data: {
                /**
                 * 文章uuid
                 */
                uuid: string;
                /**
                 * 文章標題
                 */
                title: string;
                /**
                 * 文章內容
                 */
                content: string;
                type: {
                    id: number;
                    /**
                     * 分類的名稱
                     */
                    name: string;
                };
                /**
                 * 文章瀏覽數
                 */
                viewCount: number;
                image: string;
                store: {
                    uuid: string;
                    /**
                     * 文章來源
                     */
                    name: string;
                };
                tags: {
                    id: number;
                    name: string;
                } [];
                publishedAt: string;
                /**
                 * 文章收藏數
                 */
                collectCount: number;
            } [];
        };
        contentType: null;
    };
    /**
     * [依照type撈取三篇最新的文章] - no description
     */
    "get@type/posts": {
        body: null;
        query: {
            limit ? : number;
            type ? : "latestNews" | "drugDonations" | "newDevelopmentsAboutMedicine" | "policyPromotion";
        };
        response: {
            msg: string;
            data: {
                /**
                 * 文章uuid
                 */
                uuid: string;
                /**
                 * 文章標題
                 */
                title: string;
                /**
                 * 文章內容
                 */
                content: string;
                type: {
                    id: number;
                    /**
                     * 分類的名稱
                     */
                    name: string;
                };
                /**
                 * 文章瀏覽數
                 */
                viewCount: number;
                image: string;
                store: {
                    uuid: string;
                    /**
                     * 文章來源
                     */
                    name: string;
                };
                tags: {
                    id: number;
                    name: string;
                } [];
                publishedAt: string;
                /**
                 * 文章收藏數
                 */
                collectCount: number;
            } [];
        };
        contentType: null;
    };
    /**
     * [搜尋具有特定tag的文章] - no description
     * @param {string} tagId - tag id
     */
    "get@posts/tag/:tagId": {
        body: null;
        query: {
            perPage ? : number;
            page ? : number;
            sort ? : "nameAsc" | "nameDesc" | "timeAsc" | "timeDesc" | "collectDesc" | "priorityDesc";
        };
        response: {
            msg: string;
            data: {
                /**
                 * 文章uuid
                 */
                uuid: string;
                /**
                 * 文章標題
                 */
                title: string;
                /**
                 * 文章內容
                 */
                content: string;
                type: {
                    id: number;
                    /**
                     * 分類的名稱
                     */
                    name: string;
                };
                /**
                 * 文章瀏覽數
                 */
                viewCount: number;
                store: {
                    uuid: string;
                    /**
                     * 文章來源
                     */
                    name: string;
                };
                tags: {
                    id: number;
                    /**
                     * 標籤名稱
                     */
                    name: string;
                } [];
                publishedAt: string;
                /**
                 * 收藏數
                 */
                collectCount: number;
            } [];
            pagination: {
                /**
                 * 當前頁面
                 */
                page: number;
                /**
                 * 每頁筆數
                 */
                pageSize: number;
                /**
                 * 總共頁數
                 */
                pageCount: number;
                /**
                 * 總共筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [根據store uuid 搜尋文章] - no description
     * @param {string} uuid - store uuid
     */
    "get@posts/store/:uuid": {
        body: null;
        query: {
            perPage ? : number;
            page ? : number;
            sort ? : "nameAsc" | "nameDesc" | "timeAsc" | "timeDesc" | "collectDesc" | "priorityDesc";
        };
        response: {
            msg: string;
            data: {
                /**
                 * 文章標題
                 */
                uuid: string;
                /**
                 * 文章標題
                 */
                title: string;
                /**
                 * 文章內容
                 */
                content: string;
                type: {
                    id: number;
                    /**
                     * 分類的名稱
                     */
                    name: string;
                };
                /**
                 * 文章瀏覽數
                 */
                viewCount: number;
                store: {
                    uuid: string;
                    /**
                     * 文章來源
                     */
                    name: string;
                };
                tags: {
                    id: number;
                    /**
                     * 標籤名稱
                     */
                    name: string;
                } [];
                publishedAt: string;
                /**
                 * 收藏數
                 */
                collectCount: number;
            } [];
            pagination: {
                /**
                 * 當前頁面
                 */
                page: number;
                /**
                 * 每頁筆數
                 */
                pageSize: number;
                /**
                 * 總共頁數
                 */
                pageCount: number;
                /**
                 * 總共筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取文章的分類麵包屑] - no description
     * @param {string} uuid - post uuid
     */
    "get@posts/:uuid/categories": {
        body: null;
        query: null;
        response: {
            id: number;
            name: string;
        } [];
        contentType: null;
    };
    /**
     * [獲取常見問題的文章] - no description
     */
    "get@faq": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                category: string;
                questions: {
                    uuid: string;
                    title: string;
                    content: string;
                    updatedAt: string;
                    source: {
                        /**
                         * 空字串則表示畫面不用顯示來源及更新日期
                         */
                        name: string;
                        /**
                         * 空字串則表示畫面不用顯示來源及更新日期
                         */
                        website: string;
                    };
                } [];
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取文章類別 id 及 name 及 typeName] - no description
     */
    "get@postTypes": {
        body: null;
        query: {
            type ? : "latestNews" | "drugDonations" | "newDevelopmentsAboutMedicine" | "policyPromotion";
        };
        response: {
            data: {
                id: number;
                name: string;
                typeName: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [上傳文章圖片] - no description
     */
    "post@posts/uploadImages": {
        body: {
            image: File;
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                url: string;
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [獲取商店的id及name] - no description
     */
    "get@stores/list": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                name: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取tags] - no description
     */
    "get@all/tags": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                name: string;
                /**
                 * 如果有上一層的標籤，則會給上一層標籤的id，不然會給空字串
                 */
                parent: string | number;
            } [];
        };
        contentType: null;
    };
    /**
     * [建立tag] - no description
     */
    "post@all/tags": {
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
     * [獲取tag] - no description
     * @param {string} id - tag id
     */
    "get@all/tags/:id": {
        body: null;
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
        contentType: null;
    };
    /**
     * [修改tag] - no description
     */
    "put@all/tags/:id": {
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
     * [獲取faq的category] - no description
     */
    "get@categories/faq": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                name: string;
                /**
                 * 暫時先開出來的欄位，不確定之後會不會用到
                 */
                parent_id: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取文章的categories] - no description
     */
    "get@categories/posts": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                name: string;
                /**
                 * 如果有上一層的標籤，則會給上一層標籤的id，不然會給空字串
                 */
                parent_id: string | number;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取訂閱的選項] - no description
     */
    "get@subscribe/list": {
        body: null;
        query: null;
        response: {
            types: {
                id: number;
                name: string;
            } [];
            tags: {
                id: number;
                locale: string;
                tagName: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [非會員訂閱] - no description
     */
    "post@general/subscribe": {
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
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取消訂閱（不論會員非會員）] - no description
     * @param {string} uuid - 訂閱的uuid
     */
    "post@subscribe/cancel/:uuid": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [持有人] - 取得持有人
     */
    "get@drugs/options/holders": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥品成分] - no description
     */
    "get@drugs/options/ingredients": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥品分類] - no description
     */
    "get@drugs/options/tags": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [銷售要求] - no description
     */
    "get@drugs/options/saleRequirements": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [品牌] - no description
     */
    "get@drugs/options/brands": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥品管制分類] - no description
     */
    "get@drugs/options/legalClassification": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥劑使用方式] - no description
     */
    "get@drugs/usages": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                key: string;
                value: string;
                name: string;
                nameEn: string;
                nameZh: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥劑類型] - no description
     */
    "get@drugs/dosageForms": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                key: string;
                value: string;
                name: string;
                nameEn: string;
                nameZh: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥劑單位] - no description
     */
    "get@drugs/dosageUnits": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                key: string;
                value: string;
                name: string;
                nameEn: string;
                nameZh: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥品名稱] - no description
     */
    "get@drugs/options/names": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥品搜尋] - no description
     */
    "get@search/drugs": {
        body: null;
        query: {
            ingredient ? : number;
            holder ? : number;
            tags ? : string;
            saleRequirement ? : string;
            legalClassification ? : number;
            brand ? : number;
            name ? : string;
            prefixName ? : string;
            permitNo ? : string;
            keyword ? : string;
            imgKey ? : string;
            sort ? : "nameAsc" | "nameDesc" | "collectDesc";
            perPage ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                permitNo: string;
                /**
                 * 顯示名稱
                 */
                name: string;
                /**
                 * 顯示名稱(中文)
                 */
                nameZh: string;
                /**
                 * 藥品圖示
                 */
                url: string;
                ingredients: string[];
            } [];
            pagination: {
                /**
                 * 起始頁數
                 * @example 1
                 */
                page: number;
                /**
                 * 每頁資料筆數
                 * @example 10
                 */
                pageSize: number;
                /**
                 * 總頁數
                 * @example 23
                 */
                pageCount: number;
                /**
                 * 總筆數
                 * @example 236
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [用 base64 搜尋藥品] - no description
     */
    "post@search/drugs-with-photo": {
        body: {
            image: string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                permitNo: string;
                /**
                 * 顯示名稱
                 */
                name: string;
                /**
                 * 顯示名稱(中文)
                 */
                nameZh: string;
                /**
                 * 藥品圖示
                 */
                url: string;
                ingredients: string[];
            } [];
            pagination: {
                /**
                 * 起始頁數
                 * @example 1
                 */
                page: number;
                /**
                 * 每頁資料筆數
                 * @example 10
                 */
                pageSize: number;
                /**
                 * 總頁數
                 * @example 23
                 */
                pageCount: number;
                /**
                 * 總筆數
                 * @example 236
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [藥品明細] - no description
     * @param {string} permitNo - 藥品核准碼
     */
    "get@drugs/detail/:permitNo": {
        body: null;
        query: {
            district ? : string[];
            area ? : string;
            lat ? : number;
            lng ? : number;
            storeCount ? : number;
            isRandom ? : number;
            similarCount ? : number;
            isStock ? : number;
        };
        response: {
            msg: string;
            data: {
                permitNo: string;
                precaution: string;
                indication: string;
                holder: {
                    name: string;
                    address: string;
                };
                name: string;
                nameZh: string;
                aka: string;
                dosageForm: string;
                usage: string;
                sideEffect: string;
                legalClassification: string;
                saleRequirement: string;
                registrationDate: string;
                nonRegistrationDate: string;
                ingredients: string[];
                tags: string[];
                brand: string;
                urls: string[];
                packages: {
                    id: number;
                    dosage: number;
                    usage: string;
                    unit: string;
                    sku: string;
                    createdAt: string;
                    updatedAt: string;
                    name: string;
                    dosageForm: string;
                    urls: string[];
                } [];
                similarDrug: {
                    /**
                     * 用來執行搜尋用的參數
                     */
                    permitNo: string;
                    /**
                     * 顯示名稱
                     */
                    name: string;
                    /**
                     * 顯示名稱(中文)
                     */
                    nameZh: string;
                    /**
                     * 藥品圖示
                     */
                    url: string;
                    ingredients: string[];
                } [];
                coordinate: {
                    lat: number;
                    lng: number;
                };
                stores: {
                    /**
                     * @example bb9ae68e-e856-41cf-85f6-72f7c7a3716e
                     */
                    uuid: string;
                    /**
                     * @example Nextgen
                     */
                    name: string;
                    /**
                     * @example Anhe Road, Daan District
                     */
                    address: string;
                    /**
                     * @example Daan District
                     */
                    district: string;
                    /**
                     * @example 121.5493852
                     */
                    lng: number;
                    /**
                     * @example 25.0260285
                     */
                    lat: number;
                    /**
                     * @example 25
                     */
                    distance: number;
                    /**
                     * @example 2323232
                     */
                    contactNumber: string;
                    /**
                     * @example 09:00 ~ 18:00
                     */
                    businessHours: string;
                    isExcellent: boolean;
                    /**
                     * @example true
                     */
                    isGenuine: boolean;
                    collectCount: number;
                    /**
                     * @example true
                     */
                    isExact: boolean;
                    /**
                     * @example lv1
                     */
                    stockType: string;
                    /**
                     * @example 2
                     */
                    drugCount: number;
                    drugs: {
                        /**
                         * @example HK-05357
                         */
                        permitNo: string;
                        /**
                         * @example ROCALTROL CAP 0.25UG
                         */
                        name: string;
                    } [];
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [庫存類型] - no description
     */
    "get@stores/options/stockTypes": {
        body: null;
        query: {
            locale ? : "zh" | "en" | "zh-CN";
        };
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [主要服務類型] - no description
     */
    "get@stores/options/mainServices": {
        body: null;
        query: {
            locale ? : "zh" | "en" | "zh-CN";
        };
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [服務類型] - no description
     */
    "get@stores/options/services": {
        body: null;
        query: {
            locale ? : "zh" | "en" | "zh-CN";
        };
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [服務類型] - no description
     */
    "get@stores/options/tags": {
        body: null;
        query: {
            locale ? : "zh" | "en" | "zh-CN";
        };
        response: {
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 */
                key: number;
                /**
                 * 顯示名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取的香港行政區域] - no description
     */
    "get@stores/options/districts": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 行政區域代碼
                 */
                key: string;
                /**
                 * 行政區域 名稱
                 */
                value: string;
                /**
                 * 區域代碼
                 */
                areaKey: string;
                /**
                 * 區域名稱
                 */
                area: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房] - no description
     */
    "get@search/stores": {
        body: null;
        query: {
            isPriority ? : 0 | 1;
            isGenuine ? : string;
            isExcellent ? : string;
            tags ? : string;
            mainServices ? : string;
            services ? : number;
            stockType ? : string[];
            area ? : string;
            district ? : string;
            keyword ? : string;
            sort ? : "nameAsc" | "nameDesc" | "collectDesc";
            perPage ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                uuid: string;
                stockType: string;
                nameEn: string;
                name: string;
                address: string;
                lat: number;
                lng: number;
                contactNumber: string;
                businessHours: string;
                isExcellent: boolean;
                isGenuine: boolean;
                website: string;
                plan: {
                    wechat: boolean;
                    website: boolean;
                    facebook: boolean;
                    whatsapp: boolean;
                    instagram: boolean;
                    navigation: boolean;
                    contactNumber: boolean;
                };
                districtKey: string;
                areaKey: string;
                district: string;
                area: string;
                collectCount: number;
                tags: string[];
                tagKey: number[];
                mobileCountryCode: string;
                mainServices: string[];
                mainServiceKey: number[];
                mainServiceIcon: {
                    key: number;
                    name: string;
                    icon: string;
                } [];
                imgUrl: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房] - no description
     * @param {string} uuid - 藥房唯一代碼
     */
    "get@stores/detail/:uuid": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                uuid: string;
                stockType: string;
                nameEn: string;
                name: string;
                address: string;
                lat: number;
                lng: number;
                contactNumber: string;
                businessHours: string;
                isExcellent: boolean;
                isGenuine: boolean;
                website: string;
                content: string;
                mobileCountryCode: string;
                plan: {
                    /**
                     * 當值是 false 代表沒使用
                     */
                    wechat:
                        |
                        boolean |
                        {
                            appId ? : string;
                            title ? : string;
                            qrcode ? : string;
                        };
                    /**
                     * 當值是 false 代表沒使用
                     */
                    messanger: boolean | string;
                    /**
                     * 當值是 false 代表沒使用
                     */
                    whatsapp: boolean | string;
                    /**
                     * 當值是 false 代表沒使用
                     */
                    instagram: boolean | string;
                    /**
                     * 當值是 false 代表沒使用
                     */
                    email: boolean | string;
                    /**
                     * 當值是 false 代表不顯示，實際值參照本身回傳的 website
                     */
                    website: boolean;
                    /**
                     * 當值是 false 代表不顯示
                     */
                    navigation: boolean;
                    /**
                     * 當值是 false 代表不顯示，實際值參照本身回傳的 contactNumber
                     */
                    contactNumber: boolean;
                };
                district: string;
                area: string;
                collectCount: number;
                imgUrls: string[];
                tags: string[];
                tagKey: number[];
                mainServiceIcon: {
                    key: number;
                    name: string;
                    icon: string;
                } [];
                mainServices: string[];
                mainServiceKey: number[];
                services: string[];
                serviceKey: number[];
            };
            pagination: {
                /**
                 * 起始頁數
                 */
                page: number;
                /**
                 * 每頁資料筆數
                 */
                pageSize: number;
                /**
                 * 總頁數
                 */
                pageCount: number;
                /**
                 * 總筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [哪裡買藥] - no description
     */
    "get@stores/medicines": {
        body: null;
        query: {
            isExact ? : 0 | 1;
            stockType ? : string[];
            permitNo ? : string[];
            district ? : string[];
            area ? : string;
            lat ? : number;
            lng ? : number;
        };
        response: {
            msg: string;
            coordinate: {
                lat: number;
                lng: number;
            };
            data: {
                /**
                 * @example bb9ae68e-e856-41cf-85f6-72f7c7a3716e
                 */
                uuid: string;
                /**
                 * @example Nextgen
                 */
                name: string;
                /**
                 * @example Anhe Road, Daan District
                 */
                address: string;
                /**
                 * @example Daan District
                 */
                district: string;
                /**
                 * @example 121.5493852
                 */
                lng: number;
                /**
                 * @example 25.0260285
                 */
                lat: number;
                /**
                 * @example 25
                 */
                distance: number;
                /**
                 * @example 2323232
                 */
                contactNumber: string;
                /**
                 * @example 09:00 ~ 18:00
                 */
                businessHours: string;
                isExcellent: boolean;
                /**
                 * @example true
                 */
                isGenuine: boolean;
                collectCount: number;
                /**
                 * @example true
                 */
                isExact: boolean;
                /**
                 * @example lv1
                 */
                stockType: string;
                /**
                 * @example 2
                 */
                drugCount: number;
                drugs: {
                    /**
                     * @example HK-05357
                     */
                    permitNo: string;
                    /**
                     * @example ROCALTROL CAP 0.25UG
                     */
                    name: string;
                } [];
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取 本檔次 要顯示的廣告列表] - no description
     */
    "get@ads/list": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 廣告類型
                 * @example home-page-pop-up
                 */
                adType: string;
                /**
                 * 優先順序, 數字越大越優先
                 * @example 1
                 */
                priority: number;
                /**
                 * 網頁版圖片
                 * @example https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
                 */
                webImg: string;
                /**
                 * 行動版圖片
                 * @example https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
                 */
                appImg: string;
                /**
                 * 目標網址
                 * @example https://www.google.com.tw/
                 */
                targetUrl: string;
                /**
                 * iframe tag
                 * @example <iframe src="https://www.google.com.tw/" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
                 */
                iframeTag: string;
                /**
                 * 彈窗標題
                 * @example 彈窗標題
                 */
                popupTitle: string;
                /**
                 * 彈窗內容
                 * @example 彈窗內容
                 */
                popupContent: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [地址轉座標] - no description
     */
    "get@other/coordinates": {
        body: null;
        query: {
            address ? : string;
        };
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * @example 106台北市大安區安和路二段211號
                 */
                old: string;
                /**
                 * @example No. 211, Section 2, Anhe Rd, Da’an District, Taipei City, Taiwan 106
                 */
                address_en: string;
                /**
                 * @example 25.0260285
                 */
                lat: number;
                /**
                 * @example 121.5504914
                 */
                lng: number;
            };
        };
        contentType: null;
    };
}