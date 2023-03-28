import { Event } from 'power-helper'
import { GoogleMap } from '../google'
import { DirectionsAttr } from '../types'

type Channels = any

export class DirectionsMarker extends Event<Channels> {
    id?: string
    googleMap?: GoogleMap
    googleDirections?: google.maps.DirectionsRenderer
    constructor(map: GoogleMap, params: DirectionsAttr) {
        super()
        this.id = params.id
        // 如果是 google map
        if (map instanceof GoogleMap) {
            this.googleMap = map
        }
    }

    remove() {
        console.log('remove')
    }
}
