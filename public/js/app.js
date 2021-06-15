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

let items = $('.map-content-list .map-content-item'), contents = $('.map-content-pod');
items.click(function (e) {
    if(!$(e.target).hasClass('active-tab')) {
        items.removeClass('active-tab');
        contents.removeClass('active-pod');

        $(e.target).addClass('active-tab');
        $(`.map-content-pod[data-id=${$(e.target).attr('data-id')}]`).addClass('active-pod');
    }
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