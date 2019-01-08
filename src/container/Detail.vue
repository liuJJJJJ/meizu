<template>
<div>
		<Xdetailheader/>
		<Xdetaillist/>
		<Xdetailfoot/>

	</div>
</template>

<script>
	import Xdetailheader from '../components/Xdetailheader.vue';
	import Xdetaillist from '../components/Xdetaillist.vue';
	import Xdetailfoot from '../components/Xdetailfoot.vue';
	

	export default {

		components: {
			Xdetailheader,
			Xdetaillist,
			Xdetailfoot

		}
	};
	
	
</script>

<style>
</style>