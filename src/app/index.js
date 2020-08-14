import Vue from 'vue';

import App from './App.vue';
import store from './../store/index';
import router from './router';

import VModal from 'vue-js-modal';

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

Vue.config.productionTip = false;

new Vue({
  el: '#site_root',
  router,
  store,
  render: h => h(App),
});
