$(function(){

    /*
          绑定小屏时菜单下拉按钮点击事件
     */
    $(".collapse-home").on("click",function(){
        var me=$(this);
        if(me.next().hasClass("active")){
            me.next().removeClass("active");
        }else{
            me.next().addClass("active");
        }
    })

    /*
         绑定二维码区域点击事件
     */
    $(".qrcode").on("click",function(){
        var me=$(this);
        if(me.hasClass("active")){
            me.removeClass("active");
        }else{
            me.addClass("active");
        }
    })
})