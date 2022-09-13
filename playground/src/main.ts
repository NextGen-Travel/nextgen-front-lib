import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/javascript/javascript.js'
import '@/docs'

import Vue, * as Hooks from 'vue'
import App from './app.vue'
import NFL from 'nextgen-front-lib/core'
import Vuetify from 'vuetify'
import VueCodemirror from 'vue-codemirror'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
                primary: '#09244b',
                secondary: '#ebeef7',
                info: '#3250ac',
                muted: '#ddd'
            }
        },
        options: {
            customProperties: true
        }
    }
})

Vue.config.productionTip = false
Vue.use(NFL, {
    hooks: Hooks,
    options: {
        staticUrl: './static',
        notFoundImage: 'not-found.png'
    }
})

Vue.use(VueCodemirror, {
    options: {
        theme: 'base16-dark'
    }
})

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
