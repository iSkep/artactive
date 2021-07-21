import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$(document).ready(function () {
    $('.services__slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        appendArrows: $('.services__arrows'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
});