/// <reference types="@types/apple-signin-api" />
import { Event } from 'power-helper';
type AppleConfig = {
    clientId: string;
};
type Channels = {
    login: {
        token: string;
        user?: {
            email: string;
            name: {
                firstName: string;
                lastName: string;
            };
        };
    };
};
export declare class AppleAuth {
    static install(config: AppleConfig): Promise<void>;
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
        manager: Event<any>;
        invoke(data: Channels[K]): void;
        off(): void;
    };
    /**
     * 如果是使用者自己關閉，則回傳 no-action
     */
    static signIn(params: {
        state?: string;
        popup?: boolean;
        redirectURI: string;
    }): Promise<{
        status: 'pass' | 'no-action';
        response: null | AppleSignInAPI.SignInResponseI;
    }>;
}
export {};
