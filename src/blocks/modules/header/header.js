$(function () {
    $('.header__burger, .menu__link, .header__close-btn').on('click', function () {
        $('.header__nav').toggleClass('header__nav_active');
        $('body').toggleClass('scroll-lock');
    });

    $('.menu__link, .header__close-btn').on('click', function () {
        $('.overlay').fadeOut('fast');
    });
});