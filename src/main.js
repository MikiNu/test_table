import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import './firebase/index.js'

//регистрируем глобальный компонент
Vue.component('v-icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
