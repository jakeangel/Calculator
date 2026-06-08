function add(a, b){
    return a + b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function subtract(a, b){
    return a - b;
}

let firstNumber = '';
let secondNumber = '';
let operator = '';

function operate(operator, num1, num2){
    if(operator === '-'){
        return subtract(num1, num2);
    };

     if(operator === '+'){
        return add(num1, num2);
    };

     if(operator === '*'){
        return multiply(num1, num2);
    };

     if(operator === '/'){
        return divide(num1, num2);
    };

};

const container = document.querySelector("#container");
let children = document.getElementById('container').children;
const input = document.createElement("input");
container.appendChild(input);


for( let i = 0; i < 16; i++){
    let btn =  document.createElement("button");
    btn.classList.add("btn");
    container.appendChild(btn);
}



for ( let i = 0; i < 10; i++){
    let digitBtn = children.item(i + 1);
    digitBtn.textContent = i;
    
}

children.item(11).textContent = "+";
children.item(12).textContent = "-";
children.item(13).textContent = "/";
children.item(14).textContent = "*";
children.item(15).textContent = "=";
children.item(16).textContent = "Clear";



container.addEventListener('click', (e) => {
    const btn = e.target.closest('button');

    if(!btn) return;

    const ch = btn.textContent.trim();

    if( ch >= '0' && ch <= '9' && operator === ''){
        firstNumber += ch;
        input.value = firstNumber;
    } else if(['+','-','*','/'].includes(ch) && secondNumber !== '' && firstNumber !== ''){
        let result = operate(operator, Number(firstNumber), Number(secondNumber));
        firstNumber = result;
        input.value = Number(firstNumber).toFixed(2);
        secondNumber = '';
        operator = ch;
    }  else if(['+','-','*','/'].includes(ch)){
        operator = ch;
    } else if ( ch >= '0' && ch <= '9' && operator !== ''){
        secondNumber += ch;
        input.value = secondNumber;
    }  else if(operator === '/' && secondNumber === '0'){
        input.value = "Error";
        return;
    }  else if (ch === '=' && secondNumber !== ''){
        result = operate(operator, Number(firstNumber), Number(secondNumber));
        firstNumber = result;
        input.value = Number(firstNumber).toFixed(2);
        secondNumber = '';
    } else if (ch === "Clear"){
        firstNumber = '';
        secondNumber = '';
        operator = '';
        input.value = '';
    }
    
 });


