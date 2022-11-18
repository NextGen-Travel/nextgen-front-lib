/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=scrm
 */
export type ScrmDefinitions = {
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
             * @example 77046e51-fd54-4749-b3ac-68e8a37f5e86
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
     * [更新任一客服資料] - 更新任一客服資料
     */
    "put@admin/users/:id": {
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
             * 1為啟用  ０為停用
             * @example 1
             */
            confirmed: string;
            /**
             * 客服大頭貼
             */
            avatar: File;
        };
        query: null;
        response: {
            user: {
                id: number;
                username: string;
                email: string;
                provider: string;
                password: string;
                resetPasswordToken: string;
                confirmationToken: string;
                confirmed: boolean;
                blocked: boolean;
                displayName: string;
                createdAt: string;
                updatedAt: string;
                phone: string;
                notes: string;
                isDeleted: boolean;
                avatar: {
                    id: number;
                    url: string;
                };
            };
            msg: string;
        };
        contentType: "multipart/form-data";
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
        };
        query: null;
        response: {
            id: number;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            displayName: string;
            createdAt: string;
            updatedAt: string;
            phone: string;
            notes: string;
            isDeleted: boolean;
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
                username: string;
                email: string;
                provider: string;
                password: string;
                resetPasswordToken: string;
                confirmationToken: string;
                confirmed: boolean;
                blocked: boolean;
                displayName: string;
                createdAt: string;
                updatedAt: string;
                phone: string;
                notes: string;
                isDeleted: boolean;
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
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: "multipart/form-data";
    };
    /**
     * [刪除特定客服資料] - 刪除特定客服資料（管理者權限才可使用）
     * @param {number} id - undefined
     */
    "delete@users/:id": {
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
     * [查詢客服資料] - 查詢客服資料
     */
    "get@users/me": {
        body: null;
        query: null;
        response: {
            data: {
                data: {
                    displayName: string;
                    avatar: string;
                } [];
            };
        };
        contentType: null;
    };
}