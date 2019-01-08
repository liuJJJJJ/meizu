import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Mint from 'mint-ui';
Vue.use(Mint)

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import Index from "./container/Index.vue";
import Search from "./container/Search.vue";
import Personal from "./container/Personal.vue";
import Goodlist from "./container/Goodlist.vue";
import Detail from "./container/Detail.vue";




//实例化路由
const routes = [
  { path: '/Index', component: Index },
   { path: '/Search', component: Search },
    { path: '/Personal', component: Personal },
    { path: '/Goodlist', component: Goodlist },
    { path: '/Detail', component: Detail },


]



const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

//实例化vue
new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
