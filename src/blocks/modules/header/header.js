$(document).ready(function () {
    $('.header__burger').on('click', function () {
        //добавить скрытие бургера, или нет смысла, так как он и так под меню
        $('.header__nav').toggleClass('header__nav_active');
    });

    $('.header__link').on('click', function () {
        $('.header__nav').toggleClass('header__nav_active');
    });
})