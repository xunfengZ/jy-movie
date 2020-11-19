import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

// 报错后新加的
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//到这
Vue.config.productionTip = false
Vue.use(VueLazyload,{
  loading: "/lazy/vlazy.svg"
  // loading: "/lazy/timg.gif"
  // loading: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605768055789&di=bac9d38db57f3f93da713282decdac8e&imgtype=0&src=http%3A%2F%2Fimg.ui.cn%2Fdata%2Ffile%2F0%2F8%2F7%2F2086780.gif%3FimageMogr2%2Fauto-orient%2Fstrip%2Fthumbnail%2F%2521900%253E"
})

Vue.prototype.eventBus=new Vue();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
