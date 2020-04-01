import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$(document).ready(function () {
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow:1,
        centerMode: true, 
        variableWidth: true, 
        arrows: true,
        rows: 0,
        appendArrows: $('.reviews__buttons'),
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/svg/arrow_left.svg" alt="left arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/svg/arrow_right.svg" alt="right arrow"></button>',
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
    });
});