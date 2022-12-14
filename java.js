let add = function add(a,b) {
    return a + b;
};

let subtract = function subtract(a,b) {
    return a - b;
};

let multiply = function multiply(a,b) {
    return a * b;
};

let divide = function divide(a,b) {
    return a / b;
};

function operate() {
    let operator = buttonClicked;
    if (operator == '+') {
        add;
    } else if (operator == '-') {
        subtract;
    } else if (operator == '*') {
        multiply;
    } else if (operator == '/') {
        divide;
    };
}