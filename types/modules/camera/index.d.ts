import { Event } from 'power-helper';
type Channels = {
    dataavailable: {
        event: BlobEvent;
    };
};
type InstallOptions = {
    record?: boolean;
    useRearLens?: boolean;
};
export declare class Camera extends Event<Channels> {
    private canvas;
    private video?;
    private stream?;
    private mediaRecorder?;
    private options?;
    static stopAndRemoveTracks(stream: MediaStream): void;
    /**
     * 如果透過 navigator.permissions.query({ name: 'camera' }) 驗證會出現 Firefox 不支援的問題。
     */
    static requestPermission(): Promise<boolean>;
    install(video: HTMLVideoElement, options?: InstallOptions): Promise<unknown>;
    reload(): Promise<void>;
    play(): void;
    /** 獲得一個 base64 截圖 */
    toImage(): string;
    close(): void;
}
export {};
