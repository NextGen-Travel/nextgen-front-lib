<template>
    <div v-if="state.content">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-if="mode === 'html'" v-html="state.content"></div>
        <div v-if="mode === 'text'" v-text="state.content"></div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-if="mode === 'markdown'" class="markdown-body bg-transparent" v-html="state.content"></div>
    </div>
</template>

<script lang="ts" setup>
import 'highlight.js/styles/github.css'
import xss from 'xss'
import css from 'highlight.js/lib/languages/css'
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
import { marked, Renderer } from 'marked'
import { watch, onMounted, reactive, PropType } from 'vue'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', html)
hljs.registerLanguage('css', css)

// =================
//
// defined
//

const props = defineProps({
    content: {
        type: String,
        required: true
    },
    langRender: {
        type: Function as PropType<(_code: string, _lang: string) => string>,
        required: false,
        default: null
    },
    mode: {
        type: String as PropType<'markdown' | 'text' | 'html'>,
        required: false,
        default: () => 'markdown'
    }
})

// =================
//
// state
//

const state = reactive({
    content: ''
})

// =================
//
// mounted
//

onMounted(() => {
    render()
})

// =================
//
// watch
//

watch([
    () => props.content,
    () => props.mode
], () => {
    render()
})

// =================
//
// methods
//

const render = async() => {
    if (props.mode === 'markdown') {
        const renderer = new Renderer()
        // 移除所有符號轉成 -
        const slugify = (str: string) => {
            return str
                .toLowerCase()
                .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g, '-')
                .replace(/^-+|-+$/g, '')
        }
        renderer.code = (code, lang) => {
            const validLanguage = lang && hljs.getLanguage(lang)
            const highlightedCode = validLanguage ? hljs.highlight(lang, code).value : hljs.highlightAuto(code).value
            return `<pre><code class="hljs ${validLanguage ? `language-${lang}` : ''}">${highlightedCode}</code></pre>`
        }
        renderer.heading = (text, level, raw) => {
            return `<h${level} style="scroll-margin-top: 128px" id="${slugify(raw)}">${text}</h${level}>\n`
        }
        const text = await marked(props.content, {
            renderer
        })
        state.content = xss(text)
    } else {
        state.content = xss(props.content)
    }
}

</script>

<style lang="scss" scoped>
.my-content:deep {
    img {
        max-width: 100%;
    }
    iframe {
        width: 100%;
    }
}
</style>
