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


/**
 * DirectionsAttr is a type that contains an id, an origin, and a destination. It is used to define the parameters of a directions request.
 * @zh DirectionsAttr 是一个包含 id、origin 和 destination 的类型。它用于定义一个方向请求的参数。
 */

export type DirectionsAttr = {
    id?: string
    origin: LatLng
    travelMode:  'DRIVING'| 'WALKING'
    destination: LatLng
}
