$(window).load(function() {
    var swiperSlide = $('.swiper-slide');
    var swiperWrapper = $('.swiper-wrapper');
    var pagination = $('.pagination');
    var winW = $(window).innerWidth();
    var paginationArr = [];
    var swiperIndex = 0;
    var swiperInnerIndex = 0;
    var paginationSwitch = $('.swiper-pagination-switch');


    function historySwiper (loop, slidesPerView, simulateTouch, offsetSlidesBefore) {
        winW = $(window).innerWidth();
        var mySwiper = $('.swiper-container').swiper({
            pagination: '.pagination',
            loop: loop, //循环
            grabCursor: true,
            paginationClickable: true,
            simulateTouch: simulateTouch, //拖动
            slidesPerView: slidesPerView, // 显示几栏
            offsetSlidesBefore: offsetSlidesBefore, //位移
            // 当拖动swiper或点击焦点元素时
            onSlideChangeStart: function(swiper) {
                swiperInnerIndex = swiper.activeIndex;
                // 窗口变动时焦点元素用
                swiperIndex = swiper.activeIndex - 3;
                winW = $(window).innerWidth() - 15;
                if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    pagination.css('left', winW / 2 - paginationArr[swiperInnerIndex])
                } else {
                    pagination.css('left', winW / 2 - paginationArr[swiperInnerIndex - 3])
                }
            },
            // 当点击swiper切换slide时
            onSlideClick: function(swiper) {
                // 不是手机端才能点
                if(!(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
                    winW = $(window).innerWidth() - 15;
                    swiperInnerIndex = swiper.clickedSlideIndex - 3;

                    if(swiperInnerIndex !== -1 && swiperInnerIndex !== swiperSlide.length - 7) {
                        // 窗口变动时焦点元素用
                        swiperIndex = swiper.clickedSlideIndex - 3;
                        if(swiperIndex === -1) {
                            swiperIndex = paginationArr.length - 1;
                        } else if(swiperIndex === paginationArr.length) {
                            swiperIndex = 0;
                        }

                        if(swiper.clickedSlideIndex === 2) {
                            swiperInnerIndex = paginationArr.length - 1;
                            mySwiper.swipeTo(paginationArr.length - 1, 300, false);
                        } else if(swiper.clickedSlideIndex === paginationArr.length + 3) {
                            swiperInnerIndex = 0;
                            mySwiper.swipeTo(0, 100, false);
                        } else if(swiper.clickedSlideIndex === 0) {
                            swiperInnerIndex = paginationArr.length - 3;
                            mySwiper.swipeTo(paginationArr.length - 3, 100, false);
                        } else {
                            mySwiper.swipeTo(swiper.clickedSlideLoopIndex, 100, false);
                        }
                        pagination.css('left', winW / 2 - paginationArr[swiperInnerIndex])
                    }

                }
            }
        });
    }

    // loading($('.loading'), $('.history-device'));

    // ie8和ie9禁止鼠标拖动swiper
    if(IEVersion() === 8 || IEVersion() === 9) {
        historySwiper (true, 3, false, 1);
    } else {
        winW = $(window).innerWidth();
        // 小于700切换手机端
        if((/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
            // 初始化之前删除最后一个元素
            swiperSlide.eq(-1).remove();
            // swiper初始化
            historySwiper (false, 1, true, 0);
        } else {
            // swiper初始化
            historySwiper (true, 3, false, 1);
        }
    }

    var yearArr = [];
    paginationSwitch = $('.swiper-pagination-switch');
    // 年份数组
    if((/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
        for(var i = 0, len = paginationSwitch.length  ; i < len; i++) {
            yearArr.push(2018 - i);
        }
    } else {
        // 年份根据swiper的数量所显示，但pc端多了一个空白页，所以删除空白页的焦点
        paginationSwitch.splice(paginationSwitch.length -1 ,1);
        for(var i = 0, len = paginationSwitch.length; i < len; i++) {
            yearArr.push(2018 - i);
        }
    }
    // for(var i = 0, len = paginationSwitch.length  ; i < len; i ++) {
    //     yearArr.push(2018 - i);
    // }

    var span = document.createElement('span');
    span.innerText = '/';

    var paginationSwitchSumWidth = 0;
    var halfW = 0;
    var thisW = 0;
    // 把年份数组里的内容放到swiper焦点元素里
    paginationSwitch.each(function(i) {

        if(paginationSwitch.length === i + 1 ) {
            // 最后一个年份不加斜杠
            $(this).html(yearArr[i])
        } else {
            $(this).html(yearArr[i] + "<span>/</span>")
        }
        thisW = $(this).width();

        paginationSwitchSumWidth += thisW ;

        if(i === 0) {
            halfW += thisW / 2;
        } else if(i === paginationSwitch.length - 1) {
            // 偏移调整
            halfW += thisW + 14
        } else {
            halfW += thisW
        }
        paginationArr.push(halfW - 14)

    });
    // 不+1的话会换行
    paginationSwitchSumWidth += 2;
    // 初始化让年份焦点元素在屏幕中间
    pagination.css({'left': winW / 2 - paginationArr[0] - 3 , 'width': paginationSwitchSumWidth});
    // 窗口大小变动，年份焦点随之变动
    $(window).resize(function() {
        winW = $(window).innerWidth();
        if((/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
            pagination.css('left', winW / 2 - paginationArr[swiperInnerIndex - 3 ])
        } else {
            pagination.css({'left': winW / 2 - paginationArr[swiperIndex ] - 7 , 'width': paginationSwitchSumWidth});
        }
    });

    // swiper初始化高度问题，重置高度
    swiperSlide = $('.swiper-slide');
    swiperWrapper = $('.swiper-wrapper');
    swiperSlide.height('auto');
    swiperWrapper.height('auto');
    $(window).resize(function () {
        winW = $(window).innerWidth();
        swiperSlide.height('auto');
        swiperWrapper.height('auto');
    });




});