$(window).load(function() {
    var init = 3;
    var arrowLeft =  $('.arrow-left'); // swiper左按钮
    var arrowRight = $('.arrow-right'); // swiper右按钮
    var arrowLeftM = $('.mobile-arrow-left'); // swiper手机端左按钮
    var arrowRightM = $('.mobile-arrow-right'); // swiper手机端右按钮
    var swiperSlide = $('.swiper-slide');
    var swiperWrapper = $('.swiper-wrapper');
    var sLen = swiperSlide.length; // swiper个数
    var ScreenW = window.innerWidth; // 获取屏幕宽度加滚动条


    // 当到移动端大小时，显示1个人
    if(IEVersion() === 8 || IEVersion() === 9) {
        // 初始化swiper函数
        swiperFun (5, arrowLeft, arrowRight, 5, false);
        initSwiperArrow(5);
    } else {
        if(ScreenW > 700) {
            // 初始化swiper函数
            swiperFun (5, arrowLeft, arrowRight, 5, true);
            initSwiperArrow(5);
        } else {
            // 初始化swiper函数
            swiperFun (1, arrowLeftM, arrowRightM, 1, true);
            initSwiperArrow(1);
            arrowLeft.css('display', 'none');
            arrowRight.css('display', 'none');
        }
    }

    // 初始化，重置swiper的高度
    swiperSlide.height('auto');
    swiperWrapper.height('auto');
    $(window).resize(function () {
        swiperSlide.height('auto');
        swiperWrapper.height('auto');
    });

    // console.log(ScreenW);
    // 当swiper个数小于5时，两个按钮都隐藏
    if(sLen < 5) {
        arrowLeft.css('display', 'none');
        arrowRight.css('display', 'none');
    }

    // pc端swiper左右按钮事件
    arrowLeft.on('click', function (e) {
        e.preventDefault();
        var swiper = $(this).siblings('.swiper-container').data('swiper');
        swiper.swipePrev();
    });
    arrowRight.on('click', function (e) {
        e.preventDefault();
        var swiper = $(this).siblings('.swiper-container').data('swiper');
        swiper.swipeNext();
    });
    // 移动端端swiper左右按钮事件
    arrowLeftM.on('click', function (e) {
        e.preventDefault();
        var swiper = $(this).parent('.swiper-container').data('swiper');
        swiper.swipePrev();
    });
    arrowRightM.on('click', function (e) {
        e.preventDefault();
        var swiper = $(this).parent('.swiper-container').data('swiper');
        swiper.swipeNext();
    });
    // 初始化swiper函数
    function swiperFun (slidesPerView, arrowLeft, arrowRight , sV , simulateTouch) {
        mySwiper = $('.swiper-container').swiper({
            // pagination: '.pagination',
            // loop: true,
            initialSlide: init,
            grabCursor: true,
            paginationClickable: true,
            simulateTouch: simulateTouch,
            slidesPerView: slidesPerView,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            onSlideChangeEnd: function(swiper) {
                // 当swiper下标不等于0时，显示左边按钮
                // 当swiper已是最后一个，隐藏右边按钮
                if(swiper.activeIndex !== 0) {
                    arrowLeft.css('display', 'block')
                } else {
                    arrowLeft.css('display', 'none')
                }
                if(swiper.activeIndex === sLen - sV) {
                    arrowRight.css('display', 'none')
                } else {
                    arrowRight.css('display', 'block')
                }
            }
        });
    }

    // 在页面初始化，根据index判断箭头是否显示
    function initSwiperArrow(sV) {
        if(mySwiper.activeIndex !== 0) {
            arrowLeft.css('display', 'block');
            arrowRight.css('display', 'block')
        } else {
            arrowLeft.css('display', 'none')
        }
        if(sV === 5) {
            if(mySwiper.activeIndex === sLen - sV) {
                arrowRight.css('display', 'none')
            } else {
                arrowRight.css('display', 'block')
            }
        } else {
            if(mySwiper.activeIndex === sLen - sV) {
                arrowLeftM.css('display', 'block');
                arrowRightM.css('display', 'none')
            } else {
                arrowRightM.css('display', 'block')
            }
        }
    }
});