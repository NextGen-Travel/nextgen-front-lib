/**
 * 獲取藥品劑型的命名
 */

export const getDosageFormsName = (key: string, lang: 'zh' = 'zh') => {
    const map: Record<string, Record<typeof lang, string>> = {
        capsule: {
            zh: '膠囊'
        },
        ointment: {
            zh: '軟膏'
        },
        tablet: {
            zh: '藥片'
        },
        potion: {
            zh: '藥水'
        },
        granules: {
            zh: '顆粒'
        },
        patches: {
            zh: '貼片'
        },
        inhaler: {
            zh: '吸入劑'
        },
        spray: {
            zh: '外用噴霧'
        },
        injection: {
            zh: '針劑'
        },
        suppository: {
            zh: '栓劑'
        },
        lotion: {
            zh: '外用藥水'
        }
    }
    return map[key] ? map[key][lang] : key
}

/**
 * 將藥品劑型轉成選項
 */

export const dosageFormsToOptions = async(keys: string, lang: 'zh' = 'zh') => {
    const output: {
        text: string
        value: string
    }[] = []
    for (let key of keys) {
        output.push({
            text: getDosageFormsName(key, lang),
            value: key
        })
    }
    return output
}
