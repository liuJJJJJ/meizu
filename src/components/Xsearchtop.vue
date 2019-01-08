<template>
	<header class="header">
		<div class="search-form">
			<form action="//mall.meizu.com/new/s" method="get">
				<div class="so-keyword"> <input class="so-input" type="search" name="keyword" autocomplete="off"> <span class="btn-clear"></span> </div> <button type="submit" name="">搜索</button> </form>
		</div>
		<div class="goback">
			<a class="btn-back"> <i class="iconfont ico-back"></i> </a>
		</div>
	</header>
</template>

<script>
</script>

<style scoped>
	@import url("../assets/index_f715205.css");
	@import url("../assets/common_5dd8cc3.css");
	body,
	button,
	dd,
	dl,
	dt,
	form,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	html,
	input,
	li,
	ol,
	p,
	td,
	th,
	ul {
		margin: 0;
		padding: 0
	}
	
	html {
		-webkit-text-size-adjust: 100%
	}
	
	html * {
		-webkit-tap-highlight-color: transparent
	}
	
	body,
	html {
		height: 100%
	}
	
	body {
		position: relative;
		color: #333;
		font-size: 12px;
		font-family: sans-serif
	}
	
	a {
		color: #666;
		text-decoration: none
	}
	
	a.link {
		color: #00c3f5
	}
	
	img,
	textarea {
		border: none;
		vertical-align: middle
	}
	
	ol,
	ul {
		list-style: none
	}
	
	em,
	i {
		font-style: normal
	}
	
	::-webkit-input-placeholder {
		color: #ccc
	}
	
	::-moz-placeholder {
		color: #ccc
	}
	
	input[type=search]::-webkit-search-cancel-button {
		-webkit-appearance: none
	}
	
	[data-dpr="1"] .app {
		max-width: 720px;
		margin: auto
	}
	
	.fl {
		float: left
	}
	
	.fr {
		float: right
	}
	
	.noscroll {
		height: 100%;
		overflow: hidden
	}
	
	.clearfix {
		overflow: auto;
		_height: 1%
	}
	
	.icon {
		display: inline-block;
		vertical-align: middle
	}
	
	.flexbox,
	.orient-h,
	.orient-v {
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: flex
	}
	
	.flex-1 {
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-webkit-flex: 1;
		flex: 1
	}
	
	.orient-h {
		-webkit-box-orient: horizontal;
		-webkit-flex-direction: row;
		flex-direction: row
	}
	
	.orient-h,
	.orient-v {
		-webkit-box-direction: normal
	}
	
	.orient-v {
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		flex-direction: column
	}
	
	.fixed-btm {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 20;
		width: 100%
	}
	
	.fixed-top {
		position: fixed!important;
		left: 0!important;
		top: 0!important;
		z-index: 1;
		width: 100%
	}
	
	.after-brd-t,
	.recommend .bloc:after {
		top: 0
	}
	
	.after-brd-b,
	.after-brd-t,
	.brand-day .hd:after,
	.header:after,
	.recommend .bloc:after,
	.recommend .hd:after {
		content: "";
		position: absolute;
		z-index: 1;
		left: 0;
		right: 0;
		width: 100%;
		height: 1px;
		display: block;
		border-top: 1px solid #e5e5e5;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5)
	}
	
	.after-brd-b,
	.brand-day .hd:after,
	.header:after,
	.recommend .hd:after {
		bottom: -1px
	}
	
	.before-brd-l,
	.brand-day .tricol .cell:before,
	.recommend .bloc:before,
	.recommend .tricol .cell:before {
		content: "";
		position: absolute;
		z-index: 1;
		top: 0;
		left: -1px;
		width: 1px;
		height: 100%;
		display: block;
		border-left: 1px solid #e5e5e5;
		-webkit-transform: scaleX(.5);
		transform: scaleX(.5)
	}
	
	.brd-b,
	.brd-t {
		position: relative
	}
	
	.brd-b:after,
	.brd-t:after {
		content: "";
		position: absolute;
		left: 0;
		width: 100%;
		height: 1px
	}
	
	.brd-b:after {
		bottom: 0;
		background-image: -webkit-linear-gradient(0deg, #e5e5e5 50%, transparent 0);
		background-image: -moz-linear-gradient(0deg, #e5e5e5 50%, transparent 50%);
		background-image: -ms-linear-gradient(0deg, #e5e5e5 50%, transparent 50%);
		background-image: -o-linear-gradient(0deg, #e5e5e5 50%, transparent 50%);
		background-image: linear-gradient(0deg, #e5e5e5 50%, transparent 0)
	}
	
	.brd-t:after {
		top: 0;
		background-image: -webkit-linear-gradient(0deg, transparent 50%, #e5e5e5 0);
		background-image: -moz-linear-gradient(0deg, transparent 50%, #e5e5e5 50%);
		background-image: -ms-linear-gradient(0deg, transparent 50%, #e5e5e5 50%);
		background-image: -o-linear-gradient(0deg, transparent 50%, #e5e5e5 50%);
		background-image: linear-gradient(0deg, transparent 50%, #e5e5e5 0)
	}
	
	.app {
		position: relative;
		min-height: 100%;
		box-sizing: border-box
	}
	
	.app .innercon {
		padding: 0 .69444rem
	}
	
	.header {
		position: relative;
		height: 44px;
		background-color: #fff
	}
	
	.header .goback,
	.header .gohome,
	.header .logo,
	.header .qtool {
		position: absolute;
		top: 0
	}
	
	.header .goback a,
	.header .gohome a,
	.header .logo a,
	.header .qtool a {
		display: block;
		height: 44px;
		box-sizing: border-box
	}
	
	.header .iconfont {
		position: relative
	}
	
	.header .iconfont:before {
		display: block;
		width: 20px;
		height: 20px;
		line-height: 20px;
		font-size: 20px
	}
	
	.header .title {
		max-width: 60%;
		margin: auto;
		line-height: 44px;
		color: #666;
		font-size: 18px;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}
	
	.header .goback {
		left: 0
	}
	
	.header .goback a {
		width: 44px;
		padding: 12px 0 0 10px
	}
	
	.header .goback .ico-back {
		display: inline-block
	}
	
	.header .goback .ico-back:before {
		content: "\E600";
		color: #666
	}
	
	.go-top {
		display: none;
		position: fixed;
		right: .22222rem;
		bottom: 1.88889rem;
		z-index: 2;
		width: 1rem;
		height: 1rem;
		border-radius: 2px;
		background: rgba(0, 0, 0, .3) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAAA3NCSVQICAjb4U/gAAAAMFBMVEX///////////////////////////////////////////////////////////////9Or7hAAAAAEHRSTlMAESIzRFVmd4iZqrvM3e7/dpUBFQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAI6SURBVHic7dk9ThtBHIbxNRgbCIpSIgESFwBxAsQJQm4Q+hSkSJMKbgAtFdyApKHk4wQouQASEClSJGj4CIlhwHh2dhbvenc0M3+a51fitV8//mCNSRIAAAAAAAAAAAAAAAAAAAC8rubXrS+vsTt5qZT6/U58t9XdVeqX+PCG6lkX3h3Tu+pOeHg7HVaborsmWDp5IxsWfZZHrV31V3DYDpZMzgVLJueD5ZJNcPqeuhUaXtN7N630HnwW2W2ncyvJqmiyCX46U0gmW8GJaLIVLJrczk/l7kZULx7c3AMfU99jK5Xc92oSSi54MckkF7x9RJJH0pF164fpKeM64vBHvZE7EZpzxodou4XBEsmFwQLJJcHxk9Pgvg+0Y3GTTXD/R/htfclVlOHlsmAreSnCbrM8OG7ygOCoyc3LAcFZ8nnw4ff6lv8VXzyuL35YCrxrgndKDtiNlFwRHC15uCo4Sz4LOrxYFWwlLwTcrREcJzkN/j/ooDfhk03wt4GHHQRPrhUcIblmcNIInWyCq764nAqbbIK/Vx1pkk+DDM/XDbaSZwPsDtUODpw8p2+rU+er6Wl98P2s9+7Qib6tozpHN4710T+9h52CQyYfuwRbyYeeu2234CzZ96/WCbfgLLnjOfzWMdgkP4QZrh1skn2He2ece5d/L830fs95Dve+9PjhcpXGSYgX1/PbySlYJx/6Dk+7PcNd3WfZ4dVY5tPFnutVWvt/Vrx3AQAAAAAAAAAAAAAAAAAAgGKPsbKS75UT5sYAAAAASUVORK5CYII=) no-repeat 50%;
		background-size: contain
	}
	
	.go-top img {
		width: 100%;
		height: 100%
	}
	
	@font-face {
		font-family: iconfont;
		src: url(data:application/font-woff;base64,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) format("woff"), url(data:application/x-font-ttf;base64,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) format("truetype")
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
		content: "\E62C"
	}
	
	.icon-5:before {
		content: "\E606"
	}
	
	.icon-4:before {
		content: "\E607"
	}
	
	.icon-yuanjiaojuxing11:before {
		content: "\E60A"
	}
	
	.icon-goback:before {
		content: "\E600"
	}
	
	.icon-131:before {
		content: "\E609"
	}
	
	.icon-gouwuche1:before {
		content: "\E64F"
	}
	
	body {
		background-color: #eee
	}
	
	.index .header,
	.index .header .logo a,
	.index .header .qtool a {
		height: 60px
	}
	
	.index .header .logo {
		left: 0
	}
	
	.index .header .logo a {
		width: 100px;
		padding-left: 10px;
		background: url("data:image/svg+xml,%3Csvg width='250' height='46' viewBox='0 0 250 46' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M189.154 0c4.366 0 7.466 5.41 2.314 10.065l-30.447 27.863h32.408V46H152.8c-4.247 0-7.576-5.674-2.46-10.066l30.651-27.88h-32.01V0h40.172zm-59.07 46V0h8.97v46h-8.97zm-76-46c5.333 0 9.696 4.388 9.696 9.751V46h-8.618V11.206c0-1.695-1.372-3.152-3.059-3.152H36.364V46h-8.971V8.054H11.655c-1.687 0-3.06 1.457-3.06 3.152V46H0V9.749C0 4.385 4.38 0 9.712 0h44.372zm27.652 11.126v7.819h36.333v8.083H81.736v7.846a3.063 3.063 0 0 0 3.054 3.071h34.765V46H83.343c-5.333 0-9.696-4.388-9.696-9.751V9.75c0-5.363 4.363-9.75 9.696-9.75h36.212v8.053H84.79a3.063 3.063 0 0 0-3.054 3.072zM241.382 0H250V36.25c0 5.363-4.364 9.75-9.696 9.75h-28.682c-5.332 0-9.696-4.387-9.696-9.75V0h8.619v34.794c0 1.695 1.355 3.151 3.041 3.151h24.73c1.685 0 3.066-1.456 3.066-3.15V0z' fill='%2300B4FF' fill-rule='evenodd'/%3E%3C/svg%3E") 10px center no-repeat;
		background-size: 80px 30px
	}
	
	.index .header .title {
		width: 100%;
		max-width: none;
		padding-left: 103px;
		color: #00b4ff;
		line-height: 60px;
		text-align: left;
		font-size: 16px;
		box-sizing: border-box
	}
	
	.index .header .qtool {
		right: 0;
		text-align: right
	}
	
	.index .header .qtool a {
		float: left;
		display: inline-block;
		padding: 20px 10px 0 10px;
	}
	
	.index .header .qtool a:last-child {
		padding-right: 10px
	}
	
	.index .header .qtool .iconfont {
		color: #999
	}
	
	.index .header .qtool .ico-search:before {
		content: "\E606"
	}
	
	.index .header .qtool .ico-cart:before {
		content: "\E64F"
	}
	
	.index .header .qtool .ico-member:before {
		content: "\E607"
	}
	
	.index .header .qtool .login .ico-member:before {
		color: #00c3f5
	}
	
	.index .act-bar img {
		width: 100%
	}
	
	.index .footer {
		padding: .27778rem;
		overflow: auto
	}
	
	.index .footer a {
		color: #888
	}
	
	.index .footer .mall-qrcode {
		float: left;
		margin: 0 .27778rem 0 0;
		width: 1.22222rem;
		height: 1.22222rem
	}
	
	.index .footer .wxid {
		color: #666;
		line-height: 1.22222rem
	}
	
	.index .footer .copy {
		float: left;
		text-align: center;
		line-height: 1.5;
		padding-top: .13889rem;
		color: #999;
		font-size: 10px
	}
	
	.index .footer .footer-copyright {
		font-size: 12px;
		line-height: 1.6;
		color: #999;
		text-align: left;
		padding: .27778rem 0 0;
		clear: both;
		-webkit-font-smoothing: antialiased
	}
	
	.index .footer .footer-copyright a {
		color: #999
	}
	
	.index .footer .footer-copyright a:active {
		color: #666
	}
	
	.topbnr-dl-app {
		position: relative;
		width: 100%;
		height: 1.2964rem;
		overflow: hidden;
		background-color: #404141
	}
	
	.topbnr-dl-app img {
		width: 100%
	}
	
	.topbnr-dl-app .bnr-close {
		position: absolute;
		left: 0;
		top: 0;
		width: 1.1112rem;
		height: 1.2964rem
	}
	
	.topbnr-dl-app .bnr-close:before {
		content: "\E60A";
		position: absolute;
		left: 50%;
		top: 50%;
		width: .5556rem;
		height: .5556rem;
		margin: -.2778rem 0 0 -.2778rem;
		line-height: .5556rem;
		opacity: .8;
		color: #fff;
		font-size: 10px;
		font-family: iconfont;
		text-align: center;
		box-sizing: border-box;
		border-radius: 50%;
		border: 1px solid #fff
	}
	
	.channel {
		padding: .33333rem .19444rem;
		background-color: #fff
	}
	
	.channel .row {
		padding-top: .33333rem
	}
	
	.channel .row:first-child {
		padding-top: 0
	}
	
	.channel .item {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		width: 25%;
		text-align: center
	}
	
	.channel .item a {
		display: inline-block
	}
	
	.channel .item span {
		color: #666
	}
	
	.channel .item .name {
		display: block;
		margin: .20833rem -.58333rem 0;
		overflow: hidden
	}
	
	.channel .icon {
		display: block;
		width: 1.30556rem;
		height: 1.30556rem;
		margin: 0 auto;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: 50%
	}
	
	.card .hd {
		position: relative;
		height: .38892rem;
		line-height: .38892rem;
		padding: .36114rem .2778rem;
		font-size: 15px
	}
	
	.card .hd .tit {
		float: left;
		color: #333;
		padding-left: .20833rem;
		border-left: .08333rem solid #00c3f5
	}
	
	.card .hd .more {
		float: right;
		color: #999
	}
	
	.card .hd .more .ico-more,
	.card .hd .more .ico-more:after {
		color: #999;
		font-size: 12px;
		line-height: .38889rem
	}
	
	.card .hd .more .ico-more:after {
		content: "\E609";
		font-family: iconfont
	}
	
	.card .more a {
		display: block;
		height: 1.08333rem;
		line-height: 1.08333rem;
		text-align: center
	}
	
	.grids .row {
		position: relative;
		display: -webkit-flex;
		display: flex;
		justify-content: space-between;
		border-top: .11111rem solid #eee
	}
	
	.grids .row:first-child {
		border-top: none
	}
	
	.grids .cell {
		position: relative;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		width: 4.94444rem;
		height: 6.11111rem;
		box-sizing: border-box;
		margin-left: .11111rem;
		background-color: #fff
	}
	
	.grids .cell:first-child {
		border-left: none;
		margin-left: 0
	}
	
	.grids .cell.cell-album img {
		width: 4.94444rem;
		height: 6.11111rem
	}
	
	.grids .cell a {
		position: relative;
		display: block;
		height: 100%;
		box-sizing: border-box
	}
	
	.grids .cell .sale-sign {
		position: absolute;
		right: .41667rem;
		top: .41667rem;
		width: 30px;
		height: 30px;
		line-height: 32px;
		overflow: hidden;
		color: #fff;
		font-size: 10px;
		text-align: center;
		border-radius: 50%
	}
	
	.grids .pic {
		display: table;
		width: 100%;
		overflow: hidden
	}
	
	.grids .pic .pic-cell {
		display: table-cell;
		width: 100%;
		padding: .5rem 0 .27778rem;
		text-align: center;
		vertical-align: middle
	}
	
	.grids .pic img {
		width: 3.33333rem;
		height: 3.33333rem
	}
	
	.grids .info {
		padding: 0 .27778rem .44444rem;
		text-align: center;
		line-height: 1.3
	}
	
	.grids .info h3 {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #333;
		font-size: 13px;
		font-weight: 400
	}
	
	.grids .info .comment,
	.grids .info .sale-tag {
		max-width: 100%;
		margin-top: .16667rem;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}
	
	.grids .info .sale-tag {
		display: inline-block;
		color: #f0415f
	}
	
	.grids .info .sale-tag i {
		float: left;
		padding: 0 2px;
		line-height: 1.4;
		height: 14px;
		margin-right: 1px;
		overflow: hidden;
		color: #fff;
		font-size: 90%;
		text-align: center;
		vertical-align: baseline;
		box-sizing: border-box;
		border-radius: 2px;
		background-color: #f0415f
	}
	
	.grids .info .comment {
		color: #999
	}
	
	.grids .info .price {
		margin-top: .11111rem;
		font-size: 14px;
		font-family: Arial, sans-serif
	}
	
	.grids .info .price span {
		display: inline-block
	}
	
	.grids .info .price .p-sale {
		color: #f0415f
	}
	
	.grids .info .price .p-orn {
		color: #bbb;
		font-size: 10px;
		margin-left: 2px
	}
	
	.grids .tricol {
		border-top: 1px solid #eee
	}
	
	.grids .tricol .cell {
		margin-left: 1px
	}
	
	.grids .tricol .cell .sale-sign {
		right: .27778rem;
		top: .27778rem
	}
	
	.grids .tricol .pic .pic-cell {
		padding: .27778rem 0
	}
	
	.grids .tricol .pic img {
		width: 2.77778rem;
		height: 2.77778rem
	}
	
	.grids .tricol .info {
		padding-bottom: .38889rem
	}
	
	.brand-day,
	.recommend {
		margin-top: .19444rem;
		background-color: #fff
	}
	
	.brand-day .tricol .cell,
	.recommend .tricol .cell {
		height: auto
	}
	
	.brand-day .tricol .cell img,
	.recommend .tricol .cell img {
		width: 100%
	}
	
	.brand-day .tricol .cell:first-child,
	.recommend .tricol .cell:first-child {
		margin-left: 0
	}
	
	.recommend .grids {
		margin-top: -1px;
		overflow: hidden
	}
	
	.recommend .bloc {
		position: relative;
		z-index: 0;
		float: left;
		width: 50%;
		padding: .44444rem .22222rem .38889rem;
		box-sizing: border-box
	}
	
	.recommend .bloc:first-child {
		padding: .44444rem .25rem .25rem
	}
	
	.recommend .bloc:first-child a {
		width: 100%;
		height: 4.80556rem;
		box-sizing: border-box
	}
	
	.recommend .bloc:first-child .info {
		width: auto
	}
	
	.recommend .bloc:first-child .pic {
		width: 3.05556rem;
		height: 3.05556rem
	}
	
	.recommend .bloc:first-child .price span {
		display: block
	}
	
	.recommend .bloc a {
		position: relative;
		display: block;
		width: 100%;
		height: 1.94444rem
	}
	
	.recommend .bloc .pic {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 1.94444rem;
		height: 1.94444rem
	}
	
	.recommend .bloc .pic img {
		width: 100%;
		height: 100%
	}
	
	.recommend .info {
		width: 2.63889rem;
		padding: 0;
		text-align: left
	}
	
	.act-bar,
	.channel,
	.hipost,
	.mid-slider {
		margin-top: .19444rem
	}
	
	.hipost .tricol .cell {
		height: auto;
		margin-left: .22222rem
	}
	
	.hipost .tricol .cell img {
		width: 100%
	}
	
	.hipost .tricol .cell:first-child {
		margin-left: 0
	}
	
	.swipe {
		overflow: hidden;
		position: relative
	}
	
	.swipe .poin {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 1;
		width: 100%;
		padding: .27778rem 0;
		font-size: 0;
		text-align: center
	}
	
	.swipe .poin span {
		display: inline-block;
		width: 6px;
		height: 6px;
		margin: 0 .11111rem;
		vertical-align: middle;
		box-sizing: border-box;
		border-radius: 50%;
		background-color: #c8c9cb
	}
	
	.swipe .poin span.on {
		border: none;
		background-color: #00c3f5
	}
	
	.swipe-wrap {
		overflow: hidden;
		position: relative;
		z-index: 1
	}
	
	.swipe-wrap .item {
		position: relative;
		z-index: 1;
		float: left;
		width: 100%;
		text-align: center
	}
	
	.swipe-wrap .item a {
		display: block
	}
	
	.top-slider .swipe-wrap,
	.top-slider .swipe-wrap .item {
		height: 4.16667rem
	}
	
	.top-slider .swipe-wrap .item img {
		width: 100%;
		height: 4.16667rem
	}
	
	.mid-slider .swipe-wrap,
	.mid-slider .swipe-wrap .item {
		height: 2.5rem
	}
	
	.mid-slider .swipe-wrap .item img {
		width: 100%;
		height: 2.5rem
	}
	
	.mid-slider .poin {
		padding: .22222rem 0
	}
	
	.search-box {
		display: none;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		height: 100%;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch
	}
	
	.search-box .header {
		height: 44px
	}
	
	.search-box .header .title {
		line-height: 44px
	}
	
	.search-box .header .goback a {
		padding-left: 20px
	}
	
	.search-box .search-form {
		margin-left: 1.4353rem;
		line-height: 44px;
		overflow: auto
	}
	
	.search-box .search-form button {
		float: right;
		width: 20%;
		line-height: 44px;
		color: #666;
		font-size: 14px;
		border: none;
		outline: none;
		background: none
	}
	
	.search-box .so-keyword {
		float: left;
		position: relative;
		width: 80%
	}
	
	.search-box .so-keyword:before {
		content: "\E606";
		position: absolute;
		left: .2778rem;
		top: 50%;
		margin-top: -.19446rem;
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
		content: "\E62C";
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
		padding: .16668rem .91674rem .16668rem .8334rem;
		color: #666;
		font-size: 14px;
		border: none;
		border-radius: 16px;
		box-sizing: border-box;
		outline: none;
		background-color: #eee
	}
	
	.search-box .so-recommend .re-wrap {
		padding: .6019rem .4167rem;
		box-sizing: border-box;
		font-size: 14px;
		overflow: hidden;
		border-bottom: .22224rem solid #eee
	}
	
	.search-box .so-recommend .recommend-hd {
		color: #333;
		font-size: .38892rem
	}
	
	.search-box .so-recommend .hotwords {
		width: 105%;
		height: 2.30574rem;
		overflow: hidden
	}
	
	.search-box .so-recommend .hotwords a {
		float: left;
		padding: .1389rem .4167rem;
		margin: .33336rem .2778rem 0 0;
		max-width: 90%;
		height: .77784rem;
		line-height: 1.4;
		color: #666;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		box-sizing: border-box;
		border: 1px solid #999;
		border-radius: .38892rem
	}
	
	.search-box .so-history {
		padding: .4167rem;
		box-sizing: border-box;
		font-size: 14px;
		overflow: hidden;
		padding-top: 0
	}
	
	.search-box .so-history .recommend-hd {
		border-bottom: 1px solid #eee;
		height: 1.22232rem;
		line-height: 1.22232rem;
		color: #333;
		font-size: .38892rem
	}
	
	.search-box .so-history .recommend-hd i {
		display: inline-block;
		float: right;
		padding: .3704rem
	}
	
	.search-box .so-history .recommend-hd i:after {
		content: "\E610";
		display: block;
		width: .2778rem;
		height: .2778rem;
		line-height: 1;
		color: #333;
		font-size: 18px;
		font-family: iconfont
	}
	
	.search-box .so-history p {
		color: #999;
		text-align: center;
		height: 1.22232rem;
		line-height: 1.22232rem
	}
	
	.search-box .so-history .lists a {
		display: block;
		width: 100%;
		height: 1.22232rem;
		line-height: 1.22232rem;
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
		padding: .4167rem;
		box-sizing: border-box;
		font-size: 14px;
		overflow: hidden;
		padding-top: 0
	}
	
	.search-box .scroll-wrap.auto-keyword .so-list .recommend-hd {
		border-bottom: 1px solid #eee;
		height: 1.22232rem;
		line-height: 1.22232rem;
		color: #333;
		font-size: .38892rem
	}
	
	.search-box .scroll-wrap.auto-keyword .so-list .lists a {
		display: block;
		width: 100%;
		height: 1.22232rem;
		line-height: 1.22232rem;
		border-bottom: 1px solid #eee;
		color: #666
	}
	
	.search-box .scroll-wrap.auto-keyword .so-list .lists span {
		color: #999;
		font-size: 12px;
		float: right
	}
	
	.popup {
		z-index: 1001!important
	}
	.search-box .so-input {
    width: 100%;
    height: 30px;
    padding: .16668rem .91674rem .16668rem .8334rem;
    color: #666;
    font-size: 14px;
    border: none;
    border-radius: 16px;
    box-sizing: border-box;
    outline: none;
    background-color: #eee;
}
.search-box .so-keyword:before {
    content: "\E606";
    position: absolute;
    left: .2778rem;
    top: 50%;
    margin-top: -.19446rem;
    width: 14px;
    height: 14px;
    color: #999;
    font-size: 14px;
    line-height: 1.2;
    font-family: iconfont;
}

.search-box .search-form {
		margin-left: 1.4353rem;
		line-height: 44px;
		overflow: auto;
	}
	
	.search-box .so-keyword {
		float: left;
		position: relative;
		width: 80%;
	}
	
	.search-box .so-keyword:before {
		content: "\E606";
		position: absolute;
		left: .2778rem;
		top: 50%;
		margin-top: -.19446rem;
		width: 14px;
		height: 14px;
		color: #999;
		font-size: 14px;
		line-height: 1.2;
		font-family: iconfont;
	}
	
	.search-box .so-input {
		width: 100%;
		height: 30px;
		padding: .16668rem .91674rem .16668rem .8334rem;
		color: #666;
		font-size: 14px;
		border: none;
		border-radius: 16px;
		box-sizing: border-box;
		outline: none;
		background-color: #eee;
	}
</style>