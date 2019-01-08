<template>
	<header class="index-header-bar" id="header-m">
		<a href="https://m.meizu.com/?click=mgw_index_yt_logo" data-mtype="mgw_index_yt_logo" class="index-logo">
			<svg fill="#00b4ff" version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="402.048px" height="73.556px" viewBox="17.318 5.824 402.048 73.556" enable-background="new 17.318 5.824 402.048 73.556" xml:space="preserve">
				<path d="M321.513,5.824H256.91v12.878h51.478l-49.294,44.581c-8.227,7.023-2.872,16.096,3.958,16.096h65.337V66.472
          h-52.117l48.964-44.554C333.52,14.473,328.535,5.824,321.513,5.824"></path>
				<rect x="226.517" y="5.824" width="14.426" height="73.556"></rect>
				<path d="M104.296,5.824h-71.36c-8.576,0-15.618,7.012-15.618,15.588v57.967H31.14V23.743
          c0-2.711,2.208-5.041,4.92-5.041h25.31v60.677h14.428V18.702h25.312c2.712,0,4.919,2.329,4.919,5.041v55.636h13.86V21.416
          C119.888,12.841,112.872,5.824,104.296,5.824"></path>
				<path d="M148.765,23.614c0-2.712,2.199-4.912,4.911-4.912h55.909V5.824h-58.236c-8.576,0-15.592,7.016-15.592,15.592
          v42.37c0,8.576,7.017,15.592,15.592,15.592h58.236V66.5h-55.909c-2.711,0-4.911-2.199-4.911-4.912V49.042h58.43V36.117h-58.43
          V23.614z"></path>
				<path d="M405.506,5.824v55.637c0,2.71-2.22,5.039-4.931,5.039h-39.77c-2.711,0-4.892-2.328-4.892-5.039V5.824h-13.86
          v57.963c0,8.576,7.018,15.592,15.592,15.592h46.127c8.575,0,15.592-7.017,15.592-15.592V5.824H405.506z"></path>
			</svg>

		</a>
		<!-- <div class="index-search" data-mtype="mgw_index_yt_search">
        <input type="text" id="indexSearch" placeholder="">
      </div> -->
		<a href="https://mall.meizu.com/#search?click=mgw_index_yt_search" data-mtype="mgw_index_yt_search" class="icon-search"></a>
		<a href="https://cart.mall.meizu.com/?click=mgw_index_yt_cart" data-mtype="mgw_index_yt_cart" class="shop-cart"></a>
		<span class="icon-nav-btn" data-mtype="mgw_index_yt_menu" id="JS_menubar"></span>
	</header>
</template>

<script>
</script>

<style scoped>
	@import url("../assets/index_f715205.css");
	@import url("../assets/common_5dd8cc3.css");
	@charset "UTF-8";
	* {
		padding: 0;
		margin: 0
	}
	
	html {
		font-size: 62.5%
	}
	
	body {
		font-size: 14px;
		font-size: 1.4rem
	}
	
	a {
		text-decoration: none
	}
	
	html,
	body {
		width: 100%;
		height: 100%
	}
	
	html.no-scroll,
	body.no-scroll {
		overflow: hidden
	}
	
	.overflow-y {
		overflow: hidden
	}
	
	h1,
	h2,
	p {
		box-sizing: content-box
	}
	
	.header-wrapper {
		position: fixed;
		padding: 3vw 2vw 3vw 3.329vw;
		z-index: 10000;
		background: #fff;
		width: 100%;
		box-sizing: border-box;
		top: 0
	}
	
	.index-header-bar {
		display: flex
	}
	
	.index-header-bar .index-logo {
		display: block;
		width: 18.51852vw;
		height: 8.33333vw;
		margin: 0 auto
	}
	
	.index-header-bar .index-logo svg {
		display: block;
		width: 18.51852vw;
		height: 8.33333vw;
		fill: #00b4ff
	}
	
	.index-header-bar .index-search {
		background: #F2F2F2;
		border-radius: 3.8vw;
		width: 60vw;
		height: 8.33333vw;
		margin-right: 2vw;
		position: relative
	}
	
	.index-header-bar .index-search:after,
	.index-header-bar .index-search:before {
		position: absolute;
		content: ''
	}
	
	.index-header-bar .index-search:after {
		width: 4vw;
		height: 4vw;
		border: .5vw solid #999;
		border-radius: 50%;
		top: 2vw;
		left: 3vw
	}
	
	.index-header-bar .index-search:before {
		width: 2vw;
		height: .5vw;
		border-radius: .5vw;
		-webkit-transform: rotate(35deg);
		transform: rotate(35deg);
		background: #999;
		top: 5.5vw;
		left: 5.8vw
	}
	
	.index-header-bar .index-search input {
		display: block;
		height: 100%;
		background: transparent;
		border: 0;
		outline: 0;
		padding-left: 10vw;
		font-size: 3.5vw
	}
	
	.index-header-bar .shop-cart,
	.index-header-bar .icon-nav-btn,
	.index-header-bar .icon-search {
		width: 3.7037vw;
		height: 3.7037vw;
		background: green;
		position: absolute;
		z-index: 5;
		top: 5.5vw
	}
	
	.index-header-bar .shop-cart {
		width: 4.81481vw;
		height: 4.81481vw;
		background: url(//m2.res.meizu.com/static/cn/_partial/header/images/icon-shop-cart_297ceef.svg) no-repeat center center;
		background-size: 100%;
		right: 12.68519vw;
		top: 5vw
	}
	
	.index-header-bar .icon-nav-btn {
		background: url(//m2.res.meizu.com/static/cn/_partial/header/images/icon-menu_e428c6e.svg) no-repeat center center;
		background-size: 100% 100%;
		right: 2.96296vw;
		top: 5.7vw
	}
	
	.index-header-bar .icon-search {
		width: 3.88889vw;
		height: 3.88889vw;
		background: url(//m2.res.meizu.com/static/cn/_partial/header/images/icon-search_0f3d0ce.svg) no-repeat center center;
		background-size: 100%;
		top: 5.5vw;
		left: 3vw
	}
	
	.header-menu {
		position: absolute;
		width: 100%;
		height: 100vh;
		background: #fafafa;
		left: 0;
		z-index: 10001;
		top: 14vw;
		-webkit-transform: translate(0, -250vw);
		transform: translate(0, -250vw);
		transition: -webkit-transform .8s;
		transition: transform .8s
	}
	
	.header-menu:after {
		position: absolute;
		content: '';
		width: 100%;
		height: 30vw;
		background: #fff;
		right: 0;
		top: -30vw
	}
	
	.header-menu .close-btn {
		position: absolute;
		width: 5vw;
		height: 5vw;
		right: 3vw;
		top: -9.2vw;
		background-image: url(//bbs.res.meizu.com/static_new/h5/img/close.58557e4.png);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50%;
		z-index: 9
	}
	
	.header-menu .close-btn:after {
		width: 5vw;
		height: 1px;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%)
	}
	
	.header-menu .close-btn:before {
		height: 5vw;
		width: 1px;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%)
	}
	
	.header-menu ul {
		border-bottom: 1px solid #efefef;
		display: flex;
		flex-wrap: wrap;
		padding: 1vw 1vw 0vw;
		margin-bottom: 7vw
	}
	
	.header-menu ul li {
		text-align: center;
		margin-bottom: 4.5vw;
		width: 25%
	}
	
	.header-menu ul li img {
		width: 7vw;
		display: block;
		margin: 0 auto
	}
	
	.header-menu ul li span {
		font-size: 2.96296vw;
		line-height: 2.5;
		color: #000
	}
	
	.header-menu ul:first-child {
		background: #fff;
		border-bottom: 0;
		box-shadow: 0 4px 12px 1px #ebebeb
	}
	
	.header-menu ul:first-child li img {
		width: 11vw
	}
	
	.header-menu ul:first-child li span {
		line-height: 1.5
	}
	
	.header-menu #menuListTwo {
		margin-bottom: 5vw
	}
	
	.header-menu #menuListTwo li {
		margin-bottom: 3.5vw
	}
	
	.header-menu #menuListThree {
		border-bottom: 0
	}
	
	.header-menu .header-menu-footer {
		text-align: center;
		display: flex;
		padding: 5vw 3vw 0
	}
	
	.header-menu .header-menu-footer a {
		flex: 1;
		display: inline-block;
		margin: 0 1vw;
		font-size: 4vw;
		line-height: 9.72222vw;
		height: 10.18519vw;
		border-radius: 5vw
	}
	
	.header-menu .header-menu-footer .login {
		background: #0bbbef;
		color: #fff
	}
	
	.header-menu .header-menu-footer .register {
		color: #0bbbef;
		border: .5vw solid #0bbbef
	}
	
	.header-menu.active {
		-webkit-transform: translate(0, 0);
		transform: translate(0, 0)
	}
	
	.header-menu .header-menu-logo {
		position: absolute;
		width: 18.51852vw;
		height: 8.33333vw;
		fill: #00b4ff;
		-webkit-transform: translate(-50%, 0);
		transform: translate(-50%, 0);
		left: 50%;
		top: -11vw;
		z-index: 1001;
		font-size: 4.16667vw;
		text-align: center;
		line-height: 8.33333vw;
		color: #000
	}
	
	.swiper-container-horizontal .swiper-pagination {
		text-align: right;
		padding-right: 5vw
	}
	
	.swiper-container-horizontal .swiper-pagination span {
		margin: 0 2px;
		background: #fff;
		width: 6px;
		height: 6px
	}
	
	.swiper-container-horizontal .swiper-pagination .swiper-pagination-bullet-active {
		opacity: 1
	}
	
	@media screen and (max-width:500px) {
		#site-nav {
			display: none
		}
	}
</style>