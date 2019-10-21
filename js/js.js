$(document).ready(function(){
    $('.nav .menu ul li').hover(function(){
        $(this).find('.navDown').stop(true).toggle()
    },function(){
        $(this).find('.navDown').stop(true).toggle()
    })
    $(".close").click(function(){
        $('.wapNav').hide()
    })
    $("#nav").click(function(){
        $('.wapNav').show()
    })
    $('.tabOne span').click(function(){
        $('em').removeClass('active')
        $(this).find('em').addClass('active')
        var index=$(this).index();
        $('.boxOne').find('ul').hide();
        $('.moresOne').find('.more').hide();
        $('.moresOne').find('.more').eq(index).show();
        $('.boxOne').find('ul').eq(index).show();


    })
    $('.tabTwo span').click(function(){
             $('em').removeClass('active')
             $(this).find('em').addClass('active')
             var index=$(this).index();
             $('.boxTwo').find('ul').hide();
             $('.boxTwo').find('ul').eq(index).show();
             $('.moresTwo').find('.more').hide();
             $('.moresTwo').find('.more').eq(index).show();
        })
     
        $('#qick').mouseover(function(){
            $(this).hide()
            $('#lanmu').stop().animate({right:'0'});//菜单块向右移动
        });
        $('#lanmu').mouseleave(function(){
         
        $(this).animate({right:'-130px'});//菜单块向右移动
        $('#qick').show()
            
        })


})