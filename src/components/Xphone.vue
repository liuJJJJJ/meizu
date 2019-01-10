<template>
  <div class="phone-container">
        <!-- 头部导航 -->
        <div class="index-header" id="index-nav"><div class="nav-bar">
        <ul>
            <li @click="selectNav(index)" v-for="(n,index) in navs" :key="index" :class="{cur:nav===index}">
                <a href="#" >
                {{n.title}}
                </a>
            </li>
        </ul>
        </div></div>
        <!-- 宣传图 -->
        <div class="promo-container">
            <img src="" alt="" />
        </div>
        <div class="maincon">
                <section class="brand" id="J_listBrand" style="margin-top:0">
                            <!--活动专场形式-->
                            <div class="brand-single">
                                <a class="brand-single-pic" href="https://detail.mall.meizu.com/item/meizu16th.html">
                                    <img class="" src="https://openfile.meizu.com/group1/M00/06/ED/Cgbj0Fwz-26AetBKAAHiKcdM7p0474.jpg">
                                </a>
                            </div>
                </section>
                <!--正常展示坑位-->
                <section class="list-goods" id="J_listGoods">
                    <ul class="grid">
                        <!--网格{grid}，列表{list}-->
                            <li>
                                <a href="https://detail.meizu.com/item/meizu16th.html?click=mall_list_lc_kw_1" data-mtype="mall_list_lc_kw_1">
                                    <img class="" src="//openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@240x240.jpg">
                                    <p>
                                        <span class="vm-tit">魅族 16th</span>
                                        <span class="slogan">
                                            <span class="vm-sub sale-tag gray red hot-sale">

                                                <i class="hot-tag ">直降</i>
                                                <em>限时购机享3期/6期免息分期 | 骁龙845 屏下指纹</em>
                                            </span>
                                        </span>
                                        <span class="vm-price ">
                                            <span class="price-num">
                                            <span class="price-mark">￥</span>2498</span>
                                        </span>
                                    </p>
                                </a>

                            </li>
                    </ul>
                </section>

                    <!--为您推荐展示坑位-->
                    <section class="list-goods list-goods-2">

                        <div class="list-hd">
                            为您推荐
                        </div>

                        <div class="swiper-container swiper-container-horizontal swiper-container-free-mode">
                            <div class="swiper-wrapper">
                                    <div class="swiper-slide swiper-slide-active" style="margin-right: 6px;">
                                        <a class="swiper-silde-a" href="//detail.meizu.com/item/meizu16th.html?click=mall_list_tj_kw_1">
                                            <img class="" src="//openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@240x240.jpg">
                                            <p>
                                                <span class="vm-tit">魅族 16th</span>
                                                <span class="vm-price">
                                                <span class="price-num"><span class="price-mark">￥</span>2498</span>
                                            </span>
                                            </p>
                                        </a>
                                    </div>
                                    <div class="swiper-slide swiper-slide-next" style="margin-right: 6px;">
                                        <a class="swiper-silde-a" href="//detail.meizu.com/item/meizu_tws.html?click=mall_list_tj_kw_2">
                                            <img class="" src="//openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png@240x240.jpg">
                                            <p>
                                                <span class="vm-tit">POP 真无线蓝牙耳机</span>
                                                <span class="vm-price">
                                                <span class="price-num"><span class="price-mark">￥</span>399</span>
                                            </span>
                                            </p>
                                        </a>
                                    </div>
                                    <div class="swiper-slide" style="margin-right: 6px;">
                                        <a class="swiper-silde-a" href="//detail.meizu.com/item/meizu16x.html?click=mall_list_tj_kw_3">
                                            <img class="be-lazy" src="//openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png@240x240.jpg" data-src="//openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png@240x240.jpg">
                                            <p>
                                                <span class="vm-tit">魅族 16 X</span>
                                                <span class="vm-price">
                                                <span class="price-num"><span class="price-mark">￥</span>1798</span>
                                            </span>
                                            </p>
                                        </a>
                                    </div>
                                    <div class="swiper-slide" style="margin-right: 6px;">
                                        <a class="swiper-silde-a" href="//detail.meizu.com/item/meizu_xp.html?click=mall_list_tj_kw_4">
                                            <img class="be-lazy" src="//openfile.meizu.com/group1/M00/06/70/Cgbj0FuZwuGADzVHAAG7wQGHkAM447.png@240x240.jpg" data-src="//openfile.meizu.com/group1/M00/06/70/Cgbj0FuZwuGADzVHAAG7wQGHkAM447.png@240x240.jpg">
                                            <p>
                                                <span class="vm-tit">魅族蓝牙音频接收器</span>
                                                <span class="vm-price">
                                                <span class="price-num"><span class="price-mark">￥</span>89</span>
                                            </span>
                                            </p>
                                        </a>
                                    </div>
                                    <div class="swiper-slide" style="margin-right: 6px;">
                                        <a class="swiper-silde-a" href="//detail.meizu.com/item/meizu15.html?click=mall_list_tj_kw_5">
                                            <img class="be-lazy" src="//openfile.meizu.com/group1/M00/04/0B/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png@240x240.jpg" data-src="//openfile.meizu.com/group1/M00/04/0B/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png@240x240.jpg">
                                            <p>
                                                <span class="vm-tit">魅族 15</span>
                                                <span class="vm-price">
                                                <span class="price-num"><span class="price-mark">￥</span>1498</span>
                                            </span>
                                            </p>
                                        </a>
                                    </div>
                                    <div class="swiper-slide" style="margin-right: 6px;">
                                        <a class="swiper-silde-a" href="//detail.meizu.com/item/meizunote8.html?click=mall_list_tj_kw_6">
                                            <img class="be-lazy" src="//openfile.meizu.com/group1/M00/06/C4/Cgbj0FvQPnmABVZHAAM7MXAlUiQ783.png@240x240.jpg" data-src="//openfile.meizu.com/group1/M00/06/C4/Cgbj0FvQPnmABVZHAAM7MXAlUiQ783.png@240x240.jpg">
                                            <p>
                                                <span class="vm-tit">魅族 Note8</span>
                                                <span class="vm-price">
                                                <span class="price-num"><span class="price-mark">￥</span>1298</span>
                                            </span>
                                            </p>
                                        </a>
                                    </div>
                                    <div class="swiper-slide" style="margin-right: 6px;">
                                        <a class="swiper-silde-a" href="//detail.meizu.com/item/wireless_charger.html?click=mall_list_tj_kw_7">
                                            <img class="be-lazy" src="//openfile.meizu.com/group1/M00/04/15/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png@240x240.jpg" data-src="//openfile.meizu.com/group1/M00/04/15/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png@240x240.jpg">
                                            <p>
                                                <span class="vm-tit">魅族无线充电器</span>
                                                <span class="vm-price">
                                                <span class="price-num"><span class="price-mark">￥</span>99</span>
                                            </span>
                                            </p>
                                        </a>
                                    </div>
                                    <div class="swiper-slide" style="margin-right: 6px;">
                                        <a class="swiper-silde-a" href="//detail.meizu.com/item/meizu_15plus.html?click=mall_list_tj_kw_8">
                                            <img class="be-lazy" src="//openfile.meizu.com/group1/M00/04/1C/Cgbj0VrcbrCANJBMAAxI8Fi80MA520.png@240x240.jpg" data-src="//openfile.meizu.com/group1/M00/04/1C/Cgbj0VrcbrCANJBMAAxI8Fi80MA520.png@240x240.jpg">
                                            <p>
                                                <span class="vm-tit">魅族 15 Plus</span>
                                                <span class="vm-price">
                                                <span class="price-num"><span class="price-mark">￥</span>1798</span>
                                            </span>
                                            </p>
                                        </a>
                                    </div>
                                    <div class="swiper-slide" style="margin-right: 6px;">
                                        <a class="swiper-silde-a" href="//detail.meizu.com/item/ep_2x.html?click=mall_list_tj_kw_9">
                                            <img class="be-lazy" src="//openfile.meizu.com/group1/M00/00/A2/Cix_s1gcTG6AbXZNAAEtC-x50Ns221.png@240x240.jpg" data-src="//openfile.meizu.com/group1/M00/00/A2/Cix_s1gcTG6AbXZNAAEtC-x50Ns221.png@240x240.jpg">
                                            <p>
                                                <span class="vm-tit">魅族 EP2X耳机</span>
                                                <span class="vm-price">
                                                <span class="price-num"><span class="price-mark">￥</span>69</span>
                                            </span>
                                            </p>
                                        </a>
                                    </div>
                                    <div class="swiper-slide" style="margin-right: 6px;">
                                        <a class="swiper-silde-a" href="//detail.meizu.com/item/meilane3.html?click=mall_list_tj_kw_10">
                                            <img class="be-lazy" src="//openfile.meizu.com/group1/M00/03/BB/Cgbj0Vq9-m2AJr_PAAp1B7CA5GY057.png@240x240.jpg" data-src="//openfile.meizu.com/group1/M00/03/BB/Cgbj0Vq9-m2AJr_PAAp1B7CA5GY057.png@240x240.jpg">
                                            <p>
                                                <span class="vm-tit">魅蓝 E3</span>
                                                <span class="vm-price">
                                                <span class="price-num"><span class="price-mark">￥</span>1799</span>
                                            </span>
                                            </p>
                                        </a>
                                    </div>
                            </div>
                        </div>

                    </section>
            </div>
   </div>
</template>

<script>
    export default {
        data() {
            return { 
                navs: [{
                        title: "推荐",
                        path: "/Index",
                        isSeclect: true
                    }, {
                        title: "手机",
                        path: "/Phone",
                        isSeclect: false
                    },
                    {
                        title: "声学",
                        path: "",
                        isSeclect: false
                    },
                    {
                        title: "配件",
                        path: "",
                        isSeclect: false
                    }, {
                        title: " 生活",
                        path: "",
                        isSeclect: false
                    }
                ],
                nav: 0,
        timer: null
            };
        },
        methods: {
            selectNav(nav) {
                this.nav = nav;
            },
            goto(title){
          this.$router.push({path:'/Phone/'+title})
      }
  }
        watch: {},
    }    
</script>

<style type="text/css">
    
</style>