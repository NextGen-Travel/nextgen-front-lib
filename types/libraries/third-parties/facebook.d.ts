/// <reference types="@types/facebook-js-sdk" />
import { Event } from 'power-helper';
type FacebookConfig = {
    clientId: string;
};
type Events = {
    login: {
        token: string;
    };
};
export declare class FacebookService {
    static install(config: FacebookConfig): Promise<void>;
    static installed(): any;
    static get on(): <K extends "login">(event: "*" | K, callback: (_data: Events[K], _context: {
        id: string;
        off: () => void;
        state: Record<string, any>;
    }) => void) => {
        id: string;
        state: Record<string, any>;
        event: string;
        callback: (_data: Events[K], _context: {
            id: string;
            off: () => void;
            state: Record<string, any>;
        }) => void;
        manager: Event<any>;
        invoke(data: Events[K]): void;
        off(): void;
    };
    /**
     * 如果是使用者自己關閉，則回傳 no-action
     */
    static signIn(): Promise<{
        status: 'pass' | 'no-action';
        response: null | fb.AuthResponse;
    }>;
    static signOut(): Promise<unknown>;
    static getLoginUrl(params: {
        state?: string;
        redirectUri: string;
    }): string;
    static share(params: {
        href: string;
    }): Promise<fb.ShareDialogResponse>;
}
export {};
