<template>
  <div id="app">
     <router-view></router-view>
     <!--<mt-tabbar v-model="selected">
      <mt-tab-item :id="nav.title" v-for="nav in navs" :key="nav.title" @click.native="goto(nav.path)">
       <!--  <myicons :type="nav.name"/>
        {{nav.title}}
      </mt-tab-item>
    </mt-tabbar> -->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
//  Xheader,
 
  }
};


// import Vue from "vue";

// export default {
//         data() {
//             return {
//                 navs: [{
//                         title: "推荐",
//                         path: "/Index",
//                         isSeclect: true,
//                         name:'Index'
//                     }, {
//                         title: "手机",
//                         path: "/Phone",
//                         isSeclect: false,
//                         name:'Phone'
//                     },
//                     {
//                         title: "声学",
//                         path: "",
//                         isSeclect: false
//                     },
//                     {
//                         title: "配件",
//                         path: "",
//                         isSeclect: false
//                     }, {
//                         title: " 生活",
//                         path: "",
//                         isSeclect: false
//                     }
//                 ],
//                 selected:'Index'
//             }
//         },
//         methods:{
//             goto(path){
//                 this.$Router.push({path});
//             }
//         }
//     };    
</script>

<style>


</style>
