$(document).ready(function() { 

    $('.main_nav_menu li').click(function(){
        $('.main_nav_menu .active').removeClass('active');
        $(this).addClass('active');
    })

    $('.main_nav_menu li').mouseenter(function(){
        var curIndex = $(this).index();
        $('.header_dropdown_wrapper').addClass('active');
        $('.header_dropdown_wrapper .active').removeClass('active');

        if(curIndex != 0) {
            $('.header_dropdown_wrapper .header_dropdown').eq((curIndex - 1)).addClass('active').find('.dropdown_nav li').eq(0).addClass('active').parent('.dropdown_nav').siblings('.dropdown_nav_detail').children('ul.dropdown_list').eq(0).addClass('active');
        } 
        $('.main_nav_menu li').removeClass('curHover');
        $(this).addClass('curHover');
    }); 

    // 首頁 not hover 的時候 remove active class
    $('.main_nav_menu li').mouseleave(function(){
        var curIndex = $(this).index();
        if(curIndex == 0) {
            $('.header_dropdown_wrapper').removeClass('active');
        }
    });

    $('.header_dropdown_wrapper').mouseleave(function(){
        $('.header_dropdown_wrapper .active').removeClass('active');
        $('.main_nav_menu li').removeClass('curHover');
        $('.header_dropdown_wrapper').removeClass('active');
    });



    $('.dropdown_nav li').mouseenter(function(){
        var curIndex = $(this).index();

        $('.dropdown_nav li.active').removeClass('active').parent('.dropdown_nav').siblings('.dropdown_nav_detail').children('ul.dropdown_list').removeClass('active');
        $(this).addClass('active').parent('.dropdown_nav').siblings('.dropdown_nav_detail').children('ul.dropdown_list').eq( curIndex ).addClass('active');
    });

    // get ready to type when search is expanded
    $('#mutiple_search_block').hover(function(){
        $('#search_text').focus();
    });

    // display or hide detailed search menu dropdown
    $('.styled-select').click(function(){
        $('.search_dropdown').show();
    });
    $('.search_dropdown').mouseleave(function(){
        $('.search_dropdown').hide();
    });

    $('#mutiple_search_block').mouseleave(function(){
        $('.search_dropdown').hide();
    });

    // make dropdown funtion like select/option
    $('.search_dropdown li').click(function() {
        $('.search_dropdown li').removeClass('active');
        $(this).addClass('active');
        $('.menu_display p').text( $(this).text() );
        $('#search_text').focus();
    });

    // when hover login btns, show it's child dropdown
    $('.logintop li.btn').mouseenter(function(){
        $('.login_dropdown').removeClass('active');
        $(this).find('.login_dropdown').addClass('active');
    });

    // when not hovered login btns, hide dropdown
    $('.login_dropdown').mouseleave(function(){
        $(this).removeClass('active');
    });

    $(document).scroll(function(){
        $('.otherNav').addClass('fixed');
        // $('.navbtn_wrapper').addClass('active');
        if ( $(document).scrollTop() >= 470 ) {
            $('.moviesNav').addClass('fixed');
        } else {
            $('.moviesNav').removeClass('fixed');
        }
    }); 
})


