<template>
    <div class="lib-component-search-bar">
        <slot></slot>
        <VList v-if="loading" class="lib-component-search-list rounded elevation-3">
            <slot name="loading">
                <div class="text-center">
                    <v-progress-circular
                        color="primary"
                        indeterminate>
                    </v-progress-circular>
                </div>
            </slot>
        </VList>
        <VList
            v-else-if="items.length"
            class="lib-component-search-list rounded elevation-3">
            <slot name="list-top"></slot>
            <v-list-item
                v-for="item in items"
                :key="typeof item === 'string' ? item : item[itemTitle]"
                :title="typeof item === 'string' ? item : item[itemTitle]"
                @click="select(item)"
            ></v-list-item>
            <slot name="list-bottom"></slot>
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
        type: Array as PropType<Array<string | Record<string, any>>>,
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
    changed: () => true,
    selected: (_item: any) => true
})

// =================
//
// debounce
//

const debounce = useDebounce(() => change(), 100, 5)

// =================
//
// watch
//

watch(() => props.searchValue, () => {
    debounce.input('')
})

// =================
//
// methods
//

const change = () => {
    if (props.searchValue.trim()) {
        emit('changed')
    } else {
        emit('closed')
    }
}

const select = (item: any) => {
    emit('selected', item)
    emit('closed')
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
    position: absolute;
}
</style>
