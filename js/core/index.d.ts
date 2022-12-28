import type { App } from 'vue';
export declare const useLibOptions: () => {
    lang: "en" | "zh";
    staticUrl: string;
    notFoundImage: string;
};
export declare const useLibEnv: () => {
    version: number;
    stage: string;
    service: string;
};
export declare const Locales: {
    zh: {
        confirmTitleText: string;
        confirmCancelText: string;
        confirmConfirmText: string;
    };
    en: {
        confirmTitleText: string;
        confirmCancelText: string;
        confirmConfirmText: string;
    };
};
export declare const t: (key: string) => string;
export declare const NextgenLib: {
    install(vue: App, params: {
        env: typeof window.__ng_config.libEnv;
        options: typeof window.__ng_config.libOptions;
    }): void;
};
export default NextgenLib;
