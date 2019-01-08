<template>
	<main class="main" id="main">
        <!-- goods start -->
        <div class="goods" id="goods">
            <div class="swipe" id="prd-sliders">
                <div class="swipe-wrap">
                </div>
                <div class="poin"></div>
            </div>

            <div class="prod" id="prod">
                    <div class="sanp-up" id="J_sanpUp">

                    </div>

                    <section class="prod-info">
                        <div class="prod-info-header">
                            <h1 class="vm-title">魅族 Note8</h1>
                        </div>
                        <div class="prod-info-price">
                            <div class="mod-price">
                                <small>¥ </small><span id="J_price" class="vm-money"></span>
                            </div>
                            <div class="mod-original" id="J_originalPrice" style="display:none">
                            </div>
                            <div class="mod-countdown" id="J_discountCountDown" style="display:none">
                            </div>
                        </div>
                        <div class="prod-info-installment" id="J_prodInstallment">
                            分期价 ￥<span class="vm-price">0.00</span>x<span class="vm-period">0</span>期<span class="vm-rate"></span>
                        </div>
                        <div class="prod-info-message">
                            <p >国民拍照手机</p>
                        </div>
                    </section>

                        <section class="prod-service" id="J_prodService" data-ctrl="J_layerService" data-mtype="mall_de_msg_service">
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
                        <div class="mod-morebuy" id="J_morebuy" style="display: none"
                             data-mtype="mall_de_redem">
                        </div>
                        <div class="mod-gift" id="J_gift" style="display: none" data-mtype="mall_de_gift">
                        </div>
                    </div>
                </section>


                    <section class="prod-promo" id="J_prodPromo" data-ctrl="J_layerPromo" style="display:none;" data-mtype="mall_de_msg_coupon">
                        <div class="prod-promo-inner" id="J_promoInner">
                            <label>领券</label>
                        </div>
                        <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                    </section>

                    <section class="prod-exclusive" id="J_propExclusive" style="display:none" data-mtype="mall_de_appdl">
                        <div class="prop-exclusive-inner">
                            <label>专享</label>
                            <p class="vm-exclusive" id="J_vmExclusive">APP下单省<span id="J_textExclusive"></span>元</p>
                        </div>
                        <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                    </section>

                    <section class="prod-selected" id="J_prodSelected" data-ctrl="J_layerProps" data-mtype="mall_de_msg_package">
                        <label>选择</label>
                        <p>
                            <span class="vm-props" id="J_selectedProps"></span>
                            <span class="vm-quantity" id="J_selectedQuantity" style="display:none;">×1</span>
                        </p>
                        <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                    </section>

                    <section class="prod-suda" id="J_prodSuda" data-ctrl="J_layerSuda" data-mtype="mall_de_msg_address">
                        <!--去掉百城判断-->
                            <div class="prod-suda-selector" id="J_sudaSelector"
                                 data-url="//area.meizu.com/area/child/query/">
                                <label>配送</label>
                                <span id="J_siteText"></span>
                                <i class="icon icon-enter" id="J_prodPromoEnter"></i>
                            </div>
                            <div class="prod-suda-info" id="J_siteStatus" style="display:none;">
                            </div>
                        <!---->
                            <div class="prod-suda-supplier">
                                <p class="mod-bd">
                                        本商品由<em>魅族</em>负责发货并提供售后服务
                                </p>
                            </div>
                    </section>
                    <section class="prod-addition">
                        <input type="hidden" id="servertime" value="1541667053408"/>
                    </section>
                </div>
        </div>
        <!-- goods end -->
        <section class="detail-recommend" id="detailRecommend">
            <div class="detail-recommend-inline"  id="detailRecommendInline"></div>
        </section>
        <!-- content start -->
        <section class="content" id="content">
            <nav class="content-nav" id="contentNav">
                <a class="active" href="#description" data-mtype="mall_de_top_good_click">图文详情</a>
                <a href="#standard" data-mtype="mall_de_top_detail_click">规格参数</a>
                    <a href="#question" data-mtype="mall_de_top_parameter_click">常见问题</a>
            </nav>

            <div class="content-inner" id="contentInner">
                <div class="description" id="description">
                    <div class="container">
                        <article class="desc-pictures">

                                        <a href="//bbs-act.meizu.cn/index.php?mod=shop&amp;action=view&amp;id=76">
                                            <img src="//openfile.meizu.com/group1/M00/06/CB/Cgbj0FvhMgyAQV21AAC8zuj6cU8863.jpg"/>
                                        </a>

                                        <img src="//openfile.meizu.com/group1/M00/06/C6/Cgbj0FvSxB2AQQURAAwwnsT8vCQ110.jpg"/>

                                        <img src="//openfile.meizu.com/group1/M00/06/D6/Cgbj0VvSxOiAKG7FAAkcMtCTmJc700.jpg"/>

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png"
                                             data-src="//openfile.meizu.com/group1/M00/06/D6/Cgbj0VvRruuAVCeMAAfvIw1xF_0447.jpg"/>

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png"
                                             data-src="//openfile.meizu.com/group1/M00/06/C6/Cgbj0FvSzPiAT3BpAAcgDyqCV_g379.jpg"/>

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png"
                                             data-src="//openfile.meizu.com/group1/M00/06/D6/Cgbj0VvRrwKAUZW5AAfav_HNk8Y251.jpg"/>

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png"
                                             data-src="//openfile.meizu.com/group1/M00/06/C6/Cgbj0FvRrw6AJS5xAAv9zDGCQi0595.jpg"/>

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png"
                                             data-src="//openfile.meizu.com/group1/M00/06/D6/Cgbj0VvRrxuAP6nlAAbZcaFMLLg839.jpg"/>

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png"
                                             data-src="//openfile.meizu.com/group1/M00/06/C6/Cgbj0FvRrySAb1vJAAylKb5ObuI515.jpg"/>

                                        <img class="be-lazy" src="//mall.res.meizu.com/detail/img/blank.png"
                                             data-src="//openfile.meizu.com/group1/M00/06/C6/Cgbj0FvSxP2AbRa7AAcQda5po1s130.jpg"/>
                        </article>
                    </div>
                </div>

                <div class="standard" id="standard">
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
                                            <td>魅族 Note8</td>
                                        </tr>
                                        <tr>
                                            <th>尺寸</th>
                                            <td>153.6*75.5*7.9mm</td>
                                        </tr>
                                        <tr>
                                            <th>电池容量</th>
                                            <td>3600mAh</td>
                                        </tr>
                                        <tr>
                                            <th>重量</th>
                                            <td>168g</td>
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
                                            <td>1500:1</td>
                                        </tr>
                                        <tr>
                                            <th>分辨率</th>
                                            <td>2160x1080</td>
                                        </tr>
                                        <tr>
                                            <th>PPI</th>
                                            <td>403</td>
                                        </tr>
                                        <tr>
                                            <th>亮度</th>
                                            <td> 450cd/m²（典型值）</td>
                                        </tr>
                                        <tr>
                                            <th>制造工艺</th>
                                            <td>In-Cell 全贴合</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            容量
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>运行内存（RAM）</th>
                                            <td>4GB</td>
                                        </tr>
                                        <tr>
                                            <th>机身内存</th>
                                            <td>64GB</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            处理器
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>CPU</th>
                                            <td>高通骁龙632 高性能移动平台</td>
                                        </tr>
                                        <tr>
                                            <th>GPU</th>
                                            <td>Adreno 506 图形处理器</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            摄像
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>前置摄像头</th>
                                            <td>4片式定制镜头<br>ƒ/2.0大光圈<br>800万像素<br>AI 人脸识别解锁<br>ArcSoft® 美颜算法 自适应美肤技术<br>Face AE人脸自动亮度增强</td>
                                        </tr>
                                        <tr>
                                            <th>后置摄像头</th>
                                            <td>1200万像素               500万像素<br>Dual PD 全像素双核对焦（主摄）<br>人像背景虚化模式<br>ƒ/1.9 超大光圈<br>6 片式定制镜头 + 4 片式定制镜头<br>双ISP图像信号处理器<br>连拍模式<br>全景模式<br>双色温双闪光灯 补光自然均匀</td>
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
                                            <td>电容式触摸传感器</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            运营商与制式
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>全网通公开版</th>
                                            <td>GSM：B2/B3/B5/B8 <br>TD-SCDMA：B34/B39 <br>CDMA：BC0<br>WCDMA：B1/B5/B8<br>TD-LTE：B38/B39/B40/B41<br>FDD-LTE：B1/B3/B5</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            其他参数
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>WLAN功能</th>
                                            <td>支持 5GHz 和 2.4GHz 频段<br>802.11 a/b/g/n 无线网络</td>
                                        </tr>
                                        <tr>
                                            <th>蓝牙</th>
                                            <td>支持 BLE<br>Bluetooth 4.2</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            多媒体
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>视频</th>
                                            <td>支持 MP4、3GP、MOV、MKV、AVI、FLV、MPEG 视频格式</td>
                                        </tr>
                                        <tr>
                                            <th>音频</th>
                                            <td>支持 FLAC、APE、AAC、MKA、OGG、MIDI、M4A、AMR 音频格式</td>
                                        </tr>
                                        <tr>
                                            <th>图片</th>
                                            <td>支持 JPEG、PNG、GIF、BMP 图片格式</td>
                                        </tr>
                                    <tr class="standard-table-group">
                                        <th colspan="2">
                                            系统与应用
                                        </th>
                                    </tr>
                                        <tr>
                                            <th>传感器</th>
                                            <td>重力感应<br>红外距离感应<br>陀螺仪<br>环境光度感应<br>触摸感应<br>电子罗盘<br>霍尔传感器</td>
                                        </tr>
                                        <tr>
                                            <th>导航定位</th>
                                            <td>GPS<br>GLONASS<br>北斗导航</td>
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
                                            <td>主机 x 1<br>电源适配器 x 1<br>保修证书 x 1<br>SIM卡顶针 x 1<br>数据线 x 1</td>
                                        </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="question" id="question">
                    <div class="question-list">
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 Note8 有哪几种颜色？机身材质是什么？
                                </dt>
                                <dd class="vm-answer">
                                曜黑 / 灰蓝 / 烟紫 / 焰红。金属一体化机身材质。<br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 Note8 屏幕尺寸为多大？是否为全面屏设计？分辨率为多少？
                                </dt>
                                <dd class="vm-answer">
                                6.0 英寸全面屏，18:9 比例，分辨率为 2160 x 1080 。<br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 Note8 如何解锁？
                                </dt>
                                <dd class="vm-answer">
                                后置指纹解锁 + 人脸解锁。自然抬起手腕，屏幕自动亮起进行人脸解锁。<br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 Note8 后置摄像头是多少像素？前置摄像头是多少像素？
                                </dt>
                                <dd class="vm-answer">
                                后置 1200 万像素 + 500 万像素双摄，ƒ/1.9 超大光圈。前置 800 万像素，ƒ/2.0 大光圈，支持虹软美颜算法。<br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 Note8 拍照传感器是什么型号？
                                </dt>
                                <dd class="vm-answer">
                                索尼 IMX362 传感器。<br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 Note8 的 CPU 是什么型号？图形处理器是什么型号？
                                </dt>
                                <dd class="vm-answer">
                                高通骁龙 632 处理器，14nm 制程。Adreno 506 图形处理器。<br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 Note8 存储容量是多少？
                                </dt>
                                <dd class="vm-answer">
                                4GB+64GB。<br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 Note8 搭载的操作系统是什么？
                                </dt>
                                <dd class="vm-answer">
                                基于 Android O 深度定制的 Flyme 7 并且支持新升级的家庭守护和游戏模式 3.0。<br>
                                </dd>
                            </dl>
                            <dl class="mod-item">
                                <dt class="vm-question">
                                魅族 Note8 的电池规格？是否支持 mCharge 安全快充？
                                </dt>
                                <dd class="vm-answer">
                                3600mAh，支持。<br>
                                </dd>
                            </dl>
                    </div>
                </div>
            </div>
        </section>
        <!-- content start -->
    </main>
</template>

<script src="../assets/MZ.json"></script>
<script src="../assets/zepto.js"></script>
<script src="../assets/main-994bbe158d.js"></script>
<script src="../assets/ntkfstat.js"></script>
<script>

</script>

<style>
	@import url("../assets/main-4913597738.css");
</style>