import { MapMarker } from './common/marker'

export type  LatLng = {
    lat: number
    lng: number
}

export type MarkerAttr = {
    id?: string
    content?: string
    position: LatLng
    onLoaded?: (_marker: MapMarker) => void
}
