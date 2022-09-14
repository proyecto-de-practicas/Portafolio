$(document).ready(function(){
    if($(window).width() > 100){
        $('.efecto').css({
            opacity:0,
            marginTop:-120
        });
        
        $('.efecto').animate({
            opacity:1,
            marginTop:'30px'
        },1700);
    }
})