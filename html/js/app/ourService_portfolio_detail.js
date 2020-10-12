$(window).load(function() {
    // 首页轮播初始化
    var mySwiper = new Swiper('.swiper-container', {
        // pagination: '.pagination',
        // paginationClickable: true,
        // autoplay : 3000,
        speed: 1000,
        loop: true,
        // autoplayDisableOnInteraction: false
        // freeMode: true,
        // freeModeFluid: true
    });


    var swiperSlideLen = $('.swiper-slide').length;
    var winW = $(window).innerWidth();
    var screenW = window.innerWidth;
    var swiperslideWidth = $('.swiper-slide').width();
    var portfolioDetailArrowLeft = $('.portfolio-detail-arrow-left');
    var portfolioDetailArrowRight = $('.portfolio-detail-arrow-right');


    $('.swiper-slide').height('auto');
    $('.swiper-wrapper').height('auto');
    // $('.swiper-slide').width(winW + 'px');
    // $('.swiper-wrapper').width(winW * swiperSlideLen + 'px');

    // 左右按钮
    portfolioDetailArrowLeft.on('click', function (e) {
        mySwiper.swipePrev();
    });
    portfolioDetailArrowRight.on('click', function (e) {
        mySwiper.swipeNext();
    });

    if(/Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)) {
        portfolioDetailArrowLeft.css('display', 'none');
        portfolioDetailArrowRight.css('display', 'none');
        $('.loushu-a').on('click',function() {
            window.location.href='http://www.kailong.com.cn/louShu/index.html';
        })
    } else {
        $('.loushu-a').on('click',function() {
            window.location.href='louShu_qc.html';
        })
    }

    $(window).resize(function () {
        winW = $(window).innerWidth();
        $('.swiper-wrapper').width(winW * swiperSlideLen + 'px');
        $('.swiper-slide').width(winW + 'px');
        $('.swiper-slide').height('auto');
        $('.swiper-wrapper').height('auto');
    })
});