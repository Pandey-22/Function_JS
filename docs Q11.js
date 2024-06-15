function evenodd(){
    const prompt=require('prompt-sync')();
    let n=parseInt(prompt("please enter the number:-"));
    let count=0;
    let count1=0
    for (let i=1; i<=n; i++){
        if (i%2==0){
            console.log("Even Number = ",i);
            count+=1;
        }
        else{
            console.log("Odd Number = ",i);
            count1=count+1;
        }
    }
    console.log("Your count even number = ",count);
    console.log("Your count odd number = ",count1);
}
evenodd()