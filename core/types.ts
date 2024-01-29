export type { RouteMap, RouteMixin, Routes } from './vue-extends/router-plus'
export type { NextgenWorkerFrom } from './modules/nextgen-worker'
export type OutputFile = {
    url: string | ArrayBuffer | null
    file: File
}

export type UploadData = {
    files: OutputFile[]
}

export type UploadError = {
    type: 'NoSupportMineType' | 'Unknown'
    file: File
    error: any
}

export type * as Map from './libraries/maps/types'
