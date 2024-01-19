/// <reference types="@types/google.accounts" />
type GoogleConfig = {
    /** 彈出視窗模式或是倒轉模式 */
    uxMode: 'popup' | 'redirect';
    /** 應用程式 ID */
    clientId: string;
    /** 導轉網址，當 ux mode 為 redirect 需要填寫 */
    loginUri?: string;
};
type Channels = {
    login: {
        token: string;
        payload: {
            iss: string;
            nbf: number;
            aud: string;
            sub: string;
            email: string;
            email_verified: boolean;
            azp: string;
            name: string;
            picture: string;
            given_name: string;
            iat: number;
            exp: number;
            jti: string;
        };
    };
};
export declare class GoogleAuth {
    static install(config: GoogleConfig): Promise<void>;
    static installed(): any;
    static get on(): <K extends "login">(event: "*" | K, callback: (_data: Channels[K], _context: {
        id: string;
        off: () => void;
        state: Record<string, any>;
    }) => void) => {
        id: string;
        state: Record<string, any>;
        event: string;
        callback: (_data: Channels[K], _context: {
            id: string;
            off: () => void;
            state: Record<string, any>;
        }) => void;
        manager: import("power-helper/dist/modules/event").Event<any>;
        invoke(data: Channels[K]): void;
        off(): void;
    };
    /** 渲染出登入按鈕 */
    static renderButton(element: HTMLElement, options: google.accounts.id.GsiButtonConfiguration): void;
    /**
     * 如果瀏覽器從未登入過 google 帳號，會打不開，並回傳 no-logged
     * 如果是使用者自己關閉，則回傳 no-action
     */
    static oneTap(): Promise<{
        status: 'pass' | 'no-logged' | 'no-action';
    }>;
}
export {};
