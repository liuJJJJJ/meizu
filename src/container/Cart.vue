<template>
    <div id="app-cart" class="app cart">
        <header class="header">
            <div class="title">购物车</div>
            <div class="goback">
                <a href="javascript:history.back();" data-mtype="mall_cart_yt_back" data-bh="click_mall_cart_yt_back">
                    <i class="iconfont ico-back"></i>
                </a>
            </div>
            <div class="qtool">
                <a data-mtype="mall_cart_yt_edit" data-bh="click_mall_cart_yt_edit" class="btn-modify">编辑</a>
            </div>
        </header>

        <div class="cart-list">
            <div class="section radio-group merchant-group">
                <div class="supplier radio-row">
                    <div class="radio radio-merchant checked"></div>
                    <div class="radio-fld">
                        <div class="name">魅族</div>
                        <div class="full-shipping">
                            <a class="row-sele">
                                <span></span>
                                <span>已免运费</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="secrow radio-row">
                    <div>
                        <a href="javascript:;" data-mtype="mall_cart_redem_choose" data-bh="click_mall_cart_redem_choose" class="one-more sele-icon">
                            <span class="tag-onemore">另加15元起，即可换购超值商品</span>
                        </a>
                    </div>
                    <div class="row-item">
                        <div class="radio checked"></div>
                        <div class="radio-fld">
                            <div class="item">
                                <div class="prod-img">
                                    <a href="javascript:;" data-bh="click_mall_cart_prod">
                                        <img src="//openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@240x240.jpg">
                                    </a>
                                </div>
                                <div class="intro">
                                    <a href="javascript:;" data-mtype="mall_cart_prod" data-bh="click_mall_cart_prod">
                                        <h3>魅族 16th</h3>
                                        <p class="attrs">
                                            <span>全网通公开版 远山白 6+64GB</span>
                                        </p>
                                    </a>
                                    <div class="howmuch">
                                        <div data-symbol="￥" class="price">2498.00</div>
                                        <div class="quantity">
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed-btm">
            <div class="cart-bar radio-group">
                <form>
                    <input type="hidden" name="cart_param">
                    <input type="hidden" name="buy_from" value="cart">
                </form>
                <div class="radio-row">
                    <div data-mtype="mall_cart_all" data-bh="click_mall_cart_all" class="radio check-all checked">全选</div>
                    <div class="radio-fld">
                        <div class="total-pay">
                            <label>总计:</label>
                            <span class="total-paymoney">2498.00</span>
                        </div>
                        <button type="button" data-mtype="mall_cart_checkout" data-bh="click_mall_cart_checkout" class="btn btn-hi btn-done">结算</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        methods: {  
            back(){
                this.$router.go(-1);
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
body,button,dd,dl,dt,form,h1,h2,h3,h4,h5,h6,html,input,li,ol,p,td,th,ul {
    margin: 0;
    padding: 0
}

html {
    -webkit-text-size-adjust: 100%
}

html * {
    -webkit-tap-highlight-color: transparent
}

body,html {
    min-height: 100vh
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

img,textarea {
    border: none;
    vertical-align: middle
}

ol,ul {
    list-style: none
}

em,i {
    font-style: normal
}

table {
    border-spacing: 0;
    border-collapse: collapse
}

button,input,select,textarea {
    box-sizing: border-box;
    -webkit-appearance: none
}

textarea {
    resize: none
}

select[disabled] {
    color: #b0b0b0!important
}

::-webkit-input-placeholder {
    color: #ccc
}

::-moz-placeholder {
    color: #ccc
}

input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none
}[data-dpr="1"] .app {
    max-width: 720px;
    margin: auto
}

.header {
    position: relative;
    height: 44px;
    background-color: #fff
}

.header .goback,.header .gohome,.header .logo,.header .qtool {
    position: absolute;
    top: 0
}

.header .goback a,.header .gohome a,.header .logo a,.header .qtool a {
    display: block;
    height: 44px;
    box-sizing: border-box
}

.header .iconfont {
    position: relative
}

.header .iconfont:before {
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

.header .qtool {
    right: 0;
    text-align: right
}

.header .qtool a {
    display: inline-block;
    padding: 12px 12px 0 0
}

.header .qtool .ico-search:before {
    content: "\E606";
    color: #999
}

.header .qtool .ico-member:before {
    content: "\E607";
    color: #999
}

.header .qtool .login .ico-member:before {
    color: #00c3f5
}

.radio-group .radio {
    padding: .33333rem .33333rem .27778rem;
    line-height: 1.6;
    font-family: iconfont
}

.radio-group .radio:after {
    content: "";
    position: absolute;
    right: .34722rem;
    top: 50%;
    width: .55556rem;
    height: .55556rem;
    margin-top: -.27778rem;
    border-radius: 50%;
    border: 1px solid #ddd;
    background-color: #fff;
    -webkit-transition: all .1s linear;
    -webkit-transition: background-color .1s linear;
    transition: background-color .1s linear
}

/*.radio-group .radio.checked:after {
    content: "\E608";
    color: #00c3f5;
    font-size: 24px;
    text-align: center;
    line-height: .55556rem;
    border: none
}
*/
.fixed-btm {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%
}

.btn {
    display: inline-block;
    width: 2.66667rem;
    line-height: 1rem;
    color: #fff;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
    border: none;
    outline: none;
    background-color: #00c3f5
}

.btn-def {
    color: #444;
    background-color: #eee
}

.btn-link {
    color: #00c3f5;
    background-color: transparent
}

.btn-hi {
    background-color: #f0415f
}

.btn:active {
    opacity: .9
}

.btn-b {
    display: inline-block;
    width: 1.66667rem;
    line-height: .55556rem;
    color: #888;
    text-align: center;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #a0a0a0;
    background-color: #fff
}

.btn-b-hi {
    color: #f0415f;
    border-color: #f0415f
}

.btn-disabled,.btn.disabled,.btn[disabled] {
    color: #fff!important;
    background-color: #ccc!important
}

.loading {
    opacity: 0;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    display: table;
    width: 100%;
    height: 100%;
    -webkit-transition: opacity .2s ease-in;
    transition: opacity .2s ease-in
}

.loading.show {
    opacity: 1
}

.loading .inner {
    display: table-cell;
    text-align: center;
    vertical-align: middle
}

.loading .panel {
    width: 110px;
    margin: auto;
    padding: 20px 0 15px;
    color: #fff;
    font-size: .33333rem;
    border-radius: 5px;
    background-color: rgba(0,0,0,.6)
}

.loading .txt {
    margin-top: 15px
}

.loading .tick-tock {
    position: relative;
    width: 20px;
    height: 20px;
    margin: auto
}

.loading .tick-tock span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 15%;
    height: 40%;
    margin-left: -10%;
    margin-top: -20%;
    opacity: 0;
    border-radius: 20px;
    background-color: #fff;
    -webkit-animation: a 1s linear infinite
}

.loading .tick-tock .t1 {
    -webkit-transform: rotate(0deg) translateY(-142%);
    -webkit-animation-delay: 0s
}

.loading .tick-tock .t2 {
    -webkit-transform: rotate(30deg) translateY(-142%);
    -webkit-animation-delay: -.9167s
}

.loading .tick-tock .t3 {
    -webkit-transform: rotate(60deg) translateY(-142%);
    -webkit-animation-delay: -.833s
}

.loading .tick-tock .t4 {
    -webkit-transform: rotate(90deg) translateY(-142%);
    -webkit-animation-delay: -.75s
}

.loading .tick-tock .t5 {
    -webkit-transform: rotate(120deg) translateY(-142%);
    -webkit-animation-delay: -.667s
}

.loading .tick-tock .t6 {
    -webkit-transform: rotate(150deg) translateY(-142%);
    -webkit-animation-delay: -.5833s
}

.loading .tick-tock .t7 {
    -webkit-transform: rotate(180deg) translateY(-142%);
    -webkit-animation-delay: -.5s
}

.loading .tick-tock .t8 {
    -webkit-transform: rotate(210deg) translateY(-142%);
    -webkit-animation-delay: -.41667s
}

.loading .tick-tock .t9 {
    -webkit-transform: rotate(240deg) translateY(-142%);
    -webkit-animation-delay: -.333s
}

.loading .tick-tock .t10 {
    -webkit-transform: rotate(270deg) translateY(-142%);
    -webkit-animation-delay: -.25s
}

.loading .tick-tock .t11 {
    -webkit-transform: rotate(300deg) translateY(-142%);
    -webkit-animation-delay: -.1667s
}

.loading .tick-tock .t12 {
    -webkit-transform: rotate(330deg) translateY(-142%);
    -webkit-animation-delay: -.0833s
}

@-webkit-keyframes a {
    0% {
        opacity: 1
    }

    to {
        opacity: .25
    }
}

.input-number {
    line-height: normal;
    font-size: 0;
    border-radius: 3px;
    border: 1px solid #ddd
}

.input-number .minus,.input-number .plus {
    float: left;
    display: inline-block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    color: #888;
    font-size: 22px;
    font-weight: border;
    text-align: center;
    border: none;
    box-sizing: border-box;
    background: none
}

.input-number .minus[disabled],.input-number .plus[disabled] {
    color: #ccc
}

.input-number .minus {
    border-right: 1px solid #ddd
}

.input-number .plus {
    border-left: 1px solid #ddd
}

.input-number .val {
    float: left;
    display: inline-block;
    width: .97222rem;
    line-height: 25px;
    color: #333;
    font-size: 14px;
    text-align: center;
    border-radius: 0;
    border: none
}

@font-face {
    font-family:iconfont;src:url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXAAAsAAAAACEwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZXQkf3Y21hcAAAAYAAAABtAAABqjIH0otnbHlmAAAB8AAAAb8AAAHwP4RYk2hlYWQAAAOwAAAALgAAADYR0XmoaGhlYQAAA+AAAAAcAAAAJAfeA4ZobXR4AAAD/AAAABMAAAAUE+kAAGxvY2EAAAQQAAAADAAAAAwBRgG0bWF4cAAABBwAAAAeAAAAIAEUAF1uYW1lAAAEPAAAAUUAAAJtPlT+fXBvc3QAAAWEAAAAOQAAAEog8LxyeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/s04gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDzjZG7438AQw9zIcAUozAiSAwAn/wzNeJzFkcENhDAMBMckhwKiFArgecXciwqo2G3A2snnKmCjceyVlUQO8AGK2EUFOzFCP7mWfmFNv3KoblqT9svx5b5H1jILWXa0zIo648yZ12TvXf2vLeN3VJoK10BPdDrxE946MWVfOtQH+pcRjwAAAHicTZG9bhNBFIXvncnMesL6Z2fWu+t1HNvreCcoxlaWZV0gnIYmiCIRdkHJA0CHUoCIIxGJggLRoXQIhcZCPEAqJHgJN0HAM1AgDYyh4ep25xTnOwcYwO+v9IJGoGAbduE2HAAg38GkQlrY1fmQ7GC9y+qhX6G6p7tOLxnSWxgm3A+yIk9D7vAqVnATr3ezQg+Jxhv5hNzELGghNprxPdnfkPQVrkd689TcIW+x3u5tVCfXzP5gz886qnTkStmQ8mWJM1YiZK1awYdhIJhY5+Ydq8b1i/ZV0ka3oeO798udpnzwIn/U6ocCcT5H1exU3u95sWf/aRwo2XBq5VIUl3tbPh59vxIpt5V+A3vUsg7WgA7AhR5srTjBCSAsYJyCxr8YSTrCNC+yNmKRhQF3dgkszSVj2FkuscOYuVzivn/2hatQ8ddeor3HeOBt11xao4OV+r/bPK+ffeZC8DeeTqzxsFbztLfKgjbLKZnRJ2AXUKgFjj/g+dQw/DXFOZ7PDDNs9s/3kfykJ3YfEJja2i33qvsxTmzTKflhpmrYl3hijmV/qHAhhMBPuJD9kTTPzLEaWXEhIlH2Af4AoLxccgB4nGNgZGBgAGIfywSueH6brwzcLAwgcD1S6j+C/q/DwsDcCORyMDCBRAH1uwjvAAB4nGNgZGBgbvjfwBDDwgACQJKRARWwAgBHCwJueJxjYWBgYH7JwMDCgMAADpsA/QAAAAAAAHYAvADQAPh4nGNgZGBgYGUIBGIQYAJiLiBkYPgP5jMAABEtAXIAAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJWRiZGZkYWRlZGNgbGCNze/KDUvJbMqIzM9v5QtPT8pMTmb2dDYkIEBAJ3wCToAAAA=") format("woff"),url(/assets/fonts/iconfont.ttf?t=1530067455365) format("truetype")
}

.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.icon-morendizhigou:before {
    content: "\E608"
}

.icon-goback:before {
    content: "\E600"
}

.icon-131:before {
    content: "\E609"
}

.cart-bar .radio,.cart-bar .radio-fld,.cart-bar .total-pay,.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.flex-wrap {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.flex-center {
    -ms-align-items: center
}

.cart-bar .total-pay,.flex-center,.flex-vc {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.cart-bar .total-pay,.flex-vc {
    -moz-align-items: center;
    -webkit-box-pack: center
}

.brd-b,.brd-t,.cart-bar,.cart-list .radio-fld>.item,.cart-list .subitem,.cart-list .supplier,.cart .header {
    position: relative
}

.brd-b:after,.brd-t:after,.cart-bar:after,.cart-list .radio-fld>.item:after,.cart-list .subitem:after,.cart-list .supplier:after,.cart .header:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px
}

.brd-b:after,.cart-list .radio-fld>.item:after,.cart-list .subitem:after,.cart-list .supplier:after,.cart .header:after {
    bottom: 0;
    background-image: -webkit-linear-gradient(0deg,#e5e5e5 50%,transparent 0);
    background-image: -webkit-gradient(linear,left bottom,left top,color-stop(50%,#e5e5e5),color-stop(50%,transparent));
    background-image: -webkit-linear-gradient(bottom,#e5e5e5 50%,transparent 0);
    background-image: linear-gradient(0deg,#e5e5e5 50%,transparent 0)
}

.brd-t:after,.cart-bar:after {
    top: 0;
    background-image: -webkit-linear-gradient(0deg,transparent 50%,#e5e5e5 0);
    background-image: -webkit-gradient(linear,left bottom,left top,color-stop(50%,transparent),color-stop(50%,#e5e5e5));
    background-image: -webkit-linear-gradient(bottom,transparent 50%,#e5e5e5 0);
    background-image: linear-gradient(0deg,transparent 50%,#e5e5e5 0)
}

.radio-group .radio-row {
    overflow: auto
}

.radio-group .radio {
    float: left;
    position: relative;
    padding: 0;
    width: 13%;
    height: 1.33333rem;
    box-sizing: border-box
}

.radio-group .radio:after {
    right: auto;
    left: .33333rem
}

.radio-group .radio-fld {
    float: right;
    width: 87%
}

.section {
    margin-top: 8px;
    overflow: hidden;
    background-color: #fff
}

.section .secrow .radio {
    top: 1.44444rem;
    margin-top: -.66667rem
}

.section .secrow:last-child {
    margin-bottom: -1px
}

.cart {
    padding-top: 44px;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: #eee
}

.cart .header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: #fff
}

.cart .header .qtool {
    right: 0
}

.cart .header .qtool a {
    padding: 12px 12px 0;
    color: #999;
    line-height: 20px
}

.cart .fixed-btm {
    z-index: 1
}

.cart .tips-login {
    padding: .25rem .33333rem;
    color: #666;
    font-size: 12px;
    overflow: auto;
    line-height: .66667rem;
    background-color: #e4f9fd
}

.cart .tips-login .btn {
    float: right;
    width: 1.83333rem;
    height: .66667rem;
    line-height: .66667rem;
    font-size: 12px;
    border-radius: 2px;
    border: 1px solid #00c3f5
}

.cart .cart-empty {
    text-align: center
}

.cart .cart-empty .msg {
    margin: 4.72222rem 0 .83333rem;
    color: #666;
    font-size: 12px
}

.cart .cart-empty .btn {
    width: 3.02778rem;
    line-height: 1rem;
    font-size: 16px;
    border-radius: 2px
}

.cart-list {
    padding-bottom: 1.25rem
}

.cart-list .one-more,.cart-list .row-sele {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-right: .33333rem;
    box-sizing: border-box
}

.cart-list .sele-icon {
    position: relative;
    padding-right: .68519rem!important
}

.cart-list .sele-icon:after {
    position: absolute;
    top: 0;
    right: 0;
    content: "\E609";
    color: #ccc;
    font-family: iconfont;
    width: .59259rem;
    height: 100%
}

.cart-list .tag-onemore:before {
    content: "\52A0\4EF7\8D2D";
    color: #f0415f;
    font-size: 12px;
    margin: 0 .13889rem 0 0;
    padding: 0 2px;
    border-radius: 2px;
    border: 1px solid #f0415f
}

.cart-list .tag-onemore.onemore-full:before {
    margin: 0 0 0 .16667rem;
    color: #fff;
    background-color: #f0415f
}

.cart-list .row-item {
    overflow: auto
}

.cart-list .supplier {
    height: 1.33333rem;
    line-height: 1.44444rem;
    font-size: 14px;
    overflow: hidden
}

.cart-list .supplier .radio-fld {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    box-sizing: border-box
}

.cart-list .supplier .name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.cart-list .full-shipping {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-left: .27778rem;
    color: #999
}

.cart-list .full-shipping .fee-diff {
    margin-right: .05556rem;
    color: #f0415f
}

.cart-list .one-more {
    margin-left: 13%;
    color: #999;
    font-size: 14px;
    line-height: 1.22222rem
}

.cart-list .item {
    position: relative;
    z-index: 0;
    padding: .33333rem .33333rem .33333rem 0;
    overflow: hidden
}

.cart-list .prod-img {
    float: left;
    position: relative;
    width: 2.22222rem;
    height: 2.22222rem
}

.cart-list .prod-img img {
    width: 100%;
    height: 100%
}

.cart-list .prod-img .max-limit,.cart-list .prod-img .stock-limit {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: .08333rem 0;
    color: #fff;
    font-size: 10px;
    text-align: center;
    background-color: rgba(240,65,95,.8)
}

.cart-list .intro {
    position: relative;
    margin-left: 2.5rem;
    line-height: .69444rem;
    overflow: hidden
}

.cart-list .intro a {
    display: block
}

.cart-list .intro .attrs,.cart-list .intro h3 {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word
}

.cart-list .intro .attrs {
    padding-top: .04167rem;
    color: #999
}

.cart-list .intro .howmuch {
    padding-top: .11111rem;
    line-height: 27px;
    overflow: auto
}

.cart-list .intro .price {
    float: left;
    color: #f0415f
}

.cart-list .intro .price:before {
    content: attr(data-symbol)
}

.cart-list .intro .quantity {
    float: right;
    color: #999
}

.cart-list .intro .quantity span:before {
    content: "\D7"
}

.cart-list .intro .input-number {
    float: right
}

.cart-list .subitem {
    position: relative;
    padding-left: .27778rem
}

.cart-list .subitem:before {
    content: "";
    position: absolute;
    top: -.16667rem;
    left: .88889rem;
    display: block;
    width: .2963rem;
    height: .2963rem;
    border-left: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
    -webkit-transform: scale(.5) rotate(45deg);
    transform: scale(.5) rotate(45deg)
}

.cart-list .subitem .prod-img {
    width: 1.66667rem;
    height: 1.66667rem
}

.cart-list .subitem .intro {
    margin-left: 2.22222rem
}

.cart-list .invalids {
    background-color: #f9f9f9
}

.cart-list .invalids .subitem:before {
    background-color: #f9f9f9!important
}

.cart-list .invalids .price {
    color: #999
}

.cart-list .invalids .prod-img .invalid-tag {
    display: table;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 60%;
    height: 60%;
    margin: -30% 0 0 -30%;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    background-color: rgba(0,0,0,.6)
}

.cart-list .invalids .prod-img .invalid-tag i {
    display: table-cell;
    height: 100%;
    vertical-align: middle
}

.cart-empty {
    text-align: center
}

.cart-empty .msg {
    margin: 4.72222rem 0 .83333rem;
    color: #666;
    font-size: 12px
}

.cart-empty .btn {
    width: 3.02778rem;
    line-height: 1rem;
    font-size: 16px;
    border-radius: 2px
}

.cart-bar {
    height: 1.25rem;
    background-color: #fff
}

.cart-bar .radio-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.cart-bar .radio {
    width: 25%;
    padding: .08333rem 0 0 1.16667rem;
    height: 1.25rem;
    line-height: 1.25rem;
    color: #666;
    text-align: left
}

.cart-bar .radio-fld {
    float: none;
    width: 75%;
    box-align: end;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.cart-bar .total-pay {
    padding-right: .33333rem
}

.cart-bar .total-pay label {
    color: #666
}

.cart-bar .total-pay .total-paymoney {
    color: #f0415f
}

.cart-bar .total-pay .total-paymoney:before {
    content: "\FFE5"
}

.cart-bar .btn {
    width: 3.05556rem;
    height: 1.25rem
}

.cart-bar .btn.btn-delete {
    background-color: #00c3f5
}

.modal.modal-message {
    pointer-events: none
}

.modal.modal-message .message-content {
    padding: .33333rem .74074rem;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
    background-color: rgba(0,0,0,.8)
}

.message-fade-enter,.message-fade-leave-to {
    opacity: 0
}

.message-fade-enter-to,.message-fade-leave {
    opacity: 1
}

.message-fade-enter-active,.message-fade-leave-active {
    -webkit-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out
}

.modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.modal.modal-confirm {
    background-color: rgba(0,0,0,.5)
}

.modal .modal-body {
    width: 8.66667rem;
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff
}

.modal .modal-content {
    padding: .66667rem;
    font-size: 14px;
    text-align: center
}

.modal .modal-buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.modal .modal-buttons button {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: .33333rem 0;
    border: none;
    outline: none;
    font-size: 14px;
    border-top: 1px solid #e5e5e5;
    background-color: #fff
}

.modal .modal-buttons button:last-child {
    border-left: 1px solid #e5e5e5
}

.modal .modal-buttons .btn-cancel {
    color: #999
}

.modal .modal-buttons .btn-confirm {
    color: #00c3f5
}

.confirm-fade-enter,.confirm-fade-leave-to {
    opacity: 0;
    -webkit-transform: scale(1.06);
    transform: scale(1.06)
}

.confirm-fade-enter-to,.confirm-fade-leave {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1)
}

.confirm-fade-enter-active,.confirm-fade-leave-active {
    -webkit-transition: opacity,288ms ease-out,ease-out,-webkit-transform 128ms;
    transition: opacity,288ms ease-out,ease-out,-webkit-transform 128ms;
    transition: opacity,transform 128ms,288ms ease-out,ease-out;
    transition: opacity,transform 128ms,288ms ease-out,ease-out,-webkit-transform 128ms
}
</style>