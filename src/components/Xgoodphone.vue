<template>
	<div class="maincon">
                    <section class="brand" id="J_listBrand">
                    </section>
                    <section class="list-filter" id="J_listFilter">
                            <ul class="flex">
                                <li class="current" data-type="SYS" style="display: list-item; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                                    <a data-mtype="mall_list_sxl_all">
                                        全部<i class="arrow-down"></i>
                                    </a>
                                </li>
                                <li data-type="PRICE" style="display: list-item; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                                    <a data-mtype="mall_list_sxl_price">
                                        价格<i class="arrow-mini-up active" data-direction="1"></i><i class="arrow-mini-down" data-direction="-1"></i>
                                    </a>
                                </li>

                                <li id="J_btnChangeStyle" style="display: list-item; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                                    <a href="javascript:;" data-mtype="mall_list_sxl_w">
                                        <i class="iconfont icon-filter grid"></i>
                                        <!--网格{grid}，列表{list}-->
                                    </a>
                                </li>
                            </ul>
                    </section>
                <!--正常展示坑位-->
                <section class="list-goods" id="J_listGoods">
                    <ul class="grid">
                        <!--网格{grid}，列表{list}-->
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_1">
                                <img class="" src="//openfile.meizu.com/group1/M00/06/D4/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 Note8</span>
                                    <span class="vm-sub sale-tag gray">国民拍照手机</span>
                                    <span class="vm-price ">￥1298起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_2">
                                <img class="" src="//openfile.meizu.com/group1/M00/06/BC/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 16 X</span>
                                    <span class="vm-sub sale-tag gray">骁龙710  轻奢旗舰</span>
                                    <span class="vm-price ">￥2098起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_3">
                                <img class="" src="//openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 16th Plus</span>
                                    <span class="vm-sub sale-tag gray">骁龙845  屏幕下指纹</span>
                                    <span class="vm-price ">￥3198起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_4">
                                <img class="" src="//openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 16th</span>
                                    <span class="vm-sub sale-tag gray">骁龙845  屏幕下指纹</span>
                                    <span class="vm-price ">￥2698起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_5">
                                <img class="" src="//openfile.meizu.com/group1/M00/06/AC/Cgbj0VujaMOAFzUFAARRWnHvM84529.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 V8 高配版</span>
                                    <span class="vm-sub sale-tag gray"></span>
                                    <span class="vm-price ">￥1098起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_6">
                                <img class="" src="//openfile.meizu.com/group1/M00/06/99/Cgbj0FujMs-AZDb5AA14vDzyhPE669.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 V8 标配版</span>
                                    <span class="vm-sub sale-tag gray"></span>
                                    <span class="vm-price ">￥799起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_7">
                                <img class="" src="//openfile.meizu.com/group1/M00/05/3F/Cgbj0Vsx5FmABcbVAAOfr1Ktzm4058.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 M15</span>
                                    <span class="vm-sub sale-tag gray">雕刻时光，重塑经典</span>
                                    <span class="vm-price ">￥1398起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_8">
                                <img class="" src="//openfile.meizu.com/group1/M00/04/0B/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 15</span>
                                    <span class="vm-sub sale-tag gray">雕刻时光，重塑经典</span>
                                    <span class="vm-price ">￥1998起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_9">
                                <img class="" src="//openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 X8</span>
                                    <span class="vm-sub sale-tag gray">准旗舰游戏拍照手机</span>
                                    <span class="vm-price ">￥1598起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_10">
                                <img class="" src="//openfile.meizu.com/group1/M00/02/03/Cgbj0VmtGa6AThj0AA1hVmco7-o197.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅蓝 Note6</span>
                                    <span class="vm-sub sale-tag red"></span>
                                    <span class="vm-price ">￥899起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_11">
                                <img class="be-lazy" src="//mall.res.meizu.com/common/img/blank.png" data-src="//openfile.meizu.com/group1/M00/04/8C/Cgbj0VsM-iyAAgTIAAbXIwKFVL4647.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅蓝 6T</span>
                                    <span class="vm-sub sale-tag gray">双摄全面屏，游戏长续航</span>
                                    <span class="vm-price ">￥799起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_12">
                                <img class="be-lazy" src="//mall.res.meizu.com/common/img/blank.png" data-src="//openfile.meizu.com/group1/M00/04/1C/Cgbj0VrcbrCANJBMAAxI8Fi80MA520.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 15 Plus</span>
                                    <span class="vm-sub sale-tag gray">雕刻时光，重塑经典</span>
                                    <span class="vm-price ">￥2498起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_13">
                                <img class="be-lazy" src="//mall.res.meizu.com/common/img/blank.png" data-src="//openfile.meizu.com/group1/M00/03/BB/Cgbj0Vq9-m2AJr_PAAp1B7CA5GY057.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅蓝 E3</span>
                                    <span class="vm-sub sale-tag gray">骁龙636处理器 全系6G大运存</span>
                                    <span class="vm-price ">￥1799起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_14">
                                <img class="be-lazy" src="//mall.res.meizu.com/common/img/blank.png" data-src="//openfile.meizu.com/group1/M00/02/21/Cgbj0FnCGzOABMFZAAq4uv7SLg8039.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅蓝 6</span>
                                    <span class="vm-sub sale-tag red"></span>
                                    <span class="vm-price ">￥599起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_15">
                                <img class="be-lazy" src="//mall.res.meizu.com/common/img/blank.png" data-src="//openfile.meizu.com/group1/M00/02/F3/Cgbj0Fpe-_yAFtuLAAw27mVWra0383.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅蓝 S6</span>
                                    <span class="vm-sub sale-tag red"></span>
                                    <span class="vm-price ">￥999起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-mtype="mall_list_lc_kw_16">
                                <img class="be-lazy" src="//mall.res.meizu.com/common/img/blank.png" data-src="//openfile.meizu.com/group1/M00/01/BC/Cgbj0Fl4OduAN6lZAAoYW04sCAc119.png@240x240.jpg">
                                <p>
                                    <span class="vm-tit">魅族 PRO 7 Plus</span>
                                    <span class="vm-sub sale-tag gray">双瞳如小窗 佳景观历历</span>
                                    <span class="vm-price ">￥1799起<em>多色可选</em></span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </section>


            </div>

</template>

<script>
export default {}
</script>

<style >
	html {
		font-size: 32px;
	}
</style>