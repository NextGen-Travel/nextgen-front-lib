import { LatLng } from '../../libraries/maps/types';
import { MapMarker } from '../../libraries/maps/common/marker';
import { MarkerAttr, RouteAttr } from '../../libraries/maps/types';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    height: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /** 可以指定使用哪個地圖，如果不指定系統會從環境判定 */
    mode: {
        type: PropType<"google" | "amap">;
        required: false;
        default: () => "google" | "amap";
    };
    zoom: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    center: {
        type: PropType<LatLng>;
        required: true;
    };
    markers: {
        type: PropType<MarkerAttr[]>;
        required: false;
        default: () => never[];
    };
    routes: {
        type: PropType<RouteAttr[]>;
        required: false;
        default: () => never[];
    };
}, {
    fitView: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    move: (_latlng: LatLng) => true;
    click: (_latlng: LatLng) => true;
    clickMarker: (_marker: MapMarker) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /** 可以指定使用哪個地圖，如果不指定系統會從環境判定 */
    mode: {
        type: PropType<"google" | "amap">;
        required: false;
        default: () => "google" | "amap";
    };
    zoom: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    center: {
        type: PropType<LatLng>;
        required: true;
    };
    markers: {
        type: PropType<MarkerAttr[]>;
        required: false;
        default: () => never[];
    };
    routes: {
        type: PropType<RouteAttr[]>;
        required: false;
        default: () => never[];
    };
}>> & {
    onClick?: ((_latlng: LatLng) => any) | undefined;
    onMove?: ((_latlng: LatLng) => any) | undefined;
    onClickMarker?: ((_marker: MapMarker) => any) | undefined;
}, {
    mode: "google" | "amap";
    height: string;
    zoom: number;
    markers: MarkerAttr[];
    routes: RouteAttr[];
}, {}>;
export default _default;
