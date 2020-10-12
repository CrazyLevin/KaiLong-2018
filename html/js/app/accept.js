(function() {
    var acceptModal = $('.accept-modal'); // 同意模态框
    var acceptBtn = $('.accept-btn'); // 同意按钮
    var checkboxSelf = $('.checkboxSelf'); //自定义checkbox按钮
// 自定义checkbox按钮事件
    checkboxSelf.on('click',function() {
        var arr = [];
        // $(this).attr('data-judge')初始为false
        // 如果为false就让当前复选框为true
        // 让复选框为勾选状态
        // 让下下个元素的inputchecked为true
        if($(this).attr('data-judge') === 'false') {
            $(this).attr('data-judge', true);
            $(this).children('b').addClass('checkIcon');
            $(this).next().next().attr('checked', true);
        } else {
            $(this).attr('data-judge', false);
            $(this).children('b').removeClass('checkIcon');
            $(this).next().next().attr('checked', false);
        }
        // 每次点击重新获取checkboxSelf
        checkboxSelf = $('.checkboxSelf');
        // 如果为自定义按钮为true就放入数组中
        for(var i = 0; i < checkboxSelf.length; i++) {
            if(checkboxSelf.get(i).getAttribute('data-judge') === 'true') {
                arr.push(checkboxSelf.get(i).getAttribute('data-judge'))
            }
        }
        // 数组中只要有true的元素，最下方的按钮为红色，状态改为true
        if(arr[0] === 'true') {
            acceptBtn.attr('data-judge', true);
            acceptBtn.removeClass('accept-btn-red');
        } else {
            acceptBtn.attr('data-judge', false);
            acceptBtn.addClass('accept-btn-red');
        }
    });
// 同意按钮
// 如果同意按钮为状态为true，则可以关闭模态框
    acceptBtn.on('click', function() {
        SetCookie('history', '123');
        if($(this).attr('data-judge') === 'true') {
            acceptModal.css('display', 'none');
            // 解除滚动条锁定
            $('html, body').css('overflow', 'auto');
            // 解除滚动条锁定
            removeUnScroll();
        }
    });

    unScroll();
// 用于安卓锁住滚动条
    function unScroll(){
        var top=$(document).scrollTop();
        $(document).on('scroll.unable',function (e){
            $(document).scrollTop(top);
        })
    }
    function removeUnScroll(){
        $(document).unbind("scroll.unable");
    }
    // 同意框出现一次
    if(getCookie('history') === '123') {
        acceptModal.css('display', 'none');
        // 解除滚动条锁定
        $('html, body').css('overflow', 'auto');
        // 解除滚动条锁定
        removeUnScroll();
    }

    // cookie操作
    /*
     功能：保存cookies函数
     参数：name，cookie名字；value，值
     */
    function SetCookie(name,value){
        var Days = 30;  //cookie 将被保存30天
        var exp = new Date(); //获得当前时间
        exp.setTime(exp.getTime() + Days*24*60*60*1000); //换成毫秒
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
    /*
    功能：获取cookies函数
    参数：name，cookie名字
    */
    function getCookie(name){
        var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        if(arr != null){
            return unescape(arr[2]);
        }else{
            return null;
        }
    }
    /*
    功能：删除cookies函数
    参数：name，cookie名字
    */

    function delCookie(name){
        var exp = new Date(); //当前时间
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }



})();

