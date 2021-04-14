import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router';
import Tiny from '../src/index';

Vue.use(Tiny);
Vue.use(VueRouter);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  // esModule: false,
  mode: 'hash',
  routes: [
      {
          path: '/button',
          component: () => import('./routers/button.vue')
      }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')