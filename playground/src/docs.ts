import Vue from 'vue'
import UtilFetchAll from '@/documents/utils/fetch-all.vue'
import ComponentTable from '@/documents/components/table.vue'
import ComponentDialog from '@/documents/components/dialog.vue'
import ComponentPagination from '@/documents/components/pagination.vue'

Vue.component('doc-util-fetch-all', UtilFetchAll)

Vue.component('doc-component-table', ComponentTable)
Vue.component('doc-component-dialog', ComponentDialog)
Vue.component('doc-component-pagination', ComponentPagination)
