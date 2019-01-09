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
import Phone from "./container/Phone.vue";




//实例化路由
const routes = [
  { name:'Index',path: '/Index', component: Index },
   { name:'Search',path: '/Search', component: Search },
    { name:'Personal',path: '/Personal', component: Personal },
    { name:'Goodlist',path: '/Goodlist', component: Goodlist },
    { name:'Detail',path: '/Detail', component: Detail },
    { name:'Phone',path: '/Phone', component: Phone},
    {path:'/',redirect:{name:'Index'}}


]



const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

//实例化vue
new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
