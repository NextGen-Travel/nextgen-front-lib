<template>
    <div
        style="position: relative;"
        :class="`elevation-${elevation}`">
        <v-table
            ref="table"
            :height="height"
            :fixed-header="fixedHeader"
            :class="{
                'component-shadow-right': state.showShadow
            }">
            <thead>
                <tr>
                    <th
                        v-for="(field, index) in showFields"
                        :key="index + 'ff'"
                        :class="{
                            [`bg-${headerColor}`]: true,
                            'text-start': field.textAlign === 'start',
                            'text-center': field.textAlign === 'center',
                            'text-end': field.textAlign === 'end',
                            'component-text-nowrap': ['head', 'all'].includes(textNowrap)
                        }">
                        <slot :name="'h-' + field.key" :item="field" :value="field.label()">
                            <span>{{ field.label() }}</span>
                        </slot>
                        <v-icon
                            v-if="field.sortBtn"
                            size="small"
                            class="mx-1 component-table-sort-btn"
                            :color="sortStatus[field.key] === sortUpValue ? 'primary' : 'grey'"
                            :class="{
                                'component-table-sort-btn-actived': sortStatus[field.key] === sortUpValue
                            }"
                            @click="sortKey(field.key)">
                            mdi-arrow-down-thin
                        </v-icon>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, ti) in items" :key="item.key">
                    <tr
                        :style="rowStyle(item, ti)"
                        :class="{
                            'component-twr-is-btn': hasClickItemListener
                        }"
                        @click="clickItme(item)">
                        <td
                            v-for="field in showFields" :key="field.key"
                            :class="{
                                'text-start': field.textAlign === 'start',
                                'text-center': field.textAlign === 'center',
                                'text-end': field.textAlign === 'end',
                                'component-text-nowrap': ['body', 'all'].includes(textNowrap)
                            }"
                            :style="field.style(getFieldValue(field, item, ti), field.key, item, ti)">
                            <slot
                                :name="'t-' + field.key.replace(/\./g, '-')"
                                :item="item"
                                :value="getFieldValue(field, item, ti)">
                                <div>
                                    {{ getFieldValue(field, item, ti) }}
                                </div>
                            </slot>
                        </td>
                    </tr>
                    <tr v-if="self.hasSlot('details')" :key="ti + 'iddi'">
                        <td colspan="100%" class="component-twr-detail">
                            <slot class="w-100" name="details" :item="item"></slot>
                        </td>
                    </tr>
                </template>
            </tbody>
            <slot name="end"></slot>
        </v-table>
        <div v-if="items.length === 0">
            <slot name="no-data"></slot>
        </div>
        <OverlayLoading :model-value="loading"></OverlayLoading>
        <NgDialog v-model="state.modalShow" :title="filterTitle">
            <template v-for="field in fields" :key="field.key + 'da'">
                <v-checkbox
                    v-if="field.optionShow"
                    v-model="state.showFields"
                    hide-details
                    multiple
                    :value="field.key"
                    :label="field.label()">
                </v-checkbox>
            </template>
        </NgDialog>
        <div v-if="showFilter" class="print-no-show component-twr-filter" @click="openFilter">
            <v-badge color="red" offset-x="0" offset-y="0" dot bordered :model-value="filters.length > 0">
                <v-icon size="small">mdi-filter</v-icon>
            </v-badge>
        </div>
    </div>
</template>

<script lang="ts" setup generic="T">
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
    style: (_value: any, _key: string, _item: any, _index: number) => string
    sortBtn: boolean
    textAlign: 'start' | 'center' | 'end'
    formatter: (..._args: any[]) => any
    optionShow: boolean
}

const self = VueSelf.use()
const peel = pick.peel
const localStorage = useLocalStorage()
const elementListenerGroup = new ElementListenerGroup<HTMLDivElement>()

// =================
//
// props
//

const props = defineProps({
    height: {
        type: String,
        required: false,
        default: () => undefined
    },
    sorts: {
        type: Object as PropType<Record<string, any>>,
        required: false,
        default: () => {
            return {}
        }
    },
    sortUpValue: {
        type: null as unknown as PropType<any>,
        required: false,
        default: () => true
    },
    sortDownValue: {
        type: null as unknown as PropType<any>,
        required: false,
        default: () => false
    },
    elevation: {
        type: Number,
        required: false,
        default: () => 1
    },
    fixedHeader: {
        type: Boolean,
        required: false,
        default: () => false
    },
    headerColor: {
        type: String,
        required: false,
        default: () => 'secondary'
    },
    textNowrap: {
        type: String as PropType<'all' | 'head' | 'body' | 'none'>,
        required: false,
        default: () => 'none'
    },
    rowStyle: {
        type: Function as PropType<(_item: any, _index: number) => string>,
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
        type: Array as PropType<T[]>
    },
    loading: {
        type: Boolean,
        required: false,
        default: () => false
    }
})

const emit = defineEmits({
    'click-item': (_item: any) => true,
    'click-sort': (_key: string, _value: any) => true,
    'update:sorts': (_status: Record<string, any>) => true
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
    showFields: [] as string[]
})

// =================
//
// computed
//

const sortStatus = computed({
    get: () => props.sorts,
    set: value => emit('update:sorts', value)
})

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
    return props.fields.filter(e => state.showFields.includes(e.key))
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
        elementListenerGroup.observe(el)
        elementListenerGroup.add('scroll', () => {
            if (state.isOverflow) {
                state.showShadow = el.scrollLeft === 0
            }
        })
    }
})

onUnmounted(() => {
    debounce.close()
    elementListenerGroup.clear()
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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

const sortKey = (key: string) => {
    sortStatus.value[key] = sortStatus.value[key] === props.sortDownValue ? props.sortUpValue : props.sortDownValue
    emit('click-sort', key, sortStatus.value[key])
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
    .component-table-sort-btn {
        transition: .25s;
        cursor: pointer;
    }
    .component-table-sort-btn-actived {
        transform: rotate(180deg);
    }
</style>
