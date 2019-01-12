<template>
    <div>
         <Xheader/>
         <XLive/>
         <Xheaderfoot/>
    </div>
</template>

<script>
   import Xheader from '../components/Xheader.vue';
   import XLive from '../components/XLive.vue';
   import Xheaderfoot from '../components/Xheaderfoot.vue';
   
    
    export default {    

        components: {
            Xheader,
            XLive,
            Xheaderfoot
        }
    };
</script>

<style>
body{
    min-height: 100%;
    height: auto;
    background: #f4f4f4;
    line-height: 1.5;
    top: 23.5vw;
}
</style>