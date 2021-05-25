import $ from 'jquery';
window.$ = window.jQuery = $;

$('.modal__close').on('click', function () {
    if ($('.header__nav').hasClass('header__nav_active')) {
        $('.modal').fadeOut('fast');
        $('.overlay').css('z-index', '');
    } else {
        $('.modal, .overlay').fadeOut('fast');
    }
});

$('[data-modal=consultation]').on('click', function () {
    $('#consultation').fadeIn();
});

$('[data-modal=consultation], .header__burger').on('click', function () {
    if ($('.header__nav').hasClass('header__nav_active')) {
        $('.overlay').css('z-index', '99');
        $('.overlay').fadeIn();
    } else {
        $('.overlay').css('z-index', '');
        $('.overlay').fadeIn();
    } 
});

$("a[href^='#']").on("click", function (event) {
    event.preventDefault();
    var _href = $(this).attr('href'),
        top = $(_href).offset().top + "px";
    $('body, html').animate({ scrollTop: top });
});