function table(){
    const prompt=require('prompt-sync')();
    let n=parseInt(prompt("please enter the number:-"));
    for (let i=1; i<=10; i++){
        console.log(n,"*",i,"=",n*i);
    }
}
table();