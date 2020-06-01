import Vue from 'vue'

import App from './App'
import store from './store'

import './directives'
import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  store
}).$mount('#app')
