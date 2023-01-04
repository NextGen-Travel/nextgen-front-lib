<template>
    <div style="position: relative;">
        <v-simple-table v-if="showTable">
            <thead>
                <tr>
                    <th
                        v-for="(field, index) in showFields"
                        :key="index + 'ff'"
                        class="text-center secondary">
                        <slot :name="'h-' + field.key" :item="field" :value="field.label"></slot>
                        <div v-if="!hasSlot('h-' + field.key)">{{ field.label }}</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, ti) in items">
                    <tr
                        :key="ti + 'ii'"
                        :class="{ 'component-twr-is-btn': hasClickItemListener }"
                        :style="rowStyle(item, ti)"
                        @click="clickItme(item)">
                        <td
                            v-for="(field, index) in showFields"
                            class="text-center"
                            :key="field.key"
                            :style="field.style(getFieldValue(field, item, ti), field.key, item, ti)">
                            <slot
                                :name="'t-' + field.key.replace(/\./g, '-')"
                                :item="item"
                                :value="getFieldValue(field, item, ti)">
                            </slot>
                            <div v-if="hasSlot('t-' + field.key.replace(/\./g, '-')) === false">
                                {{ getFieldValue(field, item, ti) }}
                            </div>
                        </td>
                    </tr>
                    <tr v-if="hasSlot('details')" :key="ti + 'iddi'">
                        <td colspan="100%" class="component-twr-detail">
                            <slot class="w-100" name="details" :item="item"></slot>
                        </td>
                    </tr>
                </template>
            </tbody>
        </v-simple-table>
        <div v-if="items.length === 0">
            <slot name="no-data"></slot>
        </div>
        <v-overlay absolute :value="loading" :opacity="0.25">
            <v-progress-circular indeterminate size="32"></v-progress-circular>
        </v-overlay>
        <NgDialog v-model="state.modalShow" :title="filterTitle">
            <template v-for="field in fields">
                <v-checkbox
                    v-if="field.optionShow"
                    v-model:input-value="state.showFields"
                    hide-details
                    multiple
                    :value="field.key"
                    :label="field.label"
                    :key="field.key + 'da'">
                </v-checkbox>
            </template>
        </NgDialog>
        <div v-if="showFilter" class="print-no-show component-twr-filter" @click="openFilter">
            <v-badge color="primary" offset-x="5" offset-y="5" dot bordered :value="filters.length > 0">
                <v-icon small>mdi-filter</v-icon>
            </v-badge>
        </div>
    </div>
</template>

<script lang="ts">
import NgDialog from './dialog.vue'
import { PropType } from 'vue'
import { useVueHooks } from '../../core'
import { pick, Debounce } from 'power-helper'
import { useLocalStorage } from '../../core/storage'

type Field = {
    key: string
    label: string
    style: (value: any, key: string, item: any, index: number) => string
    formatter: (...args: any[]) => any
    optionShow: boolean
}

export default {
    name: 'ng-table',
    components: {
        NgDialog
    },
    props: {
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
    },
    emits: {
        'click-item': (_item: any) => true
    },
    setup(props, { emit }) {
        const { onUnmounted, watch, reactive, computed, onMounted, getCurrentInstance } = useVueHooks()
        const peel = pick.peel
        const instance = getCurrentInstance()
        const localStorage = useLocalStorage()

        // =================
        //
        // state
        //

        const state = reactive({
            reloaded: true,
            modalShow: false,
            showFields: [] as string[]
        })

        // =================
        //
        // computed
        //

        const hasClickItemListener = computed(() =>{
            return instance?.proxy.$listeners && instance?.proxy.$listeners['click-item']
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

        const showTable = computed(() => {
            if (hasSlot('no-data') && props.items.length === 0) {
                return false
            }
            return true
        })

        const filters = computed(() => {
            let fields = props.fields.map(e => e.key)
            return fields.filter(e => !state.showFields.includes(e))
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
        })

        onUnmounted(() => {
            debounce.close()
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

        const hasSlot = (name = 'default') => {
            let proxy = instance?.proxy as any
            if (proxy) {
                return !!proxy.$slots[name] || !!proxy.$scopedSlots[name]
            }
            return false
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

        // =================
        //
        // done
        //

        return {
            state,
            filters,
            hasSlot,
            hasClickItemListener,
            showFilter,
            showFields,
            showTable,
            clickItme,
            getFieldValue,
            openFilter
        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>
