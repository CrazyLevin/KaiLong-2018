$(window).load(function() {

    var portfolioDetailArrowLeft = $('.index-arrow-left');
    var portfolioDetailArrowRight = $('.index-arrow-right');

    // 首页轮播初始化
    var mySwiper = new Swiper('.swiper-container', {
        // pagination: '.pagination',
        // paginationClickable: true,
        autoplay : 3000,
        speed: 1000,
        loop: true,
        autoplayDisableOnInteraction: false
    });

    var indexSwiperSlideLen = $('.swiper-slide').length; // 首页轮播数量
    var winW = $(window).innerWidth();  // 获取屏幕宽度
    var ScreenW = window.innerWidth; // 获取屏幕宽度加滚动条
    var ScreenWIe8 = document.body.clientWidth; // ie8获取屏幕宽度加滚动条
    var indexSwiperSlide = $('.swiper-slide');
    var indexSwiperWrapper = $('.swiper-wrapper');
    // 初始化后重置swiper的高度
    // indexSwiperWrapper.height('auto');
    // indexSwiperSlide.height('auto');

    portfolioDetailArrowLeft.on('click', function (e) {
        mySwiper.swipePrev();
    });
    portfolioDetailArrowRight.on('click', function (e) {
        mySwiper.swipeNext();
    });

    if(/Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)) {
        portfolioDetailArrowLeft.css('display', 'none');
        portfolioDetailArrowRight.css('display', 'none')
    }

    $(window).resize(function () {
        winW = $(window).innerWidth(); //调整游览器大小再次获取屏幕宽度
        // indexSwiperWrapper.width(winW * indexSwiperSlideLen + 'px');  // swiper元素宽度等于屏幕宽乘以轮播数量
        // indexSwiperSlide.width(winW + 'px'); // 轮播宽度等于屏幕宽度
        // 每次调整游览器大小，重置swiper的高度
        // indexSwiperWrapper.height('auto');
        // indexSwiperSlide.height('auto');
    });

    var indexOurProjectImgs = $('.index-ourProject img');
    var indexNewsImgs = $('.index-news img');
    // 页面加载后初始化，图片高度向上取整
    indexImgHeightCeil(indexOurProjectImgs);
    indexImgHeightCeil(indexNewsImgs);
    // 调整屏幕宽度，先让图片为auto不然就固定高度了，再取整图片高度
    $(window).resize(function() {
        indexOurProjectImgs.height('auto');
        indexNewsImgs.height('auto');
        indexImgHeightCeil(indexOurProjectImgs);
        indexImgHeightCeil(indexNewsImgs);
    });


});