type WechatConfig = {
    appId: string;
    webAppId: string;
};
export declare class WechatService {
    static install(config: WechatConfig): Promise<void>;
    static installed(): any;
    static isWeixinBrowser(): boolean;
    /**
     * 網頁應用要用 qrcode 登入
     */
    static renderQrcode(params: {
        state?: string;
        containerId: string;
        redirectUri: string;
    }): void;
    /**
     * 獲取登入網址，這只能在微信 app 裡面使用，且要加入申請的微信公眾號
     */
    static getLoginUrl(params: {
        state?: string;
        redirectUri: string;
    }): string;
}
export {};
