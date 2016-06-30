$(function(){
    $(".collapse-home").on("click",function(){
        var me=$(this);
        if(me.next().hasClass("active")){
            me.next().removeClass("active");
        }else{
            me.next().addClass("active");
        }
    })
})