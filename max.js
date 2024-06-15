// function ma_x(a){
//     let b=Math.max(...a);
//     console.log(b);
// }
// let array=[5,2,3,8,9,10];
// ma_x(array);


function max(a,b,c){
    if (a>b && a>c){
        console.log("Max Number = ",a);
    }
    else if (b>a && b>c){
        console.log("Max Number = ",b);
    }
    else if (c>a && c>b){
        console.log("Max Number = ",c);
    }
    else{
        console.log("Maybe all numbers are quale or diffwrent.");
    }
}
const prompt=require('prompt-sync')();
let A=parseInt(prompt("please enter the value of a:-"));
let B=parseInt(prompt("please enter the value of b:-"));
let C=parseInt(prompt("please enter the value of c:-"));
max(A,B,C);