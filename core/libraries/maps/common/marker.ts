import { Event } from 'power-helper'
import { GoogleMap } from '../google'
import { LatLng, MarkerAttr } from '../types'

type Channels = {
    click: any
}

export class MapMarker extends Event<Channels> {
    id?: string
    icon?: string
    googleMap?: GoogleMap
    googleMarker?: google.maps.Marker
    googleInfowindow?: google.maps.InfoWindow
    constructor(map: GoogleMap, params: MarkerAttr) {
        super()
        this.id = params.id
        this.icon = params.icon
        // 如果是 google map
        if (map instanceof GoogleMap) {
            this.googleMap = map
            this.googleInfowindow = new google.maps.InfoWindow({
                content: params.content
            })
            this.googleMarker = new google.maps.Marker({
                map: this.googleMap.map,
                icon: this.icon,
                animation: google.maps.Animation.DROP,
                position: params.position,
            })
            this.googleMarker.addListener('click', () => {
                this.emit('click', this.getPosition())
            })
            if (params.content) {
                this.googleInfowindow?.open({
                    map: this.googleMap?.map,
                    anchor: this.googleMarker
                })
            }
        }
        params.onLoaded?.(this)
    }

    remove() {
        if (this.googleMarker) {
            this.googleMarker.setMap(null)
            if (this.googleMap) {
                this.googleMap.markers = this.googleMap.markers.filter(marker => marker.id !== this.id)
            }
        }
    }

    moveTo(position: LatLng) {
        if (this.googleMarker) {
            this.googleMarker.setPosition(position)
        }
    }

    getPosition() {
        const output = {
            lat: 0,
            lng: 0
        }
        if (this.googleMarker) {
            let position = this.googleMarker.getPosition()
            if (position) {
                output.lat = position.lat()
                output.lng = position.lng()
            }
        }
        return output
    }
}
