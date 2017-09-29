import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Routers from './router/router.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';

Vue.prototype.$ajax = axios;
//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(iView);

const RouterConfig={
    routes:Routers
}
const router=new VueRouter(RouterConfig);
/*
const router = new VueRouter()
*/

new Vue({
  el:'#app',
  router: router,
  render: h => h(App)
})