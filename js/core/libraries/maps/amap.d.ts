import { MapRoute } from './common/route';
import { MapMarker } from './common/marker';
import { Event } from 'power-helper';
import { NavigationParams, LatLng, MarkerAttr, RouteAttr } from './types';
type AMapConfig = {
    apiKey: string;
    serviceHost?: string;
    securityJsCode?: string;
};
type Channels = {
    move: LatLng;
    click: LatLng;
    clickMarker: MapMarker;
};
export declare class NgAMap extends Event<Channels> {
    map?: AMap.Map;
    routes: MapRoute[];
    markers: MapMarker[];
    static getNavigationUrl(params: NavigationParams): string;
    static install(config: AMapConfig): Promise<void>;
    static isInstalled(): boolean;
    constructor();
    start(el: HTMLDivElement, options: {
        zoom?: number;
        center?: LatLng;
    }): void;
    moveTo(position: LatLng): void;
    zoomTo(zoom: number): void;
    close(): void;
    fitView(): void;
    addMarker(params: MarkerAttr): MapMarker;
    removeAllMarker(): void;
    reloadMarkers(items: MarkerAttr[]): void;
    addRoute(params: RouteAttr): MapRoute;
    removeAllRoute(): void;
    reloadRoutes(items: RouteAttr[]): void;
}
export {};
