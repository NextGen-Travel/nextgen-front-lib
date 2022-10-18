<template>
    <div style="position: relative;">
        <v-simple-table v-if="showTable">
            <thead>
                <tr>
                    <th
                        v-for="(field, index) in showFields"
                        :key="index + 'ff'"
                        class="text-center secondary">
                        {{ field.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, ti) in items" :key="ti + 'ii'">
                    <tr :class="{ 'component-twr-is-btn': hasClickItemListener }"
                        :style="rowStyle(item, ti)"
                        @click="clickItme(item)">
                        <td
                            v-for="(field, index) in showFields"
                            class="text-center"
                            :key="index + 'ffii'"
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
                    v-model="state.showFields"
                    hide-details
                    multiple
                    :value="field.key"
                    :label="field.label"
                    :key="field.key + 'da'">
                </v-checkbox>
            </template>
        </NgDialog>
        <div v-if="showFilter" class="print-no-show component-twr-filter" @click="openFilter">
            <v-icon small>mdi-filter</v-icon>
        </div>
    </div>
</template>

<script lang="ts">
// FIXME: self hasSlot, self hasClickItemListener
// vuetify 的 v-checkbox 與 vue3 檢查有衝突，先禁止檢查 ts
// @ts-nocheck
import NgDialog from './dialog.vue'
import { pick } from 'power-helper'
import { PropType } from 'vue'
import { useVueHooks } from '../../core'

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
        const { reactive, computed, onMounted, getCurrentInstance } = useVueHooks()
        const peel = pick.peel
        const instance = getCurrentInstance()

        // =================
        //
        // state
        //

        const state = reactive({
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

        // =================
        //
        // mounted
        //

        onMounted(() => {
            state.showFields = props.fields.map(e => e.key)
        })

        // =================
        //
        // methods
        //

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
