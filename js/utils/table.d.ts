export declare const defineFields: <K extends string>(items: {
    key?: K | undefined;
    label: string;
    style?: ((_value: any, _key: string, _item: any, _index: number) => any) | undefined;
    formatter?: ((_value: any, _key: string, _item: any, _index: number) => any) | undefined;
    optionShow?: boolean | undefined;
}[]) => {
    key: string;
    style: (_value: any, _key: string, _item: any, _index: number) => any;
    formatter: (_value: any, _key: string, _item: any, _index: number) => any;
    optionShow: boolean;
    label: string;
}[];
