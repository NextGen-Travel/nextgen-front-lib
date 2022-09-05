<template>
    <div v-if="state.loading">
        <v-skeleton-loader :style="skeletonStyle" :type="props.avatar ? 'avatar' : 'image'"></v-skeleton-loader>
    </div>
    <div v-else class="component-img-basic" :style="state.style">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { StyleString } from 'power-helper'
import { useVueHooks, useVueOptions } from '../../core'

const { notFoundImage, staticUrl } = useVueOptions()
const { reactive, computed, defineProps, watch, onMounted } = useVueHooks()

// =================
//
// props
//

const props = defineProps({
    width: String,
    maxWidth: String,
    height: String,
    maxHeight: String,
    radius: String,
    subject: String,
    avatar: {
        type: Boolean,
        default: () => false
    },
    cover: {
        type: Boolean,
        default: () => true
    },
    src: {
        type: String,
        required: false
    }
})

// =================
//
// state
//

const state = reactive({
    src: '',
    style: '',
    loading: true
})

// =================
//
// computed
//

const skeletonStyle = computed(() => {
    let style = new StyleString()
    style.set('width', props.width, '100%')
    style.set('height', props.height, '200px')
    style.set('maxWidth', props.maxWidth)
    style.set('maxHeight', props.maxHeight)
    style.set('display', 'inline-block')
    return style.join()
})

// =================
//
// watch
//

watch(() => props.src, () => update())

// =================
//
// mounted
//

onMounted(() => update())

// =================
//
// methods
//

const getStaticPath = (path: string) => {
    if (typeof path !== 'string') {
        return ''
    }
    if (path && path.trim().slice(0, 4) === 'http') {
        return path
    } else if (path.match('base64') && path.trim().slice(0, 5) === 'data:') {
        return path
    } else {
        return `${staticUrl}/${path}`
    }
}

const update = () => {
    let image = new Image()
    image.addEventListener('error', () => {
        state.src = getStaticPath(notFoundImage)
        state.loading = false
        loadStyle(300, 200)
    })
    image.addEventListener('load', () => {
        state.src = props.src ? getStaticPath(props.src) : getStaticPath(notFoundImage)
        state.loading = false
        loadStyle(image.width, image.height)
    })
    image.src = props.src ? getStaticPath(props.src) : getStaticPath(notFoundImage)
}

const loadStyle = (width: number, height: number) => {
    let code = new StyleString()
    code.set('width', props.width)
    code.set('maxWidth', props.maxWidth)
    code.set('height', props.height)
    code.set('maxHeight', props.maxHeight)
    code.set('borderRadius', props.radius)
    if (props.cover) {
        code.set('backgroundSize', 'cover')
    }
    if (props.height == null) {
        code.set('width', `${width}px`)
        code.set('height', `${height}px`)
    }
    if (props.avatar) {
        code.set('borderRadius', '1000em')
    }
    if (state.src) {
        code.set('backgroundImage', `url('${state.src}')`)
    }
    state.style = code.join()
}
</script>

<style lang="scss" scoped>
    .component-img-basic {
        display: inline-block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
    }
</style>
