<template>
    <div>
        <Xheadernav/>
        <Xheaderfoot/>
    </div>
</template>
<script>
import Xheadernav from "../components/Xheadernav.vue";
import Xheaderfoot from "../components/Xheaderfoot.vue";
import judgeRouter from "../libs/judgeRouter.js";
export default {
  data() { 
  return {

  };
  },
  components: {
    Xheadernav,
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
