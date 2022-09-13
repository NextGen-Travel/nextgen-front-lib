<template>
    <div class="rounded">
        <codemirror v-if="state.show" v-model="code" :options="state.options"></codemirror>
    </div>
</template>

<script lang="ts" setup>
import { useSelf } from '@/hooks/self'
import { defineEmits, defineProps, PropType, onMounted, computed } from 'vue'

const self = useSelf()

// =================
//
// defined
//

const props = defineProps({
    value: {
        type: String,
        requreid: false,
        default: () => '<div>123</div>'
    },
    readonly: {
        type: Boolean,
        requreid: false,
        default: () => true
    },
    mode: {
        type: String as PropType<'javascript' | 'html'>,
        required: false,
        default: () => 'javascript'
    }
})

const emit = defineEmits({
    input: (value: string) => true
})

// =================
//
// state
//

const state = self.data({
    show: false,
    options: {
        tabSize: 4,
        mode: 'javascript',
        theme: 'default',
        lineNumbers: true,
        readOnly: props.readonly,
        line: true
    }
})

// =================
//
// computed
//

const code = computed({
    get: () => props.value,
    set: (value: string) => emit('input', value)
})

// =================
//
// mounted
//

onMounted(() => {
    if (props.mode === 'javascript') {
        state.options.mode = 'javascript'
    }
    if (props.mode === 'html') {
        state.options.mode = 'text/html'
    }
    self.nextTick(() => {
        state.show = true
    })
})

</script>

<style lang="scss">
    .CodeMirror {
        height: 480px !important;
    }
</style>