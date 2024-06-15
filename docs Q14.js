function fizz_buzz(){
    const prompt=require('prompt-sync')();
    let n=parseInt(prompt("please enter the number:-"));
    if (n%3==0 && n%5==0){
        console.log("FizzBuzz");
    }
    else if (n%3==0){
        console.log("Fizz");
    }
    else if (n%5==0){
        console.log("Buzz");
    }
    else{
        console.log("Same number");
    }
}
fizz_buzz();