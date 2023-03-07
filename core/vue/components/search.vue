<template>
    <div v-click-outside="close" class="lib-component-search-bar">
        <slot></slot>
        <VList v-if="loading" class="lib-component-search-list text-center rounded elevation-3">
            <v-progress-circular
                color="primary"
                indeterminate>
            </v-progress-circular>
        </VList>
        <VList
            v-else-if="items.length"
            class="lib-component-search-list rounded elevation-3">
            <v-list-item
                v-for="item in items"
                :key="item[itemTitle]"
                :title="item[itemTitle]"
                @click="select(item)"
            ></v-list-item>
        </VList>
    </div>
</template>

<script setup lang="ts">
import { useDebounce } from '../../vue/debounce'
import { watch, PropType } from 'vue'

// =================
//
// defined
//

const props = defineProps({
    searchValue: {
        type: String,
        required: true
    },
    items: {
        type: Array as PropType<Array<any>>,
        required: false,
        default: () => []
    },
    loading: {
        type: Boolean,
        required: false,
        default: () => false
    },
    itemTitle: {
        type: String,
        required: false,
        default: () => 'title'
    }
})

const emit = defineEmits({
    closed: () => true,
    searched: () => true,
    selected: (_item: any) => true
})

// =================
//
// debounce
//

const debounce = useDebounce(() => search(), 100, 5)

// =================
//
// watch
//

watch(() => props.searchValue, () => debounce.input(''))

// =================
//
// methods
//

const close = () => {
    if (props.searchValue.trim()) {
        emit('closed')
    }
}

const search = async() => {
    emit('searched')
}

const select = (item: any) => {
    emit('selected', item)
}

</script>

<style lang="scss" scoped>
.lib-component-search-bar {
    position: relative;
}
.lib-component-search-list {
    max-height: 40vh;
    width: 100%;
    z-index: 5;
    top: 0;
    position: absolute;
}
</style>
