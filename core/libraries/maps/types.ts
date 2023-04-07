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
    origin: LatLng
    destination: LatLng
    travelMode:  'DRIVING'| 'WALKING'
}

export type NavigationParams = {
    startName: string
    startLng: number
    startLat: number
    endName: string
    endLng: number
    endLat: number
}
