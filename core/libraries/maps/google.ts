import { element, Event } from 'power-helper'
import { serviceException } from '../../../core/error'

type LatLng = {
    lat: number
    lng: number
}

type GoogleMapConfig = {
    apiKey: string
}

type Channels = {
    click: () => void
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
                zoom: 10,
                center: {
                    lat: -34.397,
                    lng: 150.644
                }
            })
        }
    }

    addMarker(params: {
        title?: string
        position: LatLng
    }) {
        let marker = new google.maps.Marker({
            map: this.map,
            title: params.title,
            position: params.position
        })
        return {
            remove: () => marker.setMap(null),
            moveTo: (position: LatLng) => {
                marker.setPosition(position)
            }
        }
    }

    close() {
        if (this.map) {
            this.map = undefined
        }
    }
}
