<template>
    <div>
        <Block
            lang="javascript"
            :title="basic.title"
            :desc="basic.desc"
            :code="basic.code">
            <Invoke :context="injectContext" :code="basic.invoke"></Invoke>
        </Block>
        <v-divider class="mb-4 mt-6"></v-divider>
        <Block
            lang="javascript"
            :title="forStrapi.title"
            :desc="forStrapi.desc"
            :code="forStrapi.code">
        </Block>
    </div>
</template>

<script lang="ts" setup>
import Axios from 'axios'
import Block from '@/components/block.vue'
import Invoke from '@/components/invoke.vue'
import { toCode } from '@/utils/code'
import { useSelf } from '@/hooks/self'
import { fetchAll } from 'nextgen-front-lib/utils/fetch'

const self = useSelf()
const injectContext = {
    Axios,
    fetchAll
}

// =================
//
// state
//

const basic = self.data({
    title: 'Basic',
    desc: '基礎的使用方式，現階段最多執行 100 次。',
    data: {},
    invoke: toCode(`
        const { fetchAll, Axios } = context
        const result = await fetchAll({
            pick: result => result.Data,
            done: result => result.Next !== true,
            fetch: async(page) => {
                const url = 'https://data.coa.gov.tw/api/v1/PetLoseList/?Page='
                const result = await Axios.get(url + page)
                return result.data
            }
        })
        log('回傳筆數：' + result.length)
    `),
    code: toCode(`
        import { fetchAll } form 'nextgen-front-lib/utils/fetch'
        const result = await fetchAll({
            // 獲取要回傳的結果
            pick: result => Array<any>,
            // 從 response 中判定是否下一頁
            done: result => boolean,
            // 執行獲取
            fetch: page => Promise<any>
        })
    `)
})

const forStrapi = self.data({
    title: 'For Strapi',
    desc: '基於 Strapi 回傳資料獲取全部資料，內部實作了是否有下一頁的邏輯。',
    data: {},
    code: toCode(`
        import { fetchAllForStrapi } form 'nextgen-front-lib/utils/fetch'
        const result = await fetchAllForStrapi(async(page: number) => {
            const result = await gql.query('StoresDocument', { page })
            return result.stores
        })
    `)
})

// =================
//
// methods
//

const showAlert = (name: string) => {
    alert(`Hello ${name}.`)
}

</script>
