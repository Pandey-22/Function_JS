const prompt=require('prompt-sync')();
function license_checker(speed){
    if (speed<70){
        console.log("Okay");
    } 
    else{
        let points=Math.floor((speed-70)/5);
        console.log("Points = ",points);
        if (points>12){
            console.log("License Suspended");
        }
    }
}
let S=parseInt(prompt("please enter the speed:-"));
license_checker(S);