import "./import/modules";
import "jquery-validation";

function valideForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required"
        },
        messages: {
            name: {
                required: "Введите своё имя",
                minlength: jQuery.validator.format("Минимум {0} символа")
            },
            phone: "Введите номер телефона"
        }
    });
};

valideForms('.modal__feed-form');
valideForms('.polygraphy__feed-form');
valideForms('.faq__feed-form');