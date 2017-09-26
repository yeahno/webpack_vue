import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  //mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/one',
      component: r =>require.ensure([], () => r(require('./page/one.vue')), 'one')
    },
    {
      path: '/two',
      component: r => require.ensure([], () => r(require('./page/two.vue')), 'two')
    },
    /*{
      path: '/three',
      component : { template: '<div><h2>我是第 3 个子页面</h2></div>' }
    }*/
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')