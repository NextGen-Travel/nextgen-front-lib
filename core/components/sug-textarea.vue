<template>
    <div style="position: relative;">
        <VCard
            v-if="showActions && hasRecommand"
            position="absolute"
            class="pa-1"
            style="top: -24px; left: 16px; z-index: 2;">
            <VRow dense class="flex-nowrap" align="center">
                <VCol v-if="recommandTexts.length > 1" cols="auto">
                    <VBtn
                        variant="text"
                        icon="mdi-chevron-left"
                        size="28"
                        @click="prevRecommand">
                    </VBtn>
                </VCol>
                <VCol v-if="recommandTexts.length > 1" cols="auto">
                    {{ state.recommandIndex + 1 }} / {{ recommandTexts.length }}
                </VCol>
                <VCol v-if="recommandTexts.length > 1" cols="auto">
                    <VBtn
                        variant="text"
                        icon="mdi-chevron-right"
                        size="28"
                        @click="nextRecommand">
                    </VBtn>
                </VCol>
                <VCol v-if="recommandTexts.length > 1" cols="auto">
                    |
                </VCol>
                <VCol cols="auto">
                    <VBtn
                        variant="text"
                        icon="mdi-draw"
                        size="28"
                        @click="fill">
                    </VBtn>
                </VCol>
            </VRow>
        </VCard>
        <VTextarea
            v-if="hasRecommand"
            v-bind="textareaProps"
            :model-value="recommandText + (autocompleteKey ? ` (${autocompleteKey})` : '')"
            class="sug-content w-100"
            hide-details
            :counter="undefined"
            readonly>
        </VTextarea>
        <VTextarea ref="textInput" v-bind="textareaProps" v-model="modelValue"></VTextarea>
    </div>
</template>

<script lang="ts" setup>
import { ElementListenerGroup } from 'power-helper'
import { PropType, computed, onMounted, ref, onUnmounted, reactive, watch } from 'vue'

type TextareaProps = {
    flat: boolean
    reverse: boolean
    variant: 'filled' | 'outlined' | 'plain' | 'underlined' | 'solo' | 'solo-inverted' | 'solo-filled'
    error: boolean
    active: boolean
    direction: 'horizontal' | 'vertical'
    style: string
    autofocus: boolean
    disabled: boolean
    readonly: boolean | null
    messages: string | readonly string[]
    density: null | 'default' | 'comfortable' | 'compact'
    clearIcon: string
    focused: boolean
    errorMessages: string | readonly string[] | null
    maxErrors: string | number
    rules: any[]
    hideSpinButtons: boolean
    persistentHint: boolean
    clearable: boolean
    dirty: boolean
    persistentClear: boolean
    singleLine: boolean
    persistentPlaceholder: boolean
    persistentCounter: boolean
    autoGrow: boolean
    noResize: boolean
    rows: string | number
    id: string
    name: string
    color: string
    loading: string | boolean
    label: string
    prefix: string
    class: any
    placeholder: string
    theme: string
    counter: string | number | true
    rounded: string | number | boolean
    modelValue: any
    bgColor: string
    prependIcon: string
    appendIcon: string
    baseColor: string
    appendInnerIcon: string
    prependInnerIcon: string
    validateOn: 'lazy' | ('input' | 'blur' | 'submit') | 'input lazy' | 'blur lazy' | 'submit lazy' | 'lazy input' | 'lazy blur' | 'lazy submit'
    validationValue: any
    centerAffix: boolean
    hint: string
    hideDetails: boolean | 'auto'
    suffix: string
    counterValue: ((_value: any) => number)
    modelModifiers: Record<string, boolean>
    maxRows: string | number
}

// =================
//
// refs
//

const textInput = ref<{ $el: HTMLTextAreaElement }>()

// =================
//
// defined
//

const modelValue = defineModel({
    type: String,
    required: false,
    default: ''
})

const props = defineProps({
    autocompleteKey: {
        type: String,
        required: false,
        default: null
    },
    sugTexts: {
        type: Array as PropType<string[]>,
        required: false,
        default: () => []
    },
    showActions: {
        type: Boolean,
        required: false,
        default: false
    },
    textareaProps: {
        type: Object as PropType<Partial<TextareaProps>>,
        requreid: false,
        default: () => ({})
    }
})

// =================
//
// state
//

const state = reactive({
    recommandIndex: 0
})

// =================
//
// element listener group
//

const elg = new ElementListenerGroup<HTMLTextAreaElement>()

elg.add('keydown', (event) => {
    if (props.autocompleteKey == null) {
        return
    }
    if (event.key === props.autocompleteKey && hasRecommand.value) {
        event.preventDefault()
        fill()
    }
})

onMounted(() => {
    if (textInput.value) {
        elg.observe(textInput.value.$el)
    }
})

onUnmounted(() => {
    elg.clear()
})

// =================
//
// componted
//

const recommandTexts = computed(() => {
    let texts: string[] = []
    if (!modelValue.value) {
        return []
    }
    for (let text of props.sugTexts) {
        if (text !== modelValue.value && text.startsWith(modelValue.value)) {
            texts.push(text)
        }
    }
    return texts
})

const recommandText = computed(() => {
    const text = recommandTexts.value[state.recommandIndex]
    return text || ''
})

const hasRecommand = computed(() => {
    return recommandTexts.value.length !== 0
})

// =================
//
// watch
//

watch(() => recommandTexts.value.length, () => {
    state.recommandIndex = 0
})

// =================
//
// methods
//

const fill = () => {
    modelValue.value = recommandText.value
}

const nextRecommand = () => {
    state.recommandIndex += 1
    if (state.recommandIndex >= recommandTexts.value.length) {
        state.recommandIndex = 0
    }
}

const prevRecommand = () => {
    state.recommandIndex -= 1
    if (state.recommandIndex < 0) {
        state.recommandIndex = recommandTexts.value.length - 1
    }
}

</script>

<style lang="scss" scoped>
.sug-content {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
    z-index: 1;
}

.sug-content:deep .v-field {
    background: transparent !important;
    box-shadow: none !important;
}
</style>
