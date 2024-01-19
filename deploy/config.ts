import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import type { RollupOptions } from 'rollup'

const rollupOptions: RollupOptions = {
    external: [
        'vue',
        'vuetify',
        'vue-router',
        'vue-i18n',
        'pinia',
        'power-helper',
        '@vueuse/core'
    ],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
}

export default defineConfig({
    build: {
        outDir: 'dist',
        cssCodeSplit: true,
        sourcemap: true,
        lib: {
            entry: path.resolve(process.cwd(), 'core/index.ts'),
            fileName: () => 'index.js',
            formats: ['es'],
            name: 'Ms'
        },
        rollupOptions: rollupOptions,
        minify: true,
        terserOptions: undefined
    },
    plugins: [
        vue({
            isProduction: true,
            exclude: [
                /\.md$/,
                /\.spec\.ts$/,
                /\.spec\.disabled$/
            ]
        })
    ]
})
