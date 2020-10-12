$(window).load(function() {
    if(jwplayer('aboutUs-responsibility-video').id === 'aboutUs-responsibility-video') {
        jwplayer('aboutUs-responsibility-video').setup({
            flashplayer: 'html/js/inc/jwplayer.flash.swf',
            file: 'html/video/video1.mp4',
            image:'html/images/aboutUs_last_video.jpg',
            width: '100%',
            aspectratio:"623:374",
            dock: false
        });
    }
});