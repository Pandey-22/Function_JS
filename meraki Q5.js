const prompt=require('prompt-sync')();
function showNumbers(number){
    for (let i=0; i<=number; i++){
        if (i%2==0){
            console.log(i," = EVEN");
        }
        else{
            console.log(i," = ODD");
        }
    }
}
let a=parseInt(prompt("please enter the number:-"));
showNumbers(a);