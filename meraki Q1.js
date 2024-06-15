const prompt=require('prompt-sync')();
function displayMultiply(num1,num2,num3){
    return num1*num2*num3;
}
let a=parseInt(prompt("please enter the 1st number:-"));
let b=parseInt(prompt("please enter the 2nd number:-"));
let c=parseInt(prompt("please enter the 3rd number:-"));
console.log(displayMultiply(a,b,c));