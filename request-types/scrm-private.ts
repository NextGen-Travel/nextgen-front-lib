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
             * 員工權限（ admin-> 管理員 | supervisor-> 主管 | seniorStaff-> seniorStaff | staff-> 一般員工 )
             * @example supervisor
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
     * [no summary] - 取得使用者個人資料
     */
    "get@users/me": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
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
                    productLink: string;
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
     * [查詢特定客服資料] - 查詢特定客服資料(僅superadmin及admin可使用該api)
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
     * @param {number} id - undefined
     */
    "put@users/:id": {
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
                /**
                 * 申請社交平台在messageBird的key
                 */
                accessKey: string;
                /**
                 * 申請社交平台在messageBird的keyID
                 */
                accessKeyID: string;
                /**
                 * 只有whatsapp平台必填
                 * @example 1066553231322
                 */
                wabaId: string;
                /**
                 * 只有whatsapp平台必填
                 * @example 12dea546c123asd456
                 */
                templateNamespace: string;
            } [];
            sso ? : {};
            /**
             * 建立客服的數量限制(預設是1)
             * @example 5
             */
            accountLimit ? : number;
            /**
             * 提供是哪一個channel
             * @example cas
             */
            channel: string;
            /**
             * 商品導購連結
             * @example www.nss.com
             */
            productLink ? : string;
            /**
             * 是否開啟自動回覆
             * @example true
             */
            autoReply ? : boolean;
            /**
             * 設定只有在自動回覆的多久後會 case closed (單位是小時)
             * @example 12
             */
            cronCloseAutoReplyTime ? : number;
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
            enable ? : boolean;
            sso ? : boolean;
            offset ? : number;
            limit ? : number;
            platform ? : "facebook" | "whatsapp" | "signal" | "telegram" | "wechat" | "instagram";
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
                productLink: string;
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
                    /**
                     * 只有whatsapp才有
                     */
                    wabaId: string;
                    /**
                     * 只有whatsapp才有
                     */
                    templateNamespace: string;
                    /**
                     * 申請社交平台在messageBird的key
                     */
                    accessKey: string;
                    /**
                     * 申請社交平台在messageBird的keyID
                     */
                    accessKeyID: string;
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
                 * 申請社交平台在messageBird的key
                 */
                accessKey ? : string;
                /**
                 * 申請社交平台在messageBird的keyID
                 */
                accessKeyID ? : string;
                /**
                 * 只有whatsapp平台必填
                 * @example 1066553231322
                 */
                wabaId ? : string;
                /**
                 * 只有whatsapp平台必填
                 * @example 12dea546c123asd456
                 */
                templateNamespace ? : string;
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
            /**
             * @example www.nss.girlssecrets.com
             */
            productLink: string;
            /**
             * 是否開啟自動回覆
             * @example true
             */
            autoReply: boolean;
            /**
             * 設定只有在自動回覆的多久後會 case closed (單位是小時)
             * @example 12
             */
            cronCloseAutoReplyTime: number;
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
                email: string;
                phone: string;
                notes: string;
                avatar: string;
                role: string;
                enable: boolean;
            } [];
            total: number;
            enableQty: number;
            disableQty: number;
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
     * [拿新增廠商 signal 帳號時要掃描的 qrcode] - 會回傳 base64
     */
    "get@companies/signal/qrcode": {
        body: null;
        query: null;
        response: {
            /**
             * @example iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEX///8AAABVwtN+AAAEEElEQVR42uyZP+7krhLECxE45AZwESSu5czOuBYSF4EbEBIg6qmZr2d3430m+S2abD5BC/pPVRv/zr/z5yHZTIO1jiwWenhNZvaD5L0JaEBjq8VaWKicdE4hJ5zHjWMbwNaAAonRkTknhKTZj8i4FTDWFeumVSkMnfPwOHcDhgVQK1ByhBHY9wJAa61OVclaJF9SGLjuP17zZUCStrX6c/LPiTH+ntUvAx9IMhZWFZ2T5gjp+vXnFoCEgZrWTUcmwPuQzit2nLsAooGtcroC2MAUUsgDF/vnrXYArYGGxVrrKqfOZNKZ8b7ife4CABjS1fppIMOHgTDO83uPGwDTQIlSFXmshEAOneN99etTvH8PsK0gJgDFKoDUxS3tYRsAsqHV4upUnGF8GuV5xRg7NgGGxhi6CVeLqikkICR/dFw3dgEwYDNuumlhLTwAD90v/rTqHQCbAQ1cUfJg3kPnoXO/YmTfBTQ2gtO6KneVM4fX8li8fypjAyARStKqCatq0gneexmc5/l0sdcBSpysEiULQs5rdsd+9H1Ak8dCcQXyy/JSXBcV+9NIXwdEtpg2VS1uqqKlboZOOC8+GfU+0IxBo3VTsXL61UFGuK/7ecwdgPTyBlWnq8X6MLwMTnacx6Pt3wfYDI2T14IrHt7rT/E+bWwH0ETMqeIoEoY5QTP583jeagtgloBgsWoljF+1G3kfj8DYAIisbj/6oebhA0XbXzH2R3j/LWBMQ0NxrEUka9KikvJ9fGPYAFCq00yoKaXB1ShDvo+vcN8AGMIYU6e1cHWGIcYagffF+5OTG4AlYkwRL1ksoAcg+RDXVe0C2GBYp5qOVbykeLlVE1fcBawVB6yTlJlW5xFkfssdnSc2AcYYgFMqZ1qXxNCGoeNvOut94JO0oh5ExuiclpYSLfcMtfeB1qSFuEppIFMnr3MK6TyP/mNrdwBmWTkA1ioBRNOGftzn8czu94Emebtql7VIo05aLG0/vgPlfcCQMjFVFUGZB7weq3iv70B5HVjFa6DKkjFr3ZSZGTu+DeZ1gI2tUTQ15bZWLx+47vPbRt8H1mg1EKPlikorY4R47OgOoImcNHYtH1lz0iInM288Y+3/ADTpUrXOn2WSX/kg2XB+tf0GQJISSrKhilod3usu/24D1tKdkg2KBfrj7EP/uocdwIepc2l3qYs8AN1Fsp4bgWXlKoui2CgPcQ/HfcR7F7A2vbRqLb1rTsvB5H782j+8D6wvIGbZyaLK2m8M4Lx+k+7vAxIjxTtQ9P0IEmeOIiB+fRrYABjyKV7vw9Ac5/oEshMAKM7e1QmJESFd9yM3twDLWRdXrBV7EfIIzLnju+rdAHw0rYxNydq1+g9JSyP/Q1e/Cvw7/53zvwAAAP//0ecnbHZ9JNkAAAAASUVORK5CYII=
             */
            data: string;
        };
        contentType: null;
    };
    /**
     * [invoke mcli 串接messageBird] - invoke mcli 串接messageBird
     */
    "post@companies/invoke-mcli": {
        body: {
            /**
             * 開啟的社交平台名稱 (若有name則必須有account & channelId)
             * @example whatsapp
             */
            name ? : string;
            /**
             * 該社交平台的帳號 (account 必須與 channelId同時存在)
             * @example whatsappId123456
             */
            account ? : string;
            /**
             * @example test123-wafds-vv654
             */
            channelId: string;
            /**
             * 申請社交平台在messageBird的key
             */
            accessKey: string;
            /**
             * 申請社交平台在messageBird的keyID
             */
            accessKeyID ? : string;
            /**
             * 只有whatsapp平台必填
             * @example 1066553231322
             */
            wabaId ? : string;
            /**
             * 只有whatsapp平台必填
             * @example 12dea546c123asd456
             */
            templateNamespace ? : string;
            /**
             * @example true
             */
            enable: boolean;
        };
        query: null;
        response: {
            /**
             * @example Success!
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取得自動回覆整顆樹] - 取得自動回覆整顆樹
     */
    "get@auto-replies": {
        body: null;
        query: null;
        response: {
            /**
             * @example Suucess
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
                isActive: boolean;
                children: {} [];
            };
        };
        contentType: null;
    };
    /**
     * [編輯樹根或樹葉用的] - 編輯樹根或樹葉用的
     * @param {string} id - undefined
     */
    "put@auto-replies/:id": {
        body: {
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
                isActive: boolean;
            };
        };
        contentType: null;
    };
    /**
     * [刪除該樹節點] - 刪除該樹節點
     * @param {string} id - undefined
     */
    "delete@auto-replies/:id": {
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
     * [取得歡迎訊息] - 取得歡迎訊息
     */
    "get@auto-reply/welcome": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                replyText: string;
            };
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
     * [更新該樹節點是否啟用] - 更新該樹節點是否啟用。如果 isActive 改 false 的話，後端也會把 children 改成 false；但是 isActive 改 true 的話，後端不會把 children 改成 true。
     * @param {string} id - undefined
     */
    "put@auto-replies/active/:id": {
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
     * [取得快捷回覆] - 取得快捷回覆
     */
    "get@quick-replies": {
        body: null;
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
            } [];
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
     * [刪除群組名稱或快捷訊息] - 刪除該樹節點
     * @param {number} id - undefined
     */
    "delete@quick-replies/:id": {
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
     * [取得範本] - 取得範本
     */
    "get@messagebird/templates": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                count: number;
                items: {
                    category: "OTP" | "TRANSACTIONAL" | "MARKETING";
                    name: string;
                    namespace: string;
                    wabaId: string;
                    languages: {
                        id: string;
                        language: string;
                        rejectedReason: string;
                        status: "NEW" | "APPROVED" | "PENDING" | "REJECTED" | "PENDING_DELETION" | "DELETED";
                        createdAt: string;
                        updatedAt: string;
                        components: unknown[];
                        namespace ? : string;
                        wabaId ? : string;
                        category ? : "OTP" | "TRANSACTIONAL" | "MARKETING";
                        name ? : string;
                    } [];
                } [];
                limit: number;
                offset: number;
                totalCount: number;
            };
        };
        contentType: null;
    };
    /**
     * [新增範本] - 新增範本
     */
    "post@messagebird/templates": {
        body: {
            language: string;
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
                language: string;
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
     * [取得特定範本] - 取得特定範本
     * @param {string} templateName - undefined
     */
    "get@messagebird/templates/:templateName": {
        body: null;
        query: {
            wabaId ? : string;
        };
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id: string;
                language: string;
                rejectedReason: string;
                status: "NEW" | "APPROVED" | "PENDING" | "REJECTED" | "PENDING_DELETION" | "DELETED";
                createdAt: string;
                updatedAt: string;
                components: unknown[];
                namespace ? : string;
                wabaId ? : string;
                category ? : "OTP" | "TRANSACTIONAL" | "MARKETING";
                name ? : string;
            } [];
        };
        contentType: null;
    };
    /**
     * [刪除範本] - 刪除範本
     * @param {string} templateName - undefined
     */
    "delete@messagebird/templates/:templateName": {
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
     * [取得nss商品目錄] - 取得nss商品目錄
     */
    "get@category": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                type: string;
                total: number;
                title: number;
                products: {
                    name: string;
                    currency: string;
                    price: string;
                    slug: string;
                    stock: boolean;
                    url: string;
                    image: string;
                } [];
            } [];
        };
        contentType: null;
    };
    /**
     * [取得nss特定類型的商品] - 取得nss特定類型的商品
     * @param {string} type - undefined
     */
    "get@category/:type": {
        body: null;
        query: {
            page ? : number;
            search ? : string;
        };
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                type: string;
                total: number;
                title: number;
                products: {
                    name: string;
                    currency: string;
                    price: string;
                    slug: string;
                    stock: boolean;
                    url: string;
                    image: string;
                } [];
            } [];
        };
        contentType: null;
    };
    /**
     * [取得報表分析資料] - 取得報表分析資料
     */
    "get@report/overview": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                fields: string[];
                data: {
                    [k: string]: number;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [取得各客服人員處理狀況資料] - 取得各客服人員處理狀況資料
     */
    "get@report/user-process-status": {
        body: null;
        query: {
            startDate ? : string;
            endDate ? : string;
            limit ? : number;
            offset ? : number;
            /**
             * @example 1,2,3
             */
            selectedUsers ? : string;
        };
        response: {
            data: {
                table: {
                    fullCount: number;
                    fields: {
                        key:
                            |
                            "averageProcessTime" |
                            "averageWaitingTime" |
                            "completed" |
                            "processing" |
                            "shoppingLinkEventCount" |
                            "username" |
                            "waiting" |
                            "tbColor";
                        label: string;
                    } [];
                    items: {
                        averageProcessTime: number;
                        averageWaitingTime: number;
                        completed: number;
                        processing: number;
                        shoppingLinkEventCount: number;
                        username: string;
                        waiting: number;
                        tbColor ? : string;
                    } [];
                };
                total: {
                    fields: {
                        key:
                            |
                            "averageProcessTime" |
                            "averageWaitingTime" |
                            "completed" |
                            "processing" |
                            "shoppingLinkEventCount" |
                            "username" |
                            "waiting" |
                            "tbColor";
                        label: string;
                    } [];
                    items: {
                        averageProcessTime: number;
                        averageWaitingTime: number;
                        completed: number;
                        processing: number;
                        shoppingLinkEventCount: number;
                        username: string;
                        waiting: number;
                        tbColor ? : string;
                    } [];
                };
            };
            /**
             * @example Success
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取得客戶標籤歸類資料] - 取得客戶標籤歸類資料
     */
    "get@report/tags": {
        body: null;
        query: {
            limit ? : number;
            offset ? : number;
            startDate ? : string;
            endDate ? : string;
            /**
             * @example 1,2,3
             */
            selectedTags ? : string;
            /**
             * @example 1,2,3
             */
            selectedUsers ? : string;
        };
        response: {
            data: {
                table: {
                    fields: {
                        key: string;
                        label: string;
                    } [];
                    fullCount: number;
                    items: {
                        customer: string;
                        date: string;
                        phone: string;
                        tag: string;
                        username: string;
                    } [];
                };
                chartData: {
                    name: string;
                    value: number;
                } [];
            };
            /**
             * @example Success
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取得客服的分析資料資料] - 取得客服的分析資料資料
     */
    "get@report/user-process-list": {
        body: null;
        query: {
            limit ? : number;
            offset ? : number;
            startDate ? : string;
            endDate ? : string;
            /**
             * @example 1,2,3
             */
            selectedUsers ? : string;
        };
        response: {
            data: {
                table: {
                    fullCount: number;
                    fields: {
                        key:
                            |
                            "customer" |
                            "date" |
                            "startedAt" |
                            "endedAt" |
                            "tag" |
                            "shoppingLinkCnt" |
                            "phone" |
                            "processTime" |
                            "status" |
                            "username" |
                            "tbColor";
                        label: string;
                    } [];
                    items: {
                        customer: string;
                        date: string;
                        startedAt: string;
                        endedAt ? : string;
                        tag ? : string;
                        shoppingLinkCnt ? : number;
                        phone: string;
                        processTime: number;
                        status: string;
                        username: string;
                        tbColor ? : string;
                    } [];
                };
                total: {
                    fields: {
                        key:
                            |
                            "customer" |
                            "date" |
                            "startedAt" |
                            "endedAt" |
                            "tag" |
                            "shoppingLinkCnt" |
                            "phone" |
                            "processTime" |
                            "status" |
                            "username" |
                            "tbColor";
                        label: string;
                    } [];
                    items: {
                        customer: string;
                        date: string;
                        startedAt: string;
                        endedAt ? : string;
                        tag ? : string;
                        shoppingLinkCnt ? : number;
                        phone: string;
                        processTime: number;
                        status: string;
                        username: string;
                        tbColor ? : string;
                    } [];
                };
            };
            /**
             * @example Success
             */
            msg: string;
        };
        contentType: null;
    };
    /**
     * [客服問題歸類-select框的選項] - 客服問題歸類-select框的選項
     */
    "get@question-types": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id: number;
                keyword: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取得客服問題歸類資料] - 取得客服問題歸類資料
     */
    "get@report/question-type": {
        body: null;
        query: {
            limit ? : number;
            offset ? : number;
            startDate ? : string;
            endDate ? : string;
            selectedQuestionTypes ? : string;
        };
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                table: {
                    fullCount: number;
                    fields: {
                        key: string;
                        label: string;
                    } [];
                    items: {
                        name: string;
                        count: string;
                        tbColor ? : string;
                    } [];
                };
                chartData: {
                    name: string;
                    value: number;
                } [];
                total: {
                    fields: {
                        key: "totalCount";
                        label: string;
                    } [];
                    items: {
                        totalCount: string;
                    } [];
                };
            };
        };
        contentType: null;
    };
    /**
     * [取得客服問題歸類-其他類] - 取得客服問題歸類-其他類
     */
    "get@question-types/others": {
        body: null;
        query: {
            startDate ? : string;
            endDate ? : string;
        };
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                fields: {
                    key: string;
                    label: string;
                } [];
                items: {
                    count: string;
                    name: string;
                } [];
                detailFields: {
                    key: string;
                    label: string;
                } [];
                detailItems: {
                    date: string;
                    note: string;
                    username: string;
                } [];
            };
        };
        contentType: null;
    };
    /**
     * [取得對話紀錄] - 取得對話紀錄
     * @param {string} customerUuid - undefined
     */
    "get@customers/:customerUuid/messages": {
        body: null;
        query: {
            start ? : number;
            /**
             * @example 100
             */
            limit ? : number;
        };
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來判斷此次對話是否結束，以便分析報表資料用途
                 */
                isCaseOpened: boolean;
                messages: {
                    customerUuid: string;
                    direction: "received" | "sent";
                    id: number;
                    /**
                     * sent:訊息送出了 ,delivered: 接收的人有收到了（sent, delivered 想像一下 whatsapp 不是會有 2 個勾勾，一個勾勾代表發的人有發出去，2 個勾勾代表收的人的手機有網路所以收到了） ,read:訊息已讀 failed:通常是因為超過可以發給客人的時間限制了，either 24hr or 7 days ,pending:發出去了但是 messagebird 還沒回報狀態 ,transmitted:運送中 ,rejected:被拒，目前發生過的時候是因為使用的電話被 messagebird bang 掉不能用。總的來說 msg 的狀態: pending -> transmitted -> sent -> delivered -> read. 或失敗: failed, rejected
                     */
                    status: "sent" | "read" | "delivered" | "failed" | "pending" | "transmitted" | "rejected";
                    text: string;
                    timestamp: string;
                    type: "text" | "hsm" | "image" | "file" | "audio" | "video" | "whatsappSticker" | "multimedia";
                    user: {
                        id: number;
                        displayName: string;
                        avatar: string;
                    };
                    file: {
                        url: string | null;
                        caption: string | null;
                        size: string | null;
                        extension: string | null;
                    } [];
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
     * [取得左邊列表] - 取得左邊列表
     */
    "get@chats": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id: number;
                lastMsg: string;
                /**
                 * sent:訊息送出了 ,delivered: 接收的人有收到了（sent, delivered 想像一下 whatsapp 不是會有 2 個勾勾，一個勾勾代表發的人有發出去，2 個勾勾代表收的人的手機有網路所以收到了） ,read:訊息已讀 failed:通常是因為超過可以發給客人的時間限制了，either 24hr or 7 days ,pending:發出去了但是 messagebird 還沒回報狀態 ,transmitted:運送中 ,rejected:被拒，目前發生過的時候是因為使用的電話被 messagebird bang 掉不能用。總的來說 msg 的狀態: pending -> transmitted -> sent -> delivered -> read. 或失敗: failed, rejected
                 */
                status: "sent" | "read" | "delivered" | "failed" | "pending" | "transmitted" | "rejected";
                timestamp: string;
                unreadCount: number;
                isPin: boolean;
                customer: {
                    customerUuid: string;
                    id: number;
                    phone: string;
                    remark: string;
                    active ? : string;
                    colorCode ? : number;
                    platform: "whatsapp" | "wechat" | "facebook" | "instagram" | "telegram" | "signal";
                    tags: number[];
                };
            } [];
        };
        contentType: null;
    };
    /**
     * [取得頭像的顏色] - 用來設定客人頭像的顏色
     */
    "get@groups": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id: number;
                colorCode: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取得所有標籤] - 用來mapping全域標籤
     */
    "get@tags": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                id: number;
                tagName: string;
            } [];
        };
        contentType: null;
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
            data: {
                id: number;
                tagName: string;
            };
        };
        contentType: null;
    };
    /**
     * [刪除全域標籤] - 刪除全域標籤
     * @param {number} id - undefined
     */
    "delete@tags/:id": {
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