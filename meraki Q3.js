const prompt=require('prompt-sync')();
function eligibleforvote(age){
    if (age>=18){
        console.log("Eligible for vote");
    }
    else{
        console.log("Not eligible for vote")
    }
}
let Age=parseInt(prompt("please enter your age:-"));
eligibleforvote(Age);