import { LatLng, MarkerAttr, DirectionsAttr } from './types'
import { element, Event } from 'power-helper'
import { serviceException } from '../../../core/error'
import { MapMarker } from './common/marker'
import { MapDirections } from './common/directions'

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
    directions: MapDirections[] = []

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

    static isInstalled() {
        return !!window.__ng_state.gmap?.installed
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

    close() {
        if (this.map) {
            this.map = undefined
        }
    }

    // =================
    //
    // Marker
    //

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
    
    // =================
    //
    // Route
    //

    addRoute(params: DirectionsAttr) {
        const directions = new MapDirections(this, params)
        this.directions.push(directions)
        return directions
    }

    removeAllRoute() {
        this.directions.forEach(e => e.remove())
        this.directions = []
    }

    reloadRoutes(items: DirectionsAttr[]) {
        this.removeAllRoute()
        items.forEach(e => this.addRoute(e))
    }
}
