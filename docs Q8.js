function positivesum(a,b){
    let sum=a+b;
    console.log(a,"+",b," = ",sum);
}
const prompt=require('prompt-sync')();
let i=parseInt(prompt("please enter the value of a:-"));
let j=parseInt(prompt("please enter the value of b:-"));
positivesum(i,j);