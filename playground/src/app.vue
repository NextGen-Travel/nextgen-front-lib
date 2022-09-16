<template>
    <v-app>
        <v-navigation-drawer app>
            <v-list nav dense>
                <v-list-group v-for="(nav, key) in state.navs" :key="key" :value="true" no-action>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>{{ key }}</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item  v-for="item in nav" :key="item.name" link @click="item.click">
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app></v-app-bar>
        <v-main>
            <v-container fluid>
                <h1>{{ state.title }}</h1>
                <v-divider class="mt-2 mb-3"></v-divider>
                <component v-if="state.doc && state.show" :is="state.doc"></component>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts" setup>
import { useSelf } from '@/hooks/self'
import { watch } from 'vue'

const self = useSelf()

// =================
//
// state
//

const state = self.data({
    doc: '',
    show: false,
    title: '',
    navs: {
        Components: [
            {
                name: 'table',
                click: () => {
                    state.doc = 'doc-component-table'
                    state.title = 'Component Table'
                }
            },
            {
                name: 'pagination',
                click: () => {
                    state.doc = 'doc-component-pagination'
                    state.title = 'Component Pagination'
                }
            },
            {
                name: 'dialog',
                click: () => {
                    state.doc = 'doc-component-dialog'
                    state.title = 'Component Dialog'
                }
            }
        ],
        Utils: [
            {
                name: 'fetch all',
                click: () => {
                    state.doc = 'doc-util-fetch-all'
                    state.title = 'Util Fetch All'
                }
            }
        ]
    }
})

watch(() => state.doc, () => {
    state.show = false
    self.nextTick(() => {
        state.show = true
    })
})

</script>
