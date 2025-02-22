const buttons = document.querySelectorAll('.square');
let value = null;
let operation = null;
let number1 = null;
let number2 = null;
const result = document.querySelector('.result');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
let resultN = null

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.dataset.item

        if(item === '+' || item === 'x' || item === '/' || item === '-'){
            operation = button.dataset.item;
        } else {
            value = button.dataset.item;
            
            if (operation === null) { 
                number1 = (number1 === null) ? value : number1 + value;
            } else {
                number2 = (number2 === null) ? value : number2 + value;
            }
            
        }

        result.value = `${number1 || ''} ${operation || ''} ${number2 || ''}`;


    });
}); 

equal.addEventListener('click', () => {
    const resultValue = equations(Number(number1), Number(number2));
    result.value = Number.isInteger(resultValue) ? resultValue : resultValue.toFixed(3);
    number1 = equations(Number(number1), Number(number2));
    number2 = null;
    operation = null;

})

clear.addEventListener('click', reset);

//Functions
function equations(n1, n2) {
    switch(operation){
        case '+':
            return n1 + n2;
        break;

        case '-':
            return n1 - n2;
        break;

        case 'x':
            return n1*n2;
        break;

        case '/':
            if(n2 != 0){
            return n1/n2;
            } else {
            warning('ERROR!')
            }
    }
}

function warning(msg){
    result.value = msg;
}

function reset(){
    result.value = ''
    number1 = null;
    number2 = null;
    operation = null;
}