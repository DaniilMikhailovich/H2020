import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueKonva from 'vue-konva'
import store from './store/index'

import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import awsconfig from './aws-exports';
API.configure(awsconfig);
PubSub.configure(awsconfig);

Vue.use(VueKonva)

Vue.config.productionTip = false

new Vue({
  name: 'H2020',
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
