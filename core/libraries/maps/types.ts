import { MapMarker } from './common/marker'

export type  LatLng = {
    lat: number
    lng: number
}

export type MarkerAttr = {
    id?: string
    icon?: string
    content?: string
    position: LatLng
    onLoaded?: (_marker: MapMarker) => void
}

export type RouteAttr = {
    id?: string
    origin: LatLng | string
    destination: LatLng | string
    travelMode:  'DRIVING'| 'WALKING'
}
