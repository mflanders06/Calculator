let final=[];
let myNum="testNum";

function numAdd(myNum){
    final.push(myNum);
    console.log(final);
}

function delAll(){
    final.splice(0, final.length);
    console.log(final);
}