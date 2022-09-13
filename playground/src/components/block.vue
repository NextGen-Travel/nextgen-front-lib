<template>
    <div>
        <div class="title">{{ title }}</div>
        <div class="mb-2">{{ desc }}</div>
        <div class="mb-4 elevation-2">
            <slot></slot>
        </div>
        <div class="mb-4 elevation-2">
            <Editor v-if="code" v-model="code" mode="html"></Editor>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Editor from '@/components/editor.vue'

// =================
//
// defined
//

const props = defineProps({
    title: {
        type: String,
        requreid: false,
        default: () => ''
    },
    desc: {
        type: String,
        requreid: false,
        default: () => ''
    },
    code: {
        type: String,
        requreid: false,
        default: () => ''
    }
})

</script>
    