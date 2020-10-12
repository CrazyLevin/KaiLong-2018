$(window).load(function() {
    var portfolioChecks = $('.portfolio-checks'); //获取复选框的父元素
    var checkedArr = []; //中卷-第二章-值，用来存放选中的元素
    // 因为ie8不支持trim，重写trim
    String.prototype.trim = function () {
        return this .replace(/^\s\s*/, '' ).replace(/\s\s*$/, '' );
    };
    portfolioChecks.on('mouseup', function() {

        var dataJudge = $(this).attr('data-judge'); // 获取自定义属性用于判断
        var checkedContent = $(this).children('.portfolio-label').text(); //获取复选框文字内容

        // 如果自定义属性是false，
        // 则添加类名让元素为勾选状态，
        // 让复选的checked为true
        // 自定义属性为true
        // 并且把复选框的文字内容放入数组中
        // 因为选中，相应被选中的内容会在下方出现已筛选的元素，这里调用了moveAndAdd();
        if(dataJudge === 'false') {
            $(this).children('.portfolio-customChecks').addClass('portfolio-customChecks-checked');
            $(this).children('.portfolio-checkBox').attr('checked', true);
            $(this).attr('data-judge', true);

            checkedArr.push(checkedContent);

            moveAndAdd();

        } else {
            // 相反自定义属性为false
            // 删除选中复选框的勾选状态
            // 让复选的checked为false
            // 删除相应的筛选元素
            $(this).children('.portfolio-customChecks').removeClass('portfolio-customChecks-checked');
            $(this).children('.portfolio-checkBox').attr('checked', false);
            $(this).attr('data-judge', false);
            for(var i = 0; i < checkedArr.length; i++) {
                if(checkedArr[i] === checkedContent) checkedArr.splice(i,1);
            }
            moveAndAdd();

        }

    });
    // 已筛选的函数

    function moveAndAdd() {
        var portfolioScreeningUl = $('.portfolio-Screening-ul');
        portfolioScreeningUl.children().remove();
        for(var j = 0 ; j < checkedArr.length; j++) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            var i = document.createElement('i');

            a.className = 'portfolio-Screening-close';
            a.innerText = checkedArr[j];
            i.className = 'portfolio-Screening-i';
            a.appendChild(i);
            li.appendChild(a);
            portfolioScreeningUl.get(0).appendChild(li);
        }
        addCloseEle();

        var portfolioScreeningClose = $('.portfolio-Screening-close');
        portfolioScreeningClose.on('click',function() {
            portfolioChecks = $('.portfolio-checks');

            for(var i = 0; i < portfolioChecks.length; i++) {
                if(portfolioChecks[i].innerText.trim() === $(this).text().trim()) {
                    portfolioChecks[i].setAttribute('data-judge', false);
                    portfolioChecks[i].children[0].className = 'portfolio-customChecks';
                    portfolioChecks[i].children[1].setAttribute('checked', false);
                }
            }

            for(var k = 0; k < checkedArr.length; k++) {
                if(checkedArr[k] === $(this).text()) checkedArr.splice(k,1);
            }
            $(this).parent().remove();
        });

        var portfolioScreeningCloseAll = $('.portfolio-Screening-closeAll');
        portfolioScreeningCloseAll.on('click', function() {
            for(var i = 0; i < portfolioChecks.length; i++) {

                portfolioChecks[i].setAttribute('data-judge', false);
                portfolioChecks[i].children[0].className = 'portfolio-customChecks';
                portfolioChecks[i].children[1].setAttribute('checked', false);

            }
            portfolioScreeningUl.children().remove();

            checkedArr.length = 0;

            addCloseEle();
        })
    }
    function addCloseEle() {
        var portfolioScreeningUl = $('.portfolio-Screening-ul');
        var lili = document.createElement('li');
        var aa = document.createElement('a');
        var ii = document.createElement('i');
        lili.className = 'portfolio-Screening-closeAll-li';
        aa.className = 'portfolio-Screening-closeAll';
        ii.className = 'portfolio-Screening-closeAll-i';
        aa.innerText = 'Empty';
        aa.appendChild(ii);
        lili.appendChild(aa);
        portfolioScreeningUl.get(0).appendChild(lili);
    }

});