import Doalog from './vue/components/dialog.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NgDoalog: typeof Doalog
  }
}