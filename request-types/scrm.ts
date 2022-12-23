/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=scrm
 */
export type ScrmDefinitions = {
    /**
     * [scrm系統登入] - scrm系統登入
     */
    "post@auth/login": {
        body: {
            /**
             * 登入account
             * @example jintian
             */
            username: string;
            /**
             * 登入密碼
             * @example 1234567890
             */
            password: string;
            /**
             * 屬於哪一間公司
             * @example 6f046e51-fd54-4749-b3ac-68e8a37f5e86
             */
            appId: string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                jwt: string;
                user: {
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
                platform: {
                    platform: string;
                    account: {};
                    enable: boolean;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [登入取得companies appId] - 登入取得companies appId
     */
    "post@auth/companies": {
        body: {
            /**
             * 登入account
             * @example jintian
             */
            username ? : string;
            /**
             * 登入密碼
             * @example 1234567890
             */
            password: string;
        };
        query: null;
        response: {
            data: string[];
        };
        contentType: null;
    };
    /**
     * [第三方註冊登入] - 前端提供token及provider供後端驗證確認後進行註冊並交換token給前端
     */
    "post@auth/sso/verify": {
        body: {
            /**
             * 從SSO系統拿到的token
             */
            accessToken ? : string;
            /**
             * 個別廠商的uuid
             * @example 6f046e51-fd54-4749-b3ac-68e8a37f5e86
             */
            appId: string;
        };
        query: null;
        response: {
            msg: string;
            data: {
                jwt: string;
                user: {
                    id: number;
                    displayName: string;
                    avatar: {
                        id: number;
                        url: string;
                    };
                    company: {
                        id: number;
                    };
                    role: {
                        type: string;
                    };
                };
            };
        };
        contentType: null;
    };
    /**
     * [忘記密碼] - 忘記密碼
     */
    "post@auth/forgot-password": {
        body: {
            /**
             * account
             */
            username: string;
            /**
             * email
             */
            email: string;
            /**
             * 個別廠商的uuid
             * @example 6f046e51-fd54-4749-b3ac-68e8a37f5e86
             */
            appId: string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [重設密碼] - 重設密碼
     */
    "post@auth/reset-password": {
        body: {
            /**
             * strapi產的code,接在url中的query
             */
            code: string;
            /**
             * 重設的密碼
             */
            password: string;
            /**
             * 重設密碼確認
             */
            passwordConfirmation: string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
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
            role ? : string;
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
     * [取得所有與登入者同company的客服資料] - 取得所有與登入者同company的客服資料
     */
    "get@users": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                id: number;
                username: string;
                displayName: string;
                avatar: string;
                /**
                 * true表示啟用反之為停用
                 */
                confirmed: boolean;
                role: string;
            } [];
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
     * [查詢特定客服資料] - 查詢特定客服資料
     * @param {number} id - undefined
     */
    "get@users/:id": {
        body: null;
        query: null;
        response: {
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
        contentType: null;
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
     * [查詢公司資料] - 查詢公司資料
     */
    "get@companies": {
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
     * [superadmin查詢所有公司資料] - superadmin查詢所有公司資料
     */
    "get@companies/list": {
        body: null;
        query: {
            enable ? : string;
            sso ? : string;
            offset ? : number;
            limit ? : number;
            platform ? : string;
            keyword ? : string;
        };
        response: {
            data: {
                /**
                 * 公司ID
                 */
                id: number;
                /**
                 * 公司名稱
                 */
                name: string;
                platform: string[];
                /**
                 * 當前已開啟的客服數量
                 */
                accountCount: number;
                /**
                 * 公司的客服開啟上限
                 */
                accountLimit: number;
                /**
                 * sso設定是否開啟
                 */
                sso: boolean;
                /**
                 * 公司狀態
                 */
                enable: boolean;
            } [];
            total: number;
        };
        contentType: null;
    };
    /**
     * [查詢特定公司資料] - 查詢特定公司資料
     * @param {number} id - undefined
     */
    "get@companies/:id": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                enable: boolean;
                name: string;
                accountLimit: number;
                sso: {
                    appId: string;
                    secretKey: string;
                    enable: boolean;
                };
                keys: {
                    id: number;
                    account: string;
                    platform: string;
                    channelId: string;
                    enable: boolean;
                } [];
            };
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
                id: number;
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
            sso: {};
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
     * [查詢特定公司底下所有使用者資料] - 查詢特定公司底下所有使用者資料
     * @param {number} id - undefined
     */
    "get@companies/:id/users": {
        body: null;
        query: {
            offset ? : number;
            limit ? : number;
        };
        response: {
            data: {
                id: number;
                username: string;
                displayName: string;
                phone: string;
                notes: string;
                avatar: string;
                role: string;
                enable: boolean;
            } [];
            total: number;
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
     * [創建公司時驗證appId取得secretKey及是否開啟sso(enable)] - 創建公司時驗證appId取得secretKey及是否開啟sso(enable)
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
}