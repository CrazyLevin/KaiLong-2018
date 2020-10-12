// 放在公共环境方便调用
// 直接调用的页面有：
// news_consultation.html
// news_consultation_cn
// news_choiceYear.html
// news_choiceYear_cn.html
// aboutUs_corporate_history.html
// aboutUs_corporate_history_cn.html
function loading(loadingEle, displayEle) {
    loadingEle.css('display', 'none');
    displayEle.css('display', 'block');
}
$(window).load(function() {
    // ourService_portfolio.html
    // ourService_portfolio_cn.html
    loading($('.loading-box'), $('.portfolio-Screening-main'));
    // aboutUs_responsibility_charity.html
    // aboutUs_responsibility_charity_cn.html
    loading($('.loading-box'), $('.responsibility-calendarYear-ul'));
    // aboutUs_teamBuilding.html
    // aboutUs_teamBuilding_cn.html
    loading($('.loading-box'), $('.teamBuilding-main'));
});

