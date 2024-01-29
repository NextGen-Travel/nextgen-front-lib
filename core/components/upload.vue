<template>
    <div style="width: fit-content; height: fit-content; position: relative;" @click="clickInput">
        <div
            v-if="enabledDrag"
            ref="dropArea"
            @drop="dropHandler"
            @dragover="dragOverHandler"
            @dragend="dragExitHandler"
            @dragleave="dragExitHandler"
            @dragexit="dragExitHandler">
            <slot :draging="state.draging" :reading="state.reading"></slot>
        </div>
        <div v-else>
            <slot :draging="state.draging" :reading="state.reading"></slot>
        </div>
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
import OverlayLoading from './overlay-loading.vue'
import { Loader, JobsQueue } from 'power-helper'
import { reactive, PropType, ref } from 'vue'

export type OutputFile = {
    url: string | ArrayBuffer | null
    file: File
}

export type UploadData = {
    files: OutputFile[]
}

export type UploadError = {
    type: 'NoSupportMineType' | 'Unknown'
    file: File
    error: any
}

// =================
//
// defined
//

const props = defineProps({
    disabled: {
        type: Boolean,
        required: false,
        default: () => false
    },
    enabledDrag: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: () => false
    },
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
    error: [UploadError]
    uploaded: [{
        files: OutputFile[]
    }]
}>()

// =================
//
// Refs
//

const dropArea = ref<HTMLElement>()
const fileInput = ref<HTMLInputElement>()

// =================
//
// state
//

const state = reactive({
    reading: false,
    draging: false
})

// =================
//
// Methods
//

const clickInput = () => {
    if (state.reading === false && props.disabled === false) {
        fileInput.value?.click()
    }
}

const readFiles = async (files: File[]) => {
    if (files && files[0]) {
        let outputFiles: Array<OutputFile> = []
        let loader = new Loader()
        let queue = new JobsQueue({
            concurrentExecutions: 1
        })
        for (let i = 0; i < files.length; i++) {
            let file = files[i]
            if (checkMine(file) === false) {
                emit('error', {
                    type: 'NoSupportMineType',
                    file,
                    error: null
                })
                continue
            }
            if (props.preupload) {
                try {
                    file = await props.preupload(file)
                } catch (error: any) {
                    emit('error', {
                        type: 'Unknown',
                        file,
                        error
                    })
                    return
                }
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
            if (props.multiple === false) {
                break
            }
        }
        state.reading = true
        await loader.start({})
        state.reading = false
        if (outputFiles.length !== 0) {
            emit('uploaded', {
                files: outputFiles
            })
        }
    }
}

const pickFile = async() => {
    const files = fileInput.value?.files
    await readFiles(Array.from(files || []))
}

const dropHandler = async (event: DragEvent) => {
    if (props.disabled === false) {
        event?.preventDefault()
        const files: File[] = []
        state.reading = true
        if (event && event.dataTransfer && event.dataTransfer.items) {
            for (let i = 0; i < event.dataTransfer.items.length; i++) {
                if (event.dataTransfer.items[i].kind === 'file') {
                    let file = event.dataTransfer.items[i].getAsFile()
                    if (file) {
                        files.push(file)
                    }
                }
            }
        }
        state.draging = false
        await readFiles(files)
    }
}

const dragOverHandler = (event: DragEvent) => {
    if (state.reading === false && props.disabled === false) {
        event?.preventDefault()
        state.draging = true
    }
}

const dragExitHandler = (event: DragEvent) => {
    event?.preventDefault()
    state.draging = false
}

const checkMine = (file: File) => {
    // 無限制接受任何檔案
    if (props.fileType === '*/*') {
        return true
    }
    const acceptPatterns = props.fileType.split(',').map(type => {
        if (type === '.jpg' || type === '.jpeg') {
            return [
                /image\/(jpeg)/i,
                /image\/(jpg)/i
            ]
        }
        if (type === '.mp3') {
            return [
                /audio\/(mpeg)/i,
                /audio\/(mp3)/i
            ]
        }
        // 接受任何類型的檔案
        if (type === '*/*') {
            return /.*/
        }
        // MIME 類型的通配符，例如 image/* 轉換成正則表達式
        if (type.indexOf('/*') !== -1) {
            return new RegExp(type.replace('*', '.+'), 'i')
        }
        // 擴展名，例如 .png
        if (type.startsWith('.')) {
            return new RegExp(`\\${type}$`, 'i')
        }
        // 完整的 MIME 類型，例如 image/png
        return new RegExp(type.replace('/', '\\/'), 'i')
    }).flat()
    // 找到不匹配的檔案，返回 false
    const matches = acceptPatterns.some(pattern => pattern.test(file.type) || pattern.test(file.name))
    if (!matches) {
        return false
    }
    return true
}

</script>
