<template>
	<div class="header-wrapper header_wrapper_hide header_wrapper_show" id="header-wrapper">

    <header class="index-header-bar" id="header-m">
      <a href="https://m.meizu.com/?click=mgw_index_yt_logo" data-mtype="mgw_index_yt_logo" data-bh="click_mgw_index_yt_logo" class="index-logo">
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
      <a href="#/search" id="btn-search" class="icon-search"></a>
      <a href="/" data-mtype="mgw_index_yt_cart" data-bh="click_mgw_index_yt_cart" class="shop-cart"></a>
      <span @click="perso" class="icon-nav-btn" data-mtype="mgw_index_yt_menu" id="JS_menubar"></span>
    </header>

    <div class="header-menu" id="menu-m">
      <span class="close-btn" id="closeBtn"></span>
      <a href="https://m.meizu.com" class="header-menu-logo">魅族官网</a>
    </div>

  <!-- 头部导航 -->
  <div class="index-header" id="index-nav"><div class="nav-bar">
    <ul>
        <li @click="selectNav(index)" v-for="(n,index) in navs" :key="index" :class="{
        li_active:nav===index
        }">
                                    <a href="javascript:;" >
        {{n.title}}
                                    </a>
        </li>
    </ul>
  </div></div>
</div>
	
</template>

<script>
	import judgeRouter from '../libs/judgeRouter.js';
	export default {
	data() {
		return { 
			};
		},	
		methods: {	
			perso() {
				this.$router.push({name:"Personal"});
			},
			selectNav(nav) {
				this.$router.push({ name: this.navs[nav].path });
				this.$store.dispatch("setNav", nav);
			},
			judgeRouter
		},
		computed:{
			title() {
		      return this.$store.getters.getTitle;
		    },
			// 往仓库获取频道信息
			navs() {
				return this.$store.getters.getNavs;
			},
		    nav: {
		      // getter
		      get: function() {
		        return this.$store.getters.getNav;
		      },
		      // setter
		      set: function(newValue) {
		        this.$store.state.nav = newValue;
		      }
		    }
		},
		watch:{},
		mounted(){
			this.judgeRouter("nav");
		}
	}
	
</script>

<style scoped>
@import url("../assets/index_f715205.css");
@import url("../assets/common_5dd8cc3.css");
@charset "UTF-8";
* {
	
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

html,body {
	width: 100%;
	height: 100%
}

html.no-scroll,body.no-scroll {
	overflow: hidden
}

.overflow-y {
	overflow: hidden
}

h1,h2,p {
	box-sizing: content-box
}

.header-wrapper {
	position: fixed;
	z-index: 10000;
	background: #fff;
	width: 100%;
	box-sizing: border-box;
	top: 0
}

.index-header-bar {
	display: flex;
	padding: 3vw 2vw 3vw 3.329vw
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

.index-header-bar .index-search:after,.index-header-bar .index-search:before {
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

.index-header-bar .shop-cart,.index-header-bar .icon-nav-btn,.index-header-bar .icon-search {
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
	-webkit-transform: translate(0,-250vw);
	transform: translate(0,-250vw);
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
	-webkit-transform: translate(-50%,-50%);
	transform: translate(-50%,-50%)
}

.header-menu .close-btn:before {
	height: 5vw;
	width: 1px;
	-webkit-transform: translate(-50%,-50%);
	transform: translate(-50%,-50%)
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
	-webkit-transform: translate(0,0);
	transform: translate(0,0)
}

.header-menu .header-menu-logo {
	position: absolute;
	width: 18.51852vw;
	height: 8.33333vw;
	fill: #00b4ff;
	-webkit-transform: translate(-50%,0);
	transform: translate(-50%,0);
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

@font-face {
	font-family:iconfont;src:url(//m2.res.meizu.com/static/cn/global/fonts/iconfont_f7eda9f.woff?t=1493029250675) format("woff"),url(//m2.res.meizu.com/static/cn/global/fonts/iconfont_ad5e08d.ttf?t=1493029250675) format("truetype")
}

.iconfont {
	font-family: iconfont!important;
	font-size: 16px;
	font-style: normal;
	-webkit-text-stroke-width: .2px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.icon-weibiaoti1:before {
	content: "\e62c"
}

.icon-5:before {
	content: "\e606"
}

.icon-4:before {
	content: "\e607"
}

.icon-yuanjiaojuxing11:before {
	content: "\e60a"
}

.icon-goback:before {
	content: "\e600"
}

.icon-131:before {
	content: "\e609"
}

.icon-gouwuche1:before {
	content: "\e64f"
}

.search-box {
	display: none;
	background-color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10001;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch
}

.search-box .header {
	position: relative;
	background-color: #fff;
	height: 44px
}

.search-box .header .title {
	line-height: 44px
}

.search-box .header .goback {
	left: 0;
	position: absolute;
	top: 0
}

.search-box .header .goback a {
	width: 44px;
	padding: 12px 0 0 20px;
	display: block;
	height: 44px;
	box-sizing: border-box
}

.search-box .header .goback .ico-back {
	display: inline-block
}

.search-box .header .goback .ico-back:before {
	content: "\e600";
	color: #666;
	display: block;
	width: 20px;
	height: 20px;
	line-height: 20px;
	font-size: 20px
}

.search-box .header:after {
	content: "";
	position: absolute;
	z-index: 1;
	left: 0;
	right: 0;
	bottom: -1px;
	width: 100%;
	height: 1px;
	display: block;
	border-top: 1px solid #e5e5e5;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5)
}

.search-box .search-form {
	margin-left: 14.35185vw;
	line-height: 44px;
	overflow: auto
}

.search-box .search-form button {
	float: right;
	width: 20%;
	line-height: 44px;
	color: #666;
	font-size: 14px;
	border: 0;
	outline: 0;
	background: 0 0
}

.search-box .so-keyword {
	float: left;
	position: relative;
	width: 80%
}

.search-box .so-keyword:before {
	content: "\e606";
	position: absolute;
	left: 2.77778vw;
	top: 50%;
	margin-top: -1.94vw;
	width: 14px;
	height: 14px;
	color: #999;
	font-size: 14px;
	line-height: 1.2;
	font-family: iconfont
}

.search-box .so-keyword .btn-clear {
	position: absolute;
	right: 0;
	top: 50%;
	width: 30px;
	height: 30px;
	margin-top: -15px;
	padding: 6px;
	box-sizing: border-box
}

.search-box .so-keyword .btn-clear:before {
	content: "\e62c";
	display: block;
	width: 18px;
	height: 18px;
	line-height: 1;
	color: #b5b5b5;
	font-size: 18px;
	font-family: iconfont
}

.search-box .so-input {
	width: 100%;
	height: 30px;
	padding: 1.66667vw 9.16667vw 1.66667vw 8.33333vw;
	color: #666;
	font-size: 14px;
	border: 0;
	border-radius: 16px;
	box-sizing: border-box;
	outline: 0;
	background-color: #eee
}

.search-box .so-recommend .re-wrap {
	padding: 6.01852vw 4.16667vw;
	box-sizing: border-box;
	font-size: 14px;
	overflow: hidden;
	border-bottom: #eee solid 2.22222vw
}

.search-box .so-recommend .recommend-hd {
	color: #333;
	font-size: 3.88889vw
}

.search-box .so-recommend .hotwords {
	width: 105%;
	height: 23.05556vw;
	overflow: hidden
}

.search-box .so-recommend .hotwords a {
	float: left;
	padding: 1.38889vw 4.16667vw;
	margin: 3.33333vw 2.77778vw 0 0;
	max-width: 90%;
	height: 7.77778vw;
	line-height: 1.4;
	color: #666;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	box-sizing: border-box;
	border: 1px solid #999;
	border-radius: 3.88889vw
}

.search-box .so-history {
	padding: 4.16667vw;
	box-sizing: border-box;
	font-size: 14px;
	overflow: hidden;
	padding-top: 0
}

.search-box .so-history .recommend-hd {
	border-bottom: 1px solid #eee;
	height: 12.22222vw;
	line-height: 12.22222vw;
	color: #333;
	font-size: 3.88889vw
}

.search-box .so-history .recommend-hd i {
	float: right;
	padding: 3.7037vw
}

.search-box .so-history .recommend-hd i::after {
	content: "\e610";
	display: block;
	width: 2.77778vw;
	height: 2.77778vw;
	line-height: 1;
	color: #333;
	font-size: 18px;
	font-family: iconfont
}

.search-box .so-history p {
	color: #999;
	text-align: center;
	height: 12.22222vw;
	line-height: 12.22222vw
}

.search-box .so-history .lists a {
	display: block;
	width: 100%;
	height: 12.22222vw;
	line-height: 12.22222vw;
	border-bottom: 1px solid #eee;
	color: #666
}

.search-box .scroll-wrap {
	width: 100%;
	height: 800px;
	overflow-y: auto
}

.search-box .scroll-wrap.auto-keyword {
	background: #fff;
	position: absolute;
	z-index: 1002;
	top: 44px;
	display: none
}

.search-box .scroll-wrap.auto-keyword .so-list {
	padding: 4.16667vw;
	box-sizing: border-box;
	font-size: 14px;
	overflow: hidden;
	padding-top: 0
}

.search-box .scroll-wrap.auto-keyword .so-list .recommend-hd {
	border-bottom: 1px solid #eee;
	height: 12.22222vw;
	line-height: 12.22222vw;
	color: #333;
	font-size: 3.88889vw
}

.search-box .scroll-wrap.auto-keyword .so-list .lists a {
	display: block;
	width: 100%;
	height: 12.22222vw;
	line-height: 12.22222vw;
	border-bottom: 1px solid #eee;
	color: #666
}

.search-box .scroll-wrap.auto-keyword .so-list .lists span {
	color: #999;
	font-size: 12px;
	float: right
}

.search-box .scroll-wrap i {
	font-style: normal
}

.popup {
	z-index: 1001!important
}

input[type=search]::-webkit-search-cancel-button {
	-webkit-appearance: none
}

.header_wrapper_hide {
	transition: all .2s linear;
	-webkit-transform: translate(0,-30vw);
	transform: translate(0,-30vw)
}

.header_nav_hide {
	transition: all .2s linear;
	-webkit-transform: translate(0,-30vw);
	transform: translate(0,-30vw)
}

.header_nav_show {
	transition: all .2s linear;
	-webkit-transform: translate(0,0);
	transform: translate(0,0)
}

.header_wrapper_show {
	transition: all .2s linear;
	-webkit-transform: translate(0,0);
	transform: translate(0,0)
}

.hide_scroll {
	overflow: hidden
}

.body_scroll {
	height: 100vh;
	overflow: hidden
}

html.no-scroll body {
	overflow: hidden
}
.li_active {
	border-bottom: .35vw solid #0bbbef
}

.index-header .nav-bar .li_active a {
	color: #0bbbef
}
</style>