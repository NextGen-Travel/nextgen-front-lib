import { NgAMap } from '../amap'
import { Event } from 'power-helper'
import { GoogleMap } from '../google'
import { LatLng, MarkerAttr } from '../types'

type Channels = {
    click: any
}

export class MapMarker extends Event<Channels> {
    id?: string
    icon?: string
    aMap?: NgAMap
    aMapMarker?: AMap.Marker
    googleMap?: GoogleMap
    googleMarker?: google.maps.Marker
    googleInfowindow?: google.maps.InfoWindow
    constructor(map: GoogleMap | NgAMap, params: MarkerAttr) {
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
        // 如果是高德地图
        if (map instanceof NgAMap) {
            this.aMap = map
            if (this.aMap.map) {
                this.aMapMarker = new AMap.Marker({
                    icon: this.icon,
                    content: params.content,
                    position: new AMap.LngLat(params.position.lng, params.position.lat)
                })
                this.aMapMarker.setMap(this.aMap.map)
                this.aMapMarker.on('click', () => {
                    this.emit('click', this.getPosition())
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
        if (this.aMapMarker) {
            this.aMapMarker.setMap(null)
            if (this.aMap) {
                this.aMap.markers = this.aMap.markers.filter(marker => marker.id !== this.id)
            }
        }
    }

    moveTo(position: LatLng) {
        if (this.googleMarker) {
            this.googleMarker.setPosition(position)
        }
        if (this.aMapMarker) {
            this.aMapMarker.setPosition([
                position.lat,
                position.lng
            ])
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
        if (this.aMapMarker) {
            let position = this.aMapMarker.getPosition()
            if (position) {
                output.lat = position.getLat()
                output.lng = position.getLng()
            }
        }
        return output
    }
}
