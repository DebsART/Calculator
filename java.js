const numbers = document.querySelectorAll('.numberz');
const display = document.querySelector("#display");
let firstOperand = 0;
let secondOperand = 0;
 display.textContent =  " ";
let operator = "";

// displays numbers when pressed, allocates which is first and which is second operand
// problem - the computer views firstOperand as 0, even though button clicked displays correct number
numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { 
            firstOperand = parseInt(e.target.innerText);
            display.textContent = firstOperand;
        } else { 
            secondOperand = parseInt(e.target.innerText);
            display.textContent = secondOperand;
        }

    });
});


// functions to define operators
let add = function add(firstOperand = 0, secondOperand = 0) {
    return firstOperand + secondOperand;
};

let subtract = function subtract(firstOperand = 0, secondOperand = 0) {
    console.log(firstOperand);
    console.log(secondOperand);
    return firstOperand - secondOperand;
};

let multiply = function multiply(firstOperand = 0, secondOperand =0) {
    return firstOperand * secondOperand;
};

let divide = function divide(firstOperand = 0, secondOperand = 0) {
    return firstOperand / secondOperand;
};


let dividing = document.querySelector('#divide');
let multiplying = document.querySelector('#multiply');
let subtracting = document.querySelector('#subtract');
let adding = document.querySelector('#add'); 

// event listeners to display operators when button pressed

    dividing.addEventListener('click', () => {
        operator = '/';
        display.textContent +='/'
    });

    multiplying.addEventListener('click', () => {
        operator = '*';
        display.textContent +='*'
    });

    subtracting.addEventListener('click', () => {
        operator = '-';
        display.textContent +='-'
    });

    adding.addEventListener('click', () => {
        operator = '+';
        display.textContent +='+'
    });
 
// in case forEach didn't work, manually referencing each number
let seven = document.querySelector('#seven');
let four = document.querySelector('#four');
let one = document.querySelector('#one');
let eight = document.querySelector('#eight');
let five = document.querySelector('#five');
let two = document.querySelector('#two');
let nine = document.querySelector('#nine');
let six = document.querySelector('#six');
let three = document.querySelector('#three');
let zero = document.querySelector('#zero');

let dot = document.querySelector('#dot');

// function to perform number operations
        function operate(firstOperand = 0, secondOperand = 0){
            switch(operator){
                
                case "+":
                    return add(firstOperand, secondOperand);
                    break;
                
                case "-":
                    return subtract(firstOperand, secondOperand);   
                    break;
                
                case "*":
                    return multiply(firstOperand, secondOperand);
                    break;
                
                case "/":
                    return divide(firstOperand, secondOperand);   
                    break;
      
    }};

   





let clear =document.querySelector('#clear');
    clear.addEventListener('click', () =>{
        firstOperand = 0
        secondOperand = 0
        display.textContent = " "
    });

// referencing operate() function when equals button is pressed
let equals = document.querySelector("#equals");
    equals.addEventListener('click', () => {
        console.log(operate(firstOperand, secondOperand));
        display.textContent = operate(firstOperand, secondOperand);
        firstOperand = 0;
        secondOperand = 0;
        operator = "";
    });

