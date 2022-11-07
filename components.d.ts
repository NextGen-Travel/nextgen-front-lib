import { DefineComponent } from 'vue'

export interface GlobalComponents {
  NgDoalog: DefineComponent<import('./vue/components/dialog.vue')['default']>
}