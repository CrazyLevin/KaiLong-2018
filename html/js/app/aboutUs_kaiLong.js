$(window).load(function() {
    // jwplayer.key="8jpcGmPZt6LGVllSG9ke+NEwRTjWgsPc";
    var ScreenW = window.innerWidth; // 获取屏幕宽度加滚动条
    if(IEVersion() === 8) {
        // jwplayer('aboutUs-kaiLong-last-video').setup({
        //     flashplayer: 'html/js/inc/jwplayer.flash.swf',
        //     file: 'html/video/15years.mp4',
        //     image:'html/images/aboutUs_last_video.jpg',
        //     width: '50%',
        //     aspectratio:"623:374",
        //     dock: false
        // });
        jwplayer('aboutUs-kaiLong-last-video').setup({
            flashplayer: 'html/js/inc/jwplayer.flash.swf',
            file: 'html/video/15years.mp4',
            image:'html/images/aboutUs_last_video.jpg',
            width: '50%',
            aspectratio:"623:374",
            dock: false
        });
    } else {
        widthChangeVideo()
    }

    function widthChangeVideo() {

        ScreenW = window.innerWidth; // 获取屏幕宽度加滚动条
        if(ScreenW > 900) {
            jwplayer('aboutUs-kaiLong-last-video').setup({
                flashplayer: 'html/js/inc/jwplayer.flash.swf',
                file: 'html/video/15years.mp4',
                image:'html/images/aboutUs_last_video.jpg',
                width: '50%',
                aspectratio:"623:374",
                dock: false
            });
            // jwplayer('aboutUs-kaiLong-last-video').setup({
            //     flashplayer: 'html/js/inc/jwplayer.flash.swf',
            //     file: 'html/video/15years.mp4',
            //     image:'html/images/aboutUs_last_video.jpg',
            //     width: '50%',
            //     aspectratio:"623:374",
            //     dock: false
            // });
        } else {

            jwplayer('aboutUs-kaiLong-last-video').setup({
                flashplayer: 'html/js/inc/jwplayer.flash.swf',
                file: 'html/video/15years.mp4',
                image:'html/images/aboutUs_last_video.jpg',
                width: '50%',
                aspectratio:"623:374",
                dock: false
            });
        }
    }
    // jwplayer('kfoundation-video').setup({
    //     flashplayer: 'html/js/inc/jwplayer.flash.swf',
    //     file: 'html/video/KLR-opening.mp4',
    //     image:'html/images/aboutUs_last_video.jpg',
    //     width: '100%',
    //     aspectratio:"623:374",
    //     dock: false
    // });
    // $(window).resize(function() {
    //     if(IEVersion() !== 8) widthChangeVideo();
    // })
});