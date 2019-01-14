<template>
  <div>
    <Xphone/>
    <Xheaderfoot/>
  </div>
</template>
<script>
import Xphone from "../components/Xphone.vue";
import Xheaderfoot from "../components/Xheaderfoot.vue";
import judgeRouter from "../libs/judgeRouter.js";
export default {
  data() { 
  return {

  };
  },
  components: {
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
<style scoped>

</style>