void function () {
    var id=mainFunction.queryString("id");
    if (id == "") {
        if (location.href.indexOf("ourService_portfolio_detail.html") > 0) {
            location.href = "ourService_portfolio.html";
        }
        else {
            location.href = "ourService_portfolio_cn.html";
        }
        
    }
    var portfolio = {
        init: function () {
            portfolio.content();
        },     
        content: function () {
            DAjax.portfoliodetail({
                data: {
                    id:id,
                    LanguageType: mainFunction.languageType
                },
                success: function (json) {
                    var imglist = json.ImgList;
                    var relationlist = json.RelationList;                   
                    if (location.href.indexOf("ourService_portfolio_detail.html") > 0) {
                        var isexited = json.IsExited == '1' ? '<img class="portfolio-detail-title-icon" src="html/images/ourService_portfolio_detail_icon.jpg" alt="ourService_portfolio_detail_icon">' : ''
                        var linkname ='<li><h4 class="portfolio-detail-right-red">Contact</h4><p class="portfolio-detail-right-grey">' + json.LinkName + '</p></li>';
                        if (json.LinkName == "" || json.IsExited == "1") {
                            linkname ="" ;             
                        }
                        $("#content").html('<h2 class="portfolio-detail-title title-50"><span>' + json.Title + isexited + '</span></h2><div class="portfolio-detail-left">' + json.HtmlCode + '</div>');
                        $("#mobileright").html('<li><h4 class="portfolio-detail-right-red">Location</h4><p class="portfolio-detail-right-grey">' + json.XiangMuSuoZaiDI + '</p></li><li><h4 class="portfolio-detail-right-red">Asset type</h4><p class="portfolio-detail-right-grey">' + json.ZiChanLeiXing + '</p></li><li><h4 class="portfolio-detail-right-red">GFA</h4><p class="portfolio-detail-right-grey">' + json.MianJi + '</p></li>'+linkname+'');
                        $("#right").html('<li><h4 class="portfolio-detail-right-red">Location</h4><p class="portfolio-detail-right-grey">' + json.XiangMuSuoZaiDI + '</p></li><li><h4 class="portfolio-detail-right-red">Asset type</h4><p class="portfolio-detail-right-grey">' + json.ZiChanLeiXing + '</p></li><li><h4 class="portfolio-detail-right-red">GFA</h4><p class="portfolio-detail-right-grey">' + json.MianJi + '</p></li>' + linkname + '')
                    }
                    else {
                        var linkname = '<li><h4 class="portfolio-detail-right-red">联系我们</h4><p class="portfolio-detail-right-grey">' + json.LinkName + '</p></li>';
                        if (json.LinkName == "" || json.IsExited == "1") {
                            linkname = '';
                        }
                        var isexited = json.IsExited == '1' ? '<img class="portfolio-detail-title-icon" src="html/cnimages/ourService_portfolio_detail_icon.jpg" alt="ourService_portfolio_detail_icon">' : ''
                        $("#content").html('<h2 class="portfolio-detail-title title-50"><span>' + json.Title + isexited + '</span></h2><div class="portfolio-detail-left">' + json.HtmlCode+'</div>');
                        $("#mobileright").html('<li><h4 class="portfolio-detail-right-red">项目位置</h4><p class="portfolio-detail-right-grey">' + json.XiangMuSuoZaiDI + '</p></li><li><h4 class="portfolio-detail-right-red">资产类型</h4><p class="portfolio-detail-right-grey">' + json.ZiChanLeiXing + '</p></li><li><h4 class="portfolio-detail-right-red">建筑面积</h4><p class="portfolio-detail-right-grey">' + json.MianJi + '</p></li>'+linkname+'');
                        $("#right").html('<li><h4 class="portfolio-detail-right-red">项目位置</h4><p class="portfolio-detail-right-grey">' + json.XiangMuSuoZaiDI + '</p></li><li><h4 class="portfolio-detail-right-red">资产类型</h4><p class="portfolio-detail-right-grey">' + json.ZiChanLeiXing + '</p></li><li><h4 class="portfolio-detail-right-red">建筑面积</h4><p class="portfolio-detail-right-grey">' + json.MianJi + '</p></li>' + linkname + '')
                    }
                    var str = "";
                    var str2 = "";
                   
                    var length2 = relationlist.length;
                    if (length2 > 0) {
                        for (var i = 0; i < length2; i++) {
                            var Introduction = relationlist[i].Introduction.replace(/(\r\n)|(\n)/g, '</br>');
                            str2 += '<li><a href="ourService_portfolio_detail.html?id=' + relationlist[i].ID + '"><img class="portfolio-detail-ul-img" src="' + mainFunction.picUrl + relationlist[i].Logo + '" alt="' + relationlist[i].Title + '"><div class="portfolio-detail-modal"><div class="portfolio-detail-modal-position"><h2 class="portfolio-detail-modal-h2 title-24">' + relationlist[i].Title + '</h2><p class="portfolio-detail-modal-p">' + Introduction + '</p><img class="portfolio-arrow" src="html/images/index-ourProject-modal-arrow.png" alt="modal-arrow"></div></div></a></li>';
                        }
                    }
                    $("#realation").html(str2);
                    var length = imglist.length;
                    if (length>0) {
                        for (var i = 0; i < length; i++) {
                            str += '<div class="swiper-slide "><a href="javascript:"><img class="index-loop-img" src="' + imglist[i].Logo + '" alt="ourService_portfolio_detail_loop_01"></a></div>';
                        }
                    }
                    $("#index-swiper").html(str);
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
                    if(/Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)) {
                        portfolioDetailArrowLeft.css('display', 'none');
                        portfolioDetailArrowRight.css('display', 'none');
                        $('.loushu-a').on('click',function() {
                            window.location.href='http://www.kailong.com.cn/louShu/index.html';
                        });
                        $('.loushu-a').on('click',function() {
                            window.location.href='http://www.kailong.com.cn/louShu/index.html';
                        })
                    } else {
                        $('.loushu-a').on('click',function() {
                            window.location.href='louShu_qc.html';
                        });
                        $('.loushu-a-cn').on('click',function() {
                            window.location.href='louShu_qc_cn.html';
                        })
                    }
                    // 左右按钮
                    portfolioDetailArrowLeft.on('click', function (e) {
                        mySwiper.swipePrev();
                    });
                    portfolioDetailArrowRight.on('click', function (e) {
                        mySwiper.swipeNext();
                    });

                    $('.swiper-slide').height('auto');
                    $('.swiper-wrapper').height('auto');
                    // $('.swiper-slide').width(winW + 'px');
                    // $('.swiper-wrapper').width(winW * swiperSlideLen + 'px');

                    $(window).resize(function () {
                        winW = $(window).innerWidth();
                        $('.swiper-wrapper').width(winW * swiperSlideLen + 'px');
                        $('.swiper-slide').width(winW + 'px');
                        $('.swiper-slide').height('auto');
                        $('.swiper-wrapper').height('auto');
                    })
                }
            })
        }
    };

    $(function () {
        portfolio.init();
    })
}()