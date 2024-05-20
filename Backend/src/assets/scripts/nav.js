$(document).ready(function() {
    var height = $('.first-container').height();

    if(!height){
        height = 0;
        $('.nav-container').addClass('solid-nav');
    }

    
    $(window).scroll(function() {

        var height = $('.first-container').height();
        var scrollTop = $(window).scrollTop();

        if(!height){
            height = 0;
            $('.nav-container').addClass('solid-nav');
        }
        
        if (scrollTop >= height - 40) {
            $('.nav-container').addClass('solid-nav');
        } else {
            $('.nav-container').removeClass('solid-nav');
        }

    });
});