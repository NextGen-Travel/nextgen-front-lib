<template>
    <div>
        <Block :title="basic.title" :desc="basic.desc" :code="basic.code">
            <ng-table
                filterTitle="過濾"
                :fields="basic.data.fields"
                :items="basic.data.items"
                :filterShow="true">
                <template #t-actions="{ item }">
                    <v-btn icon @click="showAlert(item.name)">
                        <v-icon>mdi-music-note</v-icon>
                    </v-btn>
                </template>
            </ng-table>
        </Block>
        <Block :title="clickItem.title" :desc="clickItem.desc" :code="clickItem.code">
            <ng-table
                :fields="clickItem.data.fields"
                :items="clickItem.data.items"
                @click-item="showHelloUser">
            </ng-table>
        </Block>
    </div> 
</template>

<script lang="ts" setup>
import Block from '@/components/block.vue'
import { useSelf } from '@/hooks/self'
import { toVueCode } from '@/utils/code'
import { defineFields } from 'nextgen-front-lib/utils/table'

const self = useSelf()

// =================
//
// state
//

const basic = self.data({
    title: 'Basic',
    desc: 'ouo',
    data: {
        fields: defineFields([
            {
                key: 'name',
                label: '姓名'
            },
            {
                key: 'age',
                label: '年齡',
                optionShow: true
            },
            {
                key: 'isAdult',
                label: '已成年',
                formatter: (value, key, item) => item.age >= 18 ? '是' : '否'
            },
            {
                key: 'actions',
                label: '動作'
            }
        ]),
        items: [
            {
                name: '小白',
                age: 20
            },
            {
                name: '小明',
                age: 15
            }
        ]
    },
    code: toVueCode({
        template: /*html*/`
            <ng-table
                filterTitle="過濾"
                :filterShow="true"
                :fields="basic.data.fields"
                :items="basic.data.items">
                <template #t-actions="{ item }">
                    <v-btn icon @click="showAlert(item.name)">
                        <v-icon>mdi-music-note</v-icon>
                    </v-btn>
                </template>
            </ng-table>
        `,
        script: /*javascript*/`
            import { reactive } from 'vue'
            const state = reactive({
                fields: defineFields([
                    {
                        key: 'name',
                        label: '姓名'
                    },
                    {
                        key: 'age',
                        label: '年齡',
                        optionShow: true
                    },
                    {
                        key: 'isAdult',
                        label: '已成年',
                        formatter: (value, key, item) => item.age >= 18 ? '是' : '否'
                    },
                    {
                        key: 'actions',
                        label: '動作'
                    }
                ]),
                items: [
                    {
                        name: '小白',
                        age: 20
                    },
                    {
                        name: '小明',
                        age: 18
                    }
                ]
            })
            const showAlert = (name: string) => {
                alert(\`Hello \${name}.\`)
            }
        `
    })
})

const clickItem = self.data({
    title: 'Click Item',
    desc: '點擊欄位',
    data: {
        fields: defineFields([
            {
                key: 'name',
                label: '姓名'
            },
            {
                key: 'age',
                label: '年齡'
            }
        ]),
        items: [
            {
                name: '小白',
                age: 20
            },
            {
                name: '小明',
                age: 15
            }
        ]
    },
    code: toVueCode({
        template: /*html*/`
            <ng-table
                :fields="clickItem.data.fields"
                :items="clickItem.data.items"
                @click-item="showHelloUser">
            </ng-table>
        `,
        script: /*javascript*/`
            import { reactive } from 'vue'
            const state = reactive({
                fields: defineFields([
                    {
                        key: 'name',
                        label: '姓名'
                    },
                    {
                        key: 'age',
                        label: '年齡'
                    }
                ]),
                items: [
                    {
                        name: '小白',
                        age: 20
                    },
                    {
                        name: '小明',
                        age: 18
                    }
                ]
            })
            const showHelloUser = (user) => {
                alert(\`Hello \${user.name}.\`)
            }
        `
    })
})

// =================
//
// methods
//

const showAlert = (name: string) => {
    alert(`Hello ${name}.`)
}

const showHelloUser = (user) => {
    alert(`Hello ${user.name}.`)
}
</script>
