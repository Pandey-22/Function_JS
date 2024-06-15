function table(){
    const prompt=require('prompt-sync')();
    let j=parseInt(prompt("please enter the number:-"));
    for (let i=1; i<=10; i++){
        console.log(j,"*",i,"=",j*i);
    }
}
table();