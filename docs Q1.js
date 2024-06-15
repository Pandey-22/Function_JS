const prompt=require('prompt-sync')();
function factorial(x){
    if (x === 1) {
        return 1;
    } 
    else{
        return x*factorial(x-1);
    }
}
let fact=parseInt(prompt("please enter the value of x:-"));
console.log(factorial(fact));