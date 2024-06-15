function drink(){
    const prompt=require('prompt-sync')();
    let age=parseInt(prompt("please enter your age:-"));
    if (age<=14){
        console.log("Drink Mango");
    }
    else if (age>14 && age<=20){
        console.log("Drink Sting");
    }
    else if (age>20 && age<=30){
        console.log("Drink Whisky");
    }
    else{
        console.log("Drink Bear")

    }
}
drink();