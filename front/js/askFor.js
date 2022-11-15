var $cols = $('.tag').click(function(e) {
    if ($(this).hasClass('highlight')) {
        $(this).removeClass('highlight');
    }
    else {
    $(this).addClass('highlight');
    }
});
