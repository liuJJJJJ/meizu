<template>
    <div>
         <Xheader/>
         <Xphone/>
         <Xheaderfoot/>
    </div>
</template>

<script>
   import Xheader from '../components/Xheader.vue';
   import Xphone from '../components/Xphone.vue';
   import Xheaderfoot from '../components/Xheaderfoot.vue';
   import judgeRouter from "../libs/judgeRouter.js";
    
   export default {
  data() { 
  return {

  };
  },
  components: {
    Xheader,
    Xphone,
    Xheaderfoot
  },
  methods: {
    judgeRouter,
  },
  mounted() {
    this.judgeRouter("channel");
  },
  watch: {
    $route() {
      this.judgeRouter("channel");
    }
  }
};
</script>

<style>

</style>