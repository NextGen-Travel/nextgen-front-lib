<template>
    <div v-if="skeleton === 'always' || state.loading" :style="skeletonStyle">
        <Skeleton v-if="skeleton !== 'hide'" :avatar="avatar"></Skeleton>
    </div>
    <div v-else-if="self.hasListener('click')" ref="wrapper" style="cursor: pointer;" class="component-img-basic" :style="state.style" @click="click">
        <slot></slot>
        <OverlayLoading :model-value="loading"></OverlayLoading>
    </div>
    <div v-else ref="wrapper2" class="component-img-basic" :style="state.style">
        <slot></slot>
        <OverlayLoading :model-value="loading"></OverlayLoading>
    </div>
</template>

<script lang="ts" setup>
import OverlayLoading from './overlay-loading.vue'
import Skeleton from './skeleton.vue'
import { VueSelf } from '../self'
import { useLibOptions } from '../../index'
import { StyleString, Resource, JobQueues, ElementListenerGroup, Debounce } from 'power-helper'
import { PropType, ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'

const { notFoundImage, staticUrl } = useLibOptions()

const self = VueSelf.use()

const jobQueues = new JobQueues({
    concurrentExecutions: 1
})

const debounce = new Debounce({
    delay: 100
})

const resource = new Resource({
    def: path => `${staticUrl}/${path}`
})

const notFound = resource.url(notFoundImage)

// =================
//
// define
//

const props = defineProps({
    skeleton: {
        type: String as PropType<'hide' | 'auto' | 'always'>,
        required: false,
        default: () => 'auto'
    },
    width: {
        type: String as PropType<string>,
        required: false,
        default: () => null
    },
    loading: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: () => false
    },
    maxWidth: {
        type: String as PropType<string>,
        required: false,
        default: () => null
    },
    height: {
        type: String as PropType<string>,
        required: false,
        default: () => null
    },
    maxHeight: {
        type: String as PropType<string>,
        required: false,
        default: () => null
    },
    radius: {
        type: String as PropType<string>,
        required: false,
        default: () => null
    },
    avatar: {
        type: Boolean as PropType<boolean>,
        default: () => false
    },
    cover: {
        type: Boolean as PropType<boolean>,
        default: () => true
    },
    src: {
        type: null as unknown as PropType<string | File>,
        required: false,
        default: () => ''
    },
    block: {
        type: Boolean,
        required: false,
        default: () => false
    },
    ratio: {
        type: Boolean,
        required: false,
        default: () => false
    },
    square: {
        type: Boolean,
        required: false,
        default: () => false
    }
})

const emit = defineEmits({
    onClick: () => true
})

// =================
//
// refs
//

const wrapper = ref<HTMLDivElement>()
const wrapper2 = ref<HTMLDivElement>()

// =================
//
// state
//

const state = reactive({
    src: '',
    style: '',
    image: null as null | HTMLImageElement,
    loading: true,
    elementListenerGroup: null as null | ElementListenerGroup<Window>
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
    style.set('overflow', 'hidden')
    style.set('borderRadius', props.radius)
    style.set('display', props.block ? 'block' : 'inline-block')
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

onMounted(() => {
    state.elementListenerGroup = new ElementListenerGroup(window)
    state.elementListenerGroup.add('resize', () => debounce.input(''))
    update()
    debounce.on('trigger', () => {
        loadStyle(state.image?.width, state.image?.height)
    })
})

onUnmounted(() => {
    debounce.close()
    if (state.elementListenerGroup) {
        state.elementListenerGroup.clear()
    }
})

// =================
//
// methods
//

const click = () => {
    emit('onClick')
}

const update = () => {
    jobQueues.push('update', () => {
        return new Promise((resolve) => {
            state.image = new Image()
            let target = props.src ? resource.url(props.src) : notFound
            state.image.addEventListener('error', () => {
                state.src = notFound
                state.loading = false
                loadStyle(300, 200)
                resolve(null)
            })
            state.image.addEventListener('load', () => {
                state.src = target
                state.loading = false
                loadStyle(state.image?.width, state.image?.height)
                resolve(null)
            })
            state.image.src = target
        })
    })
}

const loadStyle = (width?: number, height?: number) => {
    let code = new StyleString()
    code.set('width', props.width, `${width}px`)
    code.set('maxWidth', props.maxWidth)
    code.set('height', props.height)
    code.set('maxHeight', props.maxHeight)
    code.set('borderRadius', props.radius)
    if (props.cover) {
        code.set('backgroundSize', 'cover')
    }
    if (props.height == null) {
        code.set('height', `${height}px`)
    }
    if (props.avatar) {
        code.set('borderRadius', '1000em')
    }
    if (props.block) {
        code.set('display', 'block')
    }
    if (state.src) {
        code.set('backgroundImage', `url('${state.src}')`)
    }
    state.style = code.join()
    if (props.square) {
        self.nextTick(() => {
            let width = getContentWidth()
            if (width) {
                code.set('height', `${width}px`)
                state.style = code.join()
            }
        })
    }
    if (props.ratio) {
        self.nextTick(() => {
            let contentWidth = getContentWidth()
            if (height && width) {
                let r = contentWidth / width
                code.set('height', `${height * r}px`)
                state.style = code.join()
            }
        })
    }
}

const getContentWidth = () => {
    return wrapper2.value?.clientWidth || wrapper.value?.clientWidth || 0
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
