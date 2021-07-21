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
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    variableWidth: false,
                    centerPadding: '20px'
                }
            },
            {
              breakpoint: 575.98,
              settings: {
                variableWidth: false,
                centerPadding: '0px'
              }
            }
        ]
    });
});