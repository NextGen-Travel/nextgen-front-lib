export declare const inChina: () => Promise<boolean>;
export declare const getGeoLocation: () => Promise<{
    countryCode: string;
    lat: number;
    lng: number;
}>;
