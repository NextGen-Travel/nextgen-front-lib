/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=scrm-private
 */
export type ScrmPrivateDefinitions = {
    /**
     * [更新任一客服資料] - 更新任一客服資料
     * @param {number} id - undefined
     */
    "put@admin/users/:id": {
        body: {
            /**
             * 客服密碼
             * @example 123456789
             */
            password ? : string;
            /**
             * 客服密碼
             * @example 123456789
             */
            confirmPassword ? : string;
            /**
             * 客服前台顯示名稱
             * @example TJ
             */
            displayName ? : string;
            /**
             * 啟用 || 停用
             * @example 1
             */
            confirmed ? : boolean;
            /**
             * 客服大頭貼
             */
            avatar ? : File;
            /**
             * 電話
             * @example 123456789
             */
            phone ? : string;
            /**
             * 備註
             * @example test
             */
            notes ? : string;
            /**
             * 員工權限（ Manager || Advanced-Staff || Staff )
             * @example Manager
             */
            roleName ? : string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                email: string;
                displayName: string;
                username: string;
                confirmed: boolean;
                phone: string;
                notes: string;
                blocked: boolean;
                avatar: string;
                role: string;
                company: number;
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [刪除特定客服資料] - 刪除特定客服資料（管理者權限才可使用）
     * @param {number} id - undefined
     */
    "put@admin/delete/users/:id": {
        body: {
            /**
             * 刪除使用者需要輸入登入者的密碼驗證身份
             */
            password: string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [創建客服（管理者權限才可使用）] - 管理者創建新客服
     */
    "post@users": {
        body: {
            /**
             * 客服帳號名稱
             */
            username: string;
            /**
             * 客服信箱
             * @example 123@123.com
             */
            email: string;
            /**
             * 客服密碼
             * @example 123456789
             */
            password: string;
            /**
             * 客服密碼
             * @example 123456789
             */
            confirmPassword: string;
            /**
             * 客服前台顯示名稱
             * @example TJ
             */
            displayName ? : string;
            /**
             * 客服大頭貼
             */
            avatar ? : File;
            /**
             * 電話
             */
            phone ? : string;
            /**
             * 備註
             */
            notes ? : string;
            /**
             * 員工權限（ superadmin || seniorStaff || staff )
             * @example staff
             */
            role: string;
            /**
             * 隸屬公司ID(若沒帶則預設為登入者的公司ID, superadmin新建客服時必須要帶)
             * @example 5
             */
            companyId ? : number;
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                email: string;
                displayName: string;
                username: string;
                confirmed: boolean;
                phone: string;
                notes: string;
                blocked: boolean;
                avatar: string;
                role: string;
                company: number;
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [更新客服資料（登入者自己）] - 更新客服資料（登入者自己）
     */
    "put@users/:id": {
        body: {
            /**
             * 客服密碼
             * @example 123456789
             */
            password: string;
            /**
             * 客服密碼
             * @example 123456789
             */
            confirmPassword: string;
            /**
             * 客服前台顯示名稱
             * @example TJ
             */
            displayName: string;
            /**
             * 客服大頭貼
             */
            avatar: File;
            /**
             * 電話
             * @example 123456789
             */
            phone: string;
            /**
             * 備註
             * @example test
             */
            notes: string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                email: string;
                username: string;
                displayName: string;
                phone: string;
                notes: string;
                avatar: string;
                role: string;
            };
        };
        contentType: "multipart/form-data";
    };
    /**
     * [創建公司（superadmin權限才可使用）] - 創建公司（superadmin權限才可使用）
     */
    "post@companies": {
        body: {
            /**
             * 開啟與否(預設為false)
             */
            enable ? : boolean;
            /**
             * 創建公司名稱（唯一值）
             * @example nextgenTest
             */
            name: string;
            platform ? : {
                /**
                 * 社交平台名稱 (若有name則必須有account & channelId)
                 * @example whatsapp
                 */
                name: string;
                /**
                 * 該社交平台的帳號 (account 必須與 channelId同時存在)
                 * @example whatsappId123456
                 */
                account: string;
                /**
                 * @example test123-wafds-vv654
                 */
                channelId: string;
                /**
                 * @example true
                 */
                enable: boolean;
            } [];
            sso ? : {};
            /**
             * 建立客服的數量限制(預設是1)
             * @example 5
             */
            accountLimit ? : number;
        };
        query: null;
        response: {
            data: {
                id: number;
            };
            /**
             * @example 建立成功
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [更新公司（superadmin權限才可使用）] - 更新公司（superadmin權限才可使用）
     * @param {number} id - undefined
     */
    "put@companies/:id": {
        body: {
            /**
             * 開啟與否
             */
            enable: boolean;
            /**
             * 創建公司名稱（唯一值）
             * @example nextgenTest
             */
            name: string;
            platform: {
                /**
                 * 平台對應的ID
                 * @example 1
                 */
                id ? : number;
                /**
                 * 開啟的社交平台名稱 (若有name則必須有account & channelId)
                 * @example whatsapp
                 */
                name: string;
                /**
                 * 該社交平台的帳號 (account 必須與 channelId同時存在)
                 * @example whatsappId123456
                 */
                account: string;
                /**
                 * @example test123-wafds-vv654
                 */
                channelId: string;
                /**
                 * @example true
                 */
                enable: boolean;
            } [];
            sso: {
                /**
                 * @example R546asd-+qwew
                 */
                appId: string;
                /**
                 * @example as4d123xcv-as46gg
                 */
                secretKey: string;
                /**
                 * @example true
                 */
                enable: boolean;
            };
            /**
             * 建立客服的數量限制
             * @example 5
             */
            accountLimit: number;
        };
        query: null;
        response: {
            /**
             * @example 更新成功
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [刪除特定公司資料 （軟刪除）] - 刪除特定客服資料（superadmin權限才可使用）
     * @param {number} id - undefined
     */
    "put@companies/:id/delete": {
        body: {
            /**
             * 刪除使用者需要輸入登入者的密碼驗證身份
             */
            password: string;
        };
        query: null;
        response: {
            /**
             * @example 刪除成功！
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [創建公司時驗證appId取得secretKey及是否開啟sso(enable)client端] - 創建公司時驗證appId取得secretKey及是否開啟sso(enable)client端
     */
    "post@companies/sync": {
        body: {
            /**
             * 該公司appId
             */
            appId: string;
        };
        query: null;
        response: {
            data: {
                enable: boolean;
                secretKey: string;
            };
        };
        contentType: null;
    };
    /**
     * [供cas中控系統同步之api (server端)] - 供cas中控系統同步之api (server端)
     */
    "post@companies/sync/cas": {
        body: {
            /**
             * 加密過後的資料
             */
            code: string;
        };
        query: null;
        response: null;
        contentType: null;
    };
    /**
     * [儲存自動回覆] - 儲存自動回覆
     */
    "post@auto-replies": {
        body: {
            parent: number;
            keyword ? : string;
            replyText ? : string;
        };
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id: number;
                replyText: string;
                keyword: string;
                isEnd ? : boolean;
                isActive: boolean;
                children: {
                    id: number;
                    replyText: string;
                    keyword: string;
                    isEnd ? : boolean;
                    isActive: boolean;
                    children: {} [];
                } [];
            } [];
        };
        contentType: null;
    };
    /**
     * [編輯樹根或樹葉用的] - 編輯樹根或樹葉用的
     */
    "put@auto-replies/all": {
        body: {
            id: number;
            replyText: string;
            keyword: string;
        };
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id: number;
                replyText: string;
                keyword: string;
                isEnd ? : boolean;
                isActive: boolean;
                children: {
                    id: number;
                    replyText: string;
                    keyword: string;
                    isEnd ? : boolean;
                    isActive: boolean;
                    children: {} [];
                } [];
            } [][];
        };
        contentType: null;
    };
    /**
     * [更新歡迎訊息] - 取得歡迎訊息
     */
    "put@auto-reply/welcome": {
        body: {
            replyText: string;
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
     * [更新該樹節點是否啟用] - 更新該樹節點是否啟用
     * @param {string} id - undefined
     */
    "put@auto-replies/:id": {
        body: {
            isActive: boolean;
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
     * [新增群組名稱] - 新增群組名稱
     */
    "post@quick-replies/groups": {
        body: {
            group: string;
            children: {
                replyText: string;
            } [];
        };
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id ? : number;
                group: string;
                isActive: boolean;
                children: {
                    id ? : number;
                    replyText: string;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [更新該群組名稱底下快捷訊息] - 新增群組名稱
     * @param {number} groupId - undefined
     */
    "put@quick-replies/groups/:groupId": {
        body: {
            group: string;
            children: {
                replyText: string;
            } [];
        };
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id ? : number;
                group: string;
                isActive: boolean;
                children: {
                    id ? : number;
                    replyText: string;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [更新群組名稱是否啟用] - 更新群組名稱是否啟用
     * @param {number} id - undefined
     */
    "put@quick-replies/:id": {
        body: {
            isActive: boolean;
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
     * [新增範本] - 新增範本
     */
    "post@messagebird/templates": {
        body: {
            language: {};
            name: string;
            category: "OTP" | "TRANSACTIONAL" | "MARKETING";
            components: {
                type: "HEADER" | "BODY" | "FOOTER" | "BUTTONS";
                text: string;
                format ? : "TEXT" | "IMAGE" | "DOCUMENT" | "VIDEO" | null;
                example ? : {};
                buttons ? : {
                    type: "QUICK_REPLY" | "PHONE_NUMBER" | "URL";
                    text: string;
                    url ? : string | null;
                    phone_number ? : string | null;
                } [];
            } [];
        };
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id: string;
                name: string;
                language: {};
                status: "NEW" | "APPROVED" | "PENDING" | "REJECTED" | "PENDING_DELETION" | "DELETED";
                wabaId: string;
                namespace: string;
                components: {
                    type: "HEADER" | "BODY" | "FOOTER" | "BUTTONS";
                    text: string;
                    format ? : "TEXT" | "IMAGE" | "DOCUMENT" | "VIDEO" | null;
                    example ? : {};
                    buttons ? : {
                        type: "QUICK_REPLY" | "PHONE_NUMBER" | "URL";
                        text: string;
                        url ? : string | null;
                        phone_number ? : string | null;
                    } [];
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [傳送聊天訊息，包含錄音,圖片,文件,範本] - 儲存自動回覆
     * @param {string} customerUuid - undefined
     */
    "post@customers/:customerUuid/messages": {
        body: {
            userId: number;
            type: string;
            text: string;
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
     * [傳送聊天訊息，包含錄音,圖片,文件,範本] - 儲存自動回覆
     * @param {string} customerUuid - undefined
     */
    "post@customers/:customerUuid/messages#multipart/form-data": {
        body: {
            userId: number;
            /**
             * hsm是傳送範本類型的型態
             */
            type: "audio" | "image" | "file" | "text" | "hsm";
            text ? : ( |
                    string |
                    {
                        components ? : {
                            type: "HEADER" | "BODY" | "FOOTER" | "BUTTONS";
                            text: string;
                            format ? : "TEXT" | "IMAGE" | "DOCUMENT" | "VIDEO" | null;
                            example ? : ( |
                                    {
                                        header_url ? : string[];
                                    } |
                                    {
                                        body_text ? : string[][];
                                    } |
                                    string[]
                                ) &
                                ( |
                                    ( |
                                        {
                                            header_url ? : string[];
                                        } |
                                        {
                                            body_text ? : string[][];
                                        } |
                                        string[]
                                    ) |
                                    (null &
                                        ( |
                                            {
                                                header_url ? : string[];
                                            } |
                                            {
                                                body_text ? : string[][];
                                            } |
                                            string[]
                                        ))
                                );
                            buttons ? :
                                |
                                {
                                    type: "QUICK_REPLY" | "PHONE_NUMBER" | "URL";
                                    text: string;
                                    url ? : string | null;
                                    phone_number ? : string | null;
                                } [] |
                                null;
                        } [];
                    }
                ) &
                string;
            caption ? : string;
            /**
             * The file to be uploaded
             */
            files ? : File;
            templateName ? : string;
            languageCode ? : string;
            /**
             * 導購紀錄
             */
            isShoppingLink ? : boolean;
        };
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
        };
        contentType: "multipart/form-data";
    };
    /**
     * [更新全域標籤] - 更新全域標籤
     */
    "post@tags": {
        body: {
            tagName: string;
        };
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            id: number;
            tagName: string;
        };
        contentType: null;
    };
    /**
     * [群發] - 群發
     */
    "post@customers/messages": {
        body: {
            /**
             * @example customerUuid,customerUuid
             */
            customerUuid: string;
            userId: number;
            /**
             * 群發只會有text型態
             * @example text
             */
            type: string;
            text: string;
        };
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id: number;
                lastMsg: string;
                status: string;
                timestamp: string;
                unreadCount: number;
                customer: {
                    customerUuid: string;
                    id: number;
                    phone: string;
                    remark: string;
                };
            } [];
        };
        contentType: null;
    };
    /**
     * [更新置頂] - 更新置頂
     * @param {string} customerUuid - undefined
     */
    "put@customers/:customerUuid/pin": {
        body: {
            isPin: boolean;
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
     * [更新客人資訊] - 更新客人資訊
     * @param {string} customerUuid - undefined
     */
    "put@customers/:customerUuid": {
        body: {
            tags ? : number[];
            remark: string;
            /**
             * @example 6
             */
            colorCode: number;
        };
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id: number;
                lastMsg: string;
                status: string;
                timestamp: string;
                unreadCount: number;
                customer: {
                    customerUuid: string;
                    id: number;
                    phone: string;
                    remark: string;
                };
            } [];
        };
        contentType: null;
    };
    /**
     * [結束事件] - 結束事件
     */
    "put@customers/:customerUuid/process-status": {
        body: {
            /**
             * @example completed
             */
            status: string;
            msgId: number;
            questionType: number;
            others ? : string;
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
}