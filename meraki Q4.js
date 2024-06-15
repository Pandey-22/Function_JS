const prompt=require('prompt-sync')();
function average(n1,n2,n3){
    console.log("Sum of three number = ",n1+n2+n3);
    console.log("Average = ",Math.floor((n1+n2+n3)/3));
}
let a=parseInt(prompt("please enter the 1st number:-"));
let b=parseInt(prompt("please enter the 2nd number:-"));
let c=parseInt(prompt("please enter the 3rd number:-"));
average(a,b,c);