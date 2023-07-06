type IgConfig = {
    clientId: string;
};
export declare class IgAuth {
    static install(config: IgConfig): Promise<void>;
    static installed(): any;
    static getLoginUrl(params: {
        state?: string;
        redirectUri: string;
    }): string;
}
export {};
