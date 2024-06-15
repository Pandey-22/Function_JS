function speed(){
    const prompt=require('prompt-sync')();
    let spd=parseInt(prompt("please enter the number:-"));
    if (spd<=70){
        console.log("Okay");
    }
    else if (spd>70 && spd<=100){
        console.log("Very Fast");
    }
    else{
        console.log("License Suspended");
    }
}
speed();