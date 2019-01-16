<template>
<div id="content" class="content" style="min-height: 370px;">
        <form id="mainForm" class="main-form" enctype="application/x-www-form-urlencoded" novalidate="novalidate">
            <div class="tab-title">
                <a class="linkABlack" id="toAccountLogin" href="javascript:void(0);">账号登录</a>
                <span class="register-line"></span>
                <a class="linkAGray" id="toVCodeLogin" href="javascript:void(0);">验证码登录</a>
            </div>
            <div class="tip-box visiblility-hidden">
                <i class="err-ico"></i>
                <span class="tip-font"></span>
                <span class="close-ico"></span>
            </div>
            <div class="normalInput" style="margin-bottom: 20px;">
                <input class="pl_5 inp-focus" type="text" value="" name="account" id="account" maxlength="50" autocomplete="off"><span class="inputTip">手机号/ Flyme 账号</span>
            </div>
            <div class="normalInput">
                <input class="pl_5 inp-focus" type="password" name="password" id="password" maxlength="16" value="" autocomplete="off"><span class="inputTip">密码</span>
                <div class="clear"></div>
            </div>
            <span id="j_geetest_error" class="error geetest_error" style="display:none"></span>
            <input type="hidden" name="useruri" value="http://mall.meizu.com/member/login.html?useruri=//me.m.meizu.com" id="useruri">
            <input type="hidden" name="service" value="store" id="service">
            <input type="hidden" name="sid" value="unionlogin" id="sid">
            <input type="hidden" name="appuri" value="" id="appuri">
            <div class="rememberField"><span class="mzchkbox"><span class="checkboxPic check_unchk"><i class="i_icon"></i></span><input name="remember" id="remember" type="checkbox" value="1" style="display: none;"></span><label for="remember" tabindex="0">记住登录状态</label><a id="forgetpwd" href="/" class="linkABlue">忘记密码?</a></div>
            <a id="login" class="fullBtnBlue login-btn">登录</a>
            <a id="new_a_mregister" class="btn-go2register" href="/">注册</a>
        </form>
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

</style>