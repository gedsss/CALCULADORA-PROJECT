const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.square');
let value: string | null = null;
let operation: string | null = null;
let number1: string | null = null;
let number2: string | null = null;
const result: HTMLInputElement | null = document.querySelector('.result');
const equal: HTMLButtonElement | null = document.querySelector('.equal');
const clear: HTMLButtonElement | null = document.querySelector('.clear');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const item: string | undefined = button.dataset.item;
        if (!item) return;

        if (['+', 'x', '/', '-'].includes(item)) {
            operation = item;
        } else {
            value = item;
            
            if (operation === null) { 
                number1 = (number1 === null) ? value : number1 + value;
            } else {
                number2 = (number2 === null) ? value : number2 + value;
            }
        }

        if (result) {
            result.value = `${number1 || ''} ${operation || ''} ${number2 || ''}`;
        }
    });
});

if (equal) {
    equal.addEventListener('click', () => {
        if (number1 !== null && number2 !== null && operation !== null) {
            const resultValue: number = equations(Number(number1), Number(number2));
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
function equations(n1: number, n2: number): number {
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

function reset(): void {
    number1 = null;
    number2 = null;
    operation = null;
    if (result) {
        result.value = '';
    }
}
