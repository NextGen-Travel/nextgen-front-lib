export const toVueCode = (params: {
    template: string
    script: string
}) => {
    let content = `
        <template>
            ${params.template.trim()}
        </template>   
        <script lang="ts" setup>
            ${params.script.trim()}
        </script>
    `
    let firstSpace = content.split('\n')[1].split(/[^\s]/)[0].length
    return content.split('\n').map(e => e.slice(firstSpace)).join('\n').trim()
}

export const toCode = (content: string) => {
    let firstSpace = content.split('\n')[1].split(/[^\s]/)[0].length
    return content.split('\n').map(e => e.slice(firstSpace)).join('\n').trim()
}