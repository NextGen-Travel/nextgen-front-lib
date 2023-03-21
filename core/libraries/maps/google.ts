import { LatLng } from './types'
import { element, Event } from 'power-helper'
import { serviceException } from '../../../core/error'
import { MapMarker, MarkerParams } from './common/marker'

type GoogleMapConfig = {
    apiKey: string
}

type Channels = {
    click: LatLng
    clickMarker: LatLng & {
        marker: MapMarker
    }
}

const exception = serviceException.checkout('GoogleMap')
const state = {
    installed: false
}

function checkInstalled() {
    if (state.installed === false) {
        throw exception.create('gsi not installed.')
    }
}

export class GoogleMap extends Event<Channels> {
    map?: google.maps.Map
    markers: MapMarker[] = []

    static isInstalled() {
        return state.installed
    }

    static install(config: GoogleMapConfig) {
        if (state.installed === false) {
            state.installed = true
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
            this.map.addListener('click', (event: { latLng: LatLng }) => {
                this.emit('click', {
                    lat: event.latLng.lat,
                    lng: event.latLng.lng
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

    addMarker(params: MarkerParams) {
        const marker = new MapMarker(this, params)
        this.markers.push(marker)
        marker.on('click', ({ lat, lng }) => {
            this.emit('clickMarker', {
                lat,
                lng,
                marker
            })
        })
        return marker
    }

    removeAllMarker() {
        this.markers.forEach(e => e.remove())
        this.markers = []
    }

    /** 刪除並重新繪製 marker */
    loadMarkers(items: MarkerParams[]) {
        this.removeAllMarker()
        items.forEach(e => this.addMarker(e))
    }

    close() {
        if (this.map) {
            this.map = undefined
        }
    }
}
