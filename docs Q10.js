function my_fun(){
    const prompt=require('prompt-sync')();
    let value=parseInt(prompt("please enter the number:-"));
    for (let i=0; value!=i; i++){
        if (value%10==0){
            value=Math.floor(value/10);
        }
        else{
            break
        }
    }
    console.log(value);
}
my_fun();