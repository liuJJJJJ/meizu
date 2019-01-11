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
   
    
    export default {    

        components: {
            Xheader,
            Xphone,
            Xheaderfoot
        }
    };
</script>

<style>

</style>