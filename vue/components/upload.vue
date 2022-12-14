<template>
    <div @click="clickInput">
        <slot></slot>
        <input
            hidden
            ref="fileInput"
            type="file"
            :accept="fileType"
            @change="pickFile"
        />
    </div>
</template>

<script lang="ts" setup>
import { Loader } from 'power-helper'
import { useVueHooks } from '../../core'

export type OutputFile = {
    url: string | ArrayBuffer | null
    file: File
}

const { ref, defineProps, defineEmits } = useVueHooks()

// =================
//
// defined
//

defineProps({
    fileType: {
        type: String,
        required: true
    }
})

const emit = defineEmits({
    uploaded: (params: {
        files: OutputFile[]
    }) => params
})

// =================
//
// Refs
//

const fileInput = ref<HTMLInputElement>()

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
        for (let i = 0; i < files.length; i++) {
            let file = files[i]
            loader.push(`file: ${i}`, () => {
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
        }
        await loader.start({})
        emit('uploaded', {
            files: outputFiles
        })
    }
}

</script>
