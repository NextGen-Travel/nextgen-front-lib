<template>
    <div v-if="state.loading">
        <v-skeleton-loader :style="skeletonStyle" :type="avatar ? 'avatar' : 'image'"></v-skeleton-loader>
    </div>
    <div ref="wrapper" v-else-if="self.hasListener('click')" style="cursor: pointer;" class="component-img-basic" :style="state.style" @click="click">
        <slot></slot>
        <v-overlay absolute :value="loading" :opacity="0.5">
            <v-progress-circular indeterminate size="32"></v-progress-circular>
        </v-overlay>
    </div>
    <div ref="wrapper2" v-else class="component-img-basic" :style="state.style">
        <slot></slot>
        <v-overlay absolute :value="loading" :opacity="0.5">
            <v-progress-circular indeterminate size="32"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script lang="ts">
import { VueSelf } from '../self'
import { PropType, ref } from 'vue'
import { useVueHooks, useVueOptions } from '../../core'
import { StyleString, Resource, ElementListenerGroup, Debounce } from 'power-helper'

export default {
    name: 'ng-img',
    props: {
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
            type: String as PropType<string>,
            required: false
        },
        square: {
            type: Boolean,
            required: false,
            default: () => false
        }
    },
    emits: {
        click: () => true
    },
    setup(props, { emit }) {
        const { notFoundImage, staticUrl } = useVueOptions()
        const { reactive, computed, watch, onMounted, onUnmounted } = useVueHooks()
        const self = VueSelf.use()
        const debounce = new Debounce({
            delay: 100
        })
        const resource = new Resource({
            def: path => `${staticUrl}/${path}`
        })
        const notFound = resource.url(notFoundImage)

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
            emit('click')
        }

        const update = () => {
            state.image = new Image()
            let target = props.src ? resource.url(props.src) : notFound
            state.image.addEventListener('error', () => {
                state.src = notFound
                state.loading = false
                loadStyle(300, 200)
            })
            state.image.addEventListener('load', () => {
                state.src = target
                state.loading = false
                loadStyle(state.image?.width, state.image?.height)
            })
            state.image.src = target
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
        }

        const getContentWidth = () => {
            return wrapper2.value?.clientWidth || wrapper.value?.clientWidth || 0
        }

        // =================
        //
        // done
        //

        return {
            self,
            state,
            click,
            wrapper,
            wrapper2,
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
