<template>
    <main class="main" id="main">
        <!-- goods start -->
        <div class="goods" id="goods">
            <div class="swipe swiper-container" id="prd-sliders" style="visibility: visible;">
                <div class="swipe-wrap swiper-wrapper" style="width: 1500px;">
                    <div class="item swiper-slide" style="width: 375px;">
                        <img src="//openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgmuAHzQbAAflWG0_wvs749.png480x480.jpg">
                    </div>
                    <div class="item swiper-slide" style="width: 375px;">
                        <img src="//openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgmaAHfhqAAFiPmKWlSs471.png480x480.jpg">
                    </div>
                    <div class="item swiper-slide" style="width: 375px;">
                        <img src="//openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgmaASQbXAAR4vsQCVjs385.png480x480.jpg">
                    </div>
                    <div class="item swiper-slide" style="width: 375px;">
                        <img src="//openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgmaAZbciAAIlAkUcoM0146.png480x480.jpg">
                    </div>
                </div>
                <div class="swiper-pagination poin">
                </div>
            </div>

            <div class="prod" id="prod">
                    <div class="sanp-up" id="J_sanpUp"></div>

                    <section class="prod-info">
                        <div class="prod-info-header">
                            <h1 class="vm-title">魅族 16th</h1>
                        </div>
                        <div class="prod-info-price">
                            <div class="mod-price">
                                <small>¥ </small><span id="J_price" class="vm-money">2498.00</span>
                            </div>
                            <div class="mod-original" id="J_originalPrice" style="display: none;"></div>
                            <div class="mod-countdown" id="J_discountCountDown" style="display: none;">
                            </div>
                        </div>
                        <div class="prod-info-installment" id="J_prodInstallment" style="display: block;">
                            分期价 ￥<span class="vm-price">223.77</span>x<span class="vm-period">12</span>期<span class="vm-rate"></span>
                        </div>
                        <div class="prod-info-message">
                            <p class="active">限时购机享3期/6期免息分期 | 骁龙845 屏下指纹</p>
                        </div>
                    </section>

                        <section class="prod-service" id="J_prodService" data-ctrl="J_layerService" data-mtype="mall_de_msg_service" data-bh="click_mall_de_msg_service">
                            <ul>
                                    <li><i class="icon icon-service"></i>花呗分期</li>

                                    <li><i class="icon icon-service"></i>顺丰发货</li>
                                    <li><i class="icon icon-service"></i>7天无理由退货</li>
                            </ul>
                            <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                        </section>

                <section class="prod-party" id="J_prodParty" style="display: none">
                    <label>活动</label>
                    <div class="prod-party-list">
                        <div class="mod-morebuy" id="J_morebuy" style="display: none" data-mtype="mall_de_redem" data-bh="click_mall_de_redem">
                        </div>
                        <div class="mod-gift" id="J_gift" style="display: none" data-mtype="mall_de_gift" data-bh="click_mall_de_gift">
                        </div>
                    </div>
                </section>


                    <section class="prod-promo" id="J_prodPromo" data-ctrl="J_layerPromo" style="display:none;" data-mtype="mall_de_msg_coupon" data-bh="click_mall_de_msg_coupon">
                        <div class="prod-promo-inner" id="J_promoInner">
                            <label>领券</label>
                        </div>
                        <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                    </section>

                    <section class="prod-exclusive" id="J_propExclusive" style="display: none;" data-mtype="mall_de_appdl" data-bh="click_mall_de_appdl">
                        <div class="prop-exclusive-inner">
                            <label>专享</label>
                            <p class="vm-exclusive" id="J_vmExclusive">APP下单省<span id="J_textExclusive"></span>元</p>
                        </div>
                        <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                    </section>

                    <section class="prod-selected" id="J_prodSelected" data-ctrl="J_layerProps" data-mtype="mall_de_msg_package" data-bh="click_mall_de_msg_package">
                        <label>已选</label>
                        <p>
                            <span class="vm-props s-selected" id="J_selectedProps">全网通公开版,远山白,6+64GB,官方标配</span>
                            <span class="vm-quantity" id="J_selectedQuantity" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">×1</span>
                        </p>
                        <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                    </section>

                    <section class="prod-suda" id="J_prodSuda" data-ctrl="J_layerSuda" data-mtype="mall_de_msg_address" data-bh="click_mall_de_msg_address">
                        <!--去掉百城判断-->
                            <div class="prod-suda-selector" id="J_sudaSelector" data-url="//area.meizu.com/area/child/query/">
                                <label>配送</label>
                                <span id="J_siteText" class="">广东省 广州市</span>
                                <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                            </div>
                            <div class="prod-suda-info" id="J_siteStatus" style="display: none;"></div>
                        <!---->
                            <div class="prod-suda-supplier">
                                <p class="mod-bd">
                                        本商品由<em>魅族</em>负责发货并提供售后服务
                                </p>
                            </div>
                    </section>
                    <section class="prod-addition">
                        <input type="hidden" id="servertime" value="1547460286922">
                    </section>
                </div>
        </div>
        <!-- goods end -->
        <section class="detail-recommend" id="detailRecommend" style="display: block;">
            <div class="detail-recommend-inline" id="detailRecommendInline"><div class="recommend">
<div class="title">相关推荐</div>
<div class="recommend-slider" id="J_recommendSlider">
<ul class="slider-wrap">
    <li class="rs-item" v-for="item in relevant" :key="item.id">
        <a class="rs-item-wrap" title="item.name" href="/" target="_blank">
            <div class="mod-pic">
                <img class="recommend-pic" :src="item.imgUrl">
            </div>
            <div class="mod-desc">
                <p class="vm-name">{{item.name}}</p>
                <p class="vm-price">
                    <small>¥</small>
                    <span class="vm-price-text">{{item.minPrice}}</span>
                    <span class="vm-price-qi">起</span>               
                </p>
            </div>
        </a>
    </li>
</ul>
</div>
</div>
</div>
        </section>
        <!-- content start -->
        <section class="content" id="content">
            <nav class="content-nav" id="contentNav">
                <a class="active" href="#description" data-mtype="mall_de_top_good_click" data-bh="click_mall_de_top_good_click">图文详情</a>
                <a href="#standard" data-mtype="mall_de_top_detail_click" data-bh="click_mall_de_top_detail_click" class="">规格参数</a>
                    <a href="#question" data-mtype="mall_de_top_parameter_click" data-bh="click_mall_de_top_parameter_click" class="">常见问题</a>
            </nav>

            <div class="content-inner" id="contentInner">
                <div class="description active" id="description" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: auto;">
                    <div class="container">
                        <article class="desc-pictures">

                                        <a href="//hd.mall.meizu.com/sale/choujiang.html">
                                            <img src="//openfile.meizu.com/group1/M00/07/00/Cgbj0Vw73CeAY1tSAAUzx1mao6I358.jpg">
                                        </a>

                                        <a href="//service.meizu.com/care-broken.html">
                                            <img src="//openfile.meizu.com/group1/M00/05/D1/Cgbj0Ftn_UaALVQMAAFwKc5I7WM651.jpg">
                                        </a>

                                        <img src="//openfile.meizu.com/group1/M00/05/F3/Cgbj0Vtqk0WAOWx_AAWVN93GNlw418.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/E7/Cgbj0FtqwsWAC8zmAAN9C4elkZE578.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/E4/Cgbj0Ftqk0WAM7_AAAVFSDy5n4A535.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/F3/Cgbj0Vtqk0eAYFRwAAQAwK3H7cQ929.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/F9/Cgbj0Vtr9OGAVtAjAAPH4Dh6lRM428.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/F3/Cgbj0Vtqk0eANdS-AAMwB2yfAO0707.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/E4/Cgbj0Ftqk0mAQcBTAAO85Zr0yO8217.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/F3/Cgbj0Vtqk0mAZjs9AAWs-KwCTi0206.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/E7/Cgbj0Ftqwk2ALHPJAALYOKdSGlc422.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/F4/Cgbj0Vtqk0qAOvyZAAK5aBmLoTs920.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/E5/Cgbj0Ftqk0qAS7YPAAULULyhOr0712.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/F4/Cgbj0Vtqk0uACy2WAAN10tvID9Y463.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/E5/Cgbj0Ftqk0yAMOdsAAP5Zr21rRI117.jpg">

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png" data-src="//openfile.meizu.com/group1/M00/05/F4/Cgbj0Vtqk0yAKcqxAAFi1SLQi3I376.jpg">
                        </article>
                    </div>
                </div>

                <div class="standard" id="standard" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 529px;">
                    <div class="container">
                        <table>
                            <tbody>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            基础信息
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>品牌</th>
                                            <td>魅族</td>
                                        </tr>
                                        <tr>
                                            <th>型号</th>
                                            <td>魅族 16th</td>
                                        </tr>
                                        <tr>
                                            <th>尺寸</th>
                                            <td>150.5*73.2*7.3mm</td>
                                        </tr>
                                        <tr>
                                            <th>电池容量</th>
                                            <td>3010mAh</td>
                                        </tr>
                                        <tr>
                                            <th>重量</th>
                                            <td>152g</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            屏幕
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>屏幕尺寸</th>
                                            <td>6.0英寸</td>
                                        </tr>
                                        <tr>
                                            <th>对比度</th>
                                            <td>100000:1    </td>
                                        </tr>
                                        <tr>
                                            <th>分辨率</th>
                                            <td>2160x1080</td>
                                        </tr>
                                        <tr>
                                            <th>PPI</th>
                                            <td>402</td>
                                        </tr>
                                        <tr>
                                            <th>亮度</th>
                                            <td>430cd/m²（典型值）</td>
                                        </tr>
                                        <tr>
                                            <th>制造工艺</th>
                                            <td>On-cell</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            容量
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>运行内存（RAM）</th>
                                            <td>6GB/8GB</td>
                                        </tr>
                                        <tr>
                                            <th>机身内存</th>
                                            <td>64GB（UFS2.1）<br>128GB（UFS2.1）</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            处理器
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>CPU</th>
                                            <td>Qualcomm® 骁龙™ 845 高性能移动平台</td>
                                        </tr>
                                        <tr>
                                            <th>GPU</th>
                                            <td>Adreno™ 630 图形处理器</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            摄像
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>前置摄像头</th>
                                            <td>2000 万像素<br>ƒ/2.0大光圈<br>5片式定制镜头<br>AI 人脸识别解锁<br>智能背景虚化功能<br>ArcSoft® 美颜算法 自适应美肤技术<br>Face AE人脸自动亮度增强</td>
                                        </tr>
                                        <tr>
                                            <th>后置摄像头</th>
                                            <td>1200 万像素 + 2000 万像素双摄<br>光学防抖（主摄）<br>人像背景虚化模式<br>3倍无损变焦模式<br>ƒ/1.8 超大光圈，ƒ/2.6 大光圈<br>6片式定制镜头            5片式定制镜头<br>激光对焦<br>双ISP图像信号处理器<br>连拍模式<br>全景模式<br>环形6-LED闪光灯 补光自然均匀</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            mTouch
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>识别角度</th>
                                            <td>360°</td>
                                        </tr>
                                        <tr>
                                            <th>指纹组数</th>
                                            <td>5组</td>
                                        </tr>
                                        <tr>
                                            <th>mTouch传感器</th>
                                            <td>屏下光学指纹</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            mEngine
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>mEngine</th>
                                            <td>通过横向线性马达 mEngine 营造全局式触感反馈效果</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            环绕立体声
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>环绕立体声</th>
                                            <td>上下超线性双扬声器，沉浸式环绕声场</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            运营商与制式
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>全网通公开版</th>
                                            <td>GSM：B2/B3/B5/B8 <br>WCDMA：B1/B2/B5/B8 <br>TD-SCDMA：B34/B39 <br>CDMA：BC0<br>TD-LTE：B34/B38/B39/B40/B41<br>FDD-LTE：B1/B3/B4/B5/B8</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            其他参数
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>WLAN功能</th>
                                            <td>802.11a/b/g/n/ac 无线网络<br>支持 5GHz 和 2.4GHz 频段<br>支持2x2MIMO</td>
                                        </tr>
                                        <tr>
                                            <th>蓝牙</th>
                                            <td>支持 BLE<br>Bluetooth 5.0</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            系统与应用
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>传感器</th>
                                            <td>霍尔磁感应<br>重力感应<br>红外距离感应<br>陀螺仪<br>环境光度感应<br>触摸感应<br>电子罗盘<br>压力感应<br>横向线性马达</td>
                                        </tr>
                                        <tr>
                                            <th>导航定位</th>
                                            <td>GPS<br>A-GPS<br>GLONASS<br>北斗导航<br>Galileo<br>SBAS<br>QZSS</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            操作环境
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>操作环境</th>
                                            <td>工作环境温度 0 至 35°C<br>存储温度 -20 至 45°C</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            包装清单
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>包装清单</th>
                                            <td>主机 x 1<br>电源适配器 x 1<br>保修证书 x 1<br>SIM卡顶针 x 1<br>数据线 x 1<br>手机保护壳 x 1<br>VIP卡 x 1</td>
                                        </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="question" id="question" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 529px;">
                    <div class="question-list">
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16  系列共有几款手机？型号分别是什么？        
                                </dt>
                                <dd class="vm-answer">
                                共有两款产品，分别为 16th Plus / 16th。    <br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16  系列有哪几种颜色？机身材质？       

                                </dt>
                                <dd class="vm-answer">
                                静夜黑 / 远山白   <br>四曲面 3D 玻璃机身 <br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16  系列解锁方式是怎样的？
                                </dt>
                                <dd class="vm-answer">
                                屏下指纹解锁，只需把手指轻放于指纹图标上。支持支付宝指纹支付、微信指纹支付、应用解锁。<br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列是否支持 mEngine 横向线性马达？        

                                </dt>
                                <dd class="vm-answer">
                                mEngine 触感引擎迎来第二代全新升级，数十个系统级别的场景支持，自动适应算法，真实震撼算法，音乐追踪算法。    <br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列是否为全面屏？屏占比是多少？      

                                </dt>
                                <dd class="vm-answer">
                                三星 AMOLED 全面屏；屏占比高达 91.18%。 <br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列屏幕多大？分辨率是多少？        

                                </dt>
                                <dd class="vm-answer">
                                  6.0英寸          2160 x 1080<br><br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列支持的网络有哪些？是否具备 VoLTE 语音通话技术？     

                                </dt>
                                <dd class="vm-answer">
                                支持中国移动、中国联通、中国电信三大运营商网络，支持 VoLTE 高清语音通话。    <br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列的外放音质怎么样？       

                                </dt>
                                <dd class="vm-answer">
                                新一代超线性双扬声器，沉浸式环绕声场，更大的振膜与全新的降噪算法。   <br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列的 CPU 是什么型号？        

                                </dt>
                                <dd class="vm-answer">
                                高通骁龙 845    <br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列存储容量分别为多少？是否支持存储卡拓展？        

                                </dt>
                                <dd class="vm-answer">
                                6GB+64GB / 6GB+128GB / 8GB+128GB。<br><br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列后置摄像头是多少像素？前置摄像头是多少像素？      

                                </dt>
                                <dd class="vm-answer">
                                后置 1200 万像素 + 2000 万像素双摄，ƒ/1.8 超大光圈 + ƒ/2.6 大光圈。<br>前置 2000 万像素，ƒ/2.0 大光圈。
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列拍照时是否采用 AI 场景识别技术及自动 HDR 功能？        

                                </dt>
                                <dd class="vm-answer">
                                魅族 16 系列支持硬件级 AI 场景识别，可以识别人像、夜景、文字、猫狗、烟花、绿地、蓝天等多种场景，还有全新的虹软 AI 美颜算法。支持自动 HDR。   <br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列的电池规格？      

                                </dt>
                                <dd class="vm-answer">
                                3010mAh。<br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 16 系列采用的 4x4 MIMO 是什么技术？     

                                </dt>
                                <dd class="vm-answer">
                                16th / 16th Plus 支持 2x2 MIMO 2.4GHz/5GHz 四天线系统，无需特定手势来照顾天线接收。16th Plus 更还额外支持 LTE 4x4 MIMO，数据网络可提速高至 100%。  <br>
                                </dd>
                            </dl>
                    </div>
                </div>
            </div>
        </section>
        <!-- content start -->
    </main>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        data() {
            return {
                relevant:[]
            };
        },
        methods: { 
            load(){
                this.axios.get("/Detail",{
                
                }).then(res => {
                    console.log(res.data.data)
                    this.relevant = res.data.data;
                })
            }

        },
        watch: {},
        mounted (){
            new Swiper('.swiper-container', {
                centeredSlides: true,
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            }),
            this.load();
        }
    }
</script>

<style scoped>
	@import url("../assets/main-4913597738.css");
    .swiper-pagination-bullet-active{
        background: #00c3f5;
    }
</style>