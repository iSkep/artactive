import $ from 'jquery';
window.$ = window.jQuery = $;

$('.modal__close').on('click', function () {
    $('.modal, .overlay').fadeOut('fast');
});

$('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn();
});

$("a[href^='#']").on("click", function (event) {
    event.preventDefault();
    var _href = $(this).attr('href'),
        top = $(_href).offset().top + "px";
    $('body, html').animate({ scrollTop: top });
});