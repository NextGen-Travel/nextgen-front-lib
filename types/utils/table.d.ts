type Field = {
    key: string;
    label: () => string;
    sortBtn: boolean;
    textAlign: 'start' | 'center' | 'end';
    style: (_value: any, _key: string, _item: any, _index: number) => string;
    formatter: (..._args: any[]) => any;
    optionShow: boolean;
};
export declare const defineFields: <K extends string>(items: {
    key?: K | undefined;
    label: string | (() => string);
    sortBtn?: boolean | undefined;
    style?: ((_value: any, _key: string, _item: any, _index: number) => any) | undefined;
    textAlign?: "start" | "end" | "center" | undefined;
    formatter?: ((_value: any, _key: string, _item: any, _index: number) => any) | undefined;
    optionShow?: boolean | undefined;
}[]) => Field[];
export {};
