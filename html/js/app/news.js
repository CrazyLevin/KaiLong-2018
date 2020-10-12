
$(window).load(function() {
    var galleryWrapperNews = $('#gallery-wrapper-news');

    galleryWrapperNews.pinterest_grid({
        no_columns: 3,
        padding_x: 40,
        padding_y: 50,
        margin_bottom: 0,
        single_column_breakpoint: 700
    });
});
