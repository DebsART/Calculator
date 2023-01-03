const numbers = document.querySelectorAll('.numbers');
let display = document.querySelector("#display");
let firstOperand = 0;
let secondOperand = 0;
 display.textContent =  " ";
let operator = " ";

numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { 
            firstOperand = e.target.innerText;
            display.textContent = firstOperand;
        } else { 
            secondOperand = e.target.innerText;
            display.textContent = secondOperand;
        }

    });
});



let add = function add(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
};

let subtract = function subtract(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
};

let multiply = function multiply(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
};

let divide = function divide(firstOperand, secondOperand) {
    return firstOperand / secondOperand;
};


let dividing = document.querySelector('#divide');
let multiplying = document.querySelector('#multiply');
let subtracting = document.querySelector('#subtract');
let adding = document.querySelector('#add'); 

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


        function operate(){
            switch(operator){
                
                case "+":
                    display.textContent = add(firstOperand, secondOperand);
                    break;
                
                case "-":
                    display.textContent = subtract(firstOperand, secondOperand);   
                    break;
                
                case "*":
                    display.textContent = multiply(firstOperand, secondOperand);
                     
                    break;
                
                case "/":
                    display.textContent = divide(firstOperand, secondOperand);   
                    break;
      
    }};





let clear =document.querySelector('#clear');
    clear.addEventListener('click', () =>{
        firstOperand = " "
        secondOperand = " "
        display.textContent = " "
    });


let equals = document.querySelector("#equals");
    equals.addEventListener('click', () => {
      console.log(operate());
    });

