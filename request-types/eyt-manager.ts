/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=eyt-manager
 */
export type EytManagerDefinitions = {
    /**
     * [獲取 edm 列表] - no description
     */
    "get@admin/edms": {
        body: null;
        query: {
            page ? : number;
            perPage ? : number;
            keyword ? : string;
        };
        response: {
            msg: string;
            data: {
                id: number;
                subject: string;
                tags: number[];
                storeTypes: number[];
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [建立 edm] - no description
     */
    "post@admin/edms": {
        body: {
            /**
             * title
             * @example 郵件標題
             */
            subject: string;
            /**
             * 郵件內容
             * @example <p>郵件內容</p>
             */
            content: string;
            /**
             * 附註
             * @example 附註
             */
            memo: string | null;
            storeTypes: number[];
            tags: number[];
        };
        query: null;
        response: {
            id: number;
        };
        contentType: null;
    };
    /**
     * [獲取 edm 細節] - no description
     * @param {integer} id - edm id
     */
    "get@admin/edms/:id": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                subject: string;
                tags: number[];
                storeTypes: number[];
                content: string;
                memo: string;
            };
        };
        contentType: null;
    };
    /**
     * [更新 edm] - no description
     * @param {integer} id - edm id
     */
    "put@admin/edms/:id": {
        body: {
            /**
             * title
             * @example 郵件標題
             */
            subject: string;
            /**
             * 郵件內容
             * @example <p>郵件內容</p>
             */
            content: string;
            /**
             * 附註
             * @example 附註
             */
            memo: string | null;
            storeTypes: number[];
            tags: number[];
        };
        query: null;
        response: {};
        contentType: null;
    };
    /**
     * [刪除 edm] - no description
     * @param {integer} id - edm id
     */
    "delete@admin/edms/:id": {
        body: null;
        query: null;
        response: {};
        contentType: null;
    };
    /**
     * [獲取 edm project 列表] - no description
     * @param {integer} id - edm id
     */
    "get@admin/edms/:id/recommend-emails": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                emails: string[];
            };
        };
        contentType: null;
    };
    /**
     * [測試發送 edm] - no description
     */
    "post@admin/edm-test-send": {
        body: {
            /**
             * 主旨
             * @example 主旨
             */
            subject: string;
            /**
             * 內容
             * @example 內容
             */
            content: string;
            emails: string[];
        };
        query: null;
        response: {};
        contentType: null;
    };
    /**
     * [獲取 edm project 列表] - no description
     */
    "get@admin/edm-projects": {
        body: null;
        query: {
            page ? : number;
            perPage ? : number;
            keyword ? : string;
        };
        response: {
            msg: string;
            data: {
                name: string;
                sended: boolean;
                sendTime: string;
                sendCount: number;
                openCount: number;
                clickCount: number;
                id: number;
                edm: {
                    id: number;
                    subject: string;
                };
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [建立 edm project] - no description
     */
    "post@admin/edm-projects": {
        body: {
            /**
             * title
             * @example 1
             */
            edmId: number;
            /**
             * 名字
             * @example 新計劃
             */
            name: string;
            /**
             * 發送時間
             */
            sendTime: string | null;
            sendTo: string[];
        };
        query: null;
        response: {
            id: number;
        };
        contentType: null;
    };
    /**
     * [獲取 edm project 細節] - no description
     * @param {integer} id - edm project id
     */
    "get@admin/edm-projects/:id": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                name: string;
                sended: boolean;
                sendTime: string;
                sendCount: number;
                openCount: number;
                clickCount: number;
                id: number;
                edm: {
                    id: number;
                    subject: string;
                };
            };
        };
        contentType: null;
    };
    /**
     * [更新 edm project] - no description
     * @param {integer} id - project id
     */
    "put@admin/edm-projects/:id": {
        body: {
            /**
             * title
             * @example 1
             */
            edmId: number;
            /**
             * 名字
             * @example 新計劃
             */
            name: string;
            /**
             * 發送時間
             */
            sendTime: string | null;
            sendTo: string[];
        };
        query: null;
        response: {};
        contentType: null;
    };
    /**
     * [刪除 edm project] - no description
     * @param {integer} id - project id
     */
    "delete@admin/edm-projects/:id": {
        body: null;
        query: null;
        response: {};
        contentType: null;
    };
    /**
     * [更新 edm project] - no description
     * @param {integer} id - project id
     */
    "post@admin/edm-projects/:id/send": {
        body: null;
        query: null;
        response: {};
        contentType: null;
    };
    /**
     * [獲取 edm project 的 emails] - no description
     * @param {integer} id - project id
     */
    "get@admin/edm-projects/:id/emails": {
        body: null;
        query: null;
        response: {
            emails: string[];
        };
        contentType: null;
    };
    /**
     * [獲取儀表板訊息] - no description
     */
    "get@admin/dashboard": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                drugCount: number;
                drugExpiredCount: number;
                drugStoreEnabledCount: number;
                drugStoreDisabledCount: number;
                nondrugStoreEnabledCount: number;
                nondrugStoreDisabledCount: number;
                memberCount: number;
                memberDisabledCount: number;
                memberSubscribeCount: number;
                memberHasSubscribeCount: number;
                memberMaleCount: number;
                memberFemaleCount: number;
                memberLoginsCount: {
                    eyt: number;
                    sms: number;
                    google: number;
                    apple: number;
                    facebook: number;
                    wechat: number;
                };
                keywords: {
                    keyword: string;
                    searchCount: string;
                } [];
                drugCollectCount: number;
                postCollectCount: number;
                storeCollectCount: number;
                drugCollectOrders: {
                    productName: string;
                    permitNo: string;
                    collectCount: number;
                } [];
                storeCollectOrders: {
                    name: string;
                    uuid: string;
                    collectCount: number;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [獲取儀表板訊息] - no description
     */
    "get@admin/dashboard/visitors": {
        body: null;
        query: {
            month ? : string;
        };
        response: {
            msg: string;
            data: {
                items: {
                    date: string;
                    count: number;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [獲取過往訊息] - no description
     */
    "get@admin/fcm": {
        body: null;
        query: {
            pageSize ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                id: number;
                messageId: string;
                title: string;
                body: string;
                topic: string;
                createdAt: string;
                updatedAt: string;
                publishedAt: string;
                data: {};
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [發送訊息] - no description
     */
    "post@admin/fcm": {
        body: {
            /**
             * title
             */
            title: string;
            /**
             * body text
             */
            body: string;
            /**
             * target topic
             */
            topic: string;
            data: {};
            /**
             * 使否實質發出通知
             */
            dryRun: boolean;
        };
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [取得個人資訊] - no description
     */
    "get@users/me": {
        body: null;
        query: null;
        response: {
            id: number;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            createdAt: string;
            updatedAt: string;
            memo: string;
            startedAt: string;
            finishedAt: string;
            account: string;
            user_role: {
                id: number;
                name: string;
                allows: string;
                enabled: boolean;
            };
            store: {
                id: number;
                name: string;
                uuid: string;
                type: string;
                stockType: string;
                address: string;
                lat: number;
                lng: number;
                contactNumber: string;
                businessHours: string;
                isExcellent: boolean;
                isGenuine: boolean;
                website: string;
                collectCount: number;
                plan: {
                    email: string;
                    website: string;
                    whatsapp: string;
                    instagram: string;
                    messanger: string;
                    navigation: boolean;
                    contactNumber: string;
                    wechat: {
                        appId: string;
                        title: string;
                        qrcode: string;
                    };
                };
            };
            role: {
                id: number;
                name: string;
                type: string;
            };
        };
        contentType: null;
    };
    /**
     * [獲得 Role 列表] - no description
     */
    "get@admin/user-role-allows": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                allows: {
                    group: string;
                    groupName: string;
                    items: {
                        key: string;
                        name: string;
                    } [];
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [獲得 Role 列表] - no description
     */
    "get@admin/user-roles": {
        body: null;
        query: {
            keyword ? : string;
            pageSize ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                id: number;
                name: string;
                enabled: boolean;
                allows: string[];
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [建立 role] - no description
     */
    "post@admin/user-roles": {
        body: {
            /**
             * role name
             */
            name: string;
            /**
             * 是否啟用
             */
            enabled: boolean;
            allows: string[];
        };
        query: null;
        response: {
            data: {
                id: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲得 Role] - no description
     * @param {string} id - role id
     */
    "get@admin/user-roles/:id": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                name: string;
                enabled: boolean;
                allows: string[];
            };
        };
        contentType: null;
    };
    /**
     * [更新 role] - no description
     * @param {string} id - role id
     */
    "put@admin/user-roles/:id": {
        body: {
            /**
             * role name
             */
            name: string;
            /**
             * 是否啟用
             */
            enabled: boolean;
            allows: string[];
        };
        query: null;
        response: {};
        contentType: null;
    };
    /**
     * [獲取後台不同store列表下的員工管理列表] - no description
     */
    "get@admin/user-management/staffs": {
        body: null;
        query: {
            store ? : number;
            keyword ? : string;
            pageSize ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                account: string;
                username: string;
                id: number;
                store: {
                    id: number;
                    name: string;
                };
                user_role: {
                    id: number;
                    name: string;
                };
                department: {
                    id: number;
                    name: string;
                };
                role: {
                    id: number;
                    name: string;
                };
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [後台建立staff] - no description
     */
    "post@admin/user-management/staffs": {
        body: {
            /**
             * store id ，未帶參數時，預設登入者的 store.id，僅 role 為 superadmin ，該參數才生效
             * @example 1
             */
            store ? : number;
            /**
             * @example test0628
             */
            username: string;
            /**
             * @example 1
             */
            department ? : number;
            /**
             * @example 1
             */
            userRole ? : number;
            /**
             * @example 1
             */
            role: number;
            /**
             * 不可重複
             * @example test0666
             */
            account: string;
            /**
             * 密碼 至少6碼
             * @example 123456
             */
            password: string;
        };
        query: null;
        response: {
            msg: string;
            /**
             * @example 1
             */
            id: number;
        };
        contentType: null;
    };
    /**
     * [獲取特定的staff資料] - no description
     * @param {integer} id - staff的id
     */
    "get@admin/user-management/staffs/:id": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                account: string;
                username: string;
                id: number;
                store: {
                    id: number;
                    name: string;
                };
                department: {
                    id: number;
                    name: string;
                };
                user_role: {
                    id: number;
                    name: string;
                };
                role: {
                    id: number;
                    name: string;
                };
            };
        };
        contentType: null;
    };
    /**
     * [後台更新staff] - no description
     * @param {integer} id - staff的id
     */
    "put@admin/user-management/staffs/:id": {
        body: {
            /**
             * @example test0628
             */
            username: string;
            /**
             * @example test0628
             */
            account: string;
            /**
             * @example 1
             */
            store: number;
            /**
             * @example 1
             */
            userRole: number;
            /**
             * @example 1
             */
            department: number;
            /**
             * @example 1
             */
            role: number;
            /**
             * 新密碼 至少6碼
             * @example 123456
             */
            password: string | null;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台軟刪除staff] - no description
     * @param {integer} id - staff的id
     */
    "delete@admin/user-management/staffs/:id": {
        body: null;
        query: {
            store ? : number;
        };
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [員工資料輸出] - no description
     */
    "get@admin/download/user": {
        body: null;
        query: {
            type ? : "pdf" | "csv" | "xlsx";
        };
        response: {
            msg: string;
            data: {
                id: number;
                imgKey: string;
                /**
                 * 下載路徑
                 */
                url: string;
            };
        };
        contentType: null;
    };
    /**
     * [獲取可以選擇的role資料] - no description
     */
    "get@admin/roleList": {
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
     * [獲取role的列表] - no description
     */
    "get@admin/user-management/roles": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                name: string;
                status: boolean;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [後台建立role] - no description
     */
    "post@admin/user-management/roles": {
        body: {
            name: string;
            status: number;
            menu ? : number[];
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [獲取特定role的資料] - no description
     * @param {integer} id - role的id
     */
    "get@admin/user-management/roles/:id": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                name: string;
                status: boolean;
                menu: number[];
            };
        };
        contentType: null;
    };
    /**
     * [更新特定role的id] - no description
     * @param {integer} id - role的id
     */
    "put@admin/user-management/roles/:id": {
        body: {
            name: string;
            status: number;
            menu: number[];
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [軟刪除特定的role] - no description
     * @param {integer} id - role的id
     */
    "put@admin/user-management/roles/:id/delete": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [更新特定role的狀態（開啟或關閉）] - no description
     * @param {integer} id - role的id
     */
    "put@admin/user-management/roles/:id/status": {
        body: {
            status: number;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [上傳檔案] - no description
     */
    "post@upload": {
        body: {
            files: File;
        };
        query: null;
        response: {
            id: number;
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number;
            height: number;
            formats: {
                large: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
                small: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
                medium: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
                thumbnail: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: string | null;
            createdAt: string;
            updatedAt: string;
        } [];
        contentType: "multipart/form-data";
    };
    /**
     * [獲取後台文章列表及審核文章列表] - no description
     */
    "get@admin/posts": {
        body: null;
        query: {
            reviewStatus ? : "pending" | "reviewed" | "reviewArchived" | "reviewedWithRejected";
            listStatus ? : "listArchived" | "review" | "draft" | "rejected";
            keyword ? : string;
            firstCategory ? : string;
            secondCategory ? : string;
            startTime ? : string;
            endTime ? : string;
            type ? : string;
            pageSize ? : number;
            page ? : number;
            sort ? : {
                /**
                 * 排序時間
                 */
                date: "asc" | "desc";
            };
        };
        response: {
            msg: string;
            data: {
                uuid: string;
                title: string;
                type: {
                    id: number;
                    name: string;
                };
                categories: {
                    id: number;
                    name: string;
                } [];
                store: {
                    uuid: string;
                    name: string;
                };
                status: string;
                /**
                 * 編輯者
                 */
                editor: string;
                date: string;
                image: string;
                /**
                 * 文章退件原因
                 */
                reasonForReject: string;
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
     * [後台獲取指定文章] - no description
     * @param {string} uuid - 文章uuid
     */
    "get@admin/posts/:uuid": {
        body: null;
        query: null;
        response: {
            data: {
                contents: {
                    locale: string;
                    title: string;
                    uuid: string;
                    content: string;
                    seoDescription: string;
                    image: {
                        id: number;
                        url: string;
                    };
                } [];
                /**
                 * 立即 now, 預約reserve
                 */
                publishType: "now" | "reserve";
                publishStart: string;
                publishEnd: string;
                urlSuffix: string;
                store: number;
                editor: string;
                type: number;
                firstCategory: number;
                secondCategory: number;
                tags: number[];
                /**
                 * superAdmin的話不是pendingPublish就是draft,其他身份點擊儲存並審核則帶pendingReview,不然就是draft
                 */
                status: "pendingReview" | "draft";
                /**
                 * 最後編輯日期
                 */
                updatedAt: string;
            };
        };
        contentType: null;
    };
    /**
     * [確認特定屬性是否重複（當前僅用來確認urlSuffix)] - no description
     */
    "post@admin/checkDuplicates": {
        body: {
            /**
             * 後綴網址檢查
             */
            urlSuffix: string;
        };
        query: null;
        /**
         * true表示有重複，false則否
         */
        response: boolean;
        contentType: null;
    };
    /**
     * [獲取後台發布者id及name] - no description
     */
    "get@admin/posts/stores": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                name: string;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [後台建立文章] - no description
     */
    "post@admin/create/posts": {
        body: {
            contents: {
                locale: string;
                title: string;
                uuid: string;
                content: string;
                seoDescription: string;
                image: {
                    id: number;
                    url: string;
                };
            } [];
            urlSuffix: string;
            /**
             * 立即 now, 預約reserve
             */
            publishType: "now" | "reserve";
            publishStart: string;
            publishEnd ? : string;
            publisher ? : string;
            type: number;
            firstCategory: number;
            secondCategory ? : number;
            tags: number[];
            store ? : number;
            /**
             * superAdmin的話不是pendingPublish就是draft,其他身份點擊儲存並審核則帶pendingReview,不然就是draft
             */
            status: "pendingReview" | "draft";
            editor ? : string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台更新文章] - no description
     */
    "put@admin/update/posts": {
        body: {
            contents: {
                locale: string;
                title: string;
                uuid: string;
                content: string;
                seoDescription: string;
                image: {
                    id: number;
                    url: string;
                };
            } [];
            urlSuffix: string;
            /**
             * 立即 now, 預約reserve
             */
            publishType: "now" | "reserve";
            publishStart: string;
            publishEnd ? : string;
            publisher ? : string;
            type: number;
            firstCategory: number;
            secondCategory ? : number;
            tags: number[];
            store ? : number;
            /**
             * superAdmin的話不是pendingPublish就是draft,其他身份點擊儲存並審核則帶pendingReview,不然就是draft
             */
            status: "pendingReview" | "draft";
            editor ? : string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台刪除文章 （用put)] - no description
     * @param {string} uuid - 文章uuid
     */
    "put@admin/delete/posts/:uuid": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台審核文章] - no description
     */
    "put@admin/posts/review/reject": {
        body: {
            contents: {
                /**
                 * 文章語系
                 */
                locale: string;
                /**
                 * 退件原因
                 */
                reasonForReject: string;
                /**
                 * 文章uuid
                 */
                uuid: string;
            } [];
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台審核文章通過] - no description
     * @param {string} uuid - 文章uuid
     */
    "put@admin/posts/review/:uuid/approve": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台列表撤回文章] - no description
     * @param {string} uuid - 文章uuid
     */
    "put@admin/posts/:uuid/withdraw": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取得文章狀態變化的歷史資料] - no description
     * @param {string} uuid - 文章uuid
     */
    "get@admin/posts/:uuid/history": {
        body: null;
        query: {
            pageSize ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                status: string;
                username: string;
                createdAt: string;
                description: string;
                reasonForReject: string;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [藥房] - no description
     */
    "get@admin/search/stores": {
        body: null;
        query: {
            type ? : string;
            area ? : string;
            district ? : string;
            adType ? : string;
            stockType ? : string;
            status ? : string;
            keyword ? : string;
            perPage ? : number;
            page ? : number;
            group ? : string;
        };
        response: {
            msg: string;
            data: {
                uuid: string;
                imgUrl: string;
                name: string;
                area: string;
                district: string;
                address: string;
                type: string;
                adType: string;
                stockType: string;
                status: boolean;
                group: string;
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
     * [藥房] - no description
     * @param {string} uuid - 藥房唯一代碼
     */
    "get@admin/stores/detail/:uuid": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * store.id
                 */
                id: number;
                uuid: string;
                /**
                 * 狀態
                 * @example true
                 */
                status: boolean;
                stockType: string;
                type: string;
                rxNo: string;
                stockUrl: string;
                stockSyncParams: {
                    /**
                     * 庫存 erp 系統  location_id
                     * @example 1
                     */
                    location_id: number;
                };
                adType: string;
                tel: string;
                name: {
                    zh: string;
                    "zh-CN": string;
                    en: string;
                };
                address: {
                    zh: string;
                    "zh-CN": string;
                    en: string;
                };
                lat: number;
                lng: number;
                contactNumber: string;
                /**
                 * 國碼
                 * @example 886
                 */
                mobileCountryCode: string;
                businessHours: string;
                openingHours: {
                    /**
                     * 本日公休 isClosed=1 則 startTime 跟 endTime 輸出 00:00:00
                     * @example 1
                     */
                    isClosed: number;
                    /**
                     * isoWeekday 1-7， 週日為 7
                     * @example 1
                     */
                    weekday: number;
                    /**
                     * 營業時間
                     * @example 00:00:00
                     */
                    startTime: string;
                    /**
                     * @example 43200
                     */
                    endTime: string;
                } [];
                isExcellent: boolean;
                isGenuine: boolean;
                website: string;
                plan: {
                    /**
                     * @example nextgen@nextgen.com.hk
                     */
                    email: string;
                    /**
                     * @example NextgenTravelTechnology
                     */
                    messanger: string;
                    /**
                     * @example nextgentechco
                     */
                    instagram: string;
                    /**
                     * @example 85263111356
                     */
                    whatsapp: string;
                    wechat: {
                        /**
                         * @example 女生秘物網購
                         */
                        title: string;
                        /**
                         * @example girlssecrets_shop
                         */
                        appId: string;
                        /**
                         * @example https://s3.ap-southeast-1.amazonaws.com/medicine-s3.cloudsatlas.com.hk/qrcode_for_gh_1b9715c09cc3_1280_1_42ca67a97d.jpg
                         */
                        qrcode: string;
                    };
                };
                planType: string;
                content: {
                    zh: string;
                    "zh-CN": string;
                    en: string;
                };
                area: {
                    key: string;
                    name: string;
                };
                district: {
                    key: string;
                    name: string;
                };
                tags: {
                    id: number;
                    name: string;
                } [];
                mainServices: {
                    id: number;
                    name: string;
                } [];
                services: {
                    id: number;
                    name: string;
                } [];
                pharmacistGroup: {
                    /**
                     * 群組類型設定，id = label.id
                     * @example 1
                     */
                    id: number;
                    /**
                     * 群組名稱
                     * @example VIP
                     */
                    name: string;
                };
                images: {
                    id: number;
                    url: string;
                } [];
                priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
                /**
                 * 帳號人數上限
                 * @example 5
                 */
                userLimit: number;
            };
        };
        contentType: null;
    };
    /**
     * [取得登入群組的 stores] - no description
     */
    "get@admin/stores/me/group": {
        body: null;
        query: {
            type ? : string;
            area ? : string;
            district ? : string;
            adType ? : string;
            stockType ? : string;
            status ? : string;
            keyword ? : string;
            perPage ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                uuid: string;
                imgUrl: string;
                name: string;
                area: string;
                district: string;
                address: string;
                type: string;
                adType: string;
                stockType: string;
                status: boolean;
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
     * [取得登入藥房] - no description
     * @param {string} uuid - 藥房唯一代碼
     */
    "get@admin/stores/me": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                uuid: string;
                /**
                 * 狀態
                 * @example true
                 */
                status: boolean;
                stockType: string;
                type: string;
                rxNo: string;
                stockUrl: string;
                stockSyncParams: {
                    /**
                     * 庫存 erp 系統  location_id
                     * @example 1
                     */
                    location_id: number;
                };
                adType: string;
                tel: string;
                name: {
                    zh: string;
                    "zh-CN": string;
                    en: string;
                };
                address: {
                    zh: string;
                    "zh-CN": string;
                    en: string;
                };
                lat: number;
                lng: number;
                contactNumber: string;
                pharmacistGroup: {
                    /**
                     * 群組類型設定，id = label.id
                     * @example 1
                     */
                    id: number;
                    /**
                     * 群組名稱
                     * @example VIP
                     */
                    name: string;
                };
                /**
                 * 國碼
                 * @example 886
                 */
                mobileCountryCode: string;
                businessHours: string;
                openingHours: {
                    /**
                     * 本日公休 isClosed=1 則 startTime 跟 endTime 輸出 00:00:00
                     * @example 1
                     */
                    isClosed: number;
                    /**
                     * isoWeekday 1-7， 週日為 7
                     * @example 1
                     */
                    weekday: number;
                    /**
                     * 營業時間
                     * @example 00:00:00
                     */
                    startTime: string;
                    /**
                     * @example 43200
                     */
                    endTime: string;
                } [];
                isExcellent: boolean;
                isGenuine: boolean;
                website: string;
                plan: {
                    /**
                     * @example nextgen@nextgen.com.hk
                     */
                    email: string;
                    /**
                     * @example NextgenTravelTechnology
                     */
                    messanger: string;
                    /**
                     * @example nextgentechco
                     */
                    instagram: string;
                    /**
                     * @example 85263111356
                     */
                    whatsapp: string;
                    wechat: {
                        /**
                         * @example 女生秘物網購
                         */
                        title: string;
                        /**
                         * @example girlssecrets_shop
                         */
                        appId: string;
                        /**
                         * @example https://s3.ap-southeast-1.amazonaws.com/medicine-s3.cloudsatlas.com.hk/qrcode_for_gh_1b9715c09cc3_1280_1_42ca67a97d.jpg
                         */
                        qrcode: string;
                    };
                };
                planType: string;
                content: {
                    zh: string;
                    "zh-CN": string;
                    en: string;
                };
                area: {
                    key: string;
                    name: string;
                };
                district: {
                    key: string;
                    name: string;
                };
                tags: {
                    id: number;
                    name: string;
                } [];
                mainServices: {
                    id: number;
                    name: string;
                } [];
                services: {
                    id: number;
                    name: string;
                } [];
                images: {
                    id: number;
                    url: string;
                } [];
                priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
                /**
                 * 帳號人數上限
                 * @example 5
                 */
                userLimit: number;
            };
        };
        contentType: null;
    };
    /**
     * [修改 藥房] - no description
     * @param {string} uuid - 藥房唯一代碼
     */
    "post@admin/stores/:uuid": {
        body: {
            /**
             * 狀態
             * @example true
             */
            status: boolean;
            /**
             * 優先度，高的優先輸出
             */
            priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
            /**
             * 方案類型
             */
            planType: string;
            /**
             * 廣告類型
             */
            adType: string;
            /**
             * 庫存類型
             */
            stockType: string;
            /**
             * 庫存 api
             */
            stockUrl: string;
            stockSyncParams: {
                /**
                 * 庫存 erp 系統  location_id
                 * @example 1
                 */
                location_id: number;
            };
            /**
             * 聯絡電話
             * @example 1234567890
             */
            tel: string;
            /**
             * 類型
             */
            type: string;
            isExcellent: boolean;
            /**
             * @example true
             */
            isGenuine: boolean;
            /**
             * rxNo
             */
            rxNo: string;
            name: {
                /**
                 * @example 良躍社區藥房
                 */
                zh: string;
                /**
                 * @example 良跃社区药房
                 */
                "zh-CN": string;
                /**
                 * @example A-LIVELY COMMUNITY PHARMACY O/B ABERDEEN KAI-FONG WELFARE ASSOCIATION LIMITED
                 */
                en: string;
            };
            /**
             * 聯絡電話
             */
            contactNumber: string;
            /**
             * 國碼
             * @example 886
             */
            mobileCountryCode: string;
            address: {
                /**
                 * @example 安和路
                 */
                zh: string;
                /**
                 * @example 安和路
                 */
                "zh-CN": string;
                /**
                 * @example Anhe Road
                 */
                en: string;
            };
            /**
             * 緯度
             * @example 22.25193195
             */
            lat: number;
            /**
             * 經度
             * @example 114.13825551
             */
            lng: number;
            /**
             * 區域
             * @example HONG_KONG_ISLAND
             */
            area: string;
            /**
             * 行政區域
             * @example WAN_CHAI
             */
            district: string;
            /**
             * 營業時間
             */
            businessHours: string;
            openingHours: {
                /**
                 * 本日公休 isClosed=1 則 startTime 跟 endTime 輸出 00:00:00
                 * @example 1
                 */
                isClosed: number;
                /**
                 * isoWeekday 1-7， 週日為 7
                 * @example 1
                 */
                weekday: number;
                /**
                 * 營業時間
                 * @example 00:00:00
                 */
                startTime: string;
                /**
                 * @example 43200
                 */
                endTime: string;
            } [];
            /**
             * 網站
             */
            website: string;
            content: {
                zh: string;
                "zh-CN": string;
                en: string;
            };
            tags: number[];
            mainServices: number[];
            services: number[];
            images: number[];
            plan: {
                /**
                 * @example nextgen@nextgen.com.hk
                 */
                email: string;
                /**
                 * @example NextgenTravelTechnology
                 */
                messanger: string;
                /**
                 * @example nextgentechco
                 */
                instagram: string;
                /**
                 * @example 85263111356
                 */
                whatsapp: string;
                wechat: {
                    /**
                     * @example 女生秘物網購
                     */
                    title: string;
                    /**
                     * @example girlssecrets_shop
                     */
                    appId: string;
                    /**
                     * @example https://s3.ap-southeast-1.amazonaws.com/medicine-s3.cloudsatlas.com.hk/qrcode_for_gh_1b9715c09cc3_1280_1_42ca67a97d.jpg
                     */
                    qrcode: string;
                };
            };
            /**
             * 群組類型設定，id = label.id
             * @example 1
             */
            pharmacistGroup: number | null;
            /**
             * 帳號人數上限
             * @example 5
             */
            userLimit: number;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取得新藥房 uuid] - no description
     */
    "get@admin/stores/uuid": {
        body: null;
        query: null;
        response: {
            msg: string;
            /**
             * @example 0089adf3-187e-4882-b831-e5eb6612f587
             */
            data: string;
        };
        contentType: null;
    };
    /**
     * [新增 藥房] - no description
     * @param {string} uuid - 藥房唯一代碼
     */
    "post@admin/stores/:uuid/create": {
        body: {
            /**
             * 狀態
             * @example true
             */
            status: boolean;
            /**
             * 優先度，高的優先輸出
             */
            priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
            /**
             * 方案類型
             */
            planType: string;
            /**
             * 廣告類型
             */
            adType: string;
            /**
             * 庫存類型
             */
            stockType: string;
            /**
             * 庫存 api
             */
            stockUrl: string;
            stockSyncParams: {
                /**
                 * 庫存 erp 系統  location_id
                 * @example 1
                 */
                location_id: number;
            };
            /**
             * 聯絡電話
             * @example 1234567890
             */
            tel: string;
            /**
             * 類型
             */
            type: string;
            isExcellent: boolean;
            /**
             * @example true
             */
            isGenuine: boolean;
            /**
             * rxNo
             */
            rxNo: string;
            name: {
                /**
                 * @example 良躍社區藥房
                 */
                zh: string;
                /**
                 * @example 良跃社区药房
                 */
                "zh-CN": string;
                /**
                 * @example A-LIVELY COMMUNITY PHARMACY O/B ABERDEEN KAI-FONG WELFARE ASSOCIATION LIMITED
                 */
                en: string;
            };
            /**
             * 聯絡電話
             */
            contactNumber: string;
            /**
             * 國碼
             * @example 886
             */
            mobileCountryCode: string;
            address: {
                /**
                 * @example 安和路
                 */
                zh: string;
                /**
                 * @example 安和路
                 */
                "zh-CN": string;
                /**
                 * @example Anhe Road
                 */
                en: string;
            };
            /**
             * 緯度
             * @example 22.25193195
             */
            lat: number;
            /**
             * 經度
             * @example 114.13825551
             */
            lng: number;
            /**
             * 區域
             * @example HONG_KONG_ISLAND
             */
            area: string;
            /**
             * 行政區域
             * @example WAN_CHAI
             */
            district: string;
            /**
             * 營業時間
             */
            businessHours: string;
            openingHours: {
                /**
                 * 本日公休 isClosed=1 則 startTime 跟 endTime 輸出 00:00:00
                 * @example 1
                 */
                isClosed: number;
                /**
                 * isoWeekday 1-7， 週日為 7
                 * @example 1
                 */
                weekday: number;
                /**
                 * 營業時間
                 * @example 00:00:00
                 */
                startTime: string;
                /**
                 * @example 43200
                 */
                endTime: string;
            } [];
            /**
             * 網站
             */
            website: string;
            content: {
                zh: string;
                "zh-CN": string;
                en: string;
            };
            tags: number[];
            mainServices: number[];
            services: number[];
            images: number[];
            plan: {
                /**
                 * @example nextgen@nextgen.com.hk
                 */
                email: string;
                /**
                 * @example NextgenTravelTechnology
                 */
                messanger: string;
                /**
                 * @example nextgentechco
                 */
                instagram: string;
                /**
                 * @example 85263111356
                 */
                whatsapp: string;
                wechat: {
                    /**
                     * @example 女生秘物網購
                     */
                    title: string;
                    /**
                     * @example girlssecrets_shop
                     */
                    appId: string;
                    /**
                     * @example https://s3.ap-southeast-1.amazonaws.com/medicine-s3.cloudsatlas.com.hk/qrcode_for_gh_1b9715c09cc3_1280_1_42ca67a97d.jpg
                     */
                    qrcode: string;
                };
            };
            /**
             * 群組類型設定，id = label.id
             * @example 1
             */
            pharmacistGroup: number | null;
            /**
             * 帳號人數上限
             * @example 5
             */
            userLimit: number;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [藥房 類型] - no description
     */
    "get@admin/stores/options/types": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房 方案] - no description
     */
    "get@admin/stores/options/planTypes": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房廣告類型] - no description
     */
    "get@admin/stores/options/adTypes": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房庫存方案] - no description
     */
    "get@admin/stores/options/stockTypes": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房 Tags] - no description
     */
    "get@admin/stores/options/tags": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房 主要服務] - no description
     */
    "get@admin/stores/options/mainServices": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房 服務] - no description
     */
    "get@admin/stores/options/services": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房集團列表] - no description
     */
    "get@admin/stores/options/groups": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥品主成份列表] - no description
     */
    "get@admin/drugs/options/ingredients": {
        body: null;
        query: {
            /**
             * @example 阿斯匹林
             */
            keyword ? : string;
            perPage ? : number;
            page ? : number;
        };
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取的香港行政區域] - no description
     */
    "get@admin/stores/options/districts": {
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
     * [會員(藥房)資料輸出] - no description
     */
    "get@admin/download/store": {
        body: null;
        query: {
            type ? : "pdf" | "csv" | "xlsx";
        };
        response: {
            msg: string;
            data: {
                id: number;
                imgKey: string;
                /**
                 * 下載路徑
                 */
                url: string;
            };
        };
        contentType: null;
    };
    /**
     * [獲取後台 labels] - no description
     */
    "get@admin/search/labels": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                name: string;
                info: string;
                status: number;
                discountType: number;
                discountAmount: number;
                discountRate: number;
                createdName: string;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取後台 label 明細] - no description
     * @param {integer} id - label
     */
    "get@admin/labels/detail/:id": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                name: string;
                info: string;
                status: boolean;
                discountType: number;
                discountAmount: number;
                discountRate: number;
            };
        };
        contentType: null;
    };
    /**
     * [建立 label] - no description
     */
    "post@admin/labels/create": {
        body: {
            /**
             * label 名稱
             * @example 白金會員
             */
            name: string;
            /**
             * label 說明，非必填可以留空
             * @example 說明
             */
            info ? : string;
            /**
             * 狀態，0 :停用，1 :啟用
             * @example 1
             */
            status ? : 0 | 1;
            /**
             * 折扣類型 ， 0 :無折扣，1 :折抵金額， 2： 折抵金額
             */
            discountType ? : 0 | 1 | 2;
            /**
             * 折扣類型 為 1 時，該欄位不能為 0
             */
            discountAmount ? : number;
            /**
             * 折扣類型 為 2 時，該欄位不能為 0
             */
            discountRate ? : number;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [修改 label] - no description
     * @param {integer} id - label
     */
    "post@admin/labels/:id": {
        body: {
            /**
             * label 名稱
             * @example 白金會員
             */
            name: string;
            /**
             * label 說明，非必填可以留空
             * @example 說明
             */
            info ? : string;
            /**
             * 狀態，0 :停用，1 :啟用
             * @example 1
             */
            status ? : 0 | 1;
            /**
             * 折扣類型 ， 0 :無折扣，1 :折抵金額， 2： 折抵金額
             */
            discountType ? : 0 | 1 | 2;
            /**
             * 折扣類型 為 1 時，該欄位不能為 0
             */
            discountAmount ? : number;
            /**
             * 折扣類型 為 2 時，該欄位不能為 0
             */
            discountRate ? : number;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [獲取後台文章標籤] - no description
     */
    "get@admin/post-tags": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                tagName: string;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取後台文章類別] - no description
     */
    "get@admin/post-types": {
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
     * [獲取後台文章分類] - no description
     */
    "get@admin/post-categories": {
        body: null;
        query: {
            parentId ? : string;
        };
        response: {
            data: {
                id: number;
                name: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取得後台 tags 設定用的列表] - no description
     */
    "get@admin/tags/list": {
        body: null;
        query: {
            keyword ? : string;
            tagTypeId ? : number;
            page ? : number;
            perPage ? : number;
        };
        response: {
            msg: string;
            data: {
                id: number;
                /**
                 * 是否有被使用
                 */
                isUsed: boolean;
                tagType: {
                    id: number;
                    /**
                     * tag type 名稱, 會依照 user.locale 給出相對應 繁簡英 的值
                     */
                    name: string;
                };
                nameZh: string;
                nameZhCN: string;
                nameEn: string;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [下拉選單用的 tag type 列表] - no description
     */
    "get@admin/tags/type/list": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                /**
                 * tag type 名稱, 會依照 user.locale 給出相對應 繁簡英 的值
                 */
                name: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [建立 tag] - no description
     */
    "post@admin/tags/create": {
        body: {
            tagTypeId: number;
            nameZh: string;
            nameZhCN: string;
            nameEn: string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [修改 tag] - no description
     * @param {integer} id - tag id
     */
    "put@admin/tags/:tagId": {
        body: {
            tagTypeId: number;
            nameZh: string;
            nameZhCN: string;
            nameEn: string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [刪除 tag] - no description
     * @param {integer} id - tag id
     */
    "delete@admin/tags/:tagId": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [獲取後台藥品列表] - no description
     */
    "get@admin/drugs": {
        body: null;
        query: {
            /**
             * @example 3535
             */
            keyword ? : string;
            page ? : string;
            perPage ? : string;
            /**
             * @example 1 or 0
             */
            enable ? : string;
        };
        response: {
            msg: string;
            data: {
                id: number;
                permitNo: string;
                productName: string;
                productName_zh: string;
                enable: number;
                priority: number;
                ingredients: {
                    id: number;
                    name: string;
                } [];
                legalClassifications: {
                    id: number;
                    tagName: string;
                } [];
                saleRequirement: {
                    id: number;
                    tagName: string;
                };
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取後台藥品審核列表] - no description
     */
    "get@admin/drug-updates": {
        body: null;
        query: {
            /**
             * @example 3535
             */
            keyword ? : string;
        };
        response: {
            msg: string;
            data: {
                id: number;
                permitNo: string;
                productName: string;
                productName_zh: string;
                ingredients: {
                    id: number;
                    name: string;
                } [];
                legalClassifications: {
                    id: number;
                    tagName: string;
                } [];
                saleRequirement: {
                    id: number;
                    tagName: string;
                };
                count: number;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取後台藥品審核資料] - no description
     * @param {string} permitNo - 藥品唯一代碼
     */
    "get@admin/drug-updates/drugs/:permitNo": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                productName: string;
                permitNo: string;
                productName_zh: string;
                aka: string;
                indication: string;
                side_effect: string;
                registration_date: string;
                precaution: string;
                nonRegistrationDate: string;
                priority: number;
                enable: number;
                /**
                 * 收藏數
                 */
                collectCount: number;
                dosageForm: string;
                usage: string;
                images: {
                    id: number;
                    url: string;
                } [];
                id: number;
                drugUpdates: {
                    id: number;
                    aka: string | null;
                    brand: {
                        id: number;
                        tagName: string;
                    };
                    uuid: string;
                    createdAt: string;
                    status: string;
                    applyUser: {
                        id: number;
                        account: string;
                        store: {
                            id: number;
                            name: string;
                        };
                    };
                    usage: string;
                    images: {
                        id: number;
                        url: string;
                    } [];
                    packages: {
                        sku: string;
                        name: string;
                        unit: string;
                        dosage: number;
                        images: {
                            id: number;
                            url: string;
                        } [];
                    } [];
                    dosageForm: string;
                    indication: string;
                    precaution: string;
                    side_effect: string;
                    productName_zh: string;
                    legalClassifications: number[];
                } [];
                brand: {
                    id: number;
                    tagName: string;
                };
                ingredients: {
                    id: number;
                    name: string;
                } [];
                packages: {
                    id: number;
                    name: string;
                    sku: string;
                    unit: string;
                    images: {
                        id: number;
                        url: string;
                    } [];
                } [];
                saleRequirement: {
                    id: number;
                    tagName: string;
                };
                holder: {
                    id: number;
                    name: string;
                    address: string;
                };
                legalClassifications: {
                    id: number;
                    tagName: string;
                } [];
                historyRecords: {
                    id: number;
                    createdAt: string;
                    applyUser: {
                        id: number;
                        account: string;
                        store: {
                            id: number;
                            name: string;
                        };
                    };
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [獲取後台藥品品牌] - no description
     */
    "get@admin/drugs/options/brands": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
                /**
                 * tags table 的 id
                 * @example 1234
                 */
                id: number;
                tagName: {};
                /**
                 * icon class-name
                 */
                icon: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取得藥品分類（法定）] - no description
     */
    "get@admin/drugs/options/legalClassifications": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取得藥品分類] - no description
     */
    "get@admin/drugs/options/tags": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取後台藥品劑型列表] - no description
     */
    "get@admin/drugs/options/dosageForms": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取後台藥品使用方式列表] - no description
     */
    "get@admin/drugs/options/usages": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取後台藥品 包裝單位(package unit)列表] - no description
     */
    "get@admin/drugs/options/units": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥品異動] - no description
     * @param {string} permitNo - 藥品唯一代碼
     */
    "post@admin/drug/review/revise/:permitNo": {
        body: {
            /**
             * 別名
             */
            aka: string;
            /**
             * 啟用
             */
            enable: boolean;
            /**
             * 優先度
             */
            priority: number;
            /**
             * 適應症狀
             * @example 頭痛、發燒
             */
            indication: string;
            /**
             * 預防措施(注意事項)
             * @example 服用後建議不要開車
             */
            precaution: string;
            /**
             * 副作用
             * @example 注意力不集中
             */
            side_effect: string;
            /**
             * 俗名
             * @example 退燒藥
             */
            productName_zh: string;
            tags: number[];
            /**
             * 品牌 id
             * @example 1
             */
            brand: number;
            /**
             * 藥劑類型
             * @example tablet
             */
            dosageForm: string;
            /**
             * 藥品使用方式
             * @example oral
             */
            usage: string;
            images: number[];
            sku: string[];
            packageName: string[];
            dosage: number[];
            unit: string[];
            packageImages: number[][];
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [藥品異動] - no description
     * @param {string} permitNo - 藥品唯一代碼
     */
    "post@admin/drug/review/revise/:permitNo#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [藥品異動申請] - no description
     * @param {string} permitNo - 藥品唯一代碼
     */
    "post@admin/drug/review/apply/:permitNo": {
        body: {
            /**
             * 別名
             */
            aka: string;
            /**
             * 啟用
             */
            enable: boolean;
            /**
             * 優先度
             */
            priority: number;
            /**
             * 適應症狀
             * @example 頭痛、發燒
             */
            indication: string;
            /**
             * 預防措施(注意事項)
             * @example 服用後建議不要開車
             */
            precaution: string;
            /**
             * 副作用
             * @example 注意力不集中
             */
            side_effect: string;
            /**
             * 俗名
             * @example 退燒藥
             */
            productName_zh: string;
            tags: number[];
            /**
             * 品牌 id
             * @example 1
             */
            brand: number;
            /**
             * 藥劑類型
             * @example tablet
             */
            dosageForm: string;
            /**
             * 藥品使用方式
             * @example oral
             */
            usage: string;
            images: number[];
            sku: string[];
            packageName: string[];
            dosage: number[];
            unit: string[];
            packageImages: number[][];
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [藥品異動申請] - no description
     * @param {string} permitNo - 藥品唯一代碼
     */
    "post@admin/drug/review/apply/:permitNo#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [藥品異動審核] - no description
     * @param {string} uuid - 藥品異動申請 uuid
     */
    "post@admin/drug/review/approval/:uuid": {
        body: {
            /**
             * 審核狀態
             */
            status: "approval" | "cancel";
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [藥品異動審核] - no description
     * @param {string} uuid - 藥品異動申請 uuid
     */
    "post@admin/drug/review/approval/:uuid#application/x-www-form-urlencoded": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [獲取後台部門] - no description
     */
    "get@admin/departments": {
        body: null;
        query: {
            keyword ? : string;
            pageSize ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                id: number;
                name: string;
                description: string;
                status: number;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [後台建立部門] - no description
     */
    "post@admin/departments": {
        body: {
            status ? : number;
            name: string;
            description ? : string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台調整部門狀態] - no description
     * @param {string} id - 部門id
     */
    "put@admin/departments/:id/status": {
        body: {
            status: boolean;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台取得特定部門] - no description
     * @param {string} id - 部門id
     */
    "get@admin/departments/:id": {
        body: null;
        query: null;
        response: {
            data: {
                name: string;
                status: number;
                description: string;
            };
        };
        contentType: null;
    };
    /**
     * [後台更新部門] - no description
     * @param {string} id - 部門id
     */
    "put@admin/departments/:id": {
        body: {
            status ? : number;
            name: string;
            description ? : string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台軟刪除部門] - no description
     * @param {string} id - 部門id
     */
    "delete@admin/departments/:id": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取得後台 roles設定用的 menus] - no description
     */
    "get@admin/menus": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                key: string;
                name: string;
                parent: number;
            } [];
        };
        contentType: null;
    };
    /**
     * [取得後台 側邊欄 menus] - no description
     */
    "get@admin/sidebar/menus": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                key: string;
                enable: number;
                name: string;
                parent: number;
            } [];
        };
        contentType: null;
    };
    /**
     * [faq Tags] - no description
     */
    "get@admin/faq/options/tags": {
        body: null;
        query: {
            locale ? : "zh" | "en" | "zh-CN";
        };
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [get members] - no description
     */
    "get@admin/members": {
        body: null;
        query: {
            keyword ? : string;
            perPage ? : number;
            page ? : number;
            platforms ? : string[];
            gender ? : string[];
            bookmark ? : string[];
            device ? : string;
            startTime ? : string;
            endTime ? : string;
        };
        response: {
            msg: string;
            data: {
                uuid: string;
                name: string;
                email: string;
                gender: string;
                created: string;
                lastLoginAt: string;
                device: string;
                bookmark: {
                    posts: number;
                    stores: number;
                    drugs: number;
                };
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [創建新會員] - 用於創建新會員的 POST 請求
     */
    "post@admin/members": {
        body: {
            /**
             * 會員姓名
             */
            name: string;
            /**
             * 會員電子郵件地址
             */
            email: string;
            /**
             * 會員密碼
             */
            password: string;
        };
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [獲取會員信息] - 用於獲取特定會員信息的 GET 請求
     * @param {string} uuid - 會員的唯一識別符
     */
    "get@admin/members/:uuid": {
        body: null;
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
            data: {
                /**
                 * 會員 ID
                 */
                id: number;
                /**
                 * 會員姓名
                 */
                name: string;
                /**
                 * 會員頭像 URL
                 */
                avatar: string;
                /**
                 * 手機國家代碼
                 */
                mobileCountryCode: string;
                /**
                 * 手機號碼
                 */
                mobile: string;
                /**
                 * 會員電子郵件地址
                 */
                email: string;
                /**
                 * 傳真國家代碼
                 */
                faxCountryCode: string;
                /**
                 * 傳真號碼
                 */
                fax: string;
                /**
                 * 會員唯一識別符
                 */
                uuid: string;
                /**
                 * 會員性別
                 */
                gender: string;
                /**
                 * 會員創建日期
                 */
                createdAt: string;
                platforms: {
                    /**
                     * 平台 ID
                     */
                    id: number;
                    /**
                     * 平台名稱
                     */
                    platform: string;
                    /**
                     * 開放 ID
                     */
                    openId: string;
                    /**
                     * 平台關聯的電子郵件地址
                     */
                    email: string;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [刪除會員] - 用於刪除特定會員的 DELETE 請求
     * @param {string} uuid - 會員的唯一識別符
     */
    "delete@admin/members/:uuid": {
        body: null;
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [重設會員密碼] - 用於重設特定會員密碼的 PUT 請求
     * @param {string} uuid - 會員的唯一識別符
     */
    "put@admin/members/:uuid/reset-password": {
        body: {
            /**
             * 新的會員密碼
             */
            password: string;
        };
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [解綁會員登入帳號] - 用於解綁特定會員登入帳號的 PUT 請求
     * @param {string} login_id - 該平台 ID
     */
    "put@admin/members/login-unbind/:login_id": {
        body: null;
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [導出會員數據] - 用於導出會員數據的 GET 請求
     * @param {string} fileType - 導出文件的類型（例如，CSV、Excel等）
     */
    "get@admin/members/export/:fileType": {
        body: null;
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
            data: {
                /**
                 * 導出文件的 URL
                 */
                url: string;
            };
        };
        contentType: null;
    };
    /**
     * [獲取會員書籤內容] - 用於獲取特定會員書籤中的內容的 GET 請求
     * @param {string} uuid - 會員的唯一識別符
     * @param {string} type - 書籤類型（Post、Drug、Drugstore）
     */
    "get@admin/members/:uuid/bookmark/:type": {
        body: null;
        query: {
            page ? : number;
            perPage ? : number;
        };
        response: {
            /**
             * 回應消息
             */
            msg: string;
            data:
                |
                {
                    id ? : number;
                    title ? : string;
                    type ? : string;
                    sort ? : number;
                    viewCount ? : number;
                    isApproved ? : boolean;
                    isDeleted ? : boolean;
                    publishStart ? : string;
                    publishEnd ? : string | null;
                    content ? : string;
                    createdAt ? : string;
                    updatedAt ? : string;
                    locale ? : string;
                    collectCount ? : number;
                    status ? : string;
                    submission_date ? : string | null;
                    review_date ? : string;
                    archive_date ? : string | null;
                    seoDescription ? : string;
                    publishType ? : string;
                    urlSuffix ? : string;
                    uuid ? : string;
                    store ? : {
                        name ? : string;
                        uuid ? : string;
                    };
                } |
                {
                    aka ? : string;
                    collectCount ? : number;
                    createdAt ? : string;
                    dosageForm ? : string;
                    enable ? : number;
                    id ? : number;
                    indication ? : string;
                    legal_classification ? : string;
                    nonRegistrationDate ? : string;
                    permitNo ? : string;
                    precaution ? : string;
                    priority ? : number;
                    productName ? : string;
                    productName_zh ? : string;
                    regCertHolderAddress ? : string;
                    regCertHolderCountry ? : string;
                    regCertHolderName ? : string;
                    registration_date ? : string;
                    sale_requirement ? : string;
                    side_effect ? : string;
                    updatedAt ? : string;
                    usage ? : string;
                    ingredients ? : {
                        name ? : string;
                    } [];
                } |
                {
                    id ? : number;
                    uuid ? : string;
                    name ? : string;
                    address ? : string;
                    tel ? : string;
                    rxNo ? : string;
                    lat ? : number;
                    lng ? : number;
                    type ? : string;
                    planType ? : string;
                    isExcellent ? : boolean;
                    isGenuine ? : boolean;
                    businessHours ? : string;
                    contactNumber ? : string;
                    mobileCountryCode ? : string;
                    website ? : string;
                    plan ? : {
                        email ? : string;
                        wechat ? : {
                            appId ? : string;
                            title ? : string;
                            qrcode ? : string;
                        };
                        whatsapp ? : string;
                        instagram ? : string;
                        messanger ? : string;
                    };
                    collectCount ? : number;
                    stockType ? : string;
                    stockMode ? : string;
                    stockUrl ? : string;
                    stockSyncParams ? : {
                        location_id ? : number;
                    };
                    createdAt ? : string;
                    updatedAt ? : string;
                    publishedAt ? : string;
                    adType ? : string;
                    priority ? : number;
                    userLimit ? : number;
                    status ? : string;
                    startedAt ? : string;
                    finishedAt ? : string;
                };
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [建立 特定店舖-特定藥品 的 預設庫存紀錄] - 建立 特定店舖-特定藥品 的 預設庫存紀錄
     * @param {string} storeUuid - 特定店舖 的 唯一識別符
     * @param {string} permitNo - 藥品的香港識別碼
     */
    "post@admin/store-stock/:storeUuid/drug/:permitNo": {
        body: null;
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [刪除 特定店舖-特定藥品 的 庫存紀錄] - 刪除 特定店舖-特定藥品 的 庫存紀錄
     * @param {string} storeUuid - 特定店舖 的 唯一識別符
     * @param {string} permitNo - 藥品的香港識別碼
     */
    "delete@admin/store-stock/:storeUuid/drug/:permitNo": {
        body: null;
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取得特定藥房的藥品列表] - 取得特定藥房的藥品列表
     */
    "get@admin/store-stock/:storeUuid": {
        body: null;
        query: {
            keyword ? : string;
            perPage ? : number;
            page ? : number;
            brand ? : number;
            ingredients ? : number[];
            classification ? : number;
            registrationStartDate ? : string;
            registrationEndDate ? : string;
            nonRegistrationStartDate ? : string;
            nonRegistrationEndDate ? : string;
        };
        response: {
            msg: string;
            data: {
                /**
                 * 啟用庫存
                 */
                enabled: number;
                /**
                 * 核准字號
                 */
                permitNo: string;
                /**
                 * 品牌
                 */
                brand: string;
                /**
                 * 名稱
                 */
                productName_zh: string;
                /**
                 * 藥品學名
                 */
                productName: string;
                ingredients: string[];
                legalClassifications: string[];
                /**
                 * 證書持有人
                 */
                holder: string;
                /**
                 * 註冊開始日期
                 */
                registration_date: string;
                /**
                 * 註冊結束日期
                 */
                nonRegistrationDate: string;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [導出會員數據] - 用於導出 藥房庫存管理列表 數據的 GET 請求
     * @param {string} fileType - 導出文件的類型（例如，CSV、Excel等）
     */
    "get@admin/store-stock/export/:fileType": {
        body: null;
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
            data: {
                /**
                 * 導出文件的 URL
                 */
                url: string;
            };
        };
        contentType: null;
    };
    /**
     * [用於匯入 藥房庫存管理列表 數據的 GET 請求] - no description
     */
    "post@admin/store-stock/import": {
        body: {
            file: File;
        };
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
        };
        contentType: "multipart/form-data";
    };
    /**
     * [獲取後台藥品品牌] - no description
     */
    "get@admin/store-stock/options/brands": {
        body: null;
        query: {
            page ? : number;
            perPage ? : number;
        };
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
                /**
                 * tags table 的 id
                 * @example 1234
                 */
                id: number;
                tagName: {};
                /**
                 * icon class-name
                 */
                icon: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取 藥房關聯 的 "label" 清單] - no description
     */
    "get@admin/store-stock/label": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取後台廣告列表] - no description
     */
    "get@admin/ads/list": {
        body: null;
        query: {
            keyword ? : string;
            adTypes ? : ( |
                "home-page-pop-up" |
                "master-carousel-ad" |
                "horizontal-carousel-ad" |
                "vertical-carousel-ad" |
                "iframe-tag"
            )[];
            storeUuid ? : string;
            startTime ? : string;
            endTime ? : string;
            page ? : number;
            perPage ? : number;
        };
        response: {
            msg: string;
            data: {
                /**
                 * 廣告紀錄的 ID
                 * @example 1
                 */
                id: number;
                /**
                 * 啟用廣告
                 * @example true
                 */
                enabled: boolean;
                /**
                 * 管理介面廣告標題
                 * @example 管理介面廣告標題
                 */
                title: string;
                adType: {
                    /**
                     * 廣告類型
                     * @example home-page-pop-up
                     */
                    type: string;
                    /**
                     * 廣告類型顯示文字
                     * @example 首頁彈窗
                     */
                    name: string;
                };
                /**
                 * 優先順序, 數字越大越優先
                 * @example 1
                 */
                priority: number;
                store: {
                    /**
                     * 行銷客戶 ID
                     * @example 1
                     */
                    id: number;
                    /**
                     * 行銷客戶 uuid
                     * @example 1
                     */
                    uuid: string;
                    /**
                     * 行銷客戶名稱
                     * @example 行銷客戶名稱
                     */
                    name: string;
                };
                /**
                 * 開始時間 (開始當日的 00:00:00 在 UTC 的時間)
                 * @example 2023-08-31T16:00:00.000Z
                 */
                startTime: string;
                /**
                 * 結束時間 (結束當日的 23:59:59 在 UTC 的時間)
                 * @example 2023-09-30T15:59:59.000Z
                 */
                endTime: string;
                /**
                 * 是否可刪除 目前只有是 home-page-pop-up(首頁彈窗) 才會是 false
                 * @example true
                 */
                deletable: boolean;
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
            pagination: {
                /**
                 * @example 1
                 */
                page: number;
                /**
                 * @example 7
                 */
                pageSize: number;
                /**
                 * @example 10
                 */
                pageCount: number;
                /**
                 * @example 63
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取後台廣告類型列表] - no description
     */
    "get@admin/ads/type/list": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 廣告類型
                 * @example home-page-pop-up
                 */
                type: string;
                /**
                 * 廣告類型顯示文字
                 * @example 首頁彈窗
                 */
                name: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [建立新的廣告] - no description
     */
    "post@admin/ads/create": {
        body: {
            /**
             * 啟用廣告
             * @example true
             */
            enabled: boolean;
            /**
             * 管理介面廣告標題
             * @example 管理介面廣告標題
             */
            title: string;
            /**
             * 廣告類型 ("home-page-pop-up" 不能被新增)
             * @example master-carousel-ad
             */
            adType: "master-carousel-ad" | "horizontal-carousel-ad" | "vertical-carousel-ad" | "iframe-tag";
            /**
             * 優先順序, 數字越大越優先
             * @example 1
             */
            priority: number;
            /**
             * 行銷客戶 UUID
             * @example 1
             */
            storeUuid: string;
            /**
             * 開始時間 (開始當日的 00:00:00 在 UTC 的時間)
             * @example 2023-08-31T16:00:00.000Z
             */
            startTime: string;
            /**
             * 結束時間 (結束當日的 00:00:00 在 UTC 的時間, 後端會轉為 結束當日的 23:59:59 存入資料庫)
             * @example 2023-09-29T16:00:00.000Z
             */
            endTime: string;
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
             */
            iframeTag: string;
            /**
             * 彈窗標題
             */
            popupTitle: string;
            /**
             * 彈窗內容
             */
            popupContent: string;
        };
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [更新廣告] - no description
     * @param {string} adsType - 廣告類型
     * @param {integer} adsId - 廣告 ID
     */
    "put@admin/ads/:adsType/:adsId": {
        body: {
            /**
             * 啟用廣告
             * @example true
             */
            enabled: boolean;
            /**
             * 管理介面廣告標題
             * @example 管理介面廣告標題
             */
            title: string;
            /**
             * 優先順序, 數字越大越優先
             * @example 1
             */
            priority: number;
            /**
             * 行銷客戶 UUID
             * @example 1
             */
            storeUuid: string;
            /**
             * 開始時間 (開始當日的 00:00:00 在 UTC 的時間)
             * @example 2023-08-31T16:00:00.000Z
             */
            startTime: string;
            /**
             * 結束時間 (結束當日的 00:00:00 在 UTC 的時間, 後端會轉為 結束當日的 23:59:59 存入資料庫)
             * @example 2023-09-29T16:00:00.000Z
             */
            endTime: string;
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
             */
            iframeTag: string;
            /**
             * 彈窗標題
             */
            popupTitle: string;
            /**
             * 彈窗內容
             */
            popupContent: string;
        };
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [軟刪除廣告紀錄] - no description
     * @param {string} adsType - 廣告類型 (home-page-pop-up 不能被刪除)
     * @param {integer} adsId - 廣告 ID
     */
    "delete@admin/ads/:adsType/:adsId": {
        body: null;
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [更新廣告啟用狀態] - no description
     * @param {string} adType - 廣告類型 (home-page-pop-up 不能被禁用)
     * @param {integer} adId - 廣告 ID
     * @param {boolean} isEnabled - 是否啟用
     */
    "patch@admin/ads/:adType/:adId/enabled/:isEnabled": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 啟用廣告
                 * @example true
                 */
                enabled: boolean;
            };
        };
        contentType: null;
    };
    /**
     * [獲取後台廣告排程列表] - no description
     * @param {integer} year - 年份 (可用時間範圍: 2023-09 ~ 2037-12)
     *
     * @param {integer} month - 月份 (可用時間範圍: 2023-09 ~ 2037-12)
     *
     */
    "get@admin/ads/schedule/:year/:month": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 廣告紀錄的 ID
                 * @example 1
                 */
                id: number;
                /**
                 * 啟用廣告
                 * @example true
                 */
                enabled: boolean;
                /**
                 * 管理介面廣告標題
                 * @example 管理介面廣告標題
                 */
                title: string;
                adType: {
                    /**
                     * 廣告類型
                     * @example home-page-pop-up
                     */
                    type: string;
                    /**
                     * 廣告類型顯示文字
                     * @example 首頁彈窗
                     */
                    name: string;
                };
                /**
                 * 優先順序, 數字越大越優先
                 * @example 1
                 */
                priority: number;
                store: {
                    /**
                     * 行銷客戶 ID
                     * @example 1
                     */
                    id: number;
                    /**
                     * 行銷客戶名稱
                     * @example 行銷客戶名稱
                     */
                    name: string;
                };
                /**
                 * 開始時間 (開始當日的 00:00:00 在 UTC 的時間)
                 * @example 2023-08-31T16:00:00.000Z
                 */
                startTime: string;
                /**
                 * 結束時間 (結束當日的 23:59:59 在 UTC 的時間)
                 * @example 2023-09-30T15:59:59.000Z
                 */
                endTime: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [導出 廣告管理列表 數據] - 用於導出 廣告管理列表 數據的 GET 請求
     * @param {string} fileType - 導出文件的類型（例如，CSV、Excel等）
     */
    "get@admin/ads/export/:fileType": {
        body: null;
        query: null;
        response: {
            /**
             * 回應消息
             */
            msg: string;
            data: {
                /**
                 * 導出文件的 URL
                 */
                url: string;
            };
        };
        contentType: null;
    };
}