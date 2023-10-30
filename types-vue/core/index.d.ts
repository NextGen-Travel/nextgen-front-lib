import 'power-helper';
import 'urlpattern-polyfill';
import 'v-calendar/dist/style.css';
import type { App } from 'vue';
export declare const useLibOptions: () => {
    lang: "en-US" | "zh-TW" | "zh-CN";
    staticUrl: string;
    notFoundImage: string | (() => string);
};
export declare const useLibEnv: () => {
    version: number;
    stage: string;
    service: string;
};
export declare const t: (key: string, params?: {}) => string;
export declare const NextgenLib: {
    setOptions: (options: Partial<typeof window.__ng_config.libOptions>) => void;
    install(vue: App, params: {
        options: typeof window.__ng_config.libOptions;
        env: {
            stage: string;
            service: string;
        };
    }): void;
};
export default NextgenLib;
