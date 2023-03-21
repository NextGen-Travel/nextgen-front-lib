import { element } from 'power-helper'
import { serviceException } from '../../../core/error'

type GoogleMapConfig = {
    apiKey: string
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

export class GoogleMap {
    map: google.maps.Map
    static install(config: GoogleMapConfig) {
        if (state.installed === false) {
            state.installed = true
            return new Promise((resolve, reject) => {
                window.initGoogleMap = () => resolve(null)
                element.importScript(`https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&callback=initGoogleMap`).catch(reject)
            })
        }
    }

    constructor(el: HTMLElement) {
        checkInstalled()
        this.map = new google.maps.Map(el, {
            zoom: 10,
            center: {
                lat: -34.397,
                lng: 150.644
            }
        })
    }
}
