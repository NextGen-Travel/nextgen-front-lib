import { Stages } from './index';
export declare const config: Record<Stages, {
    organizations: Record<'cas' | 'nextgen', {
        url: string;
        scrmUrl: string;
        endpoint: string;
        dispensingUrl: string;
    }>;
}>;
