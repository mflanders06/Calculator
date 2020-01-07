let final=[];
let finalIndex = 0;

document.getElementById("numDisplayBox").innerHTML = final;//this line is a place holder.
final.splice(0, final.length);//this line clears the variable for a placeholder

let myNum="testNum";

function numAdd(myNum){
    
    if (myNum = "testNum"){     //This is the default number, so this is checking for "blank" values
    final.push(myNum);
    console.log(final);  
    document.getElementById("numDisplayBox").innerHTML = final;  
    }
    else if (myNum + 1 == 1 + myNum && myNum + 2 == 2 + myNum){    //This is checking if it's a valid number
    let finalIndex = lastIndexOf(final);                  //this section should add previous number and current number as text (5 + 4 = 54), then cast it back to a number
    let final[finalIndex] = final[finalIndex].toString();
    let myNum = mynum.toString();
    let final[finalIndex] = final[finalIndex] + myNum;
    let final[finalIndex] = final[finalIndex].toString();
    console.log(final);  
    document.getElementById("numDisplayBox").innerHTML = final;  
    }
}

function delAll(){
    final.splice(0, final.length);
    console.log(final);
    document.getElementById("numDisplayBox").innerHTML = final;
    let myNum = "testNum"
}

