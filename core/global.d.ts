interface Window {
    WxLogin: any
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
    export default component
}
declare module 'vue3-markdown-it'
declare module '*.md' {
    const value: string
    export default value
}