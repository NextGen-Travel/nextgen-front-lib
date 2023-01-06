import { flow } from 'power-helper'

type Field = {
    key: string
    label: () => string
    style: (_value: any, _key: string, _item: any, _index: number) => string
    formatter: (..._args: any[]) => any
    optionShow: boolean
}

export const defineFields = <K extends string>(items: {
    key?: K
    label: string | (() => string)
    style?: (_value: any, _key: string, _item: any, _index: number) => any
    formatter?: (_value: any, _key: string, _item: any, _index: number) => any
    optionShow?: boolean
}[]): Field[] => {
    return items.map(e => {
        return {
            key: e.key == null ? flow.createUuid() : e.key,
            label: typeof e.label === 'string' ? (() => e.label as string) : e.label,
            style: e.style == null ? (() => '') : e.style,
            formatter: e.formatter == null ? (v: any) => v : e.formatter,
            optionShow: e.optionShow == null ? false : e.optionShow
        }
    })
}
