export type { NextgenWorkerFrom } from './modules/nextgen-worker';
export type OutputFile = {
    url: string | ArrayBuffer | null;
    file: File;
};
export type UploadData = {
    files: OutputFile[];
};
export type * as Map from './libraries/maps/types';
