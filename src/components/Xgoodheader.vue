<template>
	<div class="app list">
		<header class="header orient-h fixed-top">
		<a @click="back" class="header-back" id="page-nav-back" data-mtype="mall_list_yt_back"></a>
		<div class="title">手机</div>
		<div class="qtool">
			<a @click="search" id="btn-search"><i class="iconfont ico-search"></i></a>
		</div>
	</header>
	</div>
	

</template>

<script>
export default {
		methods: {
			
	 search() {
        this.$router.push("Search");
		
    },
     back() {
      this.$router.history.go(-1);
    },
		
	}
	}
</script>

<style scoped>

</style>