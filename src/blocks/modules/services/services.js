import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$(document).ready(function () {
    $('.services__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});