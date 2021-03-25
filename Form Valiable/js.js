function validator(object) {
    let formElement = document.querySelector(object.form)
    function validate(inputElement, rule) {
        let errorMessage = rule.test(inputElement.value);
        let errorElement = inputElement.parentElement.querySelector('.form__message');

        if (errorMessage) {
            errorElement.innerText = errorMessage;
        }
        else {
            errorElement.innerText = '';
        }
    }
    if (formElement) {
        object.rules.forEach(function (rule) {
            let inputElement = document.querySelector(rule.selector)
            inputElement.onblur = function () {
                validate(inputElement, rule);
            }
            inputElement.oninput = function () {
                let errorElement = inputElement.parentElement.querySelector('.form__message');
                errorElement.innerText = '';
            }
        })
    }
}
validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (text) {
            return text ? undefined : 'Vui Long nhap vao!'
        }
    };
}
validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (text) {
            let flag = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return flag.test(text) ? undefined : 'this is not email !';
        }
    };
}
