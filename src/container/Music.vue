<template>
  <div>
    <Xmusic/>
    <Xheaderfoot/>
  </div>
</template>
<script>
import Xmusic from "../components/Xmusic.vue";
import Xheaderfoot from "../components/Xheaderfoot.vue";
import judgeRouter from "../libs/judgeRouter.js";
export default {
  data() { 
  return {

  };
  },
  components: {
    Xmusic,
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