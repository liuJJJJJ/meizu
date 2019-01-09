<template>
    <div>
         <Xheader/>

        <Xheaderfoot/>
    </div>
</template>

<script>
   import Xheader from '../components/Xheader.vue';
    import Xheaderfoot from '../components/Xheaderfoot.vue';

    
    export default {    

        components: {
            Xheader,
            Xheaderfoot

        }
    };
</script>

<style>
.li_active {
    border-bottom: .35vw solid #0bbbef;
}
.a_active {
    color: #0bbbef!important;
}
</style>