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
                        <a href="/the_binder/index?cartItemId=2240750&amp;itemId=12213&amp;skuId=9166&amp;quantity=1&amp;refer=cart" data-mtype="mall_cart_redem_choose" data-bh="click_mall_cart_redem_choose" class="one-more sele-icon">
                            <span class="tag-onemore">另加15元起，即可换购超值商品</span>
                        </a>
                    </div>
                    <div class="row-item">
                        <div class="radio checked"></div>
                        <div class="radio-fld">
                            <div class="item">
                                <div class="prod-img">
                                    <a href="//detail.meizu.com/item/meizu16th.html?skuId=9166" data-mtype="mall_cart_prod" data-bh="click_mall_cart_prod">
                                        <img src="//openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@240x240.jpg">
                                    </a>
                                </div>
                                <div class="intro">
                                    <a href="/detail.meizu.com/item/meizu16th.html?skuId=9166" data-mtype="mall_cart_prod" data-bh="click_mall_cart_prod">
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
@import url("../assets/main-04470bf.css");
</style>