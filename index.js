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
        let newNum = 'Use mouse to click buttons';
        let counter = 1;
        let firstNum = null;
        let secondNum = null;
        let operator = null;
        let calc1 = null;
        let calc2 = null;
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
        if (secondNum === null){
            secondNum = newNum;
            document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator + ' ' + secondNum;
        }
        if (secondNum != null){
            if (newNum >= '0' && newNum <= '9'){
                secondNum = secondNum + newNum;
                document.getElementById("numDisplayBox").innerText = firstNum + ' ' + operator + ' ' + secondNum;
            }

        }

    }
}