<template>
<div class="member-index">
    <div class="topr">
      <a href="#/Personal" class="back-btn"><i class="iconfont icon-arrow-left reback"></i></a>
        <div class="member-info">
            <a href="#/Login">
                <div class="img-box"><img src="//mall.res.meizu.com/member/img/login.png"></div>
                <span class="name">点击登录</span>
            </a>
        </div>
        <div class="member-index-message">
                <a href="//me.m.meizu.com/home/m/message_index" class="message-btn">
                    <i class="iconfont icon-message-01"></i>
                </a>
        </div>
    </div>
    <div class="myorders">
        <div class="top">
            <span>我的订单</span>
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html" class="goto-allorder">查看全部订单 <i class="iconfont icon-arrow-right"></i></a>
        </div>
        <div class="order-status">
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html?type=unpay"><i class="iconfont icon-payment"></i>待付款<hr></a>
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html?type=paid"><i class="iconfont icon-wait-deliver"></i>待发货<hr></a>
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html?type=onroad"><i class="iconfont icon-logistics"></i>待收货<hr></a>
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html?type=service"><i class="iconfont icon-after-sale"></i>退款/售后</a>
        </div>
    </div>
    <div class="member-item">
        <a href="//me.m.meizu.com/home/m/favorite_list">我的收藏</a>
        <a href="//me.m.meizu.com/home/address/index">我的地址</a>
        <a href="//me.m.meizu.com/home/m/redenvelop_list">我的红包</a>
        <a href="//me.m.meizu.com/home/m/coupon_list">我的优惠券</a>
    </div>
    <div class="other-item">
        <a href="http://mformy.mall.meizu.com">M码通道<i class="iconfont icon-arrow-right"></i></a>
        <a href="//ordercenter.mall.meizu.com/mall/order/phone/init.html">手机号查询订单<i class="iconfont icon-arrow-right"></i></a>
        <a href="//mcycle.mall.meizu.com/repo/m/my-mcycle">以旧换新<i class="iconfont icon-arrow-right"></i></a>
        <a href="//mall.meizu.com/marrive/summary/index.html">百城速达<i class="iconfont icon-arrow-right"></i></a>
        <a href="//me.m.meizu.com/home/contact/index">联系客服<i class="iconfont icon-arrow-right"></i></a>
        <a href="//me.m.meizu.com/home/suggest/index">意见反馈<i class="iconfont icon-arrow-right"></i></a>
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
        },
        mounted(){

        }
    }
</script>

<style scoped>
@import url("../assets/member-c8245dd.css");
</style>