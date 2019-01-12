<template>
    <div>
         <Xheader/>
         <XPart/>
         <Xheaderfoot/>
    </div>
</template>

<script>
   import Xheader from '../components/Xheader.vue';
   import XPart from '../components/XPart.vue';
   import Xheaderfoot from '../components/Xheaderfoot.vue';
   
    
    export default {    

        components: {
            Xheader,
            XPart,
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