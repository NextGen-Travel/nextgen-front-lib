<template>
    <div style="width: fit-content; height: fit-content; position: relative;" @click="clickInput">
        <slot></slot>
        <input
            v-if="multiple"
            ref="fileInput"
            hidden
            type="file"
            multiple
            :accept="fileType"
            :disabled="state.reading || loading"
            @change="pickFile"
        />
        <input
            v-else
            ref="fileInput"
            hidden
            type="file"
            :accept="fileType"
            :disabled="state.reading || loading"
            @change="pickFile"
        />
        <OverlayLoading :model-value="loading || state.reading">
            <slot name="loading"></slot>
        </OverlayLoading>
    </div>
</template>

<script lang="ts" setup>
// TODO: fileType 也須透過 js 檢查
import OverlayLoading from './overlay-loading.vue'
import { Loader, JobsQueue } from 'power-helper'
import { reactive } from 'vue'
import { PropType, ref } from 'vue'

export type OutputFile = {
    url: string | ArrayBuffer | null
    file: File
}

export type UploadData = {
    files: OutputFile[]
}

// =================
//
// defined
//

const props = defineProps({
    loading: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: () => false
    },
    multiple: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: () => false
    },
    fileType: {
        type: String as PropType<string>,
        required: false,
        default: () => '*/*'
    },
    preupload: {
        type: Function as PropType<(_file: File) => Promise<File>>,
        required: false,
        default: null
    }
})

const emit = defineEmits<{
    error: [Error]
    uploaded: [{
        files: OutputFile[]
    }]
}>()

// =================
//
// Refs
//

const fileInput = ref<HTMLInputElement>()

// =================
//
// state
//

const state = reactive({
    reading: false
})

// =================
//
// Methods
//

const clickInput = () => {
    fileInput.value?.click()
}

const pickFile = async() => {
    let files = fileInput.value?.files
    if (files && files[0]) {
        let outputFiles: Array<OutputFile> = []
        let loader = new Loader()
        let queue = new JobsQueue({
            concurrentExecutions: 1
        })
        for (let i = 0; i < files.length; i++) {
            let file = files[i]
            if (props.preupload) {
                file = await props.preupload(file)
            }
            loader.push(`file: ${i}`, () => {
                return queue.pushAndWait(`file: ${i}`, () => {
                    return new Promise((resolve, reject) => {
                        let reader = new FileReader()
                        reader.readAsDataURL(file)
                        reader.onerror = reject
                        reader.onload = e => {
                            if (e.target) {
                                outputFiles.push({
                                    url: e.target.result,
                                    file
                                })
                            }
                            resolve(null)
                        }
                    })
                })
            })
        }
        state.reading = true
        await loader.start({})
        state.reading = false
        emit('uploaded', {
            files: outputFiles
        })
    }
}

</script>
