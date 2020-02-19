

let myNum="Use mouse to click buttons";
let firstNum = null;
let firstNumHolder = null;
let secondNum = null;
let operator = "Mike";
let counter = 1;
let calc1 = null;
let calc2 = null;
let calc3 = null;

let final;

if (counter == 1){
document.getElementById("numDisplayBox").innerHTML = myNum;
}
else if (counter == 2){
    document.getElementById("numDisplayBox").innerHTML = firstNumHolder + " " + operator + " " + myNum;
}


function numAdd(myNum){


    if (myNum + 1 == 1 + myNum && myNum + 2 == 2 + myNum){    //This is checking if it's a valid number
        if (counter == 1){
            if (firstNum == null){
                firstNum = myNum.toString();
                document.getElementById("numDisplayBox").innerHTML = firstNum;  
            }
            else if (firstNum != null){
                firstNum = firstNum + myNum.toString();
                document.getElementById("numDisplayBox").innerHTML = firstNum;  
            }
        }

        else if (counter == 2){
            if (secondNum == null){
                secondNum = myNum.toString();
                document.getElementById("numDisplayBox").innerHTML = firstNumHolder + " " + operator + " " + secondNum;
            }
            else if (secondNum != null){
                secondNum = secondNum + myNum.toString();
                document.getElementById("numDisplayBox").innerHTML = firstNumHolder + " " + operator + " " + secondNum;
            }
        }

    }
    else if (myNum == "+"){      //Just a placeholder for now (I will implement if/when I add freetype)
        if (operator == "Mike"){
            operator = myNum;
        }

    }
    else if (myNum == "-"){

    }

console.log("Entered number is: " + myNum);
console.log("First Number is: " + firstNum);
console.log("Second Number is: " + secondNum);
console.log("My counter (first or second) is: " + counter);
}

function delAll(){  //This is for the clear button... setting everything back to defaults
    myNum = "Use mouse to click buttons"
    firstNum = null;
    secondNum = null;
    counter = 1;
    operator = "Mike"
    document.getElementById("numDisplayBox").innerHTML = myNum;  
}

function plusButton(){
    if (counter == 1){
        counter = 2;
        operator = "+"
        firstNumHolder = firstNum;
        document.getElementById("numDisplayBox").innerHTML = firstNumHolder + " " + operator + " ";

    }
    else if (counter == 2){
        if (operator === "+"){
            calc1 = parseFloat(firstNum);
            calc2 = parseFloat(secondNum);
            calc3 = calc1 + calc2;
            firstNum = calc3.toString();
            firstNumHolder = firstNum;
            secondNum = null;
            operator = "+"   //yea, I know it's not necessary but it feels right.
            document.getElementById("numDisplayBox").innerHTML = firstNumHolder + " " + operator + " ";

            //console.log("calc1 is: " + calc1);
            //console.log("calc2 is: "+ calc2);
            //console.log("calc3 is " + calc3);
            //console.log("firstNum is: " + firstNum)

        }
        else if (operator === "-"){
                calc1 = parseFloat(firstNum);
                calc2 = parseFloat(secondNum);
                calc3 = calc1 - calc2;
                firstNum = calc3.toString();
                firstNumHolder = firstNum;
                secondNum = null;
                operator = "+"
                document.getElementById("numDisplayBox").innerHTML = firstNumHolder + " " + operator + " ";
        }

    }

}

function minusButton(){
    if (counter == 1){
        counter = 2;
        operator = "-"
        firstNumHolder = firstNum;
        document.getElementById("numDisplayBox").innerHTML = firstNumHolder + " " + operator + " ";

    }
    else if (counter == 2){
        if (operator === "+"){
            calc1 = parseFloat(firstNum);
            calc2 = parseFloat(secondNum);
            calc3 = calc1 + calc2;
            firstNum = calc3.toString();
            firstNumHolder = firstNum;
            secondNum = null;
            operator = "-"   
            document.getElementById("numDisplayBox").innerHTML = firstNumHolder + " " + operator + " ";

            //console.log("calc1 is: " + calc1);
            //console.log("calc2 is: "+ calc2);
            //console.log("calc3 is " + calc3);
            //console.log("firstNum is: " + firstNum)

        }
        else if (operator === "-"){
                calc1 = parseFloat(firstNum);
                calc2 = parseFloat(secondNum);
                calc3 = calc1 - calc2;
                firstNum = calc3.toString();
                firstNumHolder = firstNum;
                secondNum = null;
                operator = "-"   //yea, I know it's not necessary but it feels right.
                document.getElementById("numDisplayBox").innerHTML = firstNumHolder + " " + operator + " ";
        }

    }

}

function equalButton(){
    if (counter == 1){
        document.getElementById("numDisplayBox").innerHTML = firstNum;
    }
    else if (counter == 2){
        if (secondNum == null){
            document.getElementById("numDisplayBox").innerHTML = firstNum;
            counter = 1;
            operator = "Mike"
        }
        else if (secondNum != null){
            if (operator === "+"){
                calc1 = Number(firstNum);
                calc2 = Number(secondNum);
                //calc3 = calc1 + calc2;
                firstNum = (calc1 + calc2).toString();
                //firstNum = calc3.toString();
                secondNum = null;
                operator = "Mike";
                counter = 1;   
                document.getElementById("numDisplayBox").innerHTML = firstNum;
    
                console.log("calc1 is: " + calc1);
                console.log("calc2 is: "+ calc2);
                console.log("calc3 is " + calc3);
                console.log("firstNum is: " + firstNum)
    
            }
            else if (operator === "-"){
                    calc1 = parseFloat(firstNum);
                    calc2 = parseFloat(secondNum);
                    calc3 = calc1 - calc2;
                    firstNum = calc3.toString();
                    secondNum = null;
                    operator = "Mike";
                    counter = 1;
                    document.getElementById("numDisplayBox").innerHTML = firstNum;
            }

        }
    }

}

function decimalButton(){
    if (counter == 1){
        if (firstNum == null){}
        calc1 = firstNum.lastIndexOf(".");
        if (calc1 != -1){}    //checking to see if there's already a decimal
        else if (calc1 == -1){
            firstNum = firstNum + ".";
            document.getElementById("numDisplayBox").innerHTML = firstNum;  
        }
    }
    else if (counter == 2){
        if (secondNum == null){}
        calc1 = secondNum.lastIndexOf(".");
        if (calc1 != -1){}
        else if (calc1 == -1){
            secondNum = secondNum + ".";
            document.getElementById("numDisplayBox").innerHTML = firstNumHolder + " " + operator + " " + secondNum;
        }
    }
}




//create method - insertdigit that passes all buttons
//or create method for numbers, create second method for operators
//also, check for case where Number(e) === 0

