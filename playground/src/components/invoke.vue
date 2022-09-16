<template>
    <div>
        <v-row no-gutters class="pa-2">
            <v-col cols="8" class="pa-2">
                <div class="elevation-2">
                    <Editor v-model="state.code" :readonly="false"></Editor>
                </div>
            </v-col>
            <v-col cols="4" class="pa-2">
                <v-btn block color="success" @click="invoke" :loading="state.loading">調用</v-btn>
                <div class="elevation-2 mt-4 pa-4" style="height: 428px; overflow: auto">
                    <div v-if="state.results.length === 0">無結果</div>
                    <div v-for="result of state.results">
                        <div>{{ result.time }}</div>
                        <pre>{{ result.content }}</pre>
                        <v-divider class="mt-4"></v-divider>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
import Editor from '@/components/editor.vue'
import { useSelf } from '@/hooks/self'

const self = useSelf()

// =================
//
// defined
//

const props = defineProps({
    code: {
        type: String,
        required: false,
        default: () => ''
    },
    context: {
        type: Object,
        requried: false,
        default: () => ({})
    }
})

// =================
//
// state
//

const state = self.data({
    code: `const { log } = core\n` + props.code,
    loading: false,
    results: []
})

// =================
//
// methods
//

const invoke = async() => {
    state.results = []
    state.loading = true
    const handler = async() => {
        const context = props.context
        const core = {
            log: (...items) => {
                for (let item of items) {
                    let result
                    try {
                        result = JSON.stringify(item, null, 4)
                    } catch (error) {
                        result = item
                    }
                    state.results.push({
                        time: (new Date).toISOString(),
                        content: result
                    })
                }
            }
        }
        await eval(`(async() => {
            ${state.code}
        })()`)
        state.loading = false
    }
    await handler()
}
</script>
