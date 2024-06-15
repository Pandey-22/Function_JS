function sum(n){
    let s=0;
    while (n>0){
        s+=n%10;
        n=Math.floor(n/10);
    }
    if (s%2==0){
        console.log("Sum of digits are even = ",s);
    }
    else{
        console.log("Sum of digits are odd = ",s);
    }
}
const prompt=require('prompt-sync')();
let a=parseInt(prompt("please enter the number of digits"));
sum(a);