import { Event } from 'power-helper'
import { GoogleMap } from '../google'
import { LatLng, DirectionsAttr } from '../types'

type Channels = any

export class MapDirections extends Event<Channels> {
    id?: string
    googleMap?: GoogleMap
    googleDirectionsService?: google.maps.DirectionsService
    googleDirectionsRenderer?: google.maps.DirectionsRenderer

    constructor(map: GoogleMap, params: DirectionsAttr) {
        super()
        this.id = params.id
        // 如果是 google map
        if (map instanceof GoogleMap) {
            this.googleMap = map
            this.googleDirectionsService = new google.maps.DirectionsService()
            this.googleDirectionsRenderer = new google.maps.DirectionsRenderer()
            if (this.googleMap.map) {
                this.googleDirectionsRenderer.setMap(this.googleMap.map)
            }
        }
    }

    remove() {
        if (this.googleDirectionsRenderer) {
            this.googleDirectionsRenderer.setMap(null)
        }
    }

    update(start: LatLng, end: LatLng, mode: 'BICYCLING' | 'DRIVING'| 'TRANSIT' | 'WALKING') {
        if (this.googleDirectionsService) {
            const request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode[mode],
            }
            this.googleDirectionsService.route(request, (result, status) => {
                if (status == google.maps.DirectionsStatus.OK) {
                    if (this.googleDirectionsRenderer) {
                        this.googleDirectionsRenderer
                        this.googleDirectionsRenderer.setDirections(result)
                    }
                } else {
                    console.error(`Directions request failed: ${status}`)
                }
            })
        }
    }
}
