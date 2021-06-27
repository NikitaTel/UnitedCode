let items = $('.map-content-list .map-content-item'), contents = $('.map-content-pod');
items.click(function (e) {
    if(!$(e.target).hasClass('active-tab')) {
        items.removeClass('active-tab');
        contents.removeClass('active-pod');

        $(e.target).addClass('active-tab');
        $(`.map-content-pod[data-id=${$(e.target).attr('data-id')}]`).addClass('active-pod');
    }
});

$('.top-section-nav-section:not(.burger-menu_nav) .top-section-nav-item, .header-nav-items .header-nav-item').each(function() {
    $(this).css( 'width', $(this).css("width").substring(0, $(this).css("width").indexOf('px') ) - 0 + 3);
});

let mobileItems = $('.item-select');

mobileItems.change(function (e) {
    contents.removeClass('active-pod');

    $(`.map-content-pod[data-id=${e.target.value}]`).addClass('active-pod');
});

let menu = $('.burger-menu'), button = menu.find('.burger-menu_button');

$('.burger-menu_nav.top-section-nav-section ').css('display', 'flex');
button.click((e) => {
    if(menu.hasClass('burger-menu_active')) {
        menu.removeClass('burger-menu_active')
    }
    else {
        menu.addClass('burger-menu_active');
    }
    e.preventDefault();
});

$(document).ready(function(){
    $('.how-we-work-slider').slick({
        arrows: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});

$(document).ready(function(){
    $('.article-list').slick({
        arrows: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});

$('.side-menu-item').click(function (e) {
    console.log($(e.target));
    console.log($(e.target).attr('data-link'));
    $('html, body').animate({
        scrollTop: $($(e.target).attr('data-link')).offset().top
    }, 1000);
});

    var $videoSrc, modal = $('#myModal');
    $('.youtube-link').click(function() {
        $videoSrc = $(this).data( "src" );
        console.log($videoSrc);
    });

    modal.on('shown.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
    })

    modal.on('hide.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc);
    })
