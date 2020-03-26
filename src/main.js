import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL
Vue.axios.defaults.withCredentials = true;
axios.defaults.withCredentials = true;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
