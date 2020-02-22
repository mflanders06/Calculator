let newNum = 'Use mouse to click buttons';  //number passed from user input
let counter = 1;                            //counter to switch from working on first or second number
let firstNum = null;                        //first number of the equation
let secondNum = null;                       //second number of the equation
let operator = null;                        //mathmatical operator for equation
let calc1 = null;                           //placeholder for calculation
let calc2 = null;                           //placeholder for calculation



if (counter == 1){
document.getElementById("numDisplayBox").innerText = newNum;
}
else if (counter == 2){
    document.getElementById("numDisplayBox").innerText = firstNum + " " + operator + " " + newNum;
}

function numPress(newNum){
    if (counter === 1){                     //begin eval of first number
        if (firstNum === null){
            firstNum = newNum;
        }
        else {
            firstNum = firstNum + newNum;
        }
    document.getElementById("numDisplayBox").innerText = firstNum;
    }                                       //end eval of first number

    else if (counter === 2){                //begin eval of second number
        if (operator === null){
            firstNum = newNum;
            counter = 1;
            document.getElementById("numDisplayBox").innerText = firstNum;
        }
        else {
            if (secondNum === null){
                secondNum = newNum;
            }
            else {
                secondNum = secondNum + newNum;
            }
        document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator + ' ' + secondNum;
        }                                   //end eval of second number
    }
console.log('FirstNum: ' + firstNum);
console.log('SecondNum: ' + secondNum);
console.log('operator: ' + operator);
console.log('counter: ' + counter);
console.log('calc1: ' + calc1);
console.log('calc2: ' + calc2);
}


function operatorPress(newNum){
    if (counter === 1){
        if (firstNum === null){
            if (newNum === '-'){
                firstNum = newNum;
                document.getElementById("numDisplayBox").innerText = firstNum;
            }
        }
        else if (firstNum === '-'){}
        else {
            operator = newNum;
            counter = 2;
            document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator;
        }

    }
    else if (counter === 2){
        if (operator === null){
            operator = newNum;
            document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator;
        }
        else {
            firstNum = calculateIt(firstNum, operator, secondNum);
            secondNum = null;
            operator = newNum;
            document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator;
        }
    }
console.log('FirstNum: ' + firstNum);
console.log('SecondNum: ' + secondNum);
console.log('operator: ' + operator);
console.log('counter: ' + counter);
console.log('calc1: ' + calc1);
console.log('calc2: ' + calc2);
}

function equalPress(){
    if (counter === 2 && operator != null){
        firstNum = calculateIt(firstNum, operator, secondNum);
        operator = null;
        secondNum = null;
        document.getElementById("numDisplayBox").innerText = firstNum;
    }
console.log('FirstNum: ' + firstNum);
console.log('SecondNum: ' + secondNum);
console.log('operator: ' + operator);
console.log('counter: ' + counter);
console.log('calc1: ' + calc1);
console.log('calc2: ' + calc2);
}

function deciPress(newNum){
    if (counter === 1){
        if (firstNum === null){
            firstNum = newNum;
        }
        else if (firstNum.includes('.')){}
        else {
            firstNum = firstNum + newNum;
        }
        document.getElementById("numDisplayBox").innerText = firstNum;
    }
    else if (counter === 2){
        if (secondNum === null){
            secondNum = newNum;
        }
        else if (secondNum.includes('.')){}
        else {
            secondNum = secondNum + newNum;
        }
        document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator + ' ' + secondNum;
    }
}


function calculateIt(firstNum, operator, secondNum){
    calc1 = Number(firstNum);
    calc2 = Number(secondNum);
    if (operator === '+'){
        firstNum = calc1 + calc2;
        return firstNum;
    }
    else if (operator === '-'){
        firstNum = calc1 - calc2;
        return firstNum;
    }
}

function clearPress(){
    newNum = 'Use mouse to click buttons';
    counter = 1;
    firstNum = null;
    secondNum = null;
    operator = null;
    calc1 = null;
    calc2 = null;
    document.getElementById("numDisplayBox").innerText = newNum;
}