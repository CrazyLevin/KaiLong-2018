$(window).load(function() {
    var portfolioImg = $('.portfolio-img');
    var portfolioScreeningInformationUlPosition = $('.portfolio-Screening-information-ul-position');
    var result = [];
    var portfolioScreeningInformationUl = $('.portfolio-Screening-information-ul li');
    $('.portfolio-Screening-information-ul li').each(function() {
        // console.log( $(this).width());
        // result.push($(this).width());
    });
    portfolioScreeningInformationUl.each(function() {
        // console.log($(this).width($(this).width()));
        result.push($(this).width());
    });
    var min = result.reverse()[0];
    console.log();

    // console.log()
    // indexImgWidthFloor(portfolioImg);
    // indexImgWidthFloor(portfolioScreeningInformationUlPosition);
    // indexImgWidthFloor(portfolioScreeningInformationUl);

    if(/Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)) {
        portfolioDetailArrowLeft.css('display', 'none');
        portfolioDetailArrowRight.css('display', 'none');
        $('.loushu-a').on(function() {
            window.location.href='louShu_qc.html';
        })
    } else {
        $('.loushu-a').on('click',function() {
            window.location.href='louShu_qc.html';
        })
    }
    function indexImgWidthFloor(ele) {
        ele.each(function() {
            console.log(min);
            $(this).width('49%');
            $(this).width(min);
        });
    }
    $(window).resize(function() {
        // portfolioImg.css('width', 'auto');
        // portfolioScreeningInformationUlPosition.css('width', 'auto');
        // indexImgWidthFloor(portfolioImg);
        // indexImgWidthFloor(portfolioScreeningInformationUlPosition);
        // $('.portfolio-Screening-information-ul li').css('width', '49%');
        // indexImgWidthFloor(portfolioScreeningInformationUl);
    })
});
