import { MapRoute } from './common/route'
import { MapMarker } from './common/marker'
import { element, Event } from 'power-helper'
import { serviceException } from '../../../core/error'
import { LatLng, MarkerAttr, RouteAttr, NavigationParams } from './types'

type GoogleMapConfig = {
    apiKey: string
}

type Channels = {
    move: LatLng
    click: LatLng
    clickMarker: MapMarker
}

const exception = serviceException.checkout('GoogleMap')

function checkInstalled() {
    if (!window.__ng_state.gmap?.installed) {
        throw exception.create('google map not installed.')
    }
}

export class GoogleMap extends Event<Channels> {
    map?: google.maps.Map
    routes: MapRoute[] = []
    markers: MapMarker[] = []

    static getNavigationUrl(params: NavigationParams) {
        let { startName, startLng, startLat, endName, endLng, endLat } = params;
        let url = `https://www.google.com/maps/dir/?api=1&origin=${startLat},${startLng}&destination=${endLat},${endLng}&travelmode=driving`
        if (startName) {
            url += `&origin_place_id=${encodeURIComponent(startName)}`
        }
        if (endName) {
            url += `&destination_place_id=${encodeURIComponent(endName)}`
        }
        return url
    }

    static async install(config: GoogleMapConfig) {
        if (window.__ng_state.gmap == null) {
            window.__ng_state.gmap = {
                installed: false
            }
        }
        if (window.__ng_state.gmap.installed === false) {
            window.__ng_state.gmap.installed = true
            await new Promise((resolve, reject) => {
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

    start(el: HTMLDivElement, options: {
        zoom?: number
        center?: LatLng
    }) {
        if (this.map == null) {
            this.map = new google.maps.Map(el, {
                zoom: options.zoom || 15,
                center: options.center || { lat: 0, lng: 0 }
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
            this.map.addListener('center_changed', () => {
                if (this.map) {
                    this.emit('move', {
                        lat: this.map.getCenter()?.lat() || 0,
                        lng: this.map.getCenter()?.lng() || 0
                    })
                }
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
        this.removeAllRoute()
        this.removeAllMarker()
        if (this.map) {
            this.map = undefined
        }
    }

    fitView() {
        if (this.map) {
            const bounds = new google.maps.LatLngBounds()
            for (let marker of this.markers) {
                bounds.extend(marker.getPosition())
            }
            this.map.fitBounds(bounds)
        }
    }

    // =================
    //
    // Marker
    //

    addMarker(params: MarkerAttr) {
        const marker = new MapMarker(this as any, params)
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

    reloadMarkers(items: MarkerAttr[]) {
        this.markers.filter(e => !items.find(i => i.id === e.id)).forEach(e => e.remove())
        items.forEach(e => {
            const marker = this.markers.find(m => m.id === e.id)
            if (marker) {
                marker.moveTo(e.position)
            } else {
                this.addMarker(e)
            }
        })
    }

    // =================
    //
    // Route
    //

    addRoute(params: RouteAttr) {
        const route = new MapRoute(this, params)
        this.routes.push(route)
        return route
    }

    removeAllRoute() {
        this.routes.forEach(e => e.remove())
        this.routes = []
    }

    reloadRoutes(items: RouteAttr[]) {
        this.routes.filter(e => !items.find(i => i.id === e.id)).forEach(e => e.remove())
        items.forEach(e => {
            let route = this.routes.find(m => m.id === e.id)
            if (route) {
                route.update(e)
            } else {
                this.addRoute(e)
            }
        })
    }
}
