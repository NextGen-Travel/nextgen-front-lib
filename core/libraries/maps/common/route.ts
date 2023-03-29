import { NgAMap } from '../amap'
import { Event } from 'power-helper'
import { RouteAttr } from '../types'
import { GoogleMap } from '../google'

type Channels = {
    failed: {
        status: any
    }
}

export class MapRoute extends Event<Channels> {
    id?: string
    aMap?: NgAMap
    aMapRoute?: AMap.Polyline
    googleMap?: GoogleMap
    googleDirectionsService?: google.maps.DirectionsService
    googleDirectionsRenderer?: google.maps.DirectionsRenderer

    constructor(map: GoogleMap, params: RouteAttr) {
        super()
        this.id = params.id
        // 如果是 google map
        if (map instanceof GoogleMap) {
            this.googleMap = map
            this.googleDirectionsService = new google.maps.DirectionsService()
            this.update(params)
        }
        // 如果是高德地图
        if (map instanceof NgAMap) {
            this.aMap = map
            if (this.aMap.map) {
                this.aMapRoute = new AMap.Polyline({
                    path: [
                        [params.origin.lat, params.origin.lng],
                        [params.destination.lat, params.destination.lng]
                    ],
                    strokeColor: '#FF33FF',
                    strokeOpacity: 1,
                    strokeWeight: 3,
                    strokeStyle: 'solid',
                    strokeDasharray: [10, 5]
                })
                this.aMapRoute.setMap(this.aMap.map)
            }
        }
    }
    /**
     * @zh 刪除路線
     * @en Remove route
     */

    remove() {
        if (this.googleDirectionsRenderer) {
            this.googleDirectionsRenderer.setMap(null)
            if (this.googleMap) {
                this.googleMap.routes = this.googleMap.routes.filter(route => route.id !== this.id)
            }
        }
        if (this.aMapRoute) {
            this.aMapRoute.setMap(null)
            if (this.aMap) {
                this.aMap.routes = this.aMap.routes.filter(route => route.id !== this.id)
            }
        }
    }

    update(params: Omit<RouteAttr, 'id'>) {
        this.remove()
        if (this.googleMap && this.googleMap.map && this.googleDirectionsService) {
            const request = {
                origin: params.origin,
                destination: params.destination,
                travelMode: google.maps.TravelMode[params.travelMode],
            }
            this.googleDirectionsRenderer = new google.maps.DirectionsRenderer()
            this.googleDirectionsRenderer.setMap(this.googleMap.map)
            this.googleDirectionsService.route(request, (result, status) => {
                if (status == google.maps.DirectionsStatus.OK) {
                    if (this.googleDirectionsRenderer) {
                        this.googleDirectionsRenderer.setDirections(result)
                    }
                } else {
                    this.emit('failed', {
                        status
                    })
                }
            })
        }
        if (this.aMap && this.aMap.map) {
            this.aMapRoute = new AMap.Polyline({
                path: [
                    [params.origin.lat, params.origin.lng],
                    [params.destination.lat, params.destination.lng]
                ],
                strokeColor: '#FF33FF',
                strokeOpacity: 1,
                strokeWeight: 3,
                strokeStyle: 'solid',
                strokeDasharray: [10, 5]
            })
            this.aMapRoute.setMap(this.aMap.map)
        }
    }
}
