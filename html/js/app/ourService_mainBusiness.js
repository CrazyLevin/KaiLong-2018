$(window).load(function() {
    var mainBusinessExtendAndHide = $('.mainBusiness-extendAndHide');

    mainBusinessExtendAndHide.on('click', function() {
        var judge = $(this).attr('data-judge');
        if(judge === 'false') {
            $(this).children('.mainBusiness-extendAndHide-after').css('display', 'none');
            $(this).next().slideDown();
            $(this).attr('data-judge', true);
            // console.log()
        } else {
            $(this).children('.mainBusiness-extendAndHide-after').css('display', 'block');
            $(this).next().slideUp();
            $(this).attr('data-judge', false);
        }

    })
});