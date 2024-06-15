function even(a){
    for (let i=0; i<=a; i++){
        if (i%2==0){
            console.log("Even Number = ",i);
        }
        else{
            console.log("Odd Number = ",i);
        }
    }
}
const prompt=require('prompt-sync')();
let n=parseInt(prompt("please enter the number:-"));
even(n);