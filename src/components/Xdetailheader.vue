<template>
	<header id="header" class="header">
		<a @click="back" class="header-back" id="headerBack" data-mtype="mall_de_top_back">
			<i class="iconfont icon-goback"></i>
		</a>
		<div class="header-opacity trans" id="headerOpacity">
			<span>商品详情</span>
		</div>
		<a @click="home" class="header-home" id="headerHome" data-mtype="mall_de_top_home">
			<i class="iconfont icon-home"></i>
		</a>
	</header>
</template>

<script src="../assets/zepto.js"></script>
<script>
export default {
	methods:{	
		home(){
	        this.$router.push("Index");
	    },
	    back(){
	      	this.$router.history.go(-1);
	    }
	}
}
</script>

<style>
	@import url("../assets/main-4913597738.css");
</style>