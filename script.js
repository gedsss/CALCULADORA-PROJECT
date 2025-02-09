var buttons = document.querySelectorAll('.square');
var value = null;
var operation = null;
var number1 = null;
var number2 = null;
var result = document.querySelector('.result');
var equal = document.querySelector('.equal');
var clear = document.querySelector('.clear');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var item = button.dataset.item;
        if (!item)
            return;
        if (['+', 'x', '/', '-'].includes(item)) {
            operation = item;
        }
        else {
            value = item;
            if (operation === null) {
                number1 = (number1 === null) ? value : number1 + value;
            }
            else {
                number2 = (number2 === null) ? value : number2 + value;
            }
        }
        if (result) {
            result.value = "".concat(number1 || '', " ").concat(operation || '', " ").concat(number2 || '');
        }
    });
});
if (equal) {
    equal.addEventListener('click', function () {
        if (number1 !== null && number2 !== null && operation !== null) {
            var resultValue = equations(Number(number1), Number(number2));
            if (result) {
                result.value = Number.isInteger(resultValue) ? resultValue.toString() : resultValue.toFixed(3);
            }
            number1 = resultValue.toString();
            number2 = null;
            operation = null;
        }
    });
}
if (clear) {
    clear.addEventListener('click', reset);
}
// Functions
function equations(n1, n2) {
    switch (operation) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case 'x':
            return n1 * n2;
        case '/':
            return n2 !== 0 ? n1 / n2 : 0;
        default:
            return 0;
    }
}
function reset() {
    number1 = null;
    number2 = null;
    operation = null;
    if (result) {
        result.value = '';
    }
}
