import { MapRoute } from './common/route';
import { MapMarker } from './common/marker';
import { Event } from 'power-helper';
import { LatLng, MarkerAttr, RouteAttr, NavigationParams } from './types';
type GoogleMapConfig = {
    apiKey: string;
};
type Channels = {
    move: LatLng;
    click: LatLng;
    clickMarker: MapMarker;
};
export declare class GoogleMap extends Event<Channels> {
    map?: google.maps.Map;
    routes: MapRoute[];
    markers: MapMarker[];
    static getNavigationUrl(params: NavigationParams): string;
    static install(config: GoogleMapConfig): Promise<void>;
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
