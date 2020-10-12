$(window).load(function() {
    var ScreenW = window.innerWidth; // 获取屏幕宽度加滚动条
    var headerNavMobileBtn = $('.header-nav-mobile-btn'); // 移动端菜单按钮
    var headerNav = $('.header-nav');   // 头部导航条

    // 移动端菜单按钮事件
    // 点击判断自定义属性，如果为false，则展开导航栏并且自定义属性为true
    // 不然隐藏导航栏，自定有属性为false
    headerNavMobileBtn.on('click', function() {
        var that = $(this);
        if(that.attr('data-switch') === 'false') {
            headerNav.slideDown();
            that.attr('data-switch', 'true');
        } else {
            headerNav.slideUp();
            that.attr('data-switch', 'false')
        }
    });

    $(window).resize(function() {
        if(IEVersion() !== 8) {
            indexNav();
        }
    });
    // 头部导航栏
    function indexNav() {
        ScreenW = window.innerWidth; // 获取屏幕宽度加滚动条
        if(ScreenW > 1024) {
            // 当屏幕宽度大于1024显示头部导航条
            headerNav.css('display', 'block');
        } else {
            // 当屏幕宽度小于1024显示头部导航条判断按钮自定义属性
            // 如果为false，则隐藏导航栏
            // 不然显示导航栏
            if(headerNavMobileBtn.attr('data-switch') === 'false') {
                headerNav.css('display', 'none');
            } else {
                headerNav.css('display', 'block');
            }
        }
    }
});
// 全局函数

// 判断是不是ie8或9的函数
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion === 9) {
            return 9;
        }
        if(fIEVersion === 8) {
            return 8;
        }
    }
}
// 因为布局是自适应的，在该页面的某些图片都是贴着的，如果去调整游览器宽度会造成贴着图片有白线的情况
// 让图片的高度向上取整
function indexImgHeightCeil(ele) {
    ele.each(function() {
        $(this).height(Math.ceil($(this).height()));
    });
}

var toTop = $('.toTop');
$(window).scroll(function() {
    if($(window).scrollTop() > $(window).height()) {
        toTop.css('display', 'block');
    } else {
        toTop.css('display', 'none');
    }
});
toTop.click(function() {
    $('html, body').animate({'scrollTop': 0});
});