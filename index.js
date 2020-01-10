let myNum="0";
let firstNum = null;
let secondNum = null;
let operator = "Mike"
let counter = 1;

let final;

document.getElementById("numDisplayBox").innerHTML = myNum;//this line is a place holder.



function numAdd(myNum){
console.log(myNum);
console.log(firstNum);
console.log(secondNum);
console.log(counter);

    if (myNum == "0"){     //This is the default number, so this is checking for "blank" values
        myNum = myNum.toString();
        firstNum = myNum;   
    }
    else if (myNum + 1 == 1 + myNum && myNum + 2 == 2 + myNum){    //This is checking if it's a valid number
        if (counter == 1){
            if (firstNum == null){
                firstNum = myNum.toString();
            }
            else if (firstNum != null){
                firstNum = firstNum + myNum.toString();
            }
        }
        else if (counter == 2){
            if (secondNum == null){
                secondNum = myNum.toString();
            }
            else if (secondNum != null){
                secondNum = secondNum + myNum.toString();
            }
        }

    }
    else if (myNum == "+"){
        if (operator == "Mike"){
            operator = myNum;
        }

    }
    else if (myNum == "-"){

    }

    document.getElementById("numDisplayBox").innerHTML = firstNum;  
}

function delAll(){
    myNum = "0"
    firstNum = null;
    secondNum = null;
    counter = 1;
    operator = "Mike"
    document.getElementById("numDisplayBox").innerHTML = myNum;  
}

