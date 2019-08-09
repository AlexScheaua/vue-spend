import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBalanceScaleRight, faClipboard, faNotesMedical, faTrashAlt, faCheck, faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
library.add(faBalanceScaleRight, faClipboard, faNotesMedical, faTrashAlt, faCheck, faFilter)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
