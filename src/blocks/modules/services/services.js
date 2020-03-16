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
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/svg/arrow_left.svg" alt="left arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/svg/arrow_right.svg" alt="right arrow"></button>',
    });
});