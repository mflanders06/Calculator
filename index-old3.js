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



function buttonPress(newNum){
    if (newNum === 'clear'){
        newNum = 'Use mouse to click buttons';
        counter = 1;
        firstNum = null;
        secondNum = null;
        operator = null;
        calc1 = null;
        calc2 = null;
        document.getElementById("numDisplayBox").innerText = newNum;
    }
    else if (newNum != 'clear' && counter === 1){
        if (firstNum === null){
            firstNum = newNum;
            document.getElementById("numDisplayBox").innerText = firstNum;
        }
        else if (firstNum != null){
            if (newNum >= '0' && newNum <= '9'){
                firstNum = firstNum + newNum;
                document.getElementById("numDisplayBox").innerText = firstNum;
            }
            else if (newNum === '+'){
                counter = 2;
                operator = '+';
                document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator;
            }
            else if (newNum === '-'){
                counter = 2;
                operator = '-';
                document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator;
            }
            else if (newNum === '='){
                operator = null;
                document.getElementById("numDisplayBox").innerText = firstNum;
            }
        }

    }
    else if (newNum != 'clear' && counter === 2){
        if (operator === null){
            if (newNum >= '0' && newNum <= '9'){
                firstNum = newNum;
                counter = 1;
            }
            else if (newNum === '+'){
                firstNum = calculateIt(firstNum, operator, secondNum);
                operator = '+';
                secondNum = null;
                document.getElementById("numDisplayBox").innterText = firstNum + ' ' + operator;
            }
            else if (newNum === '-'){
                firstNum = calculateIt(firstNum, operator, secondNum);
                operator = '-';
                secondNum = null;
                document.getElementById("numDisplayBox").innterText = firstNum + ' ' + operator;
            }
        }
        else if (operator != null){
            if (secondNum === null){
                secondNum = newNum;
                document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator + ' ' + secondNum;
            }
            else if (secondNum != null){
                if (newNum >= '0' && newNum <= '9'){
                    secondNum = secondNum + newNum;
                    document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator + ' ' + secondNum;
                }
                else if (newNum === '+'){
                    firstNum = calculateIt(firstNum, operator, secondNum);
                    operator = '+';
                    secondNum = null;
                    document.getElementById("numDisplayBox").innterText = firstNum + ' ' + operator;
                }
                else if (newNum === '-'){
                    firstNum = calculateIt(firstNum, operator, secondNum);
                    operator = '-';
                    secondNum = null;
                    document.getElementById("numDisplayBox").innterText = firstNum + ' ' + operator;
                }
                else if (newNum === '='){
                    firstNum = calculateIt(firstNum, operator, secondNum);
                    operator = null;
                    secondNum = null;
                    document.getElementById("numDisplayBox").innerText = firstNum;
                }
            }
        }
    }
console.log('FirstNum: ' + firstNum);
console.log('SecondNum: ' + secondNum);
console.log('operator: ' + operator);
console.log('counter: ' + counter);
console.log('calc1: ' + calc1);
console.log('calc2: ' + calc2);
}

function calculateIt(firstNum, operator, secondNum){
    calc1 = Number(firstNum);
    calc2 = Number(secondNum);
    if (operator === '+'){
        firstNum = calc1 + calc2;
        calc1 = null;
        calc2 = null;
    }
    if (operator === '-'){
        firstNum = calc1 - calc2;
        calc1 = null;
        calc2 = null;
    }
    return firstNum;
}