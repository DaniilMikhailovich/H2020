import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueKonva from 'vue-konva'
import store from './store/index'

Vue.use(VueKonva)

Vue.config.productionTip = false

new Vue({
  name: 'H2020',
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
