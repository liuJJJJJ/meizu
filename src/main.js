import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import axios from 'axios';
Vue.prototype.axios = axios;

import Vuex from 'vuex'
Vue.use(Vuex)

import VueResource from 'vue-resource'
Vue.use(VueResource)

require('./mock.js')

import Mint from 'mint-ui';
Vue.use(Mint)

import Index from "./container/Index.vue";
import Search from "./container/Search.vue";
import Personal from "./container/Personal.vue";
import Goodlist from "./container/Goodlist.vue";
import Detail from "./container/Detail.vue";
import Cart from "./container/Cart.vue";
import My from "./container/My.vue";
import Login from "./container/Login.vue";

//二级路由
import recommend from "./container/Recommend.vue";
import phone from "./container/Phone.vue";
import music from "./container/Music.vue";

const routes = [{
    path: '/',
    redirect: '/Index/recommend',
}, {
    path: '/index',
    component: Index,
    name: "index",
    children:[{
        path:'recommend',
        component:recommend,
        name:"recommend",
    },
    {
        path:'phone',
        component:phone,
        name:"phone",
    },
    {
        path:'music',
        component:music,
        name:"music",
    }
    ]
}, {
    path: '/Search',
    component: Search,
    name: "Search",
}, {
    path: '/Personal',
    component: Personal,
    name: "Personal",
}, {
    path: '/Goodlist',
    component: Goodlist,
    name: "Goodlist",
}, {
    path: '/Detail',
    component: Detail,
    name: "Detail",
}, {
    path: '/Cart',
    component: Cart,
    name: "Cart",
    meta:{
        requireAuth:true
    }
}, {
    path: '/My',
    component: My,
    name: "My",
}, {
    path: '/Login',
    component: Login,
    name: "Login",
}]


const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
    scrollBehavior(to,from,savedPosition){
        return{x:0,y:0}
    }
});

router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
        if(sessionStorage.getItem('token')){
            next();
        }else{
            next({
                path:'/Login'
            })
        }
    }else{
        next();
    }
});

router.afterEach((to,from,next)=>{
    window.scrollTo(0,0);
});

const store = new Vuex.Store({
  // 状态
  state: {
    title: "meizu",
    description: "meizu",
    navs: [{
        title: "推荐",
        path: "recommend",
        isSelect: true
      },
      {
        title: "手机",
        path: "phone",
        isSelect: false
      },
      {
        title: "声学",
        path: "music",
        isSelect: false
      },
      {
        title: "配件",
        path: "parts",
        isSelect: false
      },
      {
        title: "生活",
        path: "live",
        isSelect: false
      },
    ],
    nav: 0
  },
  // 修改状态
  mutations: {
    editTitle(state, data) {
      state.title = data
    },
    editNav(state, data) {
      state.nav = data
    },
    changeLogin(state,data){
        state.isLogin=data
    }
  },
  // actions  一般配合 事件@xxx 触发
  actions: {
    setTitle(context, data) {
      context.commit('editTitle', data);
    },
    setNav(context, data) {
      context.commit('editNav', data);
    }
  },
  // 组件从store(中介)手上拿数据  配个 computed
  getters: {
    getTitle: state => {
      return state.title
    },
    getAll: state => {
      return state
    },
    getNavs: state => {
      return state.navs
    },
    getNav: state => {
      return state.nav
    }
  }
})



new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')