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
                <template v-for="(item, index) in items">
                    <tr :key="index + 'ii'">
                        <td v-for="(field, index) in showFields" :key="index + 'ffii'" class="text-center">
                            <slot
                                :name="'t-' + field.key.replace(/\./g, '-')"
                                :item="item"
                                :value="field.formatter(peel(item, field.key), field.key, item)">
                            </slot>
                            <div v-if="hasSlot('t-' + field.key.replace(/\./g, '-')) === false">
                                {{ field.formatter == null ? peel(item, field.key) : field.formatter(peel(item, field.key), field.key, item) }}
                            </div>
                        </td>
                    </tr>
                    <tr v-if="hasSlot('details')" :key="index + 'iddi'">
                        <td colspan="100%">
                            <slot class="w-100" name="details" :item="item"></slot>
                        </td>
                    </tr>
                </template>
            </tbody>
        </v-simple-table>
        <div v-if="items.length === 0">
            <slot name="no-data"></slot>
        </div>
        <v-overlay absolute :value="loading">
            <v-progress-circular indeterminate size="32"></v-progress-circular>
        </v-overlay>
        <NgDialog v-model="state.modalShow" :title="filterTitle">
            <template v-for="field in fields">
                <v-checkbox
                    v-if="field.optionShow"
                    v-model="state.showFields"
                    hide-details
                    :value="field.key"
                    :label="field.label"
                    :key="field.key + 'da'">
                </v-checkbox>
            </template>
        </NgDialog>
        <div v-if="showFilter" class="print-no-show component-twr-filter" @click="state.modalShow= true">
            <v-icon small>mdi-filter</v-icon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import NgDialog from './dialog.vue'
import { pick } from 'power-helper'
import { PropType } from 'vue'
import { useVueHooks } from '../../core'

const { reactive, computed, defineProps, onMounted, getCurrentInstance } = useVueHooks()
const peel = pick.peel
const instance = getCurrentInstance()

// =================
//
// define
//

const props = defineProps({
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
        type: Array as PropType<Array<{
            key: string
            label: string
            formatter: (...args: any[]) => any
            optionShow: boolean
        }>>
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
            formatter: e.formatter
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

</script>

<style lang="scss" scoped>
    .component-twr-filter {
        top: -10px;
        right: 0;
        position: absolute;
        cursor: pointer;
    }
</style>
