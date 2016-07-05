/**
 * Created by tianhf on 2016/7/5.
 */
$(document).ready(function(){
    $("#username").popover({
        content:"请输入4-20位字母、数字或中文，不含特殊字符。",
        trigger:"focus",
        placement:"right",
        template:'<div class="popover" style="width:100%" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',

    });
});
