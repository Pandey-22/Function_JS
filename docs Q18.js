function powers_of_two(a){
    let arr=[];
    for (let i=0; i<=a; i++){
        arr.push(2**i);
    }
    console.log(arr);
}
const prompt=require('prompt-sync')();
let n=parseInt(prompt("please enter the number:-"));
powers_of_two(n);