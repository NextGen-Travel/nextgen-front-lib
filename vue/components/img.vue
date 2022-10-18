<template>
    <div v-if="state.loading">
        <v-skeleton-loader :style="skeletonStyle" :type="avatar ? 'avatar' : 'image'"></v-skeleton-loader>
    </div>
    <div v-else-if="self.hasListener('click')" style="cursor: pointer;" class="component-img-basic" :style="state.style" @click="click">
        <slot></slot>
    </div>
    <div v-else class="component-img-basic" :style="state.style">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { VueSelf } from '../self'
import { PropType } from 'vue'
import { StyleString, Resource } from 'power-helper'
import { useVueHooks, useVueOptions } from '../../core'

export default {
    name: 'ng-img',
    props: {
        width: {
            type: String as PropType<string>,
            required: false,
            default: () => null
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
            type: String as PropType<string>,
            required: false
        }
    },
    emits: {
        click: () => true
    },
    setup(props, { emit }) {
        const { notFoundImage, staticUrl } = useVueOptions()
        const { reactive, computed, watch, onMounted } = useVueHooks()
        const self = VueSelf.use()
        const resource = new Resource({
            def: path => `${staticUrl}/${path}`
        })
        const notFound = resource.url(notFoundImage)

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
            style.set('borderRadius', props.radius)
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

        const click = () => {
            emit('click')
        }

        const update = () => {
            let image = new Image()
            let target = props.src ? resource.url(props.src) : notFound
            image.addEventListener('error', () => {
                state.src = notFound
                state.loading = false
                loadStyle(300, 200)
            })
            image.addEventListener('load', () => {
                state.src = target
                state.loading = false
                loadStyle(image.width, image.height)
            })
            image.src = target
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

        return {
            self,
            state,
            click,
            skeletonStyle
        }
    }
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
