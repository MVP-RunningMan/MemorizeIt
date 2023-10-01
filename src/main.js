import Vue from 'vue'

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'

import VueRouter from 'vue-router'

import router from './router'

import store from './store';

import axios from 'axios';

Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(ElementUI)

//每一次切换路由时，都执行这个导航守卫
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    console.log(store.state.isLogin)
    if(store.state.isLogin){
      console.log('嘿嘿')
      next()
    }
  }else{
    next()
  }
  
})



new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
