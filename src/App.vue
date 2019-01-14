<template>
  <div id="app">
     <router-view></router-view>
     <!--<mt-tabbar v-model="selected">
      <mt-tab-item :id="nav.title" v-for="nav in navs" :key="nav.title" @click.native="goto(nav.path)">
       <!  <myicons :type="nav.name"/>
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

</script>

<style>


</style>
