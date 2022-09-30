import { flow } from 'power-helper'

export const defineFields = <K extends string>(items: {
    key?: K
    label: string
    formatter?: (_value: any, _key: string, _item: any, _index: number) => any
    optionShow?: boolean
}[]) => {
    return items.map(e => {
        return {
            ...e,
            key: e.key == null ? flow.createUuid() : e.key,
            formatter: e.formatter == null ? (v: any) => v : e.formatter,
            optionShow: e.optionShow == null ? false : e.optionShow
        }
    })
}
