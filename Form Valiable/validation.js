function validator(options) {
    function validate(inputElement,rule){
        var errorMessage = rule.test(inputElement.value)
        var errorElement=inputElement.parentElement.querySelector('.form__message');
        if(errorMessage){
            errorElement.innerText=errorMessage;
            inputElement.parentElement.classList.add('invalid')

        }else{
            errorElement.innerText='';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
    let formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = document.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement,rule);
                } 
            }

        })
    }
}
validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (values) {
            return values.trim() ? undefined : 'vui lòng nhập lại';
        }
    }
}
validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (values) {
            var regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(values)?undefined:'Truong nay khong phai la email';
          
        }

    }
}
document.querySelector
