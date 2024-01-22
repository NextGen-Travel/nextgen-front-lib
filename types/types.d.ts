export type { NextgenWorkerFrom } from './modules/nextgen-worker';
export type OutputFile = {
    url: string | ArrayBuffer | null;
    file: File;
};
export type UploadData = {
    files: OutputFile[];
};
