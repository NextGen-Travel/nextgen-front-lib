declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NgDoalog: typeof import('./vue/components/dialog.vue')['default']
  }
}