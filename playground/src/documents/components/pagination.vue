<template>
    <div>
        <Block :title="basic.title" :desc="basic.desc" :code="basic.code">
            <ng-pagination
                scroll-to="top"
                v-model="basic.data.page"
                :pre-page="10"
                :total="100"
            ></ng-pagination>
        </Block>
        <Block :title="loading.title" :desc="loading.desc" :code="loading.code">
            <ng-pagination
                scroll-to="top"
                v-model="loading.data.page"
                :pre-page="10"
                :total="100"
                :loading="true"
            ></ng-pagination>
        </Block>
    </div>
</template>

<script lang="ts" setup>
import Block from '@/components/block.vue'
import { useSelf } from '@/hooks/self'
import { toVueCode } from '@/utils/code'

const self = useSelf()

// =================
//
// state
//

const basic = self.data({
    title: 'Basic',
    desc: '分頁',
    data: {
        page: 1
    },
    code: toVueCode({
        template: /*html*/`
            <ng-pagination
                scroll-to="top"
                v-model="state.page"
                :pre-page="10"
                :total="100"
            ></ng-pagination>
        `,
        script: /*javascript*/`
            import { reactive } from 'vue'
            const state = reactive({
                page: 1
            })
        `
    })
})

const loading = self.data({
    title: 'Loading',
    desc: '讀取',
    data: {
        page: 1
    },
    code: toVueCode({
        template: /*html*/`
            <ng-pagination
                scroll-to="top"
                v-model="state.page"
                :pre-page="10"
                :total="100"
                :loading="true"
            ></ng-pagination>
        `,
        script: /*javascript*/`
            import { reactive } from 'vue'
            const state = reactive({
                page: 1
            })
        `
    })
})

</script>
