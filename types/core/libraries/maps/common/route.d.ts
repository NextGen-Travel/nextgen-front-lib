/// <reference types="@types/google.maps" />
import { NgAMap } from '../amap';
import { RouteAttr } from '../types';
import { GoogleMap } from '../google';
import { Event } from 'power-helper';
type Channels = {
    failed: {
        status: any;
    };
};
export declare class MapRoute extends Event<Channels> {
    id?: string;
    aMap?: NgAMap;
    aMapDriving?: any;
    googleMap?: GoogleMap;
    googleDirectionsService?: google.maps.DirectionsService;
    googleDirectionsRenderer?: google.maps.DirectionsRenderer;
    constructor(map: GoogleMap | NgAMap, params: RouteAttr);
    /**
     * @zh 刪除路線
     * @en Remove route
     */
    remove(): void;
    clearRenderer(): void;
    update(params: Omit<RouteAttr, 'id'>): void;
}
export {};
