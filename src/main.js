import Vue from 'vue'

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'

// import VueRouter from 'vue-router'

// import router from './router'

import store from './store';

import axios from 'axios';

Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

Vue.config.productionTip = false


// Vue.use(VueRouter)
Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  // router:router,
  store:store
}).$mount('#app')
