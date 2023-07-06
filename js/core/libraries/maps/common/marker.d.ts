import { NgAMap } from '../amap';
import { GoogleMap } from '../google';
import { Event } from 'power-helper';
import { LatLng, MarkerAttr } from '../types';
type Channels = {
    click: any;
};
export declare class MapMarker extends Event<Channels> {
    id?: string;
    icon?: string;
    aMap?: NgAMap;
    aMapMarker?: AMap.Marker;
    googleMap?: GoogleMap;
    googleMarker?: google.maps.Marker;
    googleInfowindow?: google.maps.InfoWindow;
    constructor(map: GoogleMap | NgAMap, params: MarkerAttr);
    getInMapMarkers(): MapMarker[];
    hideLabel(): void;
    hasLabel(): boolean;
    setLabel(label: string): void;
    remove(): void;
    moveTo(position: LatLng): void;
    getPosition(): {
        lat: number;
        lng: number;
    };
}
export {};
