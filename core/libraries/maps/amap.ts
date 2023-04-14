import { MapRoute } from './common/route'
import { MapMarker } from './common/marker'
import { element, Event } from 'power-helper'
import { serviceException } from '../../../core/error'
import { NavigationParams, LatLng, MarkerAttr, RouteAttr } from './types'

type AMapConfig = {
    apiKey: string
    serviceHost?: string
    securityJsCode?: string
}

type Channels = {
    move: LatLng
    click: LatLng
    clickMarker: MapMarker
}

const exception = serviceException.checkout('AMap')

function checkInstalled() {
    if (!window.__ng_state.amap?.installed) {
        throw exception.create('amap not installed.')
    }
}

export class NgAMap extends Event<Channels> {
    map?: AMap.Map
    routes: MapRoute[] = []
    markers: MapMarker[] = []

    static async getNavigationUrl(params: NavigationParams) {
        const { startName, startLng, startLat, endName, endLng, endLat } = params;
        const url = new URL('https://uri.amap.com/navigation')
        url.searchParams.set('from', `${startLng},${startLat},${startName}`)
        url.searchParams.set('to', `${endLng},${endLat},${endName}`)
        url.searchParams.set('mode', 'car')
        url.searchParams.set('policy', '1')
        url.searchParams.set('src', 'mypage')
        url.searchParams.set('coordinate', 'gaode')
        url.searchParams.set('callnative', '1')
        return url.href
    }

    static async install(config: AMapConfig) {
        if (window.__ng_state.amap == null) {
            window.__ng_state.amap = {
                installed: false
            }
        }
        if (window.__ng_state.amap.installed === false) {
            window.__ng_state.amap.installed = true
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window._AMapSecurityConfig = {
                serviceHost: config.serviceHost,
                securityJsCode: config.securityJsCode
            }
            await element.importScript(`https://webapi.amap.com/maps?v=2.0&key=${config.apiKey}`)
        }
    }

    static isInstalled() {
        return !!window.__ng_state.amap?.installed
    }

    constructor() {
        super()
        checkInstalled()
    }

    start(el: HTMLDivElement) {
        if (this.map == null) {
            this.map = new window.AMap.Map(el, {
                zoom: 10
            })
            this.map.on('click', (event) => {
                this.emit('click', {
                    lat: event.lnglat.lat,
                    lng: event.lnglat.lng
                })
            })
            this.map.on('mapmove', () => {
                if (this.map) {
                    this.emit('move', {
                        lat: this.map.getCenter().lat,
                        lng: this.map.getCenter().lng
                    })
                }
            })
        }
    }

    moveTo(position: LatLng) {
        this.map?.setCenter([position.lat, position.lng])
    }

    zoomTo(zoom: number) {
        this.map?.setZoom(zoom)
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
            this.map.setFitView()
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
        const route = new MapRoute(this as any, params)
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
