<template>
    <div style="position: relative;">
        <v-simple-table>
            <thead>
                <tr>
                    <th
                        v-for="(field, index) in showFields"
                        :key="index + 'ff'"
                        class="text-left secondary">
                        {{ field.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, index) in items">
                    <tr :key="index + 'ii'">
                        <td v-for="(field, index) in showFields" :key="index + 'ffii'">
                            <slot
                                :name="'t-' + field.key.replace(/\./g, '-')"
                                :item="item"
                                :value="peel(item, field.key)">
                            </slot>
                            <div v-if="self.hasSlot('t-' + field.key.replace(/\./g, '-')) === false">
                                {{ peel(item, field.key) }}
                            </div>
                        </td>
                    </tr>
                    <tr v-if="self.hasSlot('details')" :key="index + 'iddi'">
                        <td colspan="100%">
                            <slot class="w-100" name="details" :item="item"></slot>
                        </td>
                    </tr>
                </template>
            </tbody>
        </v-simple-table>
        <Dialog v-model="state.modalShow" :title="filterTitle">
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
        </Dialog>
        <div v-if="showFilter" class="print-no-show component-twr-filter" @click="state.modalShow= true">
            <v-icon small>mdi-filter</v-icon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Dialog from './dialog.vue'
import { pick } from 'power-helper'
import { PropType } from 'vue'
import { useVueHooks } from '../../core'

const peel = pick.peel
const { reactive, computed, defineProps, onMounted } = useVueHooks()

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

// =================
//
// mounted
//

onMounted(() => {
    state.showFields = props.fields.map(e => e.key)
})

</script>

<script lang="ts">
type Params = {
    key: string
    label: string
    optionShow: boolean
}
export const defineFields = (items: Params[]) => {
    return items
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