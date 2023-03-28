import { LatLng, MarkerAttr } from './types'
import { element, Event } from 'power-helper'
import { serviceException } from '../../../core/error'
import { MapMarker } from './common/marker'

type GoogleMapConfig = {
    apiKey: string
}

type Channels = {
    click: LatLng
    clickMarker: MapMarker
}

const exception = serviceException.checkout('GoogleMap')

function checkInstalled() {
    if (!window.__ng_state.gmap?.installed) {
        throw exception.create('gsi not installed.')
    }
}

export class GoogleMap extends Event<Channels> {
    map?: google.maps.Map
    markers: MapMarker[] = []
    directions: google.maps.DirectionsRenderer[] = []

    static isInstalled() {
        return !!window.__ng_state.gmap?.installed
    }

    static install(config: GoogleMapConfig) {
        if (window.__ng_state.gmap == null) {
            window.__ng_state.gmap = {
                installed: false
            }
        }
        if (window.__ng_state.gmap.installed === false) {
            window.__ng_state.gmap.installed = true
            return new Promise((resolve, reject) => {
                window.initGoogleMap = () => resolve(null)
                element.importScript(`https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&callback=initGoogleMap`).catch(reject)
            })
        }
    }

    constructor() {
        super()
        checkInstalled()
    }

    start(el: HTMLElement) {
        if (this.map == null) {
            this.map = new google.maps.Map(el, {
                zoom: 10
            })
            this.map.setOptions({
                disableDefaultUI: true
            })
            this.map.addListener('click', (event: google.maps.KmlMouseEvent) => {
                this.emit('click', {
                    lat: event.latLng?.lat() || 0,
                    lng: event.latLng?.lng() || 0
                })
            })
        }
    }

    moveTo(position: LatLng) {
        this.map?.moveCamera({
            center: position
        })
    }

    zoomTo(zoom: number) {
        this.map?.moveCamera({
            zoom
        })
    }

    addMarker(params: MarkerAttr) {
        const marker = new MapMarker(this, params)
        this.markers.push(marker)
        marker.on('click', () => {
            this.emit('clickMarker', marker)
        })
        return marker
    }

    removeAllMarker() {
        this.markers.forEach(e => e.remove())
        this.markers = []
    }

    /** 刪除並重新繪製 marker */
    reloadMarkers(items: MarkerAttr[]) {
        this.removeAllMarker()
        items.forEach(e => this.addMarker(e))
    }

    close() {
        if (this.map) {
            this.map = undefined
        }
    }

    /**
        This function takes in the start and end coordinates of a route and displays the route on the map.
        The route is displayed using the Google Maps Directions API.
        @zh 這個函式接受路線的起點和終點座標，並在地圖上顯示路線。
    */

    addRoute(start: LatLng, end: LatLng, mode: 'BICYCLING' | 'DRIVING'| 'TRANSIT' | 'WALKING') {
        const directionsService = new google.maps.DirectionsService()
        const directionsRenderer = new google.maps.DirectionsRenderer()
        const request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode[mode],
        }
        directionsService.route(request, (result, status) => {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result)
            } else {
                console.error(`Directions request failed: ${status}`)
            }
        })
        if (this.map) {
            directionsRenderer.setMap(this.map)
        }
        return directionsRenderer
    }
}
