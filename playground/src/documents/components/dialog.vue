<template>
    <div>
        <Block :title="basic.title" :desc="basic.desc" :code="basic.code">
            <div class="pa-3">
                <v-btn color="success" @click="basic.data.dialog = true">打開 Dialog</v-btn>
            </div>
            <ng-dialog v-model="basic.data.dialog" title="我有標題">
                <div>這裡可以放內容</div>
            </ng-dialog>
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
    desc: '帶有標題與關閉視窗的的彈出視窗',
    data: {
        dialog: false
    },
    code: toVueCode({
        template: /*html*/`
            <div class="pa-3">
                <v-btn color="success" @click="state.dialog = true">打開 Dialog</v-btn>
            </div>
            <ng-dialog v-model="state.dialog" title="我有標題">
                <div>這裡可以放內容</div>
            </ng-dialog>
        `,
        script: /*javascript*/`
            import { reactive } from 'vue'
            const state = reactive({
                dialog: false
            })
        `
    })
})

</script>
