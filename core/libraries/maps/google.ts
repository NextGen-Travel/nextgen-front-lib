import { MapRoute } from './common/route'
import { MapMarker } from './common/marker'
import { element, Event } from 'power-helper'
import { serviceException } from '../../../core/error'
import { LatLng, MarkerAttr, RouteAttr } from './types'

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

    private getZoomByBounds(bounds: google.maps.LatLngBounds) {
        if (this.map) {
            let maxZoom = 21
            let minZoom = 1
            let ne = this.map.getProjection()?.fromLatLngToPoint(bounds.getNorthEast())
            let sw = this.map.getProjection()?.fromLatLngToPoint(bounds.getSouthWest()) 
            if (ne && sw) {
                let worldCoordWidth = Math.abs(ne.x - sw.x)
                let worldCoordHeight = Math.abs(ne.y - sw.y)
                let fitPadding = 40
                for (let zoom = maxZoom; zoom >= minZoom; --zoom) { 
                    if (worldCoordWidth * (1 << zoom) + 2 * fitPadding < this.map.getDiv().clientWidth && 
                        worldCoordHeight * (1 << zoom) + 2 * fitPadding < this.map.getDiv().clientHeight) {
                        return zoom
                    }
                }
            }
        }
        return 10
    }

    start(el: HTMLDivElement) {
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
            const zoomToFit = this.getZoomByBounds(bounds)
            console.log(zoomToFit)
            this.map.fitBounds(bounds)
            this.zoomTo(zoomToFit)
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
