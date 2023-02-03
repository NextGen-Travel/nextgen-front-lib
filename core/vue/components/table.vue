<template>
    <div style="position: relative;">
        <v-table
            ref="table"
            class="elevation-1"
            :class="{
                'component-shadow-right': state.showShadow
            }"
            >
            <thead>
                <tr>
                    <th
                        v-for="(field, index) in showFields"
                        :key="index + 'ff'"
                        class="text-center bg-secondary"
                        :class="{
                            'component-text-nowrap': ['head', 'all'].includes(textNowrap)
                        }">
                        <slot :name="'h-' + field.key" :item="field" :value="field.label()"></slot>
                        <div v-if="!self.hasSlot('h-' + field.key)">{{ field.label() }}</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, ti) in items">
                    <tr
                        :class="{ 'component-twr-is-btn': hasClickItemListener }"
                        :style="rowStyle(item, ti)"
                        @click="clickItme(item)">
                        <td
                            v-for="(field, index) in showFields"
                            class="text-center"
                            :class="{
                                'component-text-nowrap': ['body', 'all'].includes(textNowrap)
                            }"
                            :key="field.key"
                            :style="field.style(getFieldValue(field, item, ti), field.key, item, ti)">
                            <slot
                                :name="'t-' + field.key.replace(/\./g, '-')"
                                :item="item"
                                :value="getFieldValue(field, item, ti)">
                            </slot>
                            <div v-if="self.hasSlot('t-' + field.key.replace(/\./g, '-')) === false">
                                {{ getFieldValue(field, item, ti) }}
                            </div>
                        </td>
                    </tr>
                    <tr v-if="self.hasSlot('details')" :key="ti + 'iddi'">
                        <td colspan="100%" class="component-twr-detail">
                            <slot class="w-100" name="details" :item="item"></slot>
                        </td>
                    </tr>
                </template>
            </tbody>
        </v-table>
        <div v-if="items.length === 0">
            <slot name="no-data"></slot>
        </div>
        <OverlayLoading :model-value="loading"></OverlayLoading>
        <NgDialog v-model="state.modalShow" :title="filterTitle">
            <template v-for="field in fields">
                <v-checkbox
                    v-if="field.optionShow"
                    v-model="state.showFields"
                    hide-details
                    multiple
                    :value="field.key"
                    :label="field.label()"
                    :key="field.key + 'da'">
                </v-checkbox>
            </template>
        </NgDialog>
        <div v-if="showFilter" class="print-no-show component-twr-filter" @click="openFilter">
            <v-badge color="red" offset-x="0" offset-y="0" dot bordered :modelValue="filters.length > 0">
                <v-icon size="small">mdi-filter</v-icon>
            </v-badge>
        </div>
    </div>
</template>

<script lang="ts" setup>
import NgDialog from './dialog.vue'
import OverlayLoading from './overlay-loading.vue'
import { VueSelf } from '../self'
import { useLocalStorage } from '../../storage'
import { useResizeObserver } from '@vueuse/core'
import { pick, Debounce, ElementListenerGroup } from 'power-helper'
import { ref, PropType, onUnmounted, watch, reactive, computed, onMounted } from 'vue'

type Field = {
    key: string
    label: () => string
    style: (value: any, key: string, item: any, index: number) => string
    formatter: (...args: any[]) => any
    optionShow: boolean
}

const self = VueSelf.use()
const peel = pick.peel
const localStorage = useLocalStorage()

// =================
//
// props
//

const props = defineProps({
    textNowrap: {
        type: String as PropType<'all' | 'head' | 'body' | 'none'>,
        required: false,
        default: () => 'none'
    },
    rowStyle: {
        type: Function as PropType<(item: any, index: number) => string>,
        required: false,
        default: () => () => ''
    },
    filterMemory: {
        type: String,
        required: false,
        default: () => ''
    },
    filterShow: {
        type: Boolean,
        required: false,
        default: () => false
    },
    filterTitle: {
        type: String,
        required: false,
        default: () => 'Filter'
    },
    fields: {
        required: true,
        type: Array as PropType<Array<Field>>
    },
    items: {
        required: true,
        type: Array as PropType<any[]>
    },
    loading: {
        type: Boolean,
        required: false,
        default: () => false
    }
})

const emit = defineEmits({
    'click-item': (_item: any) => true
})

// =================
//
// ref
//

const table = ref()

// =================
//
// state
//

const state = reactive({
    reloaded: true,
    modalShow: false,
    isOverflow: false,
    showShadow: false,
    showFields: [] as string[],
    elementListenerGroup: null as null | ElementListenerGroup<HTMLDivElement>
})

// =================
//
// computed
//

const hasClickItemListener = computed(() =>{
    return self.hasListener('click-item')
})

const showFilter = computed(() => {
    if (props.items.length === 0) {
        return false
    }
    if (props.filterShow === false) {
        return false
    }
    for (let field of props.fields) {
        if (field.optionShow) {
            return true
        }
    }
    return false
})

const showFields = computed(() => {
    return props.fields.filter(e => state.showFields.includes(e.key)).map(e => {
        return {
            key: e.key,
            label: e.label,
            style: e.style,
            formatter: e.formatter,
            optionShow: e.optionShow
        }
    })
})

const filters = computed(() => {
    let fields = props.fields.map(e => e.key)
    return fields.filter(e => !state.showFields.includes(e))
})

// =================
//
// observer
//

useResizeObserver(table, () => {
    let el: HTMLDivElement = table.value?.$el
    if (el) {
        let child = el.getElementsByTagName('table')[0]
        if (child) {
            state.isOverflow = child.clientWidth > el.clientWidth
            state.showShadow = state.isOverflow
        }
    }
})

// =================
//
// debounce
//

const debounce = new Debounce({
    delay: 50
})

debounce.on('trigger', () => {
    state.reloaded = false
    setTimeout(() => {
        state.reloaded = true
    }, 10)
})

// =================
//
// watch
//

watch(() => state.showFields, () => {
    syncFilterMemory()
    debounce.input('')
}, { deep: true })

// =================
//
// mounted
//

onMounted(() => {
    state.showFields = props.fields.map(e => e.key)
    let filterName = props.filterMemory
    if (filterName) {
        let data = localStorage.get('tablefilterMemories')
        if (data[filterName]) {
            state.showFields = state.showFields.filter(e => !data[filterName].includes(e))
        }
    }
    let el: HTMLDivElement = table.value.$el.getElementsByClassName('v-table__wrapper')[0]
    if (el) {
        state.elementListenerGroup = new ElementListenerGroup(el)
        state.elementListenerGroup.add('scroll', (e) => {
            if (state.isOverflow) {
                state.showShadow = el.scrollLeft === 0
            }
        })
    }
})

onUnmounted(() => {
    debounce.close()
    state.elementListenerGroup?.clear()
})

// =================
//
// methods
//

const syncFilterMemory = () => {
    let key = props.filterMemory
    if (key) {
        let data = localStorage.get('tablefilterMemories')
        if (data[key]) {
            data[key] = filters.value
        } else {
            data[key] = []
        }
        localStorage.set('tablefilterMemories', data)
    }
}

const clickItme = (item: any) => {
    emit('click-item', item)
}

const getFieldValue = (field: Field, item: any, index: number) => {
    // @ts-ignore
    let value = peel(item, field.key)
    if (field.formatter == null) {
        return value
    } else {
        return field.formatter(value, field.key, item, index)
    }
}

const openFilter = () => {
    state.modalShow = true
}
</script>

<style lang="scss" scoped>
    .component-text-nowrap {
        white-space: nowrap;
    }
    .component-twr-is-btn {
        transition: .25s;
        cursor: pointer;
    }
    .component-twr-is-btn:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    .component-twr-filter {
        top: -10px;
        right: 0;
        position: absolute;
        cursor: pointer;
    }
    .component-twr-detail {
        height: auto !important;
        padding: 0 !important;
    }
    .component-shadow-right :deep(.v-table__wrapper) {
        box-shadow: inset -15px 0px  10px -15px rgba(0, 0, 0, .4);
    }
</style>
